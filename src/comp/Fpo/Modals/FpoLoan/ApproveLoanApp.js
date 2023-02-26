import Modal from "react-bootstrap/Modal";

function ApproveLoanApp({ showApprovedLoan, handleCloseApprovedLoan, handleShowConfirmLoanStatus, confirmLoan }) {
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
                      <label>Loan ID</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>FPO Name</label>
                    </div>
                    <div className="col-lg-6">
                      <label>FPO 2</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Contact No.</label>
                    </div>
                    <div className="col-lg-6">
                      <label>1234567890</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Application</label>
                    </div>
                    <div className="col-lg-6">
                      <label>12-01-2021</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Requested Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <label>400000</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Tenure (months)</label>
                    </div>
                    <div className="col-lg-6">
                      <label>2</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <label>12</label>
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
                        onClick={() => {
                          handleShowConfirmLoanStatus();
                          // confirmStatus();
                          confirmLoan();
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