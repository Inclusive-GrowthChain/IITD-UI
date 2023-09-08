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

function ApproveLoanApp({ show, data, handleClose }) {
  const { modal, updateModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: updateFarmerLoanStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["loanwindow", "farmer"])
      handleClose()
    }
  })

  const approveLoan = () => {
    closeModal()
    mutate({
      id: data.id,
      intrest: data.intrest,
      windowId: data.windowId,
      fpointrest: data.intrest,
      fpoApprovalStatus: "approved",
    })
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>
      <Modal.Body>
        <div className="p-2">
          <div className="row m-2">
            <p className="col-lg-6">
              Loan ID
            </p>
            <p className="col-lg-6">
              {data?.loanId}
            </p>
          </div>
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
              {data?.mobile}
            </p>
          </div>
          <div className="row m-2">
            <p className="col-lg-6">
              Date of Application
            </p>
            <p className="col-lg-6">
              {data?.createdAt?.substring(0, 10)}
            </p>
          </div>
          <div className="row m-2">
            <p className="col-lg-6">
              Loan Requested Amount
            </p>
            <p className="col-lg-6">
              {data?.requestedAmount}
            </p>
          </div>
          <div className="row m-2">
            <p className="col-lg-6">
              Loan Tenure (months)
            </p>
            <p className="col-lg-6">
              {data?.loanTenure}
            </p>
          </div>
          <div className="row m-2">
            <p className="col-lg-6">
              Interest Rate (%)
            </p>
            <p className="col-lg-6">
              {data?.intrest}
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
                Approve Loan
              </button>
            </div>
          </div>
        </div>

        {
          modal.state &&
          <Confirm
            show
            title="Loan Application Approval"
            confirmText="Are you sure want to approve the loan?"
            handleClose={closeModal}
            onConfirm={approveLoan}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default ApproveLoanApp