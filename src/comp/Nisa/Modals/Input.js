import { useId } from "react";

export const errStyle = { fontSize: "12px", margin: 0 }

function Input({
  register, errors,
  label = "", name = "",
  type = "text", disabled = false,
  isSelect = false, options = [],
  wrapperCls = "row m-2",
  lableWrapperCls = "col-lg-6",
  inputWrapperCls = "col-lg-6",
}) {
  const id = useId()

  return (
    <div className={wrapperCls}>
      <div className={lableWrapperCls}>
        <label
          htmlFor={id}
        >
          {label}
        </label>
      </div>

      <div className={inputWrapperCls}>
        {
          isSelect ?
            <select
              id={id}
              disabled={disabled}
              className="form-select"
              {...register(name, {
                required: `${label} is required`
              })}
            >
              <option value="" disabled>Select {label}</option>
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
              disabled={disabled}
              className="form-control"
              {...register(name, {
                required: `${label} is required`
              })}
            />
        }

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

export default Input