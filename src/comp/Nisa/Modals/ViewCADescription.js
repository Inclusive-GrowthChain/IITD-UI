import { Modal } from "react-bootstrap";

function ViewCADescription({ data, show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "10rem" }}>
        <textarea
          className="form-control"
          style={{ height: "100%" }}
          defaultValue={data.content}
        >
        </textarea>
      </Modal.Body>
    </Modal>
  )
}

export default ViewCADescription