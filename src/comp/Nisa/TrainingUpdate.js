import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import EditIcon from '@mui/icons-material/Edit';

import EditTraining from "./Modals/EditTraining";
import AddTraing from "./Modals/AddTraing";
import axios from "axios";

import "./Nisa.css";

const TrainingUpdate = () => {
  const [showAddTP, setShowAddTP] = useState(false);
  const [showEditTP, setShowEditTP] = useState(false);
  const [currentTP, setCurrentTP] = useState({});
  const [tpList, setTpList] = useState([]);

  const handleTPClose = () => setShowAddTP(false);
  const handleTPShow = () => setShowAddTP(true);
  const handleEditTPClose = () => setShowEditTP(false);
  const handleEditTPShow = (ind) => {
    setShowEditTP(true);
    setCurrentTP(tpList[ind]);
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/nisa/traning")
      .then((response) => {
        console.log(response.data.data);
        setTpList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
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
              className="list__btn tp__btn"
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
          <div className="tp_container card shadow">
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
                        <td>{tp.courseName}</td>
                        <td>{tp.courseStartDate}</td>
                        <td>{tp.duration}</td>
                        <td>{tp.applicationStartDate}</td>
                        <td>{tp.applicationEndDate}</td>
                        <td>{tp.fee}</td>
                        <td>{tp.remarks}</td>
                        <td>
                          <button
                            onClick={() => handleEditTPShow(ind)}
                            style={{ backgroundColor: 'white' }}>
                            <EditIcon />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))
                }
              </table>
            </div>
          </div>
        </div>
      </div>

      <EditTraining
        currentTP={currentTP}
        showEditTP={showEditTP}
        handleEditTPClose={handleEditTPClose}
        t_id={currentTP._id}
        trainingId={currentTP.traningId}
        cur_courseName={currentTP.courseName}
        cur_courseStartDate={currentTP.courseStartDate}
        cur_duration={currentTP.duration}
        cur_applicationStartDate={currentTP.applicationStartDate}
        cur_applicationEndDate={currentTP.applicationEndDate}
        cur_fee={currentTP.fee}
        cur_remarks={currentTP.remarks}
      />

      <AddTraing
        showAddTP={showAddTP}
        handleTPClose={handleTPClose}
      />
    </div>
  );
}

export default TrainingUpdate;
