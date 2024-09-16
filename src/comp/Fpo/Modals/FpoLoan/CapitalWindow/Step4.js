import FileInput from "./FileInput";

const list = [
  {
    label: "Last 3 years audited financial statements",
    name: "last3YearFinancial",
  },
  {
    label: "Current year provisonal/Interim financials",
    name: "currentYearFinancial",
  },
  {
    label: "Month wise purchase and sales data for last 6 months",
    name: "last6MonthPurchaseAndSalesData",
  },
  {
    label: "Latest 3 months stock statement",
    name: "latest3MonthStock",
  },
  {
    label: "Business Plan",
    name: "businessPlan",
  },
  {
    label: "Bank statement for last 1 year",
    name: "bankStatement",
  },
  {
    label: "Sanction letter copies",
    name: "sanctionLetter",
  },
  {
    label: "GST returns for the past 6 months",
    name: "gstReturn",
  },
]

function Step4({ canEdit, setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="mt-3">
      <h5 style={h5Style}>Financial Details</h5>

      {
        list.map((l, i) => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-12">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-12">
              <FileInput
                name={`financialDetails.${i}.doc`}
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
          onClick={() => setStep(2)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step4