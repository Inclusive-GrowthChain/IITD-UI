import Modal from "react-bootstrap/Modal";

function RejectLoanApp({ showRejectForm, handleCloseRejectForm, currentPendLoanApp, handleShowConfirmReject }) {
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
                      <label>FPO Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentPendLoanApp.fpoName}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Contact No.</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentPendLoanApp.contact}
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
                        value={currentPendLoanApp.dateOfApp}
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
                        value={currentPendLoanApp.requestedAmount}
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
                      // onInput={(e) => {setRejectionReason(e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        // onClick={(e) => rejectLoan(e, currentPendLoanApp)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmReject();
                        }}
                        style={{ float: "right", backgroundColor: '#064420' }}
                      // disabled={rejectionReason == ""}
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