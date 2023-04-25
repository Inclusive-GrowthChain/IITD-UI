import { useFormContext } from "react-hook-form";

const errorStyle = { fontSize: "12px", marginTop: "2px", marginBottom: 0 }

const list = [
  {
    disabled: true,
    label: "Window ID",
    name: "windowId",
    type: "text",
    validation: {},
  },
  {
    label: "Requested Loan Amount",
    name: "requestedAmount",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Amount should be greater than 0"
      }
    }
  },
  {
    label: "Loan Period in Months",
    name: "windowPeriod",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Amount should be greater than 0"
      }
    }
  },
]

function Step6({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className="mt-3">
      <h5 style={h5Style}>Apply for Working Capital Loan Window</h5>

      {
        list.map(l => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>

            <div className="col-lg-6">
              <input
                type={l.type}
                className="form-control"
                disabled={l.disabled}
                {...register(l.name, {
                  required: `${l.label} is required`,
                  ...l.validation
                })}
              />

              {
                errors[l.name] &&
                <p className="text-danger" style={errorStyle}>
                  {errors[l.name].message}
                </p>
              }
            </div>
          </div>
        ))
      }

      <div
        className="row m-2"
        style={finalWrapperStyle}
      >
        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          style={nextBtnStyle}
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step6