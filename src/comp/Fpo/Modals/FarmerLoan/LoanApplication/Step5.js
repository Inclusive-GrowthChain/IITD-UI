
function Step5({ backBtnStyle, nextBtnStyle, setStep, farmerDetails, currentLoan }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Land Holding
        </p>
        <p className="col-lg-6">

        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Type of Land Holding
        </p>
        <p className="col-lg-6">

        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Caste
        </p>
        <p className="col-lg-6">
          {farmerDetails.caste}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Religion
        </p>
        <p className="col-lg-6">
          {farmerDetails.religion}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Monthly HH Income
        </p>
        <p className="col-lg-6">

        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Monthly HH Expenses
        </p>
        <p className="col-lg-6">

        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Loan Purpose
        </p>
        <p className="col-lg-6">
          {currentLoan.loanFor}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Loan Tenure (Months)
        </p>
        <p className="col-lg-6">
          {currentLoan.loanTenure} months
        </p>
      </div>

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