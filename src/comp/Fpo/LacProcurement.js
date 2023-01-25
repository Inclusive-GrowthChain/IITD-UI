import { useState } from "react";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import LacProcurementModal from "./Modals/LacProcurement";

const LacProcurement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <main id="main_container" className="main_container container-fluid">
      <div className="">
        <h3 className="mb-4">Procurement Information</h3>
      </div>
      <div className="list_container">
        <div className="store_wrapper">
          <button className="store_btn" onClick={handleShow}>
            Add Item
          </button>
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
                          <DriveFileRenameOutlineOutlinedIcon
                            className="edit_image"
                            onClick={handleShow}
                          />
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
                          <DriveFileRenameOutlineOutlinedIcon
                            className="edit_image"
                            onClick={handleShow}
                          />
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
                          <DriveFileRenameOutlineOutlinedIcon
                            className="edit_image"
                            onClick={handleShow}
                          />
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

            <div className={`panel ${checkActive(2, "active")}`}>
              <div className="col-12 col-sm-4">
                <div className="store-card mt-4">
                  <div className="card-image">
                    <img
                      src="https://5.imimg.com/data5/WH/TW/MY-1496311/shellac-processed-versatile-lac-golden-kusmi-500x500.jpg"
                      alt=""
                      height={280}
                    />
                    <DriveFileRenameOutlineOutlinedIcon
                      className="edit_image"
                      onClick={handleShow}
                    />
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

      <LacProcurementModal
        show={show}
        handleClose={handleClose}
      />
    </main>
  )
}

export default LacProcurement