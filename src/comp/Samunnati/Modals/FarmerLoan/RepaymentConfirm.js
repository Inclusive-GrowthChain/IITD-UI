import Modal from "react-bootstrap/Modal";

function RepaymentConfirm({ showRepaymentConfirmation, handleCloseRepaymentConfirmation, handleCloseRepaymentStatus }) {
  return (
    <Modal show={showRepaymentConfirmation} onHide={handleCloseRepaymentConfirmation}>
      <Modal.Header closeButton>Confirm</Modal.Header>
      <Modal.Body>
        <p>
          Confirm Repayment Details?
        </p>
        <div className="row">
          <div className="col-lg-6">
            <button
              className="btn btn-primary"
              style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
              onClick={() => {
                handleCloseRepaymentConfirmation();
                handleCloseRepaymentStatus();
              }}
            >
              Yes
            </button>
          </div>
          <div className="col-lg-6">
            <button
              className="btn btn-primary"
              style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
              onClick={() => { handleCloseRepaymentConfirmation() }}
            >
              No
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentConfirm