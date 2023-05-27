import { root } from "../../../utils/endPoints";
import Modal from "react-bootstrap/Modal";

function ImageViewer({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>{data.title}</Modal.Header>
        <Modal.Body>
          <img
            src={`${root.imgUrl}/img/${data.image}`}
            alt="Farmer Details"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
  )
}

export default ImageViewer