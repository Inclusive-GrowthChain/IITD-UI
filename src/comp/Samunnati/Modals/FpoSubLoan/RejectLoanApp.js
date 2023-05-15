import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateLoanStatus } from "../../../../actions/samunnati";

import Input from "../../../Nisa/Modals/Input";

const list = [
  {
    label: "Date of Application",
    name: "createdAt",
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

function RejectLoanApp({ show, data, handleClose, closeAll }) {
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

  const rejectLoan = formData => {
    mutate({
      windowId: data.windowId,
      reason: formData.reason,
      status: "rejected",
      id: data.id,
    })
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>

      <Modal.Body>
        <form
          className="form"
          onSubmit={handleSubmit(rejectLoan)}
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
                  className="btn btn-primary"
                  style={{ float: "right", backgroundColor: '#064420' }}
                  type="submit"
                  disabled={isLoading}
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