import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function Payment({ showPaymentImg, handleClosePaymentImg }) {
  return (
    <Modal
      show={showPaymentImg}
      onHide={handleClosePaymentImg}
    >
      <Modal.Header closeButton>Payment Image</Modal.Header>
      <Modal.Body>
        <img
          src={logo}
          alt="Payment"
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default Payment