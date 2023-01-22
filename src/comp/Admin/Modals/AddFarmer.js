import Modal from "react-bootstrap/Modal";

function AddFarmer({ show, updateShow }) {
  return (
    <Modal
      className="modal-title"
      show={show}
      onHide={updateShow}
    >
      <Modal.Header closeButton className="loan_heading">
        farmer Signup
      </Modal.Header>

      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mobile</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Confirm Password
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Date Of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    required=""
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label className="col-form-label">Gender</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label"
                          for="formCheck-1"
                        >
                          Male
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="formCheck-3"
                        />
                        <label
                          className="form-check-label"
                          for="formCheck-1"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Father Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Village</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Block</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">District</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">UID Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">IFSC Code</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Aadhaar Card</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Card</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Passbook</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">FPO Name</label>
                  <select className="form-select" required="">
                    <option value="murhu">
                      Murhu Nari Shakti Farmer Producer Company
                      Limited
                    </option>
                    <option value="churchu">
                      Churchu Nari Urja Farmer Producer Company
                      Limited
                    </option>
                  </select>
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
                    Sign up
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

export default AddFarmer