import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addProduce } from "../../../../actions/farmer";

const errStyle = { fontSize: "12px", margin: 0 }
// const textAreaStyle = { resize: "none", height: "150px" }

function SellProduce({ data, show, handleClose, date, month, year }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      farmerId: localStorage.getItem("userId"),
      lacStrainType: "",
      treeSource: "",
      origin: "",
      quantity: "",
      remarks: ""
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: addProduce,
    onSuccess: () => {
      queryClient.invalidateQueries("farmer/produce")
      reset()
      handleClose()
    }
  })

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Enter details</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(mutate)}>
              <div className="form">
                <label className="form-label select-label">
                  <div className="">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Date</label>
                      </div>
                      <div className="col-lg-6">
                        <label>{date}/{month}/{year}</label>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Lac Strain Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lac Strain Type"
                          {...register("lacStrainType", {
                            required: "Lac strain type is required"
                          })}
                        />
                        {
                          errors.title &&
                          <p className="text-danger" style={errStyle}>
                            {errors.title.message}
                          </p>
                        }
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Source of Tree</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Source of Tree"
                          {...register("treeSource", {
                            required: "Source of tree is required"
                          })}
                        />
                        {
                          errors.title &&
                          <p className="text-danger" style={errStyle}>
                            {errors.title.message}
                          </p>
                        }
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Origin</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Origin"
                          {...register("origin", {
                            required: "Origin is required"
                          })}
                        />
                        {
                          errors.title &&
                          <p className="text-danger" style={errStyle}>
                            {errors.title.message}
                          </p>
                        }
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Quantity</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                          {...register("quantity", {
                            required: "Quantity is required"
                          })}
                        />
                        {
                          errors.title &&
                          <p className="text-danger" style={errStyle}>
                            {errors.title.message}
                          </p>
                        }
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Remarks</label>
                      </div>
                      <div className="col-lg-12 text-center">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Remarks"
                          style={{ height: "100px" }}
                          {...register("remarks")}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-12">
                        <button
                          className="btn btn-success"
                          type="submit"
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                            width: "20",
                            position: "relative",
                            float: "right",
                          }}
                          disabled={isLoading}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SellProduce