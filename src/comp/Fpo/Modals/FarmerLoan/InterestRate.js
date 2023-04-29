import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { setFarmerIntrestRate } from "../../../../actions/fpo";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  borderRadius: "5px",
  border: "none",
  padding: "10px 10px",
  width: "30%",
  fontSize: "17px",
  lineHeight: "1rem",
}

const errStyle = { fontSize: "12px", margin: 0 }

function InterestRate({ show, handleClose }) {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      intrestRate: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: setFarmerIntrestRate,
    onSuccess: () => handleClose()
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Interest Rate</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Interest Rate (%)</label>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                className="form-control"
                placeholder="14"
                {...register("intrestRate", {
                  required: "Amount is required",
                  min: {
                    value: 1,
                    message: "Amount should be greater than 0"
                  }
                })}
              />
              {
                errors.intrestRate &&
                <p style={errStyle}>{errors.intrestRate.message}</p>
              }
            </div>
          </div>

          <div className="m-2 text-center">
            <button
              className="py-0.5 mt-3"
              disabled={isLoading}
              style={btnStyle}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default InterestRate