
const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "30%",
  fontSize: ".75rem",
  lineHeight: "1rem",
  textAlign: "center",
}

function Step1({ setStep, h5Style, nextBtnStyle }) {
  return (
    <div className="row">
      <h5 style={h5Style}>KYC Documents</h5>

      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>MOA</label>
                  </div>
                  <div className="col-lg-6 text-center">
                    <button
                      className="py-0.5"
                      style={btnStyle}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>AOA</label>
                  </div>
                  <div className="col-lg-6 text-center">
                    <button
                      className="py-0.5"
                      style={btnStyle}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Certificate of Incorporation
                    </label>
                  </div>
                  <div className="col-lg-6 text-center">
                    <button
                      className="py-0.5"
                      style={btnStyle}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>GST Certificate</label>
                  </div>
                  <div className="col-lg-6 text-center">
                    <button
                      className="py-0.5"
                      style={btnStyle}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>PAN Card</label>
                  </div>
                  <div className="col-lg-6 text-center">
                    <button
                      className="py-0.5"
                      style={btnStyle}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-12">
                    <button
                      className="btn btn-success"
                      onClick={() => setStep(1)}
                      style={nextBtnStyle}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step1