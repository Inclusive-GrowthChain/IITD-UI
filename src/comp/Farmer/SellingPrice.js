import { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import SellProduce from "./Modals/SellingPrice/SellProduce";

import { useQuery } from "@tanstack/react-query";

import { getFpoLac } from "../../actions/fpo";
import useModal from "../../hooks/useModal";
import Loader from "../Common/Loader";

function SellingPrice() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["fpo/lac"],
    queryFn: getFpoLac
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  if (date <= 9) date = "0" + date;
  if (month <= 9) month = "0" + month;

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
                  onClick={() => updateModal("SellProduce", {})}
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
                    data.data.map((item, index) => (
                      <div className="col">
                        <div className="card">
                          <img
                            src="https://3.imimg.com/data3/TM/JM/ETO-196508/1-294285-full-images-stick-lac-1081592-500x500.jpg"
                            className="card-img-top"
                            alt=""
                            style={{ height: "280px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <h4>Stick Lac</h4>
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
                                    <span>500</span>
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
                                    <span>500</span>
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
                <div className="row row-cols-1">
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
                            <tr>
                              <td>12/12/2020</td>
                              <td>Stick Lac</td>
                              <td>Wild</td>
                              <td>Assam</td>
                              <td>100</td>
                              <td>Good</td>
                            </tr>
                            <tr>
                              <td>12/12/2020</td>
                              <td>Stick Lac</td>
                              <td>Wild</td>
                              <td>Assam</td>
                              <td>100</td>
                              <td>Good</td>
                            </tr>
                            <tr>
                              <td>12/12/2020</td>
                              <td>Stick Lac</td>
                              <td>Wild</td>
                              <td>Assam</td>
                              <td>100</td>
                              <td>Good</td>
                            </tr>
                            <tr>
                              <td>12/12/2020</td>
                              <td>Stick Lac</td>
                              <td>Wild</td>
                              <td>Assam</td>
                              <td>100</td>
                              <td>Good</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {
                    modal.state &&
                    <SellProduce
                      show
                      data={modal.data}
                      handleClose={closeModal}
                      date={date}
                      month={month}
                      year={year}
                    />
                  }
                </div>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellingPrice