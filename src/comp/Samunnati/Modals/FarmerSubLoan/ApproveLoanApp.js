import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function ApproveLoanApp({ showApproveForm, handleCloseApproveForm, currentPendLoan, handleShowConfirmApprove, showConfirmApprove, handleCloseConfirmApprove, handleClosePendingLoanDetails }) {
  const [grantedAmount, setGrantedAmount] = useState(0);

  const onChangeGrantedAmount = (e) => {
    setGrantedAmount(e.target.value);
  };

  const resetInputs = () => {
    setGrantedAmount(0);
  };

  const approveLoan = async () => {
    if(grantedAmount===0) {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "approved",
      "grantedAmount": grantedAmount,
      "paymentProof": "doc-1678828880007-578095983.jpg"
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${currentPendLoan.windowId}/loan/${currentPendLoan.id}/approval`, newLoan)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

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
                        value={currentPendLoan.loanId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Requested Loan Amount</label>
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
                      <label>Granted Loan Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        onChange={onChangeGrantedAmount}
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
                        value={currentPendLoan.intrest}
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

      <Modal show={showConfirmApprove} onHide={handleCloseConfirmApprove}>
        <Modal.Header closeButton>Confirm Approve Loan Application</Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label>Are you sure you want to approve this loan application?</label>
            </div>
            <div
              className="row m-2"
              style={{
                justifyContent: "space-between",
                padding: "0 10px",
              }}
            >
              <button
                className="btn btn-success"
                onClick={handleCloseConfirmApprove}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#064420",
                  width: "20%",
                }}
              >
                No
              </button>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  approveLoan();
                  // handleCloseConfirmApprove();
                  // handleCloseApproveForm();
                  // handleClosePendingLoanDetails();
                }}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#064420",
                  width: "20%",
                  position: "relative",
                  float: "right",
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Modal>
  )
}

export default ApproveLoanApp