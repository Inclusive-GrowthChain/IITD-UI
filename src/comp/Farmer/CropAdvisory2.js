import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditCropAdvisory from "./Modals/CropAdvisory/EditCropAdvisory";
import AddCropAdvisory from "./Modals/CropAdvisory/AddCropAdvisory";
import AddDescription from "./Modals/CropAdvisory/AddDescription";

const caList = [
  {
    id: 1,
    title: "Title1",
    description: "Description1",
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
  },
]

const CropAdvisory2 = () => {
  const [showEditCA, setShowEditCA] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showAddCA, setShowAddCA] = useState(false)
  const [currentCA, setCurrentCA] = useState({})

  const handleClose = () => setShowModal(false)
  const handleCAClose = () => setShowAddCA(false)
  const handleEditCAClose = () => setShowEditCA(false)

  const handleShow = (ind) => {
    setShowModal(true)
    setCurrentCA(caList[ind])
  }

  return (
    <>
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
            </div>

            {caList.map((ca, ind) => (
              <div key={ca.id}>
                <div className="card_wrapper">
                  <div
                    className="card_title mb-2 text-black text-bold"
                    style={{ fontSize: "30px" }}
                  >
                    {ca.title}
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
      </div>

      <EditCropAdvisory
        currentCA={currentCA}
        showEditCA={showEditCA}
        handleEditCAClose={handleEditCAClose}
      />

      <AddDescription
        currentCA={currentCA}
        showModal={showModal}
        handleClose={handleClose}
      />

      <AddCropAdvisory
        showAddCA={showAddCA}
        handleCAClose={handleCAClose}
      />
    </>
  )
}

export default CropAdvisory2