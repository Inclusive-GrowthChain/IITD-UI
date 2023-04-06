import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function RejectLoanApp({ showRejectedLoan, handleCloseRejectedLoan, handleShowConfirmLoanStatus, confirmLoanStatus, currentLoan, currentLoanWindow }) {
  const [reason, setReason] = useState("");

  const onChangeReason = (e) => {
    setReason(e.target.value);
  };

  return (
    <Modal show={showRejectedLoan} onHide={handleCloseRejectedLoan}>
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
                      <label>{currentLoanWindow && currentLoanWindow.fpoName}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Contact No.</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoanWindow && currentLoanWindow.contactNo}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Application</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan && currentLoan.createdAt && currentLoan.createdAt.substring(0, 10)}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Requested Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{currentLoan && currentLoan.requestedAmount}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Reason for Rejection</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" onChange={onChangeReason}/>
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
                          confirmLoanStatus(e, reason);
                        }}
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