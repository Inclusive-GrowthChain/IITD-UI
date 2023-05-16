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
    type: "number",
    disabled: true,
  },
  {
    label: "Granted Amount",
    name: "grantedAmount",
    type: "number",
  },
  {
    label: "Loan Window Interest Rate (%)",
    name: "interest",
    type: "number",
  },
]

function ApproveLoanApp({ show, handleClose, data, windowType, closeAll }) {
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
      grantedAmount: "",
      interest: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLoanWindowStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["sumunnati/loanwindow", windowType])
      closeAll()
    }
  })

  const approveLoan = () => {
    closeModal()
    mutate({
      id: data.id,
      grantedAmount: modal.data.grantedAmount,
      interest: modal.data.interest,
      status: "approved",
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
                Approve Loan
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
          title={`Confirm Approve ${windowType === "fpo" ? "FPO" : "Farmer"} Loan Window Application`}
          confirmText={`Are you sure you want to approve this ${windowType === "fpo" ? "FPO" : "Farmer"} loan window application?`}
          onConfirm={approveLoan}
        />
      }
    </Modal>
  )
}

export default ApproveLoanApp