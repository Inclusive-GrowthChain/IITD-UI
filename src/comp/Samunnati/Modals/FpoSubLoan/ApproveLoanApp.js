import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateLoanStatus } from "../../../../actions/samunnati";

import Input from "../../../Nisa/Modals/Input";
import FileInput from "../../../Common/FileInput";

const list = [
  {
    label: "Date of Application",
    name: "createdAt",
    disabled: true,
  },
  {
    label: "Requested Amount",
    name: "requestedAmount",
    type: "number",
    disabled: true,
  },
  {
    label: "Tenure (in months)",
    name: "loanTenure",
    type: "number",
    disabled: true,
  },
  {
    label: "Interest Rate",
    name: "intrest",
    type: "number",
    disabled: true,
  },
  {
    label: "Granted Amount",
    name: "grantedAmount",
    type: "number",
  },
  {
    label: "Payment Proof",
    name: "paymentProof",
    isFile: true,
  },
]

function ApproveLoanApp({ show, data, handleClose, closeAll }) {
  const { register, formState: { errors }, handleSubmit, setValue, clearErrors } = useForm({
    defaultValues: {
      createdAt: data?.createdAt.substring(0, 10),
      requestedAmount: data.requestedAmount,
      loanTenure: data.loanTenure,
      intrest: data.intrest,
      grantedAmount: "",
      paymentProof: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLoanStatus,
    onSuccess: () => closeAll("approved", data.id)
  })

  const approveLoan = (formData) => {
    mutate({
      grantedAmount: formData.grantedAmount,
      paymentProof: formData.paymentProof,
      windowId: data.windowId,
      status: "approved",
      id: data.id,
      isFpo: true
    })
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>
      <Modal.Body>
        <form
          className="form"
          onSubmit={handleSubmit(approveLoan)}
        >
          <div className="card p-2">
            {
              list.map(l => {
                if (l.isFile) {
                  return (
                    <FileInput
                      {...l}
                      key={l.name}
                      errors={errors}
                      register={register}
                      setValue={setValue}
                      clearErrors={clearErrors}
                    />
                  )
                }

                return (
                  <Input
                    {...l}
                    key={l.name}
                    errors={errors}
                    register={register}
                  />
                )
              })
            }

            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-primary"
                  style={{ float: "right", backgroundColor: '#064420' }}
                  type="submit"
                  disabled={isLoading}
                >
                  Approve Loan
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ApproveLoanApp