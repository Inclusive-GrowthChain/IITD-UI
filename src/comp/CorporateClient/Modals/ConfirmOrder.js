import Modal from "react-bootstrap/Modal";

function ConfirmOrder({ showConfirmBox, placeBid, handleCloseConfirmBox }) {
  return (
    <Modal
      show={showConfirmBox}
      onHide={handleCloseConfirmBox}
    >
      <Modal.Header closeButton>Confirm Order</Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to start this bid? Bid details cannot be editted once started.
        </p>
        <div className="col-lg-12" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="btn btn-success"
            style={{ backgroundColor: '#064420' }}
            onClick={placeBid}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmOrder