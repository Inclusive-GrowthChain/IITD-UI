import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function PanCard({ showPanCardImg, handleClosePanCardImg }) {
  return (
    <Modal
      show={showPanCardImg}
      onHide={handleClosePanCardImg}
    >
      <Modal.Header closeButton>PAN Card</Modal.Header>
      <Modal.Body>
        <img src={logo} alt="PAN Card" style={{ width: "100", height: "100%" }} />
      </Modal.Body>
    </Modal>
  )
}

export default PanCard