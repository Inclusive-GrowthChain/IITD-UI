import Modal from "react-bootstrap/Modal";

function ConfirmApprove({ showConfirmApprove, handleCloseConfirmApprove, handleCloseApproveForm, handleClosePendingLoanDetails }) {
  return (
    <Modal show={showConfirmApprove} onHide={handleCloseConfirmApprove}>
      <Modal.Header closeButton>Confirm Approve Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <label>Are you sure you want to approve this loan application?</label>
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
              onClick={handleCloseConfirmApprove}
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
                handleCloseConfirmApprove();
                handleCloseApproveForm();
                handleClosePendingLoanDetails();
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

export default ConfirmApprove