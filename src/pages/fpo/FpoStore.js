import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Modal from "react-bootstrap/Modal";
import StoreModal from "./Modal/StoreModal";

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
            <h3 className="mb-4">FPO Store Information</h3>
          </div>
          <div className="list_container">
            <div className="store_wrapper">
              <button className="store_btn" onClick={handleShow}>
                Add Item
              </button>
              <div className="store_list">
                <Modal show={show} onHide={handleClose} className="store_card">
                  <Modal.Header closeButton>FPO Store</Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="p-2">
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Item ID</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="text" value={"L1234"} disabled />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Item name</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Market price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="number" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>FPO price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="number" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Upload image</label>
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
                                <label>List of items</label>
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
                                      Available
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
                                      Out of stock
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
                  List of Available Items
                </button>
                <button
                  className={`store-tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  List of Out of Stock Items
                </button>
              </div>
              <div className="panels">
                <div className={`panel ${checkActive(1, "active")}`}>
                  <div className="store-modal">
                    <StoreModal />
                  </div>
                </div>
                <div className={`panel ${checkActive(2, "active")}`}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FpoStore;
