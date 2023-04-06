import Modal from "react-bootstrap/Modal";

function BidInformation({ showStartBid, handleCloseStartBid, bid }) {
  return (
    <Modal show={showStartBid} onHide={handleCloseStartBid}>
      <Modal.Header closeButton>Bid Information</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Bid ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={bid.bidId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Lac Strain Type</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={bid.lacStrainType}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Source of Tree</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={bid.sourceTree}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Origin</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={bid.origin}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Seedlac Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={bid.seedLacContent} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fresh Resin Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={bid.freshResinContent} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Quantity</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" value={bid.quantity} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Supply</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={bid.supplyDate} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>End Date for Bidding</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={bid.bidEndDate} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Required Test Reports</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={Array.isArray(bid.reportsRequired) ? bid.reportsRequired.join(', ') : ''} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control" value={bid.remarks} disabled />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default BidInformation