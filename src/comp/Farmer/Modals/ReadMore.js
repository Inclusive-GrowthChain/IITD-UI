import { Modal } from "react-bootstrap";

function ReadMore({ data, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "10rem" }}>
        <textarea
          className="form-control"
          style={{ height: "100%" }}
          readOnly
        >
          {data.content}
        </textarea>
      </Modal.Body>
    </Modal>
  )
}

export default ReadMore