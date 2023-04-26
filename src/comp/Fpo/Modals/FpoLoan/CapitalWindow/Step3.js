import FileInput from "./FileInput";

const list1 = [
  {
    label: "Incorporation Details",
    name: "incorp",
  },
  {
    label: "Brief Profile of the promoting organization",
    name: "promotingOrg",
  },
  {
    label: "Networth statement of the promoter",
    name: "netWorth",
  },
]

const list2 = [
  {
    label: "Input Licenses",
    name: "inputLicenses",
  },
  {
    label: "Fertilizer Licenses",
    name: "fertilizerLicenses",
  },
]

function Step3({ canEdit, setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="mt-3">
      <h5 style={h5Style}>Brief Profile of the FPO</h5>

      {
        list1.map((l, i) => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-12">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-12">
              <FileInput
                name={`fpoProfile.${i}.doc`}
                label={l.label}
                canEdit={canEdit}
              />
            </div>
          </div>
        ))
      }

      <h5 className="mt-4 mx-3">Applicable Lincese</h5>

      {
        list2.map((l, i) => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-12">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-12">
              <FileInput
                name={`licenses.${i}.doc`}
                label={l.label}
                canEdit={canEdit}
              />
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
          onClick={() => setStep(1)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step3