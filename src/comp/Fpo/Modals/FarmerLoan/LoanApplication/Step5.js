
const list = [
  {
    label: "Land Holding",
    name: "landHolding",
  },
  {
    label: "Type of Land Holding",
    name: "landHoldingType",
  },
  {
    label: "Caste",
    name: "caste",
  },
  {
    label: "Religion",
    name: "religion",
  },
  {
    label: "Monthly HH Income",
    name: "monthlyHHIncome",
  },
  {
    label: "Monthly HH Expenses",
    name: "monthlyHHExpenses",
  },
  {
    label: "Loan Purpose",
    name: "purpose",
  },
  {
    label: "Loan Tenure (in months)",
    name: "tenure",
    type: "number",
  },
]

function Step5({ backBtnStyle, nextBtnStyle, setStep, data }) {
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

        <button
          className="btn btn-success"
          onClick={() => setStep(6)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step5