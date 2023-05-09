import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import useModal from "../../../../hooks/useModal";
import Confirm from "../FpoLoan/Confirm";

function RejectLoanApp({ show, handleClose, data }) {
  const { modal, updateModal, closeModal } = useModal()
  const [reason, setReason] = useState("")

  const onChangeReason = (e) => {
    setReason(e.target.value)
  }

  const resetInputs = () => {
    setReason("")
  }

  const rejectLoan = async () => {
    if (reason === "") {
      alert("Please fill all details and try again")
      return
    }

    const newLoan = {
      "status": "rejected",
      "reason": reason
    }

    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${data.id}/approval`, newLoan)
      .then((response) => {
        console.log(response.data)
        resetInputs()
      })
      .catch((error) => {
        console.log(error)
      })

    window.location.reload()
  }

  return (
    <Modal show={show} onHide={handleClose}>
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
                        value={data.fpoName}
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
                        value={data.contactNo}
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
                        value={data.dateOfApplication}
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
                        onClick={() => updateModal("show")}
                        style={{ float: "right", backgroundColor: '#064420' }}
                        disabled={!reason}
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

      {
        modal.state &&
        <Confirm
          show
          title="Confirm Reject Farmer Loan Window Application"
          confirmText="Are you sure you want to reject this farmer loan window application?"
          handleClose={closeModal}
          onConfirm={rejectLoan}
        />
      }
    </Modal>
  )
}

export default RejectLoanApp