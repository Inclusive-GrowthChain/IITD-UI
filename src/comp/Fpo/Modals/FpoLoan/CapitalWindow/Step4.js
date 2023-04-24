
function Step4({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="row mt-3">
      <h5 style={h5Style}>Financial Details</h5>

      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Last 3 years audited financial
                      statements
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Current year provisonal/Interim
                      financials
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Month wise purchase and sales data for
                      last 6 months
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Latest 3 months stock statement
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>Business Plan</label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Bank statement for last 1 year
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>Sanction letter copies</label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      GST returns for the past 6 months
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
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
                    onClick={() => setStep(3)}
                    style={backBtnStyle}
                  >
                    Back
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => setStep(4)}
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

export default Step4