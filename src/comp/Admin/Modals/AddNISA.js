import Modal from "react-bootstrap/Modal";

function AddNISA({ show, updateShow }) {
  return (
    <Modal
      className="modal-title"
      show={show}
      onHide={updateShow}
    >
      <Modal.Header closeButton className="loan_heading">
        IINRG Signup
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Username (Role)</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Password</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Pin Code
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Telephone / Contact No</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Fax</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-block shadow"
                    style={{
                      backgroundColor: "#064420",
                      marginTop: "10px",
                      color: "#fff",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    IINRG Signup
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

export default AddNISA