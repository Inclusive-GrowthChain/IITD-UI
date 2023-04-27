const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "2rem",
}

function Step2({ backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <div className="row mt-3">
      <div className="col">
        <div className="form">
          <label className="form-label select-label">
            <div className="">
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Applicant DOB</label>
                </div>
                <div className="col-lg-6">
                  <label>07-04-2000</label>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Applicant Age</label>
                </div>
                <div className="col-lg-6">
                  <label>22</label>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Aadhard Card Number</label>
                </div>
                <div className="col-lg-6">
                  <label>1234567890</label>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Aadhar Card</label>
                </div>
                <div className="col-lg-6">
                  <button
                    style={btnStyle}
                  // onClick={handleShowAadharCardImg}
                  >
                    view
                  </button>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>PAN Card Number</label>
                </div>
                <div className="col-lg-6">
                  <label>1234567890</label>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>PAN Card</label>
                </div>
                <div className="col-lg-6">
                  <button
                    style={btnStyle}
                  // onClick={handleShowPanCardImg}
                  >
                    view
                  </button>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Co-Applicant Name</label>
                </div>
                <div className="col-lg-6">FPO 3</div>
              </div>
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Co-Applicant Gender</label>
                </div>
                <div className="col-lg-6">
                  <label>Male</label>
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
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Step2