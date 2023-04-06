import Modal from "react-bootstrap/Modal";

function ApproveLoanApp({ showApprovedLoan, handleCloseApprovedLoan, handleShowConfirmLoanStatus, confirmLoanStatus, currentLoan, currentLoanWindow }) {
  return (
    <Modal
      show={showApprovedLoan}
      onHide={handleCloseApprovedLoan}
      centered
    >
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
                      <label>{currentLoan.loanId}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>FPO Name</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoanWindow.fpoName}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Contact No.</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoanWindow.contactNo}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Application</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan.createdAt && currentLoan.createdAt.substring(0, 10)}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Requested Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan.requestedAmount}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Tenure (months)</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan.loanTenure}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan.intrest}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        style={{
                          float: "right",
                          backgroundColor: "#064420",
                          border: "none",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmLoanStatus();
                          // confirmStatus();
                          confirmLoanStatus(e);
                        }}
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