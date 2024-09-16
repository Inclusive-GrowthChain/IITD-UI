import { useId } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadImg } from "../../../actions/general";

const errorStyle = { fontSize: "12px", marginTop: "2px", marginBottom: 0 }

export function Input({
  label = "", type, register, name = "",
  validation = {}, error = {}, options = [],
  isSelect = false, ...rest
}) {
  const id = useId()

  return (
    <div className="col-12 col-md-6 mb-2">
      <label
        className="form-label"
        htmlFor={id}
      >
        {label} {validation?.required && "*"}
      </label>

      {
        isSelect ? <select
          id={id}
          className="form-select"
          {...register(name, validation)}
          {...rest}
        >
          <option value="" disabled></option>
          {
            options.map(op => (
              <option
                key={typeof op === "string" ? op : op.val}
                value={typeof op === "string" ? op : op.val}
              >
                {typeof op === "string" ? op : op.label}
              </option>
            ))
          }
        </select>
          :
          <input
            id={id}
            type={type}
            className="form-control"
            {...rest}
            {...register(name, validation)}
          />
      }

      {
        error &&
        <p className="text-danger" style={errorStyle}>
          {error.message}
        </p>
      }
    </div>
  )
}

function File({
  label = "", register, name = "",
  validation = {}, error = {},
  setValue = () => { },
  clearErrors = () => { },
}) {
  const id = useId()
  const { mutate } = useMutation({
    mutationFn: uploadImg,
    onSuccess: (data) => {
      setValue(name, data.data.docId)
      clearErrors(name)
    }
  })

  const onChange = e => {
    mutate({ file: e.target.files[0], name })
  }

  return (
    <div className="col-12 col-md-6 mb-2">
      <label
        className="form-label"
        htmlFor={id}
      >
        {label} {validation?.required && "*"}
      </label>

      <input
        id={id}
        type="file"
        className="form-control"
        accept="image/*"
        onChange={onChange}
        multiple="multiple"
      />

      <input
        className="d-none"
        {...register(name, validation)}
      />

      {
        error &&
        <p className="text-danger" style={errorStyle}>
          {error.message}
        </p>
      }
    </div>
  )
}

function FormHelp({ fields = [], register, errors, setValue, clearErrors }) {
  return (
    <>
      {
        fields.map(f => {
          if (f.isFile) {
            return <File
              {...f}
              key={f.name}
              error={errors[f.name]}
              register={register}
              setValue={setValue}
              validation={{ required: `${f.label} is required`, ...f.validation }}
              clearErrors={clearErrors}
            />
          }

          return f.name === 'website' || f.name === "panCardNumber"  ? <Input
            {...f}
            type={f.type}
            key={f.name}
            error={errors[f.name]}
            register={register}
          /> :
            <Input
              {...f}
              type={f.type}
              key={f.name}
              error={errors[f.name]}
              register={register}
              validation={{ required: `${f.label} is required`, ...f.validation }}
            />

        })
      }
    </>
  )
}

export default FormHelp