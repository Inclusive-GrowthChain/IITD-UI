import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Modal from "react-bootstrap/Modal";
import ProcurementModal from "./Modal/ProcurementModal";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const FpoStore = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3 className="mb-4">Procurement Information</h3>
          </div>
          <div className="list_container">
            <div className="store_wrapper">
              <button className="store_btn" onClick={handleShow}>
                Add Item
              </button>
              <div className="store_list">
                <Modal show={show} onHide={handleClose} className="store_card">
                  <Modal.Header closeButton>Lac Procurement</Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="p-2">
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Lac Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Market Price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>FPO Price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Upload Image</label>
                              </div>
                              <div className="col-lg-6">
                                <input
                                  type="file"
                                  className="form-control"
                                  required=""
                                  accept="image/*"
                                />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>List of Items</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                    </div>
                                    <label className="form-check-label">
                                      Procuring
                                    </label>
                                  </div>
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                    </div>
                                    <label className="form-check-label">
                                      Not-Procuring
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row m-2">
                              <button className="btn btn-success" style={{ backgroundColor: "#064420" }}>
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="store_item mt-5">
              <div className="store_tabs">
                <button
                  className={`store-tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  Procuring
                </button>
                <button
                  className={`store-tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Not-Procuring
                </button>
              </div>
              <div className="panels">
                <div className={`panel ${checkActive(1, "active")}`}>
                  <div className="store-modal">
                    <ProcurementModal />
                  </div>
                </div>
                <div className={`panel ${checkActive(2, "active")}`}>
                  <div className="col-12 col-sm-4">
                    <div className="store-card mt-4">
                      <div className="card-image">
                        <img
                          src="https://5.imimg.com/data5/WH/TW/MY-1496311/shellac-processed-versatile-lac-golden-kusmi-500x500.jpg"
                          alt=""
                          height={280}
                        />
                        <DriveFileRenameOutlineOutlinedIcon className="edit_image" onClick={handleShow} />
                        <Modal show={show} onHide={handleClose} className="store_card">
                          <Modal.Header closeButton>Lac Procurement</Modal.Header>
                          <Modal.Body>
                            <div className="row">
                              <div className="col">
                                <form>
                                  <div className="p-2">
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Lac ID</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input className="form-control" type="text" value={"L1234"} disabled />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Lac Name</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input className="form-control" type="text" />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Market Price</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input className="form-control" type="text" />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>FPO Price</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input className="form-control" type="text" />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Upload Image</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input
                                          type="file"
                                          className="form-control"
                                          required=""
                                          accept="image/*"
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>List of Items</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="row">
                                          <div className="col">
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                              />
                                            </div>
                                            <label className="form-check-label">
                                              Procuring
                                            </label>
                                          </div>
                                          <div className="col">
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                              />
                                            </div>
                                            <label className="form-check-label">
                                              Not-Procuring
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <button className="btn btn-success" style={{ backgroundColor: "#064420" }}>
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </div>
                      <div className="store-card-text">
                        <h5>Shellac Lac</h5>
                      </div>
                      <div className="store-card-footer">
                        <div className="store-card-title">
                          <h5>Market Price</h5>
                          <p>₹ 460</p>
                        </div>
                        <div className="store-card-title">
                          <h5>FPO Price</h5>
                          <p>₹ 500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FpoStore;
