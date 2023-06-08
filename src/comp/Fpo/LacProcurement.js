import { useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { getFpoLac } from "../../actions/fpo";
import { root } from "../../utils/endPoints";
import useModal from "../../hooks/useModal";

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AddLacProcurement from "./Modals/AddLacProcurement";
import AddLacPurchase from "./Modals/AddLacPurchase";
import Loader from "../Common/Loader";
import { getProduceList } from "../../actions/farmer";

const btnStyle = {
  backgroundColor: "#064420",
  borderRadius: "5px",
  border: "none",
  padding: "0.5rem 0.75rem",
  width: "fit-content",
  fontSize: "14px",
  lineHeight: "14px",
  color: "#fff",
}

function Card({ data = [], updateModal }) {
  return (
    <div className="store-modal">
      <div className="container-fluid">
        <div className="row">
          {
            data.map(item => (
              <div key={item._id} className="col-12 col-md-6 col-xl-4">
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

const LacProcurement = () => {
  const { modal, updateModal, closeModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(1)

  // const { isLoading, data } = useQuery({
  //   queryKey: ["fpo/lac"],
  //   queryFn: getFpoLac
  // })

  const [
    { isLoading: isLoading1, data: lacList, },
    { isLoading: isLoading2, data: produceList }
  ] = useQueries({
    queries: [
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
      {
        queryKey: ["farmer/"],
        queryFn: getProduceList,
      }
    ]
  })

  useEffect(() => {
    console.log("produceList", produceList)
  }, [produceList])

  const handleClick = (index) => setActiveIndex(index)

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  if (isLoading1 || isLoading2) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="d-flex" style={{ gap: "1rem", alignItems: "center" }}>
        <h3 style={{ marginRight: "auto" }}>Procurement Information</h3>

        <button style={btnStyle} onClick={() => updateModal("add")}>
          Add Item
        </button>
{/* 
        <button style={btnStyle} onClick={() => updateModal("addPurchase")}>
          Add Purchase
        </button> */}
      </div>

      <div className="list_container">
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
            <button
              className={`store-tab ${checkActive(3, "active")}`}
              onClick={() => handleClick(3)}
            >
              Check Farmer Produce
            </button>
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <Card
                data={lacList.data.filter(item => item.isProcurable)}
                updateModal={updateModal}
              />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <Card
                data={lacList.data.filter(item => !item.isProcurable)}
                updateModal={updateModal}
              />
            </div>

            {/* <div className={`panel ${checkActive(3, "active")}`}>
              <Card
                data={data.data.filter(item => !item.isProcurable)}
                updateModal={updateModal}
              />
            </div> */}
          </div>
        </div>
      </div>

      {
        modal.state === "add" &&
        <AddLacProcurement
          show
          data={modal.data}
          isEdit={modal.state === "edit"}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "addPurchase" &&
        <AddLacPurchase
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </main>
  )
}

export default LacProcurement