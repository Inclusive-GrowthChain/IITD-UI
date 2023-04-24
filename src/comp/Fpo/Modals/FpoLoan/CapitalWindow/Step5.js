
function Step5({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="row mt-3">
      <h5 style={h5Style}>Other Details</h5>

      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>
                      Product wise break up of revenues (2 fiscal)
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
                      Latest 3 months stock statements
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
                      Debtors ageing analysis fiscal year end
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
                    <label>Top 5 suppliers/vintage (last 6 months)</label>
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
                    <label>Top 5 buyers/vintage (last 6 months)</label>
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
                      Sanction limit & O/s for both WC & TL
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
                    <label>Term loan summary</label>
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
                      Project estimate & other relavant
                      documents
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
                    onClick={() => setStep(4)}
                    style={backBtnStyle}
                  >
                    Back
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => setStep(5)}
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

export default Step5