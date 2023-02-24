import Modal from "react-bootstrap/Modal";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

function BidConfirm({ showConfirmBox, handleCloseConfirmBox, placeBid }) {
  return (
    <Modal
      show={showConfirmBox}
      onHide={handleCloseConfirmBox}
    >
      <Modal.Body
        closeButton
        style={{
          position: "absolute",
          top: "4rem",
          left: "6rem",
          width: "60%",
          height: "150px",
          timer: "1500",
          backgroundColor: "#e9ecef",
          color: "#000",
          textAlign: "center",
        }}
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
            style={{
              backgroundColor: "#064420",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              padding: "0.25rem 1rem",
              color: "#fff",
            }}
            onClick={placeBid}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default BidConfirm