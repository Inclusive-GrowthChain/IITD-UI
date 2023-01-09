import { useState } from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import EditIcon from '@mui/icons-material/Edit';

const TrainingUpdate = () => {
  const [showAddTP, setShowAddTP] = useState(false);
  const [showEditTP, setShowEditTP] = useState(false);
  const [currentTP, setCurrentTP] = useState({});

  const tpList = [
    {
      id: 1,
      name: "Course1",
      courseStartDate: "2021-10-10",
      duration: "2 months",
      appStartDate: "2021-10-10",
      appEndDate: "2021-10-10",
      fee: "1000",
      remarks: "test"
    },
    {
      id: 2,
      name: "Course2",
      courseStartDate: "2021-10-10",
      duration: "2 months",
      appStartDate: "2021-10-10",
      appEndDate: "2021-10-10",
      fee: "1000",
      remarks: "test"
    },
    {
      id: 3,
      name: "Course3",
      courseStartDate: "2021-10-10",
      duration: "2 months",
      appStartDate: "2021-10-10",
      appEndDate: "2021-10-10",
      fee: "1000",
      remarks: "test"
    },
    {
      id: 4,
      name: "Course4",
      courseStartDate: "2021-10-10",
      duration: "2 months",
      appStartDate: "2021-10-10",
      appEndDate: "2021-10-10",
      fee: "1000",
      remarks: "test"
    },
    {
      id: 5,
      name: "Course5",
      courseStartDate: "2021-10-10",
      duration: "2 months",
      appStartDate: "2021-10-10",
      appEndDate: "2021-10-10",
      fee: "1000",
      remarks: "test"
    },
  ];

  const handleTPClose = () => setShowAddTP(false);
  const handleTPShow = () => setShowAddTP(true);
  const handleEditTPClose = () => setShowEditTP(false);
  const handleEditTPShow = (ind) => {
    setShowEditTP(true);
    setCurrentTP(tpList[ind]);
  };

  return (
    <div className="iinrg">
      <Sidebar />
      <div className="iinrgContainer">
        <Navbar />
        <div className="item_Container">
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
                  Training Programs
                </h3>
                <div
                  className="list__btn"
                  style={{
                    position: "relative",
                    float: "right",
                    right: "18px",
                    top: "10px",
                  }}
                >
                  <Button
                    className="crop-advisory_button"
                    style={{
                      backgroundColor: "#064420",
                      border: "none",
                      width: "fit-content",
                    }}
                    onClick={handleTPShow}
                  >
                    Add Training Program
                  </Button>
                </div>
              </div>
              <div>
                <Modal show={showAddTP} onHide={handleTPClose}>
                  <Modal.Header closeButton>Add Training Program</Modal.Header>
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
                                  <textarea className="form-control"
                                    style={{ height: "200%" }}
                                  />
                                </div>
                              </div>
                              <div className="row m-2">
                                <button
                                  className="btn btn-success"
                                  style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="card shadow">
                <div
                  className="table-responsive"
                  style={{ padding: "1rem 1rem" }}
                >
                  <table className="table table-borderless">
                    <thead
                      style={{
                        color: "#064420",
                        fontSize: "20px",
                        verticalAlign: "top",
                      }}
                    >
                      <tr>
                        <td>Training Course</td>
                        <td>Course Start Date</td>
                        <td>Duration</td>
                        <td>Application Start Date</td>
                        <td>Application End Date</td>
                        <td>Fee (Rs)</td>
                        <td>Remarks</td>
                      </tr>
                    </thead>
                    {
                      tpList.map((tp, ind) => (
                        <tbody
                          style={{
                            color: "#000",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          <tr>
                            <td>{tp.name}</td>
                            <td>{tp.courseStartDate}</td>
                            <td>{tp.duration}</td>
                            <td>{tp.appStartDate}</td>
                            <td>{tp.appEndDate}</td>
                            <td>{tp.fee}</td>
                            <td>{tp.remarks}</td>
                            <td>
                              <button
                                onClick={() => handleEditTPShow(ind)}
                                style={{ backgroundColor: 'white' }}>
                                <EditIcon />
                              </button>
                            </td>
                            <div>
                              <Modal show={showEditTP} onHide={handleEditTPClose}>
                                <Modal.Header closeButton>Edit Training Program</Modal.Header>
                                <Modal.Body>
                                  <div className="row">
                                    <div className="col">
                                      <form>
                                        <div className="form">
                                          <div className="card p-2">
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Training Course Name</label>
                                              </div>
                                              <div className="col-lg-12">
                                                <input className="form-control" type="text" defaultValue={currentTP.name} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Course Start Date</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input className="form-control" type="date" defaultValue={currentTP.courseStartDate} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Duration</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input className="form-control" type="text" defaultValue={currentTP.duration} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Application Start Date</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input className="form-control" type="date" defaultValue={currentTP.appStartDate} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Application End Date</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input className="form-control" type="date" defaultValue={currentTP.appEndDate} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Fee (in Rs.)</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input className="form-control" type="number" defaultValue={currentTP.fee} />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Remarks</label>
                                              </div>
                                              <div className="col-lg-12">
                                                <textarea className="form-control"
                                                  style={{ height: "200%" }}
                                                  defaultValue={tp.remarks}
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <button
                                                className="btn btn-success"
                                                style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                                              >
                                                Submit
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </tr>
                        </tbody>
                      ))
                    }
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
