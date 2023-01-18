import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Modal } from "react-bootstrap";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const caList = [
  {
    id: 1,
    title: "Title1",
    description:
      "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
  },
]

const CropAdvisory2 = () => {
  const [showModal, setShowModal] = useState(false)
  const [showAddCA, setShowAddCA] = useState(false)
  const [showEditCA, setShowEditCA] = useState(false)
  const [currentCA, setCurrentCA] = useState({})

  const handleClose = () => setShowModal(false)
  const handleCAClose = () => setShowAddCA(false)
  const handleEditCAClose = () => setShowEditCA(false)

  const handleShow = (ind) => {
    setShowModal(true)
    setCurrentCA(caList[ind])
  }

  return (
    <div className="iinrg">
      <Sidebar />
      <div className="iinrgContainer">
        <Navbar />
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
                <div>
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
      </div>

      <Modal show={showEditCA} onHide={handleEditCAClose}>
        <Modal.Header closeButton>
          Edit Crop Advisory
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col">
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Title</label>
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={currentCA.title}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Content</label>
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          style={{ height: "200%" }}
                          defaultValue={currentCA.description}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <button
                        className="btn btn-success"
                        style={{
                          marginTop: "5rem",
                          backgroundColor: "#064420",
                        }}
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

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentCA.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ height: "10rem" }}>
          <textarea
            className="form-control"
            style={{ height: "100%" }}
          >
            {currentCA.description}
          </textarea>
        </Modal.Body>
      </Modal>

      <Modal show={showAddCA} onHide={handleCAClose}>
        <Modal.Header closeButton>Add Crop Advisory</Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Crop Advisory ID</label>
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="form-control"
                          type="text"
                          value={"CA12345"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Title</label>
                      </div>
                      <div className="col-lg-12">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Content</label>
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          style={{ height: "200%" }}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <button
                        className="btn btn-success"
                        style={{
                          marginTop: "5rem",
                          backgroundColor: "#064420",
                        }}
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
  );
}

export default CropAdvisory2