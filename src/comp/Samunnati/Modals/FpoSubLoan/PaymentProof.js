import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function PaymentProof({ showPaymentProof, handleClosePaymentProof }) {
  return (
    <Modal show={showPaymentProof} onHide={handleClosePaymentProof}>
      <Modal.Header closeButton>Proof of Payment</Modal.Header>
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

export default PaymentProof