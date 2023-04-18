import Modal from "react-bootstrap/Modal";
import logo from "../../assets/img/logo.png";

function DocImg({ title = "", show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        {title}
      </Modal.Header>

      <Modal.Body>
        <img
          src={logo}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default DocImg