
function Step5({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  return (
    <>
      <h5 style={h5Style}>
        Financial Details
      </h5>

      <div className="row m-2">
        <div className="col-lg-6">
          <label>Last 3 years Audited Financial Statements</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Current Year Provisional/Interim Financials</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Month Wise Purchase and Sales Data for Last 6 Months</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Latest 3 Months Stock Statement</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Business Plan</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Bank Statement for Last 1 Year</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Sanction Letter Copies</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>GST Returns for the Past 6 Months</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(1)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step5