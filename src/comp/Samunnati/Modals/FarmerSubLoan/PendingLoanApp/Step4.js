
const list = [
  {
    label: "Taluk",
    name: "taluk",
  },
  {
    label: "District",
    name: "district",
  },
  {
    label: "State",
    name: "state",
  },
  {
    label: "Pin Code",
    name: "pinCode",
  },
  {
    label: "Occupation",
    name: "occupation",
  },
  {
    label: "Education",
    name: "education",
  },
  {
    label: "Nature of Place",
    name: "natureOfplace",
  },
  {
    label: "Residence",
    name: "residence",
  },
]

function Step4({ data, backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <>
      {
        list.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={data[l.name]}
                disabled
              />
            </div>
          </div>
        ))
      }

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(5)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step4