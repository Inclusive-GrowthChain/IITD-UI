import Modal from "react-bootstrap/Modal";

function ApproveLoanApp({ showApproveForm, handleCloseApproveForm, currentPendLoanApp, handleShowConfirmApprove }) {
  return (
    <Modal show={showApproveForm} onHide={handleCloseApproveForm}>
      <Modal.Header closeButton>Approve Farmer Loan Window Application</Modal.Header>
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
                      <label>Granted Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                      // onInput={(e) => {setGrantedAmount(e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Farmer Loan Window Tenure (in months)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={currentPendLoanApp.tenure}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Farmer Loan Window Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        // onClick={(e) => approveLoan(e, currentPendLoanApp)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmApprove();
                        }}
                        style={{ float: "right", backgroundColor: '#064420' }}
                      // disabled={grantedAmount == 0 || newRepaymentStructure == ""}
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