import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from 'nanoid';

import { addCropAdvisory, editCropAdvisory } from '../../../actions/nisa';

const errStyle = { fontSize: "12px", margin: 0 }
const textAreaStyle = { resize: "none", height: "150px" }

function AddCA({ data, show, isEdit, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      cropAdvisoryId: isEdit ? data._id : nanoid(10),
      content: isEdit ? data.content : "",
      title: isEdit ? data.title : "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: isEdit ? editCropAdvisory : addCropAdvisory,
    onSuccess: () => {
      queryClient.invalidateQueries("nisa/crop-advisory")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>{isEdit ? "Edit" : "Add"} Crop Advisory</Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(mutate)}>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Crop Advisory ID</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        {...register("cropAdvisoryId")}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Title</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="form-control"
                        {...register("title", {
                          required: "Title id required"
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
                      <label>Content</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        style={textAreaStyle}
                        {...register("content", {
                          required: "Content id required"
                        })}
                      ></textarea>
                      {
                        errors.content &&
                        <p className="text-danger" style={errStyle}>
                          {errors.content.message}
                        </p>
                      }
                    </div>
                  </div>

                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      type="submit"
                      style={{
                        marginTop: "2rem",
                        backgroundColor: "#064420",
                      }}
                      disabled={isLoading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddCA