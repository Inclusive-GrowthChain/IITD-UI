import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Modal } from "react-bootstrap";

const CropAdvisory = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
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
              <div className="card_wrapper">
                <div
                  className="card_title mb-2 text-black text-bold"
                  style={{ fontSize: "22px" }}
                >
                  Title
                </div>
                <div className="card_content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="card_button d-flex" style={{}}>
                  <button id="btn-1" onClick={handleShow}>
                    Read More
                    <ChevronRightIcon className="btn-icon" />
                  </button>
                </div>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Modal.Body>
                </Modal>
                <hr />
                <div className="card__footer text-muted">
                  <p> 2 months ago</p>
                  <p> 19/08/2022</p>
                </div>
              </div>
              <div className="card_wrapper mt-2">
                <div
                  className="card_title mb-2 text-black text-bold"
                  style={{ fontSize: "22px" }}
                >
                  Title
                </div>
                <div className="card_content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="card_button d-flex" style={{}}>
                  <button id="btn-1" onClick={handleShow}>
                    Read More
                    <ChevronRightIcon className="btn-icon" />
                  </button>
                </div>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Modal.Body>
                </Modal>
                <hr />
                <div className="card__footer text-muted">
                  <p> 2 weeks ago</p>
                  <p> 08/10/2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;
