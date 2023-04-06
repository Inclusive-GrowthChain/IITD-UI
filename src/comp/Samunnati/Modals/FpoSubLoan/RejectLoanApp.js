import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function RejectLoanApp({ showRejectForm, handleCloseRejectForm, currentLoan, handleClosePendingLoanDetails }) {
  const [reason, setReason] = useState("");

  const onChangeReason = (e) => {
    setReason(e.target.value);
  };

  const resetInputs = () => {
    setReason("");
  };

  const rejectLoan = async () => {
    if(reason=="") {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "rejected",
      "reason": reason
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${currentLoan.windowId}/loan/${currentLoan.id}/approval`, newLoan)
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
                      <label>Date of Application</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={currentLoan.createdAt && currentLoan.createdAt.substring(0, 10)}
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
                        value={currentLoan.requestedAmount}
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
                          rejectLoan();
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