import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateLoanWindowStatus } from "../../../../actions/samunnati";
import useModal from "../../../../hooks/useModal";

import Confirm from "./Confirm";
import Input from "../../../Nisa/Modals/Input";

const list = [
  {
    label: "FPO Name",
    name: "fpoName",
    disabled: true,
  },
  {
    label: "Contact No.",
    name: "contactNo",
    disabled: true,
  },
  {
    label: "Window ID",
    name: "windowId",
    disabled: true,
  },
  {
    label: "Date of Application",
    name: "dateOfApplication",
    disabled: true,
  },
  {
    label: "Window Tenure (months)",
    name: "windowPeriod",
    disabled: true,
  },
  {
    label: "Requested Amount",
    name: "requestedAmount",
    disabled: true,
  },
  {
    label: "Reason for Rejection",
    name: "reason",
  },
]

function RejectLoanApp({ show, handleClose, data, closeAll }) {
  const { modal, updateModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      fpoName: data.fpoName,
      contactNo: data.contactNo,
      windowId: data.windowId,
      dateOfApplication: data.dateOfApplication,
      windowPeriod: data.windowPeriod,
      requestedAmount: data.requestedAmount,
      reason: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLoanWindowStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["sumunnati/loanwindow", "fpo"])
      closeAll()
    }
  })

  const rejectLoan = () => {
    closeModal()
    mutate({
      id: data.id,
      reason: modal.data.reason,
      status: "rejected",
    })
  }

  const onSubmit = data => updateModal("show", data)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>

      <Modal.Body>
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {
            list.map(l => (
              <Input
                key={l.name}
                {...l}
                register={register}
                errors={errors}
              />
            ))
          }

          <div className="row m-2">
            <div className="col-lg-12">
              <button
                className="btn btn-primary"
                style={{ float: "right", backgroundColor: '#064420' }}
                disabled={isLoading}
              >
                Reject Loan
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>

      {
        modal.state &&
        <Confirm
          show
          handleClose={closeModal}
          title="Confirm Reject Farmer Loan Window Application"
          confirmText="Are you sure you want to reject this farmer loan window application?"
          onConfirm={rejectLoan}
        />
      }
    </Modal>
  )
}

export default RejectLoanApp