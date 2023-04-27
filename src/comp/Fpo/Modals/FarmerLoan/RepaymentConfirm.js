import Modal from "react-bootstrap/Modal";

const bodyStyle = {
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

const yesBtnStyle = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  color: "#fff",
  marginRight: "10px",
}

const noBtnStyle = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  color: "#fff",
}

function RepaymentConfirm({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Body
        closeButton
        style={bodyStyle}
      >
        <div className="d-flex align-items-center">
          <p className="text-center">Are you confirm!</p>
          <button
            style={yesBtnStyle}
          >
            Yes
          </button>

          <button
            style={noBtnStyle}
          >
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentConfirm