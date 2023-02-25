import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function PaymentProof({ showAttachPaymentImg, handleClosePaymentImg }) {
  return (
    <Modal
      show={showAttachPaymentImg}
      onHide={handleClosePaymentImg}
    >
      <Modal.Header closeButton>Payment Proof</Modal.Header>
      <Modal.Body>
        <img src={logo} alt="Payment Proof" style={{ width: "100%", height: "100%" }} />
      </Modal.Body>
    </Modal>
  )
}

export default PaymentProof