import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import useModal from "../../../../hooks/useModal";
import Confirm from "../FpoLoan/Confirm";

function ApproveLoanApp({ show, handleClose, data }) {
  const { modal, updateModal, closeModal } = useModal()
  const [grantedAmount, setGrantedAmount] = useState(0)
  const [interest, setInterest] = useState(0)

  const onChangeGrantedAmount = (e) => {
    setGrantedAmount(e.target.value)
  }

  const onChangeInterest = (e) => {
    setInterest(e.target.value)
  }

  const resetInputs = () => {
    setGrantedAmount(0)
    setInterest(0)
  }

  const approveLoan = async () => {
    if (grantedAmount === 0 || interest === 0) {
      alert("Please fill all details and try again")
      return
    }

    const newLoan = {
      "status": "approved",
      "grantedAmount": grantedAmount,
      "intrest": interest
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
      <Modal.Header closeButton>Approve Farmer Loan Window Application</Modal.Header>

      <Modal.Body>
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
                <label>Farmer Loan Window Tenure (in months)</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="number"
                  className="form-control"
                  value={data.windowPeriod}
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
                  onChange={onChangeInterest}
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-primary"
                  onClick={() => updateModal("show")}
                  style={{ float: "right", backgroundColor: '#064420' }}
                  disabled={grantedAmount === 0 || !interest}
                >
                  Approve Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      {
        modal.state &&
        <Confirm
          show
          title="Confirm Approve Farmer Loan Window Application"
          confirmText="Are you sure you want to approve this farmer loan window application?"
          handleClose={closeModal}
          onConfirm={approveLoan}
        />
      }
    </Modal>
  )
}

export default ApproveLoanApp