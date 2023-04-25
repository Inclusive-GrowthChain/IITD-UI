import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addFpoSale } from "../../../actions/fpo";
import Input from '../../Nisa/Modals/Input';

const list = [
  {
    label: "Sale ID",
    name: "saleId",
    disabled: true
  },
  {
    label: "Item name",
    name: "itemName",
  },
  {
    label: "Unit price",
    name: "unitPrice",
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

function AddFpoSale({ show, data, isEdit, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      saleId: "SAL001",
      itemName: "",
      unitPrice: "",
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
      <Modal.Header closeButton>FPO Store</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
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
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddFpoSale