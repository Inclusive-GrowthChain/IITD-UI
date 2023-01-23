import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function SumunnatiPaymentProof({ showSamunnatiPaymentProof, handleCloseSamunnatiPaymentProof }) {
  return (
    <Modal
      show={showSamunnatiPaymentProof}
      onHide={handleCloseSamunnatiPaymentProof}
    >
      <Modal.Header closeButton>Samunnati Payment Proof</Modal.Header>
      <Modal.Body>
        <img src={logo} alt="Samunnati Payment Proof" style={{ width: "100", height: "100%" }} />
      </Modal.Body>
    </Modal>
  )
}

export default SumunnatiPaymentProof