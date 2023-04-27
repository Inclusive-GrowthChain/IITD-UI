
function Step5({ backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <div className="row mt-3">
      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Land Holding</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Land</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Type of Land Holding
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Caste</label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Religion</label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Monthly HH Income</label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Monthly HH Expenses</label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Loan Purpose</label>
                  </div>
                  <div className="col-lg-6">
                    <label>XXXXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Loan Tenure (Months)
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>3 months</label>
                  </div>
                </div>
                <div
                  className="row m-2"
                  style={{
                    justifyContent: "space-between",
                    padding: "0 10px",
                  }}
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
                    onClick={() => setStep(6)}
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