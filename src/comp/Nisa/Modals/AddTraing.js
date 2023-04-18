import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { errorNotify } from "../../../utils/toastifyHlp";
import { addTraining, editTraining } from "../../../actions/nisa";

import Input, { errStyle } from './Input';

const textAreaStyle = { resize: "none", height: "150px" }

const list = [
  {
    label: "Training ID",
    name: "traningId",
    disabled: true
  },
  {
    label: "Training Course Name",
    name: "courseName",
  },
  {
    label: "Course Start Date",
    name: "courseStartDate",
    type: "date",
  },
  {
    label: "Duration",
    name: "duration",
  },
  {
    label: "Application Start Date",
    name: "applicationStartDate",
    type: "date",
  },
  {
    label: "Application End Date",
    name: "applicationEndDate",
    type: "date",
  },
  {
    label: "Fee (in Rs.)",
    name: "fee",
    type: "number",
  },
]

function AddTraing({ data, show, isEdit, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      traningId: isEdit ? data._id : "TRAN004",
      courseName: isEdit ? data.courseName : "",
      courseStartDate: isEdit ? data.courseStartDate : "",
      duration: isEdit ? data.duration : "",
      applicationStartDate: isEdit ? data.applicationStartDate : "",
      applicationEndDate: isEdit ? data.applicationEndDate : "",
      fee: isEdit ? data.fee : "",
      remarks: isEdit ? data.remarks : "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: isEdit ? editTraining : addTraining,
    onSuccess: () => {
      queryClient.invalidateQueries("nisa/traning")
      reset()
      handleClose()
    }
  })

  const onSubmit = data => {
    if (new Date(data.appStartDate).getTime() > new Date(data.appEndDate).getTime()) {
      return errorNotify("Application start date cannot be greater than application end date")
    }

    if (Number(data.fee) < 0) {
      return errorNotify("Fee cannot be negative")
    }

    mutate(data)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>{isEdit ? "Edit" : "Add"} Training Program</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form">
                <div className="card p-2">
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
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        style={textAreaStyle}
                        {...register("remarks", {
                          required: "Remark is required"
                        })}
                      />
                      {
                        errors.remarks &&
                        <p className="text-danger" style={errStyle}>
                          {errors.remarks.message}
                        </p>
                      }
                    </div>
                  </div>

                  <div className="row m-2">
                    <button
                      type="submit"
                      style={{ marginTop: '1rem', backgroundColor: '#064420' }}
                      disabled={isLoading}
                      className="btn btn-success"
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

export default AddTraing