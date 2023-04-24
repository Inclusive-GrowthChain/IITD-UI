import { useState } from "react";

const btnStyle = {
  background: "none",
  cursor: "pointer",
}

function Step2({ setStep, h5Style, finalWrapperStyle, backBtnStyle, nextBtnStyle }) {
  const [noOfRows, setNoOfRows] = useState(1)

  return (
    <div className="row mt-3">
      <h5 style={h5Style}>KYC of Authorised Signatories</h5>

      <div className="col">
        <div className="form">
          <label className="form-label select-label">
            <div className="">
              <div className="row m-2">
                <h5>List of Directors</h5>
                <div className="col-lg-12">
                  <input
                    type="file"
                    className="form-control"
                  />
                </div>
              </div>
              {[...Array(noOfRows)].map((element, index) => (
                <>
                  <div key={index} className="row m-2 mt-3">
                    <div className="col-4">
                      <label>ID Proof</label>
                    </div>

                    <div className="col-4">
                      <select className="form-select">
                        <option value="select">
                          Select
                        </option>
                        <option value="">PAN Card</option>
                        <option value="">Voter ID</option>
                      </select>
                    </div>

                    <div className="col-4">
                      <input
                        type="file"
                        className="form-control"
                        value={element || ""}
                      />
                    </div>
                  </div>

                  <div className="row m-2">
                    <div className="col-4">
                      <label>Address Proof</label>
                    </div>
                    <div className="col-4">
                      <select className="form-select">
                        <option value="select">
                          Select
                        </option>
                        <option value="">
                          Aadhaar Card
                        </option>
                        <option value="">Voter ID</option>
                        <option value="">
                          Driving Lincese
                        </option>
                        <option value="">Passport</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <input
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                </>
              ))}

              <div style={{ display: "flex" }}>
                <button
                  className="mx-3"
                  style={btnStyle}
                  onClick={() => setNoOfRows(noOfRows + 1)}
                >
                  +
                </button>
                <button
                  className="mx-3"
                  style={btnStyle}
                  onClick={() => setNoOfRows(noOfRows - 1)}
                >
                  -
                </button>
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
      </div>
    </div>
  )
}

export default Step2