import Modal from "react-bootstrap/Modal";

function ApproveLoanApp({ showApproveForm, handleCloseApproveForm, currentPendLoan, handleShowConfirmApprove }) {
  return (
    <Modal show={showApproveForm} onHide={handleCloseApproveForm}>
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
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
                      <label>Loan Amount</label>
                    </div>
                    <div className="col-lg-6">
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
                      <label>Tenure (in months)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={currentPendLoan.loanTenure}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={currentPendLoan.loanInterest}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Upload Payment Proof</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmApprove();
                        }}
                        style={{ float: "right", backgroundColor: '#064420' }}
                      >
                        Approve Loan
                      </button>
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

export default ApproveLoanApp