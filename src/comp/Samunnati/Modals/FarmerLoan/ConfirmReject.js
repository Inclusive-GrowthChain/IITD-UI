import Modal from "react-bootstrap/Modal";

function ConfirmReject({ showConfirmReject, handleCloseConfirmReject, currentPendLoanApp, rejectLoan }) {
  return (
    <Modal show={showConfirmReject} onHide={handleCloseConfirmReject}>
      <Modal.Header closeButton>Confirm Reject Farmer Loan Window Application</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <label>Are you sure you want to reject this farmer loan window application?</label>
          </div>
          <div
            className="row m-2"
            style={{
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <button
              className="btn btn-success"
              onClick={handleCloseConfirmReject}
              style={{
                marginTop: "1rem",
                backgroundColor: "#064420",
                width: "20%",
              }}
            >
              No
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => {
                rejectLoan(e, currentPendLoanApp);
              }}
              style={{
                marginTop: "1rem",
                backgroundColor: "#064420",
                width: "20%",
                position: "relative",
                float: "right",
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmReject