import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getAllProduceList } from "../../actions/farmer";
import { useAuthStore } from "../../store/useAuthStore";
import { getFpoLac } from "../../actions/fpo";
import { root } from "../../utils/endPoints";
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
                  {sellItemList?.data.map((item) => (
                    <div className="col" key={item._id}>
                      <div className="card">
                        <img
                          src={`${root.imgUrl}/img/${item.imageUrl}`}
                          alt=""
                          height={280}
                          className="store_img"
                        />
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <p className="h6 fw-bold">{item.name}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-7">
                              <div className="row">
                                <div className="col">
                                  <strong className="fw-bold">Market Price</strong>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <span className="pt-2 h6">
                                    ₹ {item.marketPrice}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-5">
                              <div className="row">
                                <div className="col">
                                  <strong className="fw-bold">FPO Price</strong>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <span className="pt-2 h6">
                                    ₹ {item.fpoPrice}
                                  </span>
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
                          className="width-1/3 border shadow-sm bg-body rounded"
                          style={{ width: "20rem" }}
                        >
                          <img
                            src={`${root.imgUrl}/img/${item.imageUrl}`}
                            alt=""
                            height={280}
                            className="store_img"
                          />
                          <div className="mx-auto px-4">
                            <div className="d-flex gap-2 justify-content-between py-2">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <strong className="text-black">
                                  Lac Strain Type
                                </strong>
                                <small>
                                  {item.lacStrainType}
                                </small>
                              </div>
                              <div className="d-flex flex-column text-start text-capitalize">
                                <strong className="text-black fw-bold">
                                  Origin
                                </strong>
                                <small>{item.origin}</small>
                              </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-between py-2">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <strong className="text-black fw-bold">
                                  Source of Tree
                                </strong>
                                <small>
                                  {item.treeSource}
                                </small>
                              </div>
                              <div className="d-flex flex-column text-start text-capitalize">
                                <strong className="text-black fw-bold">
                                  Quantity
                                </strong>
                                <small>
                                  {item.quantity}
                                </small>
                              </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-between py-2">
                              <div className="d-flex flex-column text-start text-capitalize">
                                <strong className="text-black fw-bold">
                                  Remarks
                                </strong>
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
