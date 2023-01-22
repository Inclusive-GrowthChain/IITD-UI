import Modal from "react-bootstrap/Modal";

function AddFPO({ show, updateShow }) {
  return (
    <Modal
      className="modal-title"
      show={show}
      onHide={updateShow}
    >
      <Modal.Header closeButton className="loan_heading">
        FPO Signup
      </Modal.Header>

      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Name of FPO</label>
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
                  <label className="form-label">Address</label>
                  <input
                    className="form-control"
                    type="date"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">City</label>
                  <input
                    className="form-control"
                    type="date"
                    required=""
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Pincode</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Telephone / Contact No
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Fax No</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
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
                <div className="col-12 col-md-6">
                  <label className="form-label">Type of FPO</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Date of Incorporation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Number</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Number of Shareholders
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">License Number</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Account No</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">IFSC No</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Profile pic</label>
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
                  <label className="form-label">PAN Card</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Director Details
                  </label>
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
                    FPO Signup
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

export default AddFPO