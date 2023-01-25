import Modal from "react-bootstrap/Modal";

function LacProcurement({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>Lac Procurement</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="p-2">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Lac Name</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Market Price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO Price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Upload Image</label>
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
                    <label>List of Items</label>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                        <label className="form-check-label">
                          Procuring
                        </label>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                        <label className="form-check-label">
                          Not-Procuring
                        </label>
                      </div>
                    </div>
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

export default LacProcurement