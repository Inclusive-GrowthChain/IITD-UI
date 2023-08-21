import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateLoanStatus } from "../../../../actions/samunnati";
import useModal from "../../../../hooks/useModal";

import Confirm from "../FpoLoan/Confirm";
import Input from "../../../Nisa/Modals/Input";

const list = [
  {
    label: "Requested Amount",
    name: "requestedAmount",
    type: "number",
    disabled: true,
  },
  {
    label: "Reason for Rejection",
    name: "reason",
  },
]

function RejectLoanApp({ show, data, handleClose, closeAll }) {
  const { modal, updateModal, closeModal } = useModal()

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      createdAt: data?.createdAt.substring(0, 10),
      requestedAmount: data.requestedAmount,
      reason: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLoanStatus,
    onSuccess: () => closeAll("rejected", data.id)
  })

  const rejectLoan = () => {
    closeModal()
    mutate({
      windowId: data.windowId,
      reason: modal.data.reason,
      status: "rejected",
      id: data.id,
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
          <div className="card p-2">
            {
              list.map(l => (
                <Input
                  {...l}
                  key={l.name}
                  errors={errors}
                  register={register}
                />
              ))
            }

            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  type="submit"
                  style={{ float: "right", backgroundColor: '#064420' }}
                  disabled={isLoading}
                  className="btn btn-primary"
                >
                  Reject Loan
                </button>
              </div>
            </div>
          </div>
        </form>

        {
          modal.state &&
          <Confirm
            show
            title="Confirm Reject Loan Application"
            confirmText="Are you sure you want to reject this loan application?"
            handleClose={closeModal}
            onConfirm={rejectLoan}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RejectLoanApp