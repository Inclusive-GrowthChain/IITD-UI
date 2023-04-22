import Modal from "react-bootstrap/Modal";

function ConfirmLoanStatus({ show, handleClose, confirmLoan }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div
          style={{
            dispalay: "flex",
            alignItems: "center",
          }}
        >
          <p className="text-center">Are you confirm!</p>
          <button
            style={{
              backgroundColor: "#064420",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              padding: "0.25rem 1rem",
              color: "#fff",
            }}
            onClick={confirmLoan}
          >
            Yes
          </button>
          <button
            style={{
              backgroundColor: "#064420",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              padding: "0.25rem 1rem",
              color: "#fff",
            }}
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmLoanStatus