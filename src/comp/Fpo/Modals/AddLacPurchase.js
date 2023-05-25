import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";

import { addFpoSale } from "../../../actions/fpo";
import Input from '../../Nisa/Modals/Input';

const list = [
  {
    label: "Purchase ID",
    name: "purchaseId",
    disabled: true
  },
  {
    label: "Item Name",
    name: "itemName",
  },
  {
    label: "Price per kg",
    name: "pricePerKg",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Price should greater than 0"
      }
    }
  },
  {
    label: "Quantity",
    name: "quantity",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Price should greater than 0"
      }
    }
  },
  {
    label: "Amount",
    name: "amount",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Price should greater than 0"
      }
    }
  },
]

function AddLacPurchase({ show, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      purchaseId: nanoid(10),
      itemName: "",
      pricePerKg: "",
      quantity: "",
      amount: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: addFpoSale,
    onSuccess: () => {
      queryClient.invalidateQueries("fpo/products")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>FPO Store2</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>
          <div className="p-2">
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
              <button
                type="submit"
                style={{ backgroundColor: "#064420" }}
                disabled={isLoading}
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default AddLacPurchase