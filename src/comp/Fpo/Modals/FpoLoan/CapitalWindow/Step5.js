import FileInput from "./FileInput";

const list = [
  {
    label: "Product wise break up of revenues (2 fiscal)",
    name: "productBreakRevenue",
  },
  {
    label: "Latest 3 months stock statements",
    name: "latest3MonthStock",
  },
  {
    label: "Debtors ageing analysis fiscal year end",
    name: "debtorsAgeingAnalysis",
  },
  {
    label: "Top 5 suppliers/vintage (last 6 months)",
    name: "top5Suppliers",
  },
  {
    label: "Top 5 buyers/vintage (last 6 months)",
    name: "top5Buyers",
  },
  {
    label: "Sanction limit & O/s for both WC & TL",
    name: "sanctionLimit",
  },
  {
    label: "Term loan summary",
    name: "termLoanSummary",
  },
  {
    label: "Project estimate & other relavant documents",
    name: "projectEstimate",
  },
]

function Step5({ canEdit, setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="mt-3">
      <h5 style={h5Style}>Other Details</h5>

      {
        list.map((l, i) => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-12">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-12">
              <FileInput
                name={`otherDetails.${i}.doc`}
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
          onClick={() => setStep(3)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(5)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step5