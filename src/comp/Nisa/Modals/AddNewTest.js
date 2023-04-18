import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addLacTest } from "../../../actions/nisa";

import Input from './Input';

const btnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
}

const list = [
  {
    label: "Test",
    name: "testId",
    disabled: true
  },
  {
    label: "Category",
    name: "category",
    isSelect: true,
    options: [
      "Shellac / Seedlac / By-product of Lac",
      "Bleached Lac",
      "Lac Dye",
      "Shellac Wax",
      "Aleuritic Acid",
      "Hydrolysed Lac",
      "Sealing Wax",
      "Gasket Shellac Compound",
      "Organic Substance",
    ],
  },
  {
    label: "Test Name",
    name: "testName",
  },
  {
    label: "Min Quantity of required sample (grams)",
    name: "minRequiredQuantity",
    type: "number",
  },
  {
    label: "Test Fee (Rs.)",
    name: "testFee",
    type: "number",
  },
  {
    label: "Reporting Period (days)",
    name: "reportingPeriod",
    type: "number",
  },
]

function AddNewTest({ show, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      testId: "Test1",
      category: "",
      testName: "",
      minQuantity: "",
      fee: "",
      reportingPeriod: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: addLacTest,
    onSuccess: () => {
      queryClient.invalidateQueries("nisa/lactest")
      reset()
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Add New Test
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form onSubmit={handleSubmit(mutate)}>
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
                    <button
                      type="submit"
                      style={btnStyle}
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

export default AddNewTest