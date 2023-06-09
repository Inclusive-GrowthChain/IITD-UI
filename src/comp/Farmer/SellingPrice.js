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
  const [activeTab, setActiveTab] = useState("tab1")
  const { modal, updateModal, closeModal } = useModal()
  const farmerId = useAuthStore(s => s.userDetails._id)

  const [
    { isLoading: isLoading1, data: sellItemList, },
    { isLoading: isLoading2, data: produceList }
  ] = useQueries({
    queries: [
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
      {
        queryKey: ["farmer/produce"],
        queryFn: getAllProduceList,
      }
    ]
  })

  if (isLoading1 || isLoading2) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
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
          {
            activeTab === "tab2" && (
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
            )
          }
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
                  {
                    sellItemList?.data.map(item => (
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
                                <h4>{item.name}</h4>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-7">
                                <div className="row">
                                  <div className="col">
                                    <h5>Market Price</h5>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <span>{item.marketPrice}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="row">
                                  <div className="col">
                                    <h5>FPO Price</h5>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <span>{item.fpoPrice}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
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
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4" style={{marginBottom: "50px"}}>
                  {
                    produceList?.data.filter((item) => item.farmerId === farmerId).map(item => (
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
                    ))
                  }
                </div>
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state &&
        <SellProduce
          show
          handleClose={closeModal}
        />
      }
    </div>
  )
}

export default SellingPrice