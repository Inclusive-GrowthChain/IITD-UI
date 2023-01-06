import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Samunnati = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="">
            <Button
                className="loan_button mb-3"
                onClick={handleShow}
                style={{
                  backgroundColor: "#064420",
                  color: "#fff",
                  border: "none",
                }}
              >
                Add Samunnati Member
              </Button>
              <Modal className="modal-title" show={show} onHide={handleClose}>
                <Modal.Header closeButton className="loan_heading">
                  Samunnati Signup
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
                              Samunnati Signup
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              <div className="card shadow">
                <div className="card-body table-responsive">
                  <table className="table table-borderless">
                    <thead
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#064420",
                      }}
                    >
                      <tr>
                        <td>S.No.</td>
                        <td>Id</td>
                        <td>Role</td>
                        <td>Mobile No</td>
                        <td>Email Id</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>54212</td>
                        <td>--</td>
                        <td>78451XXXXX</td>
                        <td>example@email.com</td>
                        <td>view</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>54212</td>
                        <td>--</td>
                        <td>78451XXXXX</td>
                        <td>example@email.com</td>
                        <td>view</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samunnati;
