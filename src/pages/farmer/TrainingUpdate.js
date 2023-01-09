import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function TrainingUpdate() {
  const [showAddTP, setShowAddTP] = useState(false)

  const updateShowAddTP = () => setShowAddTP(p => !p)

  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="sale__title container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "rgb(33, 37, 41)",
                  }}
                >
                  Training Update
                </h3>
              </div>
              <div className="card shadow">
                <div
                  className="table-responsive"
                >
                  <table>
                    <thead
                      style={{
                        fontSize: "17px",
                        verticalAlign: "top",
                      }}
                    >
                      <tr>
                        <th>Training Course</th>
                        <th>Duration</th>
                        <th>Participant</th>
                        <th>Fee (Rs)</th>
                        <th>Remarks</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      <tr>
                        <td>training 1</td>
                        <td>1 month</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>training 2</td>
                        <td>1 month</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>training 3</td>
                        <td>1 year</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Training 4</td>
                        <td>1 month</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Training 5</td>
                        <td>1 year</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Training 6</td>
                        <td>45 days</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                        <td>
                          <button
                            onClick={updateShowAddTP}
                            style={{ background: "#064420", color: "#fff", fontSize: "13px", padding: ".2rem .4rem" }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showAddTP} onHide={updateShowAddTP}>
        <Modal.Header closeButton>Training Program Detail</Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Training ID</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="text" value={"T1234"} disabled />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Training Course Name</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Course Start Date</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Duration</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Application Start Date</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Application End Date</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Fee (in Rs.)</label>
                      </div>
                      <div className="col-lg-6">
                        <input className="form-control" type="number" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Remarks</label>
                      </div>
                      <div className="col-lg-12">
                        <textarea className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TrainingUpdate;
