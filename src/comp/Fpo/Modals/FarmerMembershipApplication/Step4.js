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
    name: "natureOfPlace",
  },
  {
    label: "Residence",
    name: "residence",
  },
]

function Step4({ data, setStep, backBtnStyle, nextBtnStyle }) {
  return (
    <>
      {
        list.map(l => (
          <div key={l.name} className="row m-2">
            <p className="col-lg-6">
              {l.label}
            </p>
            <p className="col-lg-6">
              {data[l.name]}
            </p>
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