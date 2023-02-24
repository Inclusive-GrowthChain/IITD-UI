import Modal from "react-bootstrap/Modal";

function OngoingLoanApp({ showOngoingLoanDetails, handleCloseOngoingLoanDetails, currentLoan, firstPage, handleShowPaymentProof, currentTransaction }) {
  return (
    <Modal show={showOngoingLoanDetails} onHide={handleCloseOngoingLoanDetails}>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              {
                firstPage && (
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Farmer ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.farmerID}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Date of Application</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.dateOfApp}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Requested Amount</label>
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
                    </div>
                  </div>
                )
              }
              {
                !firstPage && (
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.bankName}
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
                            value={currentTransaction.accountNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>IFSC Code</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.ifsc}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Date</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                            value={currentTransaction.paymentDate}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Reference Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.paymentRefNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Proof of Payment</label>
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
                              lineHeight: "2rem",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleShowPaymentProof();
                            }}
                          >
                            view
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCloseOngoingLoanDetails();
                            }}
                            style={{ float: "right", backgroundColor: '#064420' }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default OngoingLoanApp