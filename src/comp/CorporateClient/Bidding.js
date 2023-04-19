import { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import BidStatus from "./Modals/BidStatus";
import StartBid from "./Modals/StartBid";

import { useQuery } from "@tanstack/react-query";
import { getBidding } from "../../actions/corporateClient";

import Loader from "../Common/Loader";

import "./CorporateClient.css";

const Bidding = () => {
  const [modal, setModal] = useState({ state: false, data: {} })
  const [activeTab, setActiveTab] = useState("tab1");
  const [page, setPage] = useState(1);

  const nextPage = (p) => setPage(p);

  const { isLoading, data } = useQuery({
    queryKey: ["corporateClient/lac-bidding"],
    queryFn: getBidding
  })

  const updateModal = (state, val) => setModal({ state, data: val })
  const closeModal = () => setModal({ state: "", data: {} })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
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
                Corporate Client
              </h3>
            </div>
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
                className="crop-advisory_button"
                style={{
                  backgroundColor: "#064420",
                  border: "none",
                  width: "fit-content",
                }}
                onClick={() => updateModal("startBid", {})}
              >
                Start Bid
              </Button>
            </div>

            <div className="tabs_wrapper">
              <ul className="nav-tab">
                <TabNavItem
                  title="Active Bids"
                  className="mr-3"
                  id="tab1"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title="Purchase History"
                  id="tab2"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>
              <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                  <div className="row">
                    <div className="col">
                      <div className="card shadow">
                        <div className=" table-responsive">
                          <table className="table table-borderless">
                            <thead
                              style={{
                                color: "#064420",
                                fontSize: "18px",
                                verticalAlign: "top",
                                fontWeight: 600
                              }}
                            >
                              <tr>
                                <td>Bid ID</td>
                                <td>Start Date</td>
                                <td>End Date</td>
                                <td>Status</td>
                              </tr>
                            </thead>
                            <tbody
                              style={{
                                color: "#000",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              {data.data.filter((bid) => bid.status == "on-going").map((bid) => (
                                <tr>
                                  <td>{bid.bidId}</td>
                                  <td>{bid.startDate}</td>
                                  <td>{bid.bidEndDate}</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#064420",
                                        color: "#fff",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => updateModal("bidStatus", bid)}
                                      // onClick={() => {
                                      //   setCurrentBid(bid);
                                      //   handleShowBidStatus();
                                      // }}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                  <div className="row">
                    <div className="col">
                      <div className="card shadow">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <thead
                              style={{
                                color: "#064420",
                                fontSize: "18px",
                                verticalAlign: "top",
                                textAlign: "center",
                                fontWeight: 600
                              }}
                            >
                              <tr>
                                <td>Bid ID</td>
                                <td>FPO ID</td>
                                <td>FPO Name</td>
                                <td>Lac Strain Type</td>
                                <td>Source of Tree</td>
                                <td>Origin</td>
                                <td>Seedlac Content</td>
                                <td>Fresh Resin Content</td>
                                <td>Quantity</td>
                                <td>Amount</td>
                                <td>Status</td>
                              </tr>
                            </thead>
                            <tbody
                              style={{
                                color: "#000",
                                fontSize: "16px",
                                fontWeight: "500",
                                textAlign: "center",
                              }}
                            >
                              {
                                data.data.map((bid) => (
                                  <tr>
                                    <td>{bid.bidId}</td>
                                    <td>{bid.fpoID}</td>
                                    <td>{bid.fpoName}</td>
                                    <td>{bid.lacStrainType}</td>
                                    <td>{bid.sourceTree}</td>
                                    <td>{bid.origin}</td>
                                    <td>{bid.seedLacContent}</td>
                                    <td>{bid.freshResinContent}</td>
                                    <td>{bid.quantity}</td>
                                    <td>{bid.bidAmount}</td>
                                    <td>
                                      <button
                                        onClick={() => updateModal("bidStatus", bid)}
                                        // onClick={() => {
                                        //   setCurrentBid(bid);
                                        //   setShowBidStatus(true);
                                        // }}
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          padding: ".2rem .4rem"
                                        }}
                                      >
                                        View
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StartBid
        show={modal.state === "startBid"}
        data={modal.data}
        handleClose={closeModal}
      />

      <BidStatus
        show={modal.state === "bidStatus"}
        data={modal.data}
        page={page}
        // currentBid={currentBid}
        // showBidStatus={showBidStatus}
        // handleCloseBidStatus={handleCloseBidStatus}
        nextPage={nextPage}
        // fpoBids={currentBid.bids}
        handleClose={closeModal}
      />

      {/* <BidStatus2
        page={page}
        page2={page2}
        currentStep={currentStep}
        showCustomer={showCustomer}
        handleCloseCustomer={handleCloseCustomer}
        updateStep={updateStep}
        nextPage2={nextPage2}
      /> */}
    </>
  )
}

export default Bidding