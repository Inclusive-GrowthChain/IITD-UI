import Modal from "react-bootstrap/Modal";

function FpoStore({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>FPO Store</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="p-2">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Item ID</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" value={"L1234"} disabled />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Item name</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Market price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Upload image</label>
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
                    <label>List of items</label>
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
                          Available
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
                          Out of stock
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

export default FpoStore