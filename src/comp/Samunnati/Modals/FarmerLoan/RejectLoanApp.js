import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

function RejectLoanApp({ showRejectForm, handleCloseRejectForm, currentPendLoanApp, handleShowConfirmReject, showConfirmReject, handleCloseConfirmReject }) {
  const [reason, setReason] = useState("");

  const onChangeReason = (e) => {
    setReason(e.target.value);
  };

  const resetInputs = () => {
    setReason("");
  };

  const rejectLoan = async () => {
    if (reason == "") {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "rejected",
      "reason": reason
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
                        value={currentPendLoanApp.contactNo}
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
                        onChange={onChangeReason}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowConfirmReject();
                        }}
                        style={{ float: "right", backgroundColor: '#064420' }}
                        disabled={reason == ""}
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

      <Modal show={showConfirmReject} onHide={handleCloseConfirmReject}>
        <Modal.Header closeButton>Confirm Reject Farmer Loan Window Application</Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label>Are you sure you want to reject this farmer loan window application?</label>
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
                onClick={handleCloseConfirmReject}
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
                  rejectLoan();
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

export default RejectLoanApp