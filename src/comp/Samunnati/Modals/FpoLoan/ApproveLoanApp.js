import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

function ApproveLoanApp({ showApproveForm, handleCloseApproveForm, currentPendLoanApp, handleShowConfirmApprove, showConfirmApprove, handleCloseConfirmApprove }) {
  const [grantedAmount, setGrantedAmount] = useState(0);
  const [interest, setInterest] = useState(0);

  const onChangeGrantedAmount = (e) => {
    setGrantedAmount(e.target.value);
  }

  const onChangeInterest = (e) => {
    setInterest(e.target.value);
  }

  const resetInputs = () => {
    setGrantedAmount(0);
    setInterest(0);
  }

  const approveLoan = async () => {
    if (grantedAmount === 0 || interest === 0) {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "approved",
      "grantedAmount": grantedAmount,
      "intrest": interest
    };

    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${currentPendLoanApp.id}/approval`, newLoan)
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
                        value={currentPendLoanApp.contactNo}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Window ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentPendLoanApp.windowId}
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
                        value={currentPendLoanApp.dateOfApplication}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Window Tenure (months)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentPendLoanApp.windowPeriod}
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
                        onChange={onChangeGrantedAmount}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Window Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        onChange={onChangeInterest}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right", backgroundColor: '#064420' }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmApprove();
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

      <Modal show={showConfirmApprove} onHide={handleCloseConfirmApprove}>
        <Modal.Header closeButton>Confirm Approve FPO Loan Window Application</Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label>Are you sure you want to approve this FPO loan window application?</label>
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