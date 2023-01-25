import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function Img({ showImg, handleCloseImg }) {
  return (
    <Modal
      show={showImg}
      onHide={handleCloseImg}
    >
      <Modal.Header closeButton>Img</Modal.Header>

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

export default Img