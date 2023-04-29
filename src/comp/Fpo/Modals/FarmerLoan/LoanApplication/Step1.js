
function Step1({ nextBtnStyle, setStep, currentLoan, farmerDetails, currentLoanWindow }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Loan ID
        </p>
        <p className="col-lg-6">
          {currentLoan.loanId}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          FPO Name
        </p>
        <p className="col-lg-6">
          {currentLoanWindow.fpoName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Bank Name
        </p>
        <p className="col-lg-6">
          {currentLoan.bankName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Account Number
        </p>
        <p className="col-lg-6">
          {currentLoan.accountNumber}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Bank IFSC
        </p>
        <p className="col-lg-6">
          {currentLoan.ifscNumber}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Branch Name
        </p>
        <p className="col-lg-6">
          {farmerDetails.branchName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Name
        </p>
        <p className="col-lg-6">
          {currentLoan.payeeName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Loan Requested Amount
        </p>

        <p className="col-lg-6">
          {currentLoan.requestedAmount}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Gender
        </p>
        <p className="col-lg-6">
          {farmerDetails.gender}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Mobile Number
        </p>
        <p className="col-lg-6">
          {farmerDetails.mobile}
        </p>
      </div>

      <div className="row m-2">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => setStep(2)}
            style={nextBtnStyle}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Step1