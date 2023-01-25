import Modal from "react-bootstrap/Modal";

function LabSampleTest({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>Lab Sample Test</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="p-2">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO Name</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="FPO Name" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Contact No.</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="98765XXXXX" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Sample Id</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="SAX34265" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Date</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="date" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Test Category</label>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" required="">
                      <option value="select">Select</option>
                      <option value="">option 1</option>
                      <option value="churchu">option 2</option>
                    </select>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Test</label>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" required="">
                      <option value="select">Select</option>
                      <option value="">option 1</option>
                      <option value="churchu">option 2</option>
                    </select>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Amount</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Payment Reference No.</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Number"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Payment Image</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      required=""
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Lac Sample Image</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      required=""
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Remarks</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row m-2">
                  <button className="btn btn-success" style={{ backgroundColor: "#064420" }}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LabSampleTest