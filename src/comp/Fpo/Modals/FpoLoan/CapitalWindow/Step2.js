import { useFormContext, useFieldArray } from "react-hook-form";
import FileInput from "./FileInput";

const btnStyle = {
  background: "none",
  cursor: "pointer",
}

function Step2({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  const { register, getValues, control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "kycAuthorizedSignatories",
  })

  const addDocs = () => append([
    { name: "", doc: "" },
    { name: "", doc: "" },
  ])

  const removeDocs = () => remove([fields.length - 2, fields.length - 1])

  return (
    <div className="mt-3">
      <h5 style={h5Style}>KYC of Authorised Signatories</h5>

      <div className="m-2 px-3">
        <h5>List of Directors</h5>
      </div>

      {fields.map((field, i) => {
        if (i % 2 === 0) {
          return (
            <div key={field.id} className="row m-2 mt-3">
              <div className="col-4">
                <label>ID Proof</label>
              </div>

              <div className="col-4">
                <select
                  className="form-select"
                  {...register(`kycAuthorizedSignatories.${i}.name`)}
                >
                  <option value="" disabled></option>
                  <option value="panCard">PAN Card</option>
                  <option value="voterId">Voter ID</option>
                </select>
              </div>

              <div className="col-4">
                <FileInput
                  name={`kycAuthorizedSignatories.${i}.doc`}
                  label={getValues(`kycAuthorizedSignatories.${i}.name`)}
                />
              </div>
            </div>
          )
        }

        return (
          <div key={field.id} className="row m-2">
            <div className="col-4">
              <label>Address Proof</label>
            </div>
            <div className="col-4">
              <select
                className="form-select"
                {...register(`kycAuthorizedSignatories.${i}.name`)}
              >
                <option value="" disabled></option>
                <option value="aadharCard">Aadhaar Card</option>
                <option value="voterId">Voter ID</option>
                <option value="drivingLicence">Driving License</option>
                <option value="passport">Passport</option>
              </select>
            </div>
            <div className="col-4">
              <FileInput
                name={`kycAuthorizedSignatories.${i}.doc`}
                label={getValues(`kycAuthorizedSignatories.${i}.name`)}
              />
            </div>
          </div>
        )
      })}


      <div style={{ display: "flex" }}>
        <button
          className="mx-3"
          style={btnStyle}
          onClick={addDocs}
        >
          +
        </button>
        {
          fields.length > 2 &&
          <button
            className="mx-3"
            style={btnStyle}
            onClick={removeDocs}
          >
            -
          </button>
        }
      </div>

      <div
        className="row m-2"
        style={finalWrapperStyle}
      >
        <button
          className="btn btn-success"
          onClick={() => setStep(0)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step2