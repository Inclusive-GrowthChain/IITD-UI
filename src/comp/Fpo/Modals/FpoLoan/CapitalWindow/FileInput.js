import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { uploadImg } from "../../../../../actions/general";

const errorStyle = { fontSize: "12px", marginTop: "2px", marginBottom: 0 }

function FileInput({ label, name, validation = {} }) {
  const {
    register, formState: { errors },
    setValue, clearErrors
  } = useFormContext()

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
    <>
      <input
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
        <p className="text-danger" style={errorStyle}>
          {errors[name].message}
        </p>
      }
    </>
  )
}

export default FileInput