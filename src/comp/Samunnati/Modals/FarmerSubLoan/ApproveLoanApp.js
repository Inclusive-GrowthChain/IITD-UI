import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateLoanStatus } from "../../../../actions/samunnati";
import useModal from "../../../../hooks/useModal";

import FileInput from "../../../Common/FileInput";
import Confirm from "../FpoLoan/Confirm";
import Input from "../../../Nisa/Modals/Input";

const list = [
  {
    label: "Loan ID",
    name: "loanId",
    disabled: true,
  },
  {
    label: "Requested Loan Amount",
    name: "requestedAmount",
    disabled: true,
  },
  {
    label: "Granted Loan Amount",
    name: "grantedAmount",
  },
  {
    label: "Tenure (in months)",
    name: "tenure",
    disabled: true,
  },
  {
    label: "Interest Rate",
    name: "intrest",
    disabled: true,
  },
  {
    label: "Upload Payment Proof",
    name: "paymentProof",
    isFile: true,
  },
]

function ApproveLoanApp({ show, data, closeAll, handleClose }) {
  const { modal, updateModal, closeModal } = useModal()
  const { register, formState: { errors }, handleSubmit, setValue, clearErrors } = useForm({
    defaultValues: {
      loanId: data?.loanId,
      requestedAmount: data.requestedAmount,
      tenure: data.tenure,
      intrest: data.intrest,
      grantedAmount: "",
      paymentProof: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLoanStatus,
    onSuccess: () => closeAll("approved", data.id)
  })

  const approveLoan = () => {
    mutate({
      grantedAmount: modal.data.grantedAmount,
      paymentProof: modal.data.paymentProof,
      windowId: data.windowId,
      status: "approved",
      id: data.id,
    })
  }

  const onSubmit = data => updateModal("show", data)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>

      <Modal.Body>
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
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
                  type="submit"
                  style={{ float: "right", backgroundColor: '#064420' }}
                  disabled={isLoading}
                  className="btn btn-primary"
                >
                  Approve Loan
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>

      {
        modal.state &&
        <Confirm
          show
          title="Confirm Approve Loan Application"
          confirmText="Are you sure you want to approve this loan application?"
          handleClose={closeModal}
          onConfirm={approveLoan}
        />
      }
    </Modal>
  )
}

export default ApproveLoanApp