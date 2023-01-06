import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Samunnati_FPO_Info = () => {
  const fpoList = [
    {
        id: 1,
        name: "FPO 1",
        ceoName: "CEO 1",
        phone: "1234567890",
        email: "fpo1@gmail.com",
        location: "Location 1",
    },
    {
        id: 2,
        name: "FPO 2",
        ceoName: "CEO 2",
        phone: "1234567890",
        email: "fpo2@gmail.com",
        location: "Location 2",
    },
    {
        id: 3,
        name: "FPO 3",
        ceoName: "CEO 3",
        phone: "1234567890",
        email: "fpo3@gmail.com",
        location: "Location 3",
    },
    {
        id: 4,
        name: "FPO 4",
        ceoName: "CEO 4",
        phone: "1234567890",
        email: "fpo4@gmail.com",
        location: "Location 4",
    },
    {
        id: 5,
        name: "FPO 5",
        ceoName: "CEO 5",
        phone: "1234567890",
        email: "fpo5@gmail.com",
        location: "Location 5",
    },
  ];

  return (
    <div className="sammunati">
      <Sidebar />
      <div className="sammunatiContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "rgb(33, 37, 41)",
                  }}
                >
                  FPO Information
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card shadow">
                    <div className=" table-responsive">
                      <table className="table table-borderless">
                        <thead
                          style={{
                            color: "#064420",
                            fontSize: "18px",
                            verticalAlign: "top",
                            fontWeight: 600
                          }}
                        >
                          <tr>
                            <td>FPO ID</td>
                            <td>Name of FPO</td>
                            <td>CEO Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Location</td>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            color: "#000",
                            fontSize: "16px",
                            fontWeight: "500",
                            // textAlign: "center",
                          }}
                        >
                          {fpoList.map((fpo) => (
                            <tr>
                              <td>{fpo.id}</td>
                              <td>
                                <Link to="/samunnati/fpo-page"
                                  className="data_wrapper"
                                  style={{color: "#000", textDecoration: "none"}}
                                  onClick={() => {
                                    localStorage.setItem("fpoId", fpo.id);                                    
                                  }}
                                >
                                  {fpo.name}
                                </Link>
                              </td>
                              <td>{fpo.ceoName}</td>
                              <td>{fpo.phone}</td>
                              <td>{fpo.email}</td>
                              <td>{fpo.location}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samunnati_FPO_Info;
