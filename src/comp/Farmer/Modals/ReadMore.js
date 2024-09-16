import { Modal } from "react-bootstrap";

function ReadMore({ data, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "40rem" }}>
        <textarea
          className="form-control"
          style={{ height: "100%" }}
          defaultValue={data.content}
          readOnly
        ></textarea>
      </Modal.Body>
    </Modal>
  )
}

export default ReadMore