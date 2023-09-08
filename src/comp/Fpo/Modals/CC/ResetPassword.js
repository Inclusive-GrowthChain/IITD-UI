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

function ResetPassword({ show, handleClose, newPassword }) {
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
            Password has been reseted successfully for farmer.
          </p>

          <h1>{newPassword}</h1>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ResetPassword