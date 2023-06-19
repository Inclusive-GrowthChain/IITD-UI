import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { getFpoLac } from "../../actions/fpo";
import { root } from "../../utils/endPoints";
import useModal from "../../hooks/useModal";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddLacProcurement from "./Modals/AddLacProcurement";
import AddLacPurchase from "./Modals/AddLacPurchase";
import Loader from "../Common/Loader";
import { getAllProduceList } from "../../actions/farmer";
import DocImg from "../Common/DocImg";

const btnStyle = {
  backgroundColor: "#064420",
  borderRadius: "5px",
  border: "none",
  padding: "0.5rem 0.75rem",
  width: "fit-content",
  fontSize: "14px",
  lineHeight: "14px",
  color: "#fff",
};
const theadStyle = {
  color: "#064420",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "600",
  borderBottom: "1px solid #c7ccd1",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

function Card({ data = [], updateModal }) {
  return (
    <div className="store-modal">
      <div className="container-fluid pb-5">
        <div className="row">
          {data.map((item) => (
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
                  <h5 className="fw-bold text-capitalize">
                    {item.productName}
                  </h5>
                </div>
                <div className="store-card-footer pb-2">
                  <div className="store-card-title">
                    <h5 className="h6 fw-bold">Market Price</h5>
                    <small className="pt-2 fw-bold">₹ {item.marketPrice}</small>
                  </div>
                  <div className="store-card-title">
                    <h5 className="h6 fw-bold">FPO Price</h5>
                    <small className="pt-2 fw-bold">₹ {item.fpoPrice}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProduceCard({ data = [], updateModal }) {
  return (
    <>
      <div className="table-responsive shadow p-3">
        <table className="table table-striped">
          <thead style={theadStyle}>
            <tr>
              <th>Farmer ID</th>
              <th>Farmer Name</th>
              <th>Lac Strain Type</th>
              <th>Origin</th>
              <th>Source of Tree</th>
              <th>Quantity</th>
              <th>View Image</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.farmerId}</td>
                <td>{item.farmerName}</td>
                <td>{item.lacStrainType}</td>
                <td>{item.origin}</td>
                <td>{item.treeSource}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="py-0.5 table_btn"
                    onClick={() => {
                      updateModal("View Image", { imgUrl: item.imageUrl });
                    }}
                    style={btnStyle}
                  >
                    View
                  </button>
                </td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="store-modal">
        <div className="container-fluid">
          <div className="row">
            {data.map((item) => (
              <div key={item._id} className="col-12 col-md-6 col-xl-4">
                <div className="store-card mt-4">
                  <div className="card-image">
                    <img
                      src={`${root.imgUrl}/img/${item.imageUrl}`}
                      alt=""
                      height={280}
                      className="store_img"
                    />
                  </div>
                  <div style={{ padding: 10 }}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Farmer ID</h5>
                        <p>{item.farmerId}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Lac Strain Type</h5>
                        <p>{item.lacStrainType}</p>
                      </div>
                      <div className="col-lg-6">
                        <h5>Origin</h5>
                        <p>{item.origin}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Source of Tree</h5>
                        <p>{item.treeSource}</p>
                      </div>
                      <div className="col-lg-6">
                        <h5>Quantity</h5>
                        <p>{item.quantity}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Remarks</h5>
                        <p>{item.remarks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

const LacProcurement = () => {
  const { modal, updateModal, closeModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(1);

  const [
    { isLoading: isLoading1, data: lacList },
    { isLoading: isLoading2, data: produceList },
  ] = useQueries({
    queries: [
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
      {
        queryKey: ["farmer/"],
        queryFn: getAllProduceList,
      },
    ],
  });

  const handleClick = (index) => setActiveIndex(index);

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  if (isLoading1 || isLoading2)
    return <Loader wrapperCls="loader-main-right" />;

  return (
    <main
      id="main_container"
      className="main_container container-fluid itemContainer"
    >
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
                data={lacList.data.filter((item) => item.isProcurable)}
                updateModal={updateModal}
              />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <Card
                data={lacList.data.filter((item) => !item.isProcurable)}
                updateModal={updateModal}
              />
            </div>

            <div
              className={`panel ${checkActive(3, "active")}`}
              style={{ marginBottom: "50px" }}
            >
              <ProduceCard data={produceList.data} updateModal={updateModal} />
            </div>
          </div>
        </div>
      </div>

      {modal.state === "add" && (
        <AddLacProcurement
          show
          data={modal.data}
          isEdit={modal.state === "edit"}
          handleClose={closeModal}
        />
      )}

      {modal.state === "addPurchase" && (
        <AddLacPurchase show data={modal.data} handleClose={closeModal} />
      )}

      {modal.state && modal.state === "View Image" && (
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      )}
    </main>
  );
};

export default LacProcurement;
