import { useId } from "react";
import { useMutation } from "@tanstack/react-query";

import { uploadImg } from "../../actions/general";

const errStyle = { fontSize: "12px", margin: 0 }

function FileInput({
  label = "", register, name = "",
  validation = {}, errors = {},
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
    <div className="row m-2">
      <div className="col-lg-6">
        <label
          htmlFor={id}
        >
          {label}
        </label>
      </div>

      <div className="col-lg-6">
        <input
          id={id}
          type="file"
          className="form-control"
          accept="image/*"
          onChange={onChange}
        />

        <input
          className="d-none"
          {...register(name, {
            required: `${label} image is required`,
            ...validation
          })}
        />

        {
          errors[name] &&
          <p className="text-danger" style={errStyle}>
            {errors[name].message}
          </p>
        }
      </div>
    </div>
  )
}

export default FileInput