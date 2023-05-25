import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addProduce } from "../../../actions/farmer";
import { useAuthStore } from "../../../store/useAuthStore";

const errStyle = { fontSize: "12px", margin: 0 }

function SellProduce({ show, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      farmerId: useAuthStore(s => s.userDetails._id),
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
        <form onSubmit={handleSubmit(mutate)}>

          <div className="row m-2">
            <div className="col-lg-6">
              <label>Date</label>
            </div>
            <div className="col-lg-6">
              <label>{new Date().toDateString()}</label>
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
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default SellProduce