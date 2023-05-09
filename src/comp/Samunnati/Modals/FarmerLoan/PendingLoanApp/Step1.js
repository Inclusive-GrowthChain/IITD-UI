
function Step1({ data, nextBtnStyle, setStep }) {
  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Window ID</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            disabled
            value={data.windowId}
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Requested Loan Window Amount</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            disabled
            value={data.requestedAmount}
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Loan Window Tenure (in months)</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            disabled
            value={data.windowPeriod}
          />
        </div>
      </div>

      <div className="row m-2 justify-content-end px-2">
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