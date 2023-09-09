import Modal from "react-bootstrap/Modal";
import { root } from "../../utils/endPoints";
import logo from "../../assets/img/logo.png";

function DocImg({ title = "", imgUrl = "", show, handleClose }) {
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
          src={imgUrl ? imgUrl : logo}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default DocImg