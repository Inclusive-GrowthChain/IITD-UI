
function Step3({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  return (
    <div className="row mt-3">
      <h5 style={h5Style}>Brief Profile of the FPO</h5>

      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-12">
                    <label>Incorporation Details</label>
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
                      Brief Profile of the promoting
                      organization
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
                      Networth statement of the promoter
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
                  <h5 className="mt-3">Applicable Lincese</h5>
                  <div className="col-lg-12">
                    <label>Input Linceses</label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label>Fertilizer Linceses</label>
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
                    onClick={() => setStep(2)}
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
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step3