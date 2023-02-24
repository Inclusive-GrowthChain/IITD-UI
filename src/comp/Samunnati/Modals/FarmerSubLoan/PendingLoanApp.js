import Modal from "react-bootstrap/Modal";

function PendingLoanApp({ showPendingLoanDetails, handleClosePendingLoanDetails, currentPendLoan, step, setStep, handlePendingLoanStatus, handleShowAadharCardImg, handleShowPanCardImg }) {
  return (
    <Modal show={showPendingLoanDetails} onHide={handleClosePendingLoanDetails}>
      <Modal.Header closeButton>Loan Application</Modal.Header>
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
                          <label>Loan ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.id}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>FPO Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.fpoName}
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
                            value={currentPendLoan.bankName}
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
                            value={currentPendLoan.accountNo}
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
                            value={currentPendLoan.ifsc}
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
                            value={currentPendLoan.branchName}
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
                            value={currentPendLoan.applicantName}
                            disabled
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
                            value={currentPendLoan.requestedAmount}
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
                            value={currentPendLoan.applicantGender}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Mobile Number</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.applicantMobile}
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
                        <input
                          type="date"
                          className="form-control"
                          value={currentPendLoan.applicantDOB}
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
                          value={currentPendLoan.applicantAge}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Aadhar Card Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={currentPendLoan.aadharNo}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Aadhar Card</label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={{
                            backgroundColor:
                              "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding:
                              "0.25rem 1rem",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "2rem",
                          }}
                          onClick={(e) => {
                            handleShowAadharCardImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>PAN Card Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={currentPendLoan.panNo}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>PAN Card</label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={{
                            backgroundColor:
                              "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding:
                              "0.25rem 1rem",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "2rem",
                          }}
                          onClick={(e) => {
                            handleShowPanCardImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Co-Applicant Name</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={currentPendLoan.coApplicantName}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Co-Applicant Gender</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={currentPendLoan.coApplicantGender}
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
                          <label>Co-Applicant DOB</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                            value={currentPendLoan.coApplicantDOB}
                            disabled
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
                            value={currentPendLoan.coApplicantAge}
                            disabled
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
                            value={currentPendLoan.relationWithApplicant}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Father Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.applicantFatherName}
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
                            value={currentPendLoan.applicantMotherName}
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
                            value={currentPendLoan.doorNumber}
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
                            value={currentPendLoan.streetName}
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
                            value={currentPendLoan.village}
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
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.taluk}
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
                            value={currentPendLoan.district}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>State</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.state}
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
                            value={currentPendLoan.pinCode}
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
                            value={currentPendLoan.occupation}
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
                            value={currentPendLoan.education}
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
                            value={currentPendLoan.nativePlace}
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
                            value={currentPendLoan.residence}
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
                          <label>Land Holding</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.landHolding}
                            disabled
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
                            value={currentPendLoan.typeOfLandHolding}
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
                            value={currentPendLoan.caste}
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
                            value={currentPendLoan.religion}
                            disabled
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
                            value={currentPendLoan.monthlyHHIncome}
                            disabled
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
                            value={currentPendLoan.monthlyHHExpenses}
                            disabled
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
                            value={currentPendLoan.loanPurpose}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Tenure (months)</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentPendLoan.loanTenure}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <select
                            className="form-control"
                            onChange={(e) => handlePendingLoanStatus(e)}
                            style={{ marginTop: '7%' }}
                          >
                            <option value="Pending">Change Loan Status</option>
                            <option value="Approved">Approve Loan</option>
                            <option value="Rejected">Reject Loan</option>
                          </select>
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

export default PendingLoanApp