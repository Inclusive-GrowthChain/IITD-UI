import Modal from "react-bootstrap/Modal";

function ConfirmOrder({ show, handleClose, onConfirm }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Confirm Order</Modal.Header>

      <Modal.Body>
        <div>
          Are you sure you want to start this bid? Bid details cannot be editted once started.
        </div>

        <div
          className="col-lg-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            className="btn btn-success"
            style={{ backgroundColor: '#064420' }}
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmOrder