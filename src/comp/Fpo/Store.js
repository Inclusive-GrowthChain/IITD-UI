import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFpoProducts } from "../../actions/fpo";
import { root } from "../../utils/endPoints";
import useModal from "../../hooks/useModal";

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AddFpoStore from "./Modals/AddFpoStore";
import Loader from "../Common/Loader";

function Card({ data = [], updateModal }) {
  return (
    <div className="store-modal">
      <div className="container-fluid">
        <div className="row">
          {
            data.map(item => (
              <div
                key={item._id}
                className="col-12 col-md-6 col-xl-4"
              >
                <div className="store-card mt-4">
                  <div className="card-image">
                    <img
                      src={`${root.imgUrl}/img/${item.imageUrl}`}
                      alt=""
                      height={280}
                      className="store_img"
                    />
                    <DriveFileRenameOutlineOutlinedIcon
                      className="edit_image"
                      onClick={() => updateModal("edit", item)}
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
            ))}
        </div>
      </div>
    </div>
  )
}

const Store = () => {
  const { modal, updateModal, closeModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(1)

  const { isLoading, data } = useQuery({
    queryKey: ["fpo/products"],
    queryFn: getFpoProducts
  })

  const handleClick = (index) => setActiveIndex(index)

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div>
        <h3 className="mb-4">FPO Store Information</h3>
      </div>

      <div className="list_container">
        <div className="store_wrapper">
          <button
            className="store_btn"
            onClick={() => updateModal("add")}
          >
            Add Item
          </button>
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
              <Card
                data={data?.data?.filter(item => item.isAvailable)}
                updateModal={updateModal}
              />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <Card
                data={data?.data?.filter(item => !item.isAvailable)}
                updateModal={updateModal}
              />
            </div>
          </div>
        </div>
      </div>

      {
        modal.state &&
        <AddFpoStore
          show
          data={modal.data}
          isEdit={modal.state === "edit"}
          handleClose={closeModal}
        />
      }
    </main>
  )
}

export default Store