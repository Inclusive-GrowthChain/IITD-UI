import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function TrainingUpdate() {
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
                        // color: "green",
                        fontSize: "17px",
                        verticalAlign: "top",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <th>Training Course</th>
                        <th>Duration</th>
                        <th>Participant</th>
                        <th>Fee (Rs)</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <td>training 1</td>
                        <td>1 month</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                      </tr>
                      <tr>
                        <td>training 2</td>
                        <td>1 month</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                      </tr>
                      <tr>
                        <td>training 3</td>
                        <td>1 year</td>
                        <td>farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                      </tr>
                      <tr>
                        <td>Training 4</td>
                        <td>1 month</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                      </tr>
                      <tr>
                        <td>Training 5</td>
                        <td>1 year</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
                      </tr>
                      <tr>
                        <td>Training 6</td>
                        <td>45 days</td>
                        <td>Farmers</td>
                        <td>---</td>
                        <td>Minimum 5 persons</td>
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
}

export default TrainingUpdate;
