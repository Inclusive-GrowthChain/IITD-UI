import { Modal } from "react-bootstrap";

function ReadMore({ currentCA, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{currentCA.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "10rem" }}>
        <textarea
          className="form-control"
          style={{ height: "100%" }}
          readOnly
        >
          {currentCA.content}
        </textarea>
      </Modal.Body>
    </Modal>
  )
}

export default ReadMore