import Modal from "react-bootstrap/Modal";

function CompletedTransactions({ showTranscation, handleCloseTransaction }) {
  return (
    <Modal
        // size="sm"
        show={showTranscation}
        onHide={handleCloseTransaction}
      >
        <Modal.Header closeButton>
          Completed Transactions
        </Modal.Header>
        <Modal.Body>
          <div className="bid_title">
            <div className="row">
              <div className="col-lg-6">
                <label>Bid Id</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>
                  Name of Corporate Customer
                </label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="abcd"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>Date of Invoice</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="01-05-2021"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>Invoice Number</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="2314"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>Total Amount</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="200"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default CompletedTransactions