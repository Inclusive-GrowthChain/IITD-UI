import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function RejectLoanApp({ show, handleClose, data }) {
  const [reason, setReason] = useState("");

  const onChangeReason = (e) => setReason(e.target.value)
  const resetInputs = () => setReason("")

  const rejectLoan = async () => {
    if (reason === "") {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "rejected",
      "reason": reason
    };

    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${data.windowId}/loan/${data.id}/approval`, newLoan)
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>

      <Modal.Body>
        <form className="form">
          <div className="card p-2">
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Date of Application</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data?.createdAt.substring(0, 10)}
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
                  value={data.requestedAmount}
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
                  style={{ float: "right", backgroundColor: '#064420' }}
                  onClick={rejectLoan}
                >
                  Reject Loan
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default RejectLoanApp