import Modal from "react-bootstrap/Modal";

function ConfirmApproveLoanApp({ showApproveConfirm, handleCloseApproveConfirm }) {
  return (
    <Modal
      show={showApproveConfirm}
      onHide={handleCloseApproveConfirm}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm Approve Loan Application
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <label>
              Are you sure you want to
              approve the loan
              application?
            </label>
          </div>
          <div
            className="row m-2"
            style={{
              justifyContent:
                "space-between",
              padding: "0 10px",
            }}
          >
            <button
              className="btn btn-success"
              onClick={
                handleCloseApproveConfirm
              }
              style={{
                marginTop: "1rem",
                backgroundColor:
                  "#064420",
                width: "20%",
              }}
            >
              No
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault()
                handleCloseApproveConfirm()
              }}
              style={{
                marginTop: "1rem",
                backgroundColor:
                  "#064420",
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

export default ConfirmApproveLoanApp