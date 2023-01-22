import { useState } from "react";
import Button from "react-bootstrap/Button";
import EditIcon from "@mui/icons-material/Edit";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddADescription from "./Modals/AddCADescription";
import EditCA from "./Modals/EditCA";
import AddCA from "./Modals/AddCA";

const caList = [
  {
    id: 1,
    title: "Title1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
  },
];

const CropAdvisory = () => {
  const [showEditCA, setShowEditCA] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showAddCA, setShowAddCA] = useState(false)
  const [currentCA, setCurrentCA] = useState({})

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

  return (
    <div className="item_Container">
      <div className="list_title">
        <div className="crop__title container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
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
                }}
                onClick={handleCAShow}
              >
                Add Crop Advisory
              </Button>
            </div>
          </div>
          {caList.map((ca, ind) => (
            <div>
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
                    {ca.description.substring(0, 100)}
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
                  <p> 2 months ago</p>
                  <p> 19/08/2022</p>
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
      />

      <AddCA
        showAddCA={showAddCA}
        handleCAClose={handleCAClose}
      />
    </div>
  )
}

export default CropAdvisory