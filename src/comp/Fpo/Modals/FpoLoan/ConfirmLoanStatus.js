import Modal from "react-bootstrap/Modal";

function ConfirmLoanStatus({ showConfirmLoanStatus, handleCloseConfirmLoanStatus, confirmLoan }) {
  return (
    <Modal
      show={showConfirmLoanStatus}
      onHide={handleCloseConfirmLoanStatus}
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
            onClick={(e) => {
              confirmLoan(e);
            }}
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
          >
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmLoanStatus