const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "1.7rem",
}

function Step6({ backBtnStyle, setStep }) {
  return (
    <div className="row ">
      <div className="col">
        <form>
          <div className="form">
            <div className="card p-2">
              <div className="row m-2">
                <div className="col-md-6">
                  <label className="form-label">
                    Samunnati Payment Proof
                  </label>
                </div>
                <div className="col-md-6">
                  <button
                    className="py-0.5"
                    style={btnStyle}
                  // onClick={handleShowImg}
                  >
                    View
                  </button>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-md-6">
                  <label className="form-label">
                    Interest Rate (%)
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    // value={currentLoan.interest}
                    disabled
                  />
                </div>
              </div>
              <div className="row m-2">
                <div className="col-md-6">
                  <label className="form-label">
                    Amount (in Rs.)
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    // value={currentLoan.amount}
                    disabled
                  />
                </div>
              </div>
              <div className="row m-2">
                <div className="col-md-6">
                  <label className="form-label">
                    Tenure (in months)
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    // value={currentLoan.tenure}
                    disabled
                  />
                </div>
              </div>
              <div className="row m-2">
                <button
                  className="btn btn-success"
                  onClick={() => setStep((p) => p - 1)}
                  style={backBtnStyle}
                >
                  Back
                </button>
              </div>
              <div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step6