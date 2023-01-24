import Modal from "react-bootstrap/Modal";

const style = {
  backgroundColor: "#064420",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  color: "#fff",
  fontSize: "15px",
  width: "20%",
  marginBottom: "15px",
}

function ConfirmPurchaseHistory({ showConfirmPurchase, handleCloseConfirmPurchase }) {
  return (
    <Modal
      show={showConfirmPurchase}
      onHide={handleCloseConfirmPurchase}
    >
      <Modal.Header closeButton>Confirm Purchase History</Modal.Header>
      <Modal.Body>
        <p>Are you confirm?</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={style}>
            Yes
          </button>

          <button style={style}>
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmPurchaseHistory