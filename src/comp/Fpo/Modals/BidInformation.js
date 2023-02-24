import Modal from "react-bootstrap/Modal";

function BidInformation({ showStartBid, handleCloseStartBid }) {
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
                        value={12346}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Lac Strain Type</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        value="1"
                        disabled
                      >
                        <option value="0">Select Type</option>
                        <option value="1">Kusmi</option>
                        <option value="2">Rangeeni</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Source of Tree</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        value="3"
                        disabled
                      >
                        <option value="0">Select Tree</option>
                        <option value="1">Kusum</option>
                        <option value="2">Ber</option>
                        <option value="3">Palash</option>
                        <option value="4">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Origin</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        value="2"
                        disabled
                      >
                        <option value="0">Select Origin</option>
                        <option value="1">Jharkhand</option>
                        <option value="2">Chattisgarh</option>
                        <option value="3">MP</option>
                        <option value="4">Mednapore</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Seedlac Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" value="11" disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fresh Resin Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" value="11" disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Quantity</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" value="11" disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Supply</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value="2.1.23" disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>End Date for Bidding</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value="2.1.23" disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Required Test Reports</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        value="0"
                        disabled
                      >
                        <option value="1">Chowri, Panna</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control" value="Some remark" disabled />
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