import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getAllProduceList } from "../../actions/farmer";
import { useAuthStore } from "../../store/useAuthStore";
import { getFpoLac } from "../../actions/farmer";
import useModal from "../../hooks/useModal";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import SellProduce from "./Modals/SellProduce";
import Loader from "../Common/Loader";

function SellingPrice() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { modal, updateModal, closeModal } = useModal();
  const farmerId = useAuthStore((s) => s.userDetails._id);

  const [
    { isLoading: isLoading1, data: sellItemList },
    { isLoading: isLoading2, data: produceList },
  ] = useQueries({
    queries: [
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
      {
        queryKey: ["farmer/produce"],
        queryFn: getAllProduceList,
      },
    ],
  });

  if (isLoading1 || isLoading2)
    return <Loader wrapperCls="loader-main-right" />;

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-start mb-4">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Selling Price
            </h3>
          </div>
          {activeTab === "tab2" && (
            <div
              className="list__btn"
              style={{
                position: "relative",
                float: "right",
                right: "18px",
                top: "10px",
              }}
            >
              <Button
                className="loan_button"
                style={{
                  backgroundColor: "#064420",
                  border: "none",
                  width: "130px",
                }}
                onClick={() => updateModal("SellProduce")}
              >
                Add New
              </Button>
            </div>
          )}
          <div className="tabs_wrapper">
            <ul className="nav-tab">
              <TabNavItem
                title="Sell to FPO"
                className="mr-3"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Enter your produce"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTab}>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                  {sellItemList?.data?.filter((a) => a.isProcurable)?.map((item) => (
                    <div className="col" key={item._id}>
                      <div className="card shadow-sm p-2 mb-5 bg-white rounded" style={{ marginBottom: "50px" }}>
                        <img
                          src={item.imageUrl}
                          alt=""
                          height={220}
                          className="store_img"
                        />
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="fw-bold text-capitalize">
                                {item.productName}
                              </h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-7">
                              <div className="row">
                                <div className="col">
                                  <strong className="h6 fw-bold">
                                    Market Price
                                  </strong>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <span className="pt-2">
                                    ₹ {item.marketPrice}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-5">
                              <div className="row">
                                <div className="col">
                                  <strong className="h6 fw-bold">FPO Price</strong>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <span className="pt-2">₹ {item.fpoPrice}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTab}>
                {/* <div className="row row-cols-1">
                  <div className="col">
                    <div className="card shadow">
                      <div className="table-responsive">
                        <table>
                          <thead
                            style={{
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Date</th>
                              <th>Lac Strain Type</th>
                              <th>Source of Tree</th>
                              <th>Origin</th>
                              <th>Quantity</th>
                              <th>Remarks</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              color: "#000",
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {
                              produceList?.data?.map(item => (
                                <tr key={item._id}>
                                  <td>{item.createdAt.substring(0, 10)}</td>
                                  <td>{item.lacStrainType}</td>
                                  <td>{item.treeSource}</td>
                                  <td>{item.origin}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.remarks}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div
                  className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4"
                  style={{ marginBottom: "50px" }}
                >
                  {produceList?.data
                    .filter((item) => item.farmerId === farmerId)
                    .map((item) => (
                      <div className="col" key={item._id}>
                        <div
                          className="card shadow-sm p-2 bg-white rounded"
                        >
                          <img
                            src={item.imageUrl}
                            alt=""
                            height={220}
                            className="store_img"
                          />
                          <div className="px-1">
                            <div className="d-flex justify-content-between py-1">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <h6 className="text-black fw-semibold">
                                  Lac Strain Type
                                </h6  >
                                <small>
                                  {item.lacStrainType}
                                </small>
                              </div>
                              <div className="d-flex flex-column text-start text-capitalize">
                                <h6 className="text-black fw-semibold">
                                  Origin
                                </h6  >
                                <small>{item.origin}</small>
                              </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-between py-1">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <h6 className="text-black fw-semibold">
                                  Source of Tree
                                </h6>
                                <small>
                                  {item.treeSource}
                                </small>
                              </div>
                              <div className="d-flex flex-column text-start text-capitalize">
                                <h6 className="text-black fw-semibold">
                                  Quantity
                                </h6>
                                <small>
                                  {item.quantity}
                                </small>
                              </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-between py-1">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <h6 className="text-black fw-semibold">
                                  Remarks
                                </h6>
                                <small>
                                  {item.remarks}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      {modal.state && <SellProduce show handleClose={closeModal} />}
    </div>
  );
}

export default SellingPrice;
