const list = [
  {
    label: "Loan ID",
    name: "loanId",
  },
  {
    label: "FPO Name",
    name: "fpoName",
  },
  {
    label: "Bank Name",
    name: "bankName",
  },
  {
    label: "Account Number",
    name: "accountNumber",
  },
  {
    label: "Bank IFSC",
    name: "ifscCode",
  },
  {
    label: "Branch Name",
    name: "branchName",
  },
  {
    label: "Applicant Name",
    name: "name",
  },
  {
    label: "Loan Requested Amount",
    name: "requestedAmount",
  },
  {
    label: "Applicant Gender",
    name: "gender",
  },
  {
    label: "Applicant Mobile Number",
    name: "mobile",
  },
]

function Step1({ data, nextBtnStyle, setStep }) {
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
          onClick={() => setStep(2)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step1