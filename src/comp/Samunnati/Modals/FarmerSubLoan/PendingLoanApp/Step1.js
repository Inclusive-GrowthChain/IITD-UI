
function Step1({ data, nextBtnStyle, setStep }) {
  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Loan ID</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.loanId}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>FPO Name</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.fpoName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Bank Name</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.bankName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Account Number</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.accountNumber}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Bank IFSC</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.ifscNumber}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Branch Name</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.branchName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Name</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.applicantName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Loan Requested Amount</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.requestedAmount}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Gender</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.applicantGender}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Mobile Number</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.applicantMobile}
            disabled
          />
        </div>
      </div>

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