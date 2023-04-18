export const errStyle = { fontSize: "12px", margin: 0 }

function Input({
  label = "", name = "",
  type = "text", disabled = false,
  register, errors, isSelect = false,
  options = [],
}) {
  return (
    <div className="row m-2">
      <div className="col-lg-6">
        <label>{label}</label>
      </div>
      <div className="col-lg-6">
        {
          isSelect ?
            <select
              className="form-select"
              {...register(name, {
                required: `${label} is required`
              })}
              disabled={disabled}
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
              className="form-control"
              type={type}
              {...register(name, {
                required: `${label} is required`
              })}
              disabled={disabled}
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