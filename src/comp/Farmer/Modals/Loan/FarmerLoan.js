import Modal from "react-bootstrap/Modal";
import { farmerDetails } from '../../dummyLoanData';

function FarmerLoan({ step, setStep, showLoanApp, confirmBid, handleCloseLoanApp }) {
  return (
    <Modal
      size="lg"
      show={showLoanApp}
      onHide={handleCloseLoanApp}
      scrollable
    >
      <Modal.Header closeButton>Farmer Loan</Modal.Header>
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
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.fpoName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.bankName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Account Number</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.accountNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank IFSC</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.ifsc}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Branch Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.branchName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.name}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Gender</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.gender}
                            disabled
                          />
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
                                  width: "20",
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
                        <label>Applicant Mobile Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.mobile}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant DOB</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="date"
                          className="form-control"
                          value={farmerDetails.dob}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant Age</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.age}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>ID Proof Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.idProofType}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant Proof ID Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.idProofNo}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Address Proof Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.addressProofType}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Applicant Address Proof Number
                        </label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={farmerDetails.addressProofNo}
                          disabled
                        />
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
                            width: "20",
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
                              width: "20",
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
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.fatherName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Mother Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.motherName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Door Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.doorNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Street Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.streetName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Village</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.village}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Taluk</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.taluk}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>District</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.district}
                            disabled
                          />
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
                              width: "20",
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
                                width: "20",
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
                          <label>State</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.state}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Pin Code</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.pincode}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Occupation</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.occupation}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Education</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.education}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Nature of Place</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.natureOfPlace}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Residence</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.residence}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Caste</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.caste}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Religion</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={farmerDetails.religion}
                            disabled
                          />
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
                              width: "20",
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
                                width: "20",
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
                          <label>Co-Applicant Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Co-Applicant Name"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant Gender</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <select className="form-select">
                            <option value="0">Select</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant DOB</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                            onChange={"12-5-12"}
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant Age</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={"12-3-99"}
                            disabled
                            placeholder="Co-Applicant Age"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Relationship with Applicant</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Relationship with Applicant"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Land Holding</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Land Holding"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Type of Land Holding</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type of Land Holding"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Monthly HH Income</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Monthly HH Income"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Monthly HH Expenses</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Monthly HH Expenses"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Requested Amount</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Requested Amount"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Purpose</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Purpose"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Tenure (in months)</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Tenure"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Interest Rate</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={12}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={2345678}
                            disabled
                          />
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
                              width: "20",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={confirmBid}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Submit
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

export default FarmerLoan