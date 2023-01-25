import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const style = {
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

function ApplicationDetails({
  showLoanApplicationDetails,
  handleShowAadharCardImg,
  handleShowPanCardImg,
  handleCloseLoanApplicationDetails,
}) {
  const [step, setStep] = useState(0)

  return (
    <Modal
      show={showLoanApplicationDetails}
      onHide={handleCloseLoanApplicationDetails}
    >
      <Modal.Header closeButton>Application Details</Modal.Header>
      <Modal.Body>
        {step === 0 && (
          <div className="row">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>FPO Name</label>
                        </div>
                        <div className="col-lg-6">
                          <label>FPO 1</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-lg-6">
                          <label>SBI</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Account Number</label>
                        </div>
                        <div className="col-lg-6">
                          <label>1234567890</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank IFSC</label>
                        </div>
                        <div className="col-lg-6">
                          <label>23423XXXX</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Branch Name</label>
                        </div>
                        <div className="col-lg-6">
                          <label>Branch Name</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Name</label>
                        </div>
                        <div className="col-lg-6">
                          <label>N 1</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Gender</label>
                        </div>
                        <div className="col-lg-6">
                          <label>Male</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Mobile Number</label>
                        </div>
                        <div className="col-lg-6">
                          <label>1234567890</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          {(("Create" && step < 6) ||
                            ("Create" && step < 5)) && (
                              <button
                                className="btn btn-success"
                                onClick={() => setStep((p) => p + 1)}
                                style={{
                                  marginTop: "20px",
                                  backgroundColor: "#064420",
                                  width: "20%",
                                  position: "relative",
                                  float: "right",
                                }}
                              >
                                Next
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 1 && (
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
                        <label>Aadhar Card Image</label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={style}
                          onClick={handleShowAadharCardImg}
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
                        <label>PAN Card Image</label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={style}
                          onClick={handleShowPanCardImg}
                        >
                          view
                        </button>
                      </div>
                    </div>
                    <div
                      className="row m-2"
                      style={{
                        justifyContent: "space-between",
                        padding: "0 10px",
                      }}
                    >
                      {step > 0 && (
                        <button
                          className="btn btn-success"
                          onClick={() => setStep((p) => p - 1)}
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                            width: "20%",
                          }}
                        >
                          Back
                        </button>
                      )}
                      {(("Create" && step < 6) ||
                        ("Create" && step < 5)) && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p + 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                              position: "relative",
                              float: "right",
                            }}
                          >
                            Next
                          </button>
                        )}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="row mt-3">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Father Name</label>
                        </div>
                        <div className="col-lg-6">
                          <label>Father Name</label>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Mother Name</label>
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
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 3 && (
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
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="row mt-3">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
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
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default ApplicationDetails