
function Step4({ backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <div className="row mt-3">
      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Taluk</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Taluk</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>District</label>
                  </div>
                  <div className="col-lg-6">
                    <label>district</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>State</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Telangana</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Pin Code</label>
                  </div>
                  <div className="col-lg-6">
                    <label>50XXXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Occupation</label>
                  </div>
                  <div className="col-lg-6">
                    <label>occupation</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Education</label>
                  </div>
                  <div className="col-lg-6">
                    <label>12th</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Nature of Place</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Hyderabad</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Residence</label>
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
                    onClick={() => setStep(3)}
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

export default Step4