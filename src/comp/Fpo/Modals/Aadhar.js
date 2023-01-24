import Modal from "react-bootstrap/Modal";
import logo from "../../../assets/img/logo.png";

function Aadhar({ showAadharCardImg, handleCloseAadharCardImg }) {
  return (
    <Modal
      show={showAadharCardImg}
      onHide={handleCloseAadharCardImg}
    >
      <Modal.Header closeButton>Aadhar Card</Modal.Header>
      <Modal.Body>
        <img
          src={logo}
          alt="Aadhar Card"
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default Aadhar