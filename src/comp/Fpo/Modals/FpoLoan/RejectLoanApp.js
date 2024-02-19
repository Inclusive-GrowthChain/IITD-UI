import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "react-bootstrap";

import { updateFarmerLoanStatus } from "../../../../actions/fpo";
import useModal from "../../../../hooks/useModal";

import Confirm from "../../../Samunnati/Modals/FpoLoan/Confirm";

const btnStyle = {
  float: "right",
  backgroundColor: "#064420",
  border: "none",
}

function RejectLoanApp({ show, data, handleClose }) {
  console.log(data)
  const { modal, updateModal, closeModal } = useModal()
  const [reason, setReason] = useState("")
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: updateFarmerLoanStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["loanwindow", "farmer"])
      handleClose()
    }
  })

  const rejectLoan = () => {
    closeModal()
    mutate({
      id: data.id,
      windowId: data.windowId,
      fpoApprovalStatus: "rejected",
      reason,
    })
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>
      <Modal.Body>
        <div className="p-2">
          <div className="row m-2">
            <p className="col-lg-6">
              FPO Name
            </p>
            <p className="col-lg-6">
              {data?.fpoName}
            </p>
          </div>

          <div className="row m-2">
            <p className="col-lg-6">
              Contact No.
            </p>
            <p className="col-lg-6">
              {data?.contactNumber}
            </p>
          </div>

          <div className="row m-2">
            <p className="col-lg-6">
              Date of Application
            </p>
            <p className="col-lg-6">
              {data?.createdAt.substring(0, 10)}
            </p>
          </div>

          <div className="row m-2">
            <p className="col-lg-6">
              Requested Amount
            </p>
            <p className="col-lg-6">
              {data?.requestedAmount}
            </p>
          </div>

          <div className="row m-2">
            <p className="col-lg-6">
              Reason for Rejection
            </p>
            <p className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={reason}
                onChange={e => setReason(e.target.value)}
              />
            </p>
          </div>

          <div className="row m-2">
            <div className="col-lg-12">
              <button
                className="btn btn-primary"
                style={btnStyle}
                onClick={() => updateModal("confirm")}
                disabled={isLoading}
              >
                Reject Loan
              </button>
            </div>
          </div>
        </div>

        {
          modal.state &&
          <Confirm
            show
            title="Loan Application Approval"
            confirmText="Are you sure want to reject the loan?"
            handleClose={closeModal}
            onConfirm={rejectLoan}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RejectLoanApp