import { useState, useEffect } from "react";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AddLacProcurement from "./Modals/AddLacProcurement";
import EditLacProcurement from "./Modals/EditLacProcurement";
import axios from "axios";

const LacProcurement = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/fpo/lac")
      .then((response) => {
        console.log(response.data.data);
        setItemList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3 className="mb-4">Procurement Information</h3>
      </div>
      <div className="list_container">
        <div className="store_wrapper">
          <button className="store_btn" onClick={handleShowAdd}>
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
                    {
                      itemList.filter((item) => item.isProcurable === true).map((item, index) => (
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="store-card mt-4">
                            <div className="card-image">
                              <img
                                src={item.imageUrl}
                                alt=""
                                height={280}
                                className="store_img"
                              />
                              <DriveFileRenameOutlineOutlinedIcon
                                className="edit_image"
                                onClick={() => {
                                  handleShowEdit();
                                  setCurrentItem(item);
                                }}
                              />
                            </div>
                            <div className="store-card-text">
                              <h5>{item.productName}</h5>
                            </div>
                            <div className="store-card-footer">
                              <div className="store-card-title">
                                <h5>Market Price</h5>
                                <p>₹ {item.marketPrice}</p>
                              </div>
                              <div className="store-card-title">
                                <h5>FPO Price</h5>
                                <p>₹ {item.fpoPrice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active")}`}>
              {
                itemList.filter((item) => item.isProcurable === false).map((item, index) => (
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="store-card mt-4">
                      <div className="card-image">
                        <img
                          src={item.imageUrl}
                          alt=""
                          height={280}
                          className="store_img"
                        />
                        <DriveFileRenameOutlineOutlinedIcon
                          className="edit_image"
                          onClick={() => {
                            handleShowEdit();
                            setCurrentItem(item);
                          }}
                        />
                      </div>
                      <div className="store-card-text">
                        <h5>{item.productName}</h5>
                      </div>
                      <div className="store-card-footer">
                        <div className="store-card-title">
                          <h5>Market Price</h5>
                          <p>₹ {item.marketPrice}</p>
                        </div>
                        <div className="store-card-title">
                          <h5>FPO Price</h5>
                          <p>₹ {item.fpoPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <AddLacProcurement
        show={showAdd}
        handleClose={handleCloseAdd}
      />

      <EditLacProcurement
        show={showEdit}
        handleClose={handleCloseEdit}
        item_id={currentItem._id}
        cur_productId={currentItem.productId}
        cur_name={currentItem.productName}
        cur_marketPrice={currentItem.marketPrice}
        cur_fpoPrice={currentItem.fpoPrice}
        cur_image={currentItem.imageUrl}
        cur_isProcuring={currentItem.isProcurable}
      />
    </main>
  )
}

export default LacProcurement