
function Step3({ backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <div className="row mt-3">
      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Co-Applicant DOB</label>
                  </div>
                  <div className="col-lg-6">
                    <label>02-03-2000</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Co-Applicant Age</label>
                  </div>
                  <div className="col-lg-6">
                    <label>22</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Relationship with Applicant
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>Son</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Applicant Father Name
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>Father Name</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Applicant Mother Name
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>Mother Name</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Door Number</label>
                  </div>
                  <div className="col-lg-6">
                    <label>24/H</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Street Name</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Jv Colony</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Village</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Hyderabad</label>
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
                    onClick={() => setStep(2)}
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

export default Step3