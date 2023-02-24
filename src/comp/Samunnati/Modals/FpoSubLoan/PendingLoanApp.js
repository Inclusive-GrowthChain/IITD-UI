import Modal from "react-bootstrap/Modal";

function PendingLoanApp({ showPendingLoanDetails, handleClosePendingLoanDetails, currentLoan, handleShowPaymentProof ,handlePendingLoanStatus }) {
  return (
    <Modal show={showPendingLoanDetails} onHide={handleClosePendingLoanDetails}>
      <Modal.Header closeButton>Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Window ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.windowId}
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
                        value={currentLoan.id}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Name of Payee</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.payeeName}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Account Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.accountNo}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>IFSC Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={currentLoan.ifsc}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Bank Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.bankName}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.loanAmount}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.interest}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Tenure of Loan in Months</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.tenure}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Invoice</label>
                    </div>
                    <div className="col-lg-6">
                      <button
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "100%",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowPaymentProof();
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Purpose</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.purpose}
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
                        <option value="Approved">Approve</option>
                        <option value="Rejected">Reject</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PendingLoanApp