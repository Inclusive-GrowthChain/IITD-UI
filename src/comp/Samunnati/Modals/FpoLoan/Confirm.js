import { Modal } from "react-bootstrap";

const noStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
}

const yesStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
  position: "relative",
  float: "right",
}

function Confirm({ show, handleClose, title = "", confirmText = "", onConfirm }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>{title}</Modal.Header>

      <Modal.Body>
        <div>
          <div>{confirmText}</div>

          <div className="row m-2 justify-content-between py-2">
            <button
              className="btn btn-success"
              onClick={handleClose}
              style={noStyle}
            >
              No
            </button>

            <button
              className="btn btn-success"
              onClick={onConfirm}
              style={yesStyle}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Confirm