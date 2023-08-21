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

function ConfirmSaleHistory({ showConfirmSale, handleCloseConfirmSale }) {
  return (
    <Modal
      show={showConfirmSale}
      onHide={handleCloseConfirmSale}
    >
      <Modal.Header closeButton>Confirm Sale History</Modal.Header>
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

export default ConfirmSaleHistory