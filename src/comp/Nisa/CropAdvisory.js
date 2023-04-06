import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import EditIcon from "@mui/icons-material/Edit";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddADescription from "./Modals/AddCADescription";
import EditCA from "./Modals/EditCA";
import AddCA from "./Modals/AddCA";
import axios from 'axios';

import "./Nisa.css"

const CropAdvisory = () => {
  const [showEditCA, setShowEditCA] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showAddCA, setShowAddCA] = useState(false)
  const [currentCA, setCurrentCA] = useState({})
  const [caList, setCaList] = useState([])

  const handleClose = () => setShowModal(false)
  const handleShow = (ind) => {
    setShowModal(true)
    setCurrentCA(caList[ind])
  }
  const handleCAClose = () => setShowAddCA(false)
  const handleCAShow = () => setShowAddCA(true)
  const handleEditCAClose = () => setShowEditCA(false)
  const handleEditCAShow = (ind) => {
    setShowEditCA(true)
    setCurrentCA(caList[ind])
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/nisa/crop-advisory")
      .then((response) => {
        console.log(response.data.data);
        setCaList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item_Container">
      <div className="list_title">
        <div className="crop__title container-fluid" style={{marginBottom: '100px'}}>
          <div className="crop_container d-sm-flex justify-content-between align-items-center" style={{marginBottom: '50px'}}>
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Crop Advisory
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
                  marginTop: "50px",
                }}
                onClick={handleCAShow}
              >
                Add Crop Advisory
              </Button>
            </div>
          </div>
          {caList.map((ca, ind) => (
            <div className="card_container">
              <div className="card_wrapper">
                <div
                  className="card_title mb-2 text-black text-bold"
                  style={{ fontSize: "30px" }}
                >
                  {ca.title}
                </div>
                <div
                  style={{
                    position: "relative",
                    float: "right",
                    right: "18px",
                    top: "-3rem",
                  }}
                >
                  <button
                    onClick={() => handleEditCAShow(ind)}
                    style={{ backgroundColor: "white" }}
                  >
                    <EditIcon />
                  </button>
                </div>
                <div className="card_content">
                  <p style={{ fontSize: "20px" }}>
                    {ca.content.substring(0, 100)}
                  </p>
                </div>
                <div className="card_button d-flex">
                  <button id="btn-1" onClick={() => handleShow(ind)}>
                    Read More
                    <ChevronRightIcon className="btn-icon" />
                  </button>
                </div>
                <hr />
                <div className="card__footer text-muted">
                  <p>Created: {ca.createdAt}</p>
                  <p>Last updated: {ca.updatedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddADescription
        showModal={showModal}
        currentCA={currentCA}
        handleClose={handleClose}
      />

      <EditCA
        currentCA={currentCA}
        showEditCA={showEditCA}
        handleEditCAClose={handleEditCAClose}
        ca_id={currentCA._id}
        cur_title={currentCA.title}
        cur_content={currentCA.content}
      />

      <AddCA
        showAddCA={showAddCA}
        handleCAClose={handleCAClose}
      />
    </div>
  )
}

export default CropAdvisory