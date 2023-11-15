const list = [
  {
    label: "Loan Id",
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
    name: "userName",
  },
  {
    label: "Loan Requested Amount",
    name: "requestedAmount",
    type: "number",
  },
  {
    label: "Applicant Gender",
    name: "gender",
  },
];

function Step1({ data, nextBtnStyle, setStep }) {
  return (
    <>
      {list.map((l) => (
        <div key={l.name} className="row m-2">
          <p className="col-lg-6">{l.label}</p>
          <p className="col-lg-6">{data[l.name]}</p>
        </div>
      ))}

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
  );
}

export default Step1;
