import React from "react";
import Modal from "react-bootstrap/Modal";

const states = [
  "",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

function FpoModal(props) {
  return (
    <div>
      <Modal size="lg" show={props.show} onHide={props.close} centered>
        <Modal.Header closeButton>FPO Signup</Modal.Header>
        <Modal.Body>
          <div className="fpo_signup">
            <form>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Name of FPO *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Username *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Password *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Address *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">City *</label>
                  <input className="form-control" type="text" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">State *</label>
                  <select className="form-select">
                    {states.map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">PinCode *</label>
                  <input className="form-control" type="text" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Contact Number *</label>
                  <input className="form-control" type="text" required="" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Email *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Website *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Date of InCorporation *</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Number *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Card Image *</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Registration Number *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">No of ShareHolders *</label>
                  <input type="text" className="form-control" required="" />
                </div>
              </div>
              <div className="row mb-2">
                <h5 className="mt-3">Bank Details</h5>
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Name *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Account Number *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">IFSC Number *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Upload Bank Passbook Image *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <h5 className="mt-3">Director Details</h5>
                <div className="col-12 col-md-6">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mobile Number *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Gender *</label>
                  <select className="form-select" required="">
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Copy of Bylaws (MOA & AOA) *
                  </label>
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
                  <label className="form-label">
                    Certificate of Incorporation *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">GST Certificate *</label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Lincese Key *</label>
                  <input type="text" className="form-control" required="" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-block shadow"
                    style={{
                      backgroundColor: "#064420",
                      marginTop: "10px",
                      color: "#fff",
                      alignItems: "center",
                      width: "20%",
                      fontSize: "15px",
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FpoModal;
