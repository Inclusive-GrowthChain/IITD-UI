const list = [
  {
    label: "Farmer Name",
    name: "userName",
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
    label: "Applicant Gender",
    name: "gender",
  },
  {
    label: "Applicant Mobile Number",
    name: "contactNumber",
  },
]

function Step1({ data, setStep, nextBtnStyle }) {
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

      <div className="row m-2">
        <div className="col-lg-12">
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
    </>
  )
}

export default Step1