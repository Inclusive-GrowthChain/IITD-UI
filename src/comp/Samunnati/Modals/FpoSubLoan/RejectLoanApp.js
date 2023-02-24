import Modal from "react-bootstrap/Modal";

function RejectLoanApp({ showRejectForm, handleCloseRejectForm, currentLoan, handleClosePendingLoanDetails }) {
  return (
    <Modal show={showRejectForm} onHide={handleCloseRejectForm}>
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
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
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Reason for Rejection</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
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
                          handleCloseRejectForm();
                          handleClosePendingLoanDetails();
                        }}
                        style={{ float: "right", backgroundColor: '#064420' }}
                      >
                        Reject Loan
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

export default RejectLoanApp