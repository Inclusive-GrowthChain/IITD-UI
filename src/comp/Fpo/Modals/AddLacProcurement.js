import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";

import { addFpoLac, editFpoLac } from "../../../actions/fpo";
import Input, { errStyle } from '../../Nisa/Modals/Input';

const list = [
  {
    label: "Lac name",
    name: "productName",
  },
  {
    label: "Market price",
    name: "marketPrice",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Price should greater than 0"
      }
    }
  },
  {
    label: "FPO price",
    name: "fpoPrice",
    type: "number",
    validation: {
      min: {
        value: 0,
        message: "Price should greater than 0"
      }
    }
  },
]

function AddLacProcurement({ show, data, isEdit, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      productId: isEdit ? data._id : nanoid(10),
      productName: isEdit ? data.productName : "",
      marketPrice: isEdit ? data.marketPrice : "",
      fpoPrice: isEdit ? data.fpoPrice : "",
      image: "",
      isProcurable: isEdit ? `${data.isProcurable}` : true,
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: isEdit ? editFpoLac : addFpoLac,
    onSuccess: () => {
      queryClient.invalidateQueries("fpo/lac")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>Lac Procurement</Modal.Header>
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

            <div className="m-2">
              <div style={{ padding: "0 12px" }}>
                <label>Upload image</label>
              </div>
              <div style={{ padding: "0 12px" }}>
                <input
                  type="file"
                  className="form-control"
                  required
                  accept="image/*"
                  {...register("image", {
                    required: isEdit ? false : "Image is required"
                  })}
                />
                {
                  errors.image &&
                  <p className="text-danger" style={errStyle}>
                    {errors.image.message}
                  </p>
                }
              </div>
            </div>

            <div className="m-2">
              <div style={{ padding: "0 12px" }}>
                <p style={{ marginBottom: 0 }}>List of items</p>
              </div>
              <div style={{ padding: "0 12px" }}>
                <div className="row">
                  <div className="col" style={{ display: "flex", alignItems: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="true"
                        id="flexCheckDefault1"
                        {...register("isProcurable", {
                          required: "Item type is required"
                        })}
                      />
                    </div>
                    <label htmlFor="flexCheckDefault1" className="form-check-label">
                      Available
                    </label>
                  </div>
                  <div className="col" style={{ display: "flex", alignItems: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="false"
                        id="flexCheckDefault2"
                        {...register("isProcurable", {
                          required: "Item type is required"
                        })}
                      />
                    </div>
                    <label htmlFor="flexCheckDefault2" className="form-check-label">
                      Out of stock
                    </label>
                  </div>
                </div>

                {
                  errors.isProcurable &&
                  <p className="text-danger" style={errStyle}>
                    {errors.isProcurable.message}
                  </p>
                }
              </div>
            </div>

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

export default AddLacProcurement