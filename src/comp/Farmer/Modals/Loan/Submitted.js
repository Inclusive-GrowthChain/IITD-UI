import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import Modal from "react-bootstrap/Modal";

function Submitted({ showConfirmBox, handleCloseConfirmBox }) {
  return (
    <Modal
      show={showConfirmBox}
      onHide={handleCloseConfirmBox}
    >
      <Modal.Body
        closeButton
        style={{
          position: "absolute",
          top: "10rem",
          width: "60",
          height: "100px",
          timer: "1500",
          backgroundColor: "#e9ecef",
          color: "#000",
          textAlign: "center",
        }}
      >
        <div className="d-flex align-items-center">
          <CheckCircleTwoToneIcon />
          <p className="text-center">
            Your details are submitted!
          </p>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Submitted