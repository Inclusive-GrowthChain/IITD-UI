import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { approveLacTest } from "../../../actions/nisa";
import useModal from "../../../hooks/useModal";

import FileInput from "../../Common/FileInput";
import DocImg from "../../Common/DocImg";
import Input from './Input';

const list = [
  {
    label: "FPO Name",
    name: "fpoName",
  },
  {
    label: "FPO Contact",
    name: "fpoContact",
  },
  {
    label: "Sample ID",
    name: "sampleId",
  },
  {
    label: "Date of Application",
    name: "dateOfApplication",
  },
  {
    label: "Category",
    name: "category",
  },
  {
    label: "Test",
    name: "testName",
  },
  {
    label: "Amount",
    name: "amount",
  },
  {
    label: "Payment Ref no.",
    name: "paymentRefNo",
  },
  {
    label: "Payment Image",
    name: "paymentImg",
    isFile: true,
  },
  {
    label: "Lac Sample Image",
    name: "lacSampleImg",
    isFile: true,
  },
  {
    label: "Remarks",
    name: "remarks",
  },
]

const btnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
}

function Application({ show, data, handleClose }) {
  const [showFirstAppForm, setShowFirstAppForm] = useState(true)
  const { modal, updateModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { register, formState: { errors }, setValue, clearErrors, handleSubmit } = useForm({
    defaultValues: {
      id: data.id,
      referenceNo: "",
      certificate: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: approveLacTest,
    onSuccess: () => {
      queryClient.invalidateQueries("nisa/lactest")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Application
      </Modal.Header>

      <Modal.Body>
        <div className="form">
          {
            showFirstAppForm &&
            <div className="card p-2">
              {
                list.map(l => (
                  <div key={l.name} className="row m-2">
                    <div className="col-lg-6">
                      <label>{l.label}</label>
                    </div>
                    <div className="col-lg-6">
                      {
                        l.isFile ?
                          <button
                            className="btn btn-success"
                            style={{ backgroundColor: "#064420", fontSize: "14px" }}
                            onClick={() => updateModal(l.label, { imgUrl: data[l.name] })}
                          >
                            View
                          </button>
                          :
                          <input
                            type="text"
                            className="form-control"
                            value={data[l.name]}
                            disabled
                          />
                      }
                    </div>
                  </div>
                ))
              }

              <div className="row m-2">
                <div className="col-lg-12">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowFirstAppForm(false)}
                    style={btnStyle}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          }

          {
            !showFirstAppForm &&
            <form
              className="card p-2"
              onSubmit={handleSubmit(mutate)}
            >
              <Input
                name="referenceNo"
                label="Ref no."
                register={register}
                errors={errors}
              />

              <FileInput
                label="Certificate"
                name="certificate"
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
              />

              <div className="row m-2">
                <button
                  className="btn btn-success"
                  disabled={isLoading}
                  type="submit"
                  style={btnStyle}
                >
                  Submit
                </button>
              </div>
            </form>
          }
        </div>

        {
          modal.state &&
          <DocImg
            show
            title={modal.state}
            imgUrl={modal.data.imgUrl}
            handleClose={closeModal}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default Application