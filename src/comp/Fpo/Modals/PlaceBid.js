import Modal from "react-bootstrap/Modal";

function PlaceBid({ showBid, handleCloseBid, confirmBid }) {
  return (
    <Modal
      // size="sm"
      show={showBid}
      onHide={handleCloseBid}
    >
      <Modal.Header closeButton>
        Place a Bid
      </Modal.Header>
      <Modal.Body>
        <div className="bid_title">
          <div className="row">
            <div className="col-6">
              <label>Enter the Price/kg</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the price"
              />
            </div>
          </div>
          <div>
            <div className="row m-1">
              <button
                className="mt-4"
                style={{
                  backgroundColor: "#064420",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "none",
                  padding: "0.25rem 1rem",
                  color: "#fff",
                }}
                onClick={confirmBid}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PlaceBid