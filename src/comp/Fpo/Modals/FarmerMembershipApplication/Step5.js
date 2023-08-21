const list = [
  {
    label: "Caste",
    name: "caste",
  },
  {
    label: "Religion",
    name: "religion",
  },
]

function Step5({ data, setStep, backBtnStyle }) {
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
          onClick={() => setStep(4)}
          style={backBtnStyle}
        >
          Back
        </button>
      </div>
    </>
  )
}

export default Step5