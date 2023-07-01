import Modal from "react-bootstrap/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFarmerLoanRepayment } from "../../../../actions/fpo";
import { useForm } from "react-hook-form";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.5rem 1.25rem",
  width: "fit-content",
  fontSize: "1rem",
  lineHeight: "1rem",
}

function AddRepayment({ show, handleClose, data, repaymentItem }) {
  const queryClient = useQueryClient()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      "paymentDate": "",
      "paidAmount": 0,
      "loanId": data.id,
      "windowId": data.windowId,
      "repaymentId": repaymentItem.id,
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: updateFarmerLoanRepayment,
    onSuccess: () => {
      queryClient.invalidateQueries("loanwindow/")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Add Repayment</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(mutate)}>
              <div className="form">
                <div className="card p-2" style={{border: "none"}}>
                  <div className="row">
                    <div className="col-6">
                      <label>Actual Repayment Date</label>
                    </div>
                    <div className="col-6">
                      <input
                        type="date"
                        className="form-control"
                        required
                        placeholder="Enter the repayment date"
                        {...register("paymentDate",{required:true})}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label>Actual Repayment Amount</label>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Repayment amount"
                        {...register("paidAmount",{required:true})}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        style={btnStyle}
                      >
                        Submit
                      </button>
                    </div>
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

export default AddRepayment