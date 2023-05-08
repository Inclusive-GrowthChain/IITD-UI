import Modal from "react-bootstrap/Modal";

function Repayment({ show, handleClose, showConfirm }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Repayment</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-6">
            <label style={{ marginTop: '10%' }}>Repayment Date</label>
          </div>
          <div className="col-lg-6">
            <input
              type="date"
              className="form-control"
              style={{ marginTop: '7.5%' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label style={{ marginTop: '20%' }}>Repayment Amount</label>
          </div>
          <div className="col-lg-6">
            <input
              type="number"
              className="form-control"
              style={{ marginTop: '17.5%' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btn btn-primary"
              style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
              onClick={showConfirm}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Repayment