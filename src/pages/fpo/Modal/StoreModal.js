import React, { useState } from "react";
import "../style.css";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Modal from "react-bootstrap/Modal";

function StoreModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-popup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="store-card mt-4">
              <div className="card-image">
                <img
                  src="http://3.bp.blogspot.com/-TJ6Oh6-8h1w/UVNthg6cQzI/AAAAAAAADOc/hGfyrvUHzSc/s1600/lac3.jpg"
                  alt=""
                  height={280}
                />
                <DriveFileRenameOutlineOutlinedIcon className="edit_image" onClick={handleShow} />
                <Modal show={show} onHide={handleClose} className="store_card">
                  <Modal.Header closeButton>FPO Store</Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="p-2">
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Item name</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="email" />
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
                              <button className="btn btn-success" style={{backgroundColor: "#064420"}}>
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
                <h5>Stick Lac</h5>
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
          <div className="col-12 col-sm-4">
            <div className="store-card mt-4">
              <div className="card-image">
                <img
                  src="https://img3.exportersindia.com/product_images/bc-full/2018/9/1491297/seedlac-shellac-1536140025-4266463.jpg"
                  alt=""
                  height={280}
                />
                <DriveFileRenameOutlineOutlinedIcon className="edit_image" onClick={handleShow} />
                <Modal show={show} onHide={handleClose} className="store_card modal">
                  <Modal.Header closeButton>FPO Store</Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="p-2">
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Item Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="email" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Market Price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="number" />
                              </div>
                            </div>
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>FPO Price</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="number" />
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
                              <button className="btn btn-success" style={{backgroundColor: "#064420"}}>
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
                <h5>Seed Lac</h5>
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
                  <Modal.Header closeButton>FPO Store</Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="p-2">
                            <div className="row m-2">
                              <div className="col-lg-6">
                                <label>Item name</label>
                              </div>
                              <div className="col-lg-6">
                                <input className="form-control" type="email" />
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
                              <button className="btn btn-success" style={{backgroundColor: "#064420"}}>
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
  );
}

export default StoreModal;
