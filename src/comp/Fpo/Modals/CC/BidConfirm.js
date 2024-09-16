import Modal from "react-bootstrap/Modal";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

const modalBodyStyle = {
  position: "absolute",
  top: "4rem",
  left: "6rem",
  width: "60%",
  height: "150px",
  timer: "1500",
  backgroundColor: "#e9ecef",
  color: "#000",
  textAlign: "center",
}

const btnStyle = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  color: "#fff",
}

function BidConfirm({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Body
        closeButton
        style={modalBodyStyle}
      >
        <div
          style={{
            dispalay: "flex",
            alignItems: "center",
          }}
        >
          <CheckCircleTwoToneIcon />

          <p className="text-center">
            Are you confirm this order!
          </p>

          <button
            style={btnStyle}
            onClick={handleClose}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default BidConfirm