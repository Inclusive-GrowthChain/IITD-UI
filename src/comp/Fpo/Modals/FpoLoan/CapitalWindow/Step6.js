
function Step6({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="row mt-3">
      <h5 style={h5Style}>Apply for Working Capital Loan Window</h5>

      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Window ID</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      value={""}
                      disabled />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Requested Loan Amount</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Loan Period in Months</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>

                <div
                  className="row m-2"
                  style={finalWrapperStyle}
                >
                  <button
                    className="btn btn-success"
                    onClick={() => setStep(1)}
                    style={backBtnStyle}
                  >
                    Back
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => setStep(2)}
                    style={nextBtnStyle}
                  >
                    Next
                  </button>
                </div>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step6