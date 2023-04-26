import { useState } from 'react';
import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { uploadImg } from "../../../../../actions/general";
import DocImg from '../../../../Common/DocImg';

const errorStyle = { fontSize: "12px", marginTop: "2px", marginBottom: 0 }

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  fontSize: ".75rem",
  lineHeight: "1rem",
  textAlign: "center",
  marginRight: "6px"
}

function FileInput({ label, name, validation = {} }) {
  const [show, setShow] = useState(false)

  const {
    register, formState: { errors }, watch,
    setValue, clearErrors
  } = useFormContext()

  const docImg = watch(name)

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
      {
        !docImg ?
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={onChange}
          />
          : <>
            <button
              type="button"
              onClick={() => setShow(true)}
              style={btnStyle}
            >
              View
            </button>

            <button
              type="button"
              onClick={() => setValue(name, "")}
              style={btnStyle}
            >
              Change
            </button>
          </>
      }

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

      {
        show &&
        <DocImg
          show
          title={label}
          imgUrl={docImg || ""}
          handleClose={() => setShow(false)}
        />
      }
    </>
  )
}

export default FileInput