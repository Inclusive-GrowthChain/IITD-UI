import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { updateRepayment } from "../../../../actions/samunnati";
import useModal from "../../../../hooks/useModal";

import Confirm from "./Confirm";
import Input from "../../../Nisa/Modals/Input";

const list = [
  {
    label: "Repayment Date",
    name: "paymentDate",
    type: "date",
  },
  {
    label: "Repayment Amount",
    name: "paidAmount",
    type: "number",
  },
]

function Repayment({ show, data, handleClose, closeAll }) {
  const { modal, updateModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      paymentDate: "",
      paidAmount: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateRepayment,
    onSuccess: () => {
      queryClient.invalidateQueries(["sumunnati/loanwindow", "fpo"])
      closeAll()
    }
  })

  const onConfirm = () => {
    closeModal()
    mutate({
      ...modal.data,
      id: data.id,
      lWId: data.lWId,
    })
  }

  const onSubmit = data => updateModal("show", data)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Repayment</Modal.Header>
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
                style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {
          modal.state &&
          <Confirm
            show
            title="Confirm"
            confirmText="Confirm Repayment Details?"
            handleClose={closeModal}
            onConfirm={onConfirm}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default Repayment