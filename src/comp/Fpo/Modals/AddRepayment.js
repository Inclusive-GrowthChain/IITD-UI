import Modal from "react-bootstrap/Modal";

function AddRepayment({ showConfirmPayment, handleCloseConfirmPayment, confirmBid, handleShowConfirm }) {
  return (
    <Modal
      show={showConfirmPayment}
      onHide={handleCloseConfirmPayment}
    >
      <Modal.Header closeButton>Add Repayment</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <label>Actual Repayment Date</label>
          </div>
          <div className="col-6">
            <input
              type="date"
              className="form-control"
              placeholder="Enter thr price"
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
              className="form-control"
              placeholder="300000"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              style={{
                backgroundColor: "#064420",
                color: "#fff",
                alignItems: "center",
                borderRadius: "5px",
                border: "none",
                padding: "0.25rem 1rem",
                width: "fit-content",
                fontSize: ".75rem",
                lineHeight: "1rem",
              }}
              onClick={(e) => {
                confirmBid(e)
                handleShowConfirm()
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddRepayment