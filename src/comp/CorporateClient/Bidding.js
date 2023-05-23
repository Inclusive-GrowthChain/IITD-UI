import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import BidStatus from "./Modals/BidStatus";
import StartBid from "./Modals/StartBid";

import { getBidding } from "../../actions/auction";
import useModal from "../../hooks/useModal";

import Loader from "../Common/Loader";

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const listStyle = {
  position: "relative",
  float: "right",
  right: "18px",
  top: "10px",
}

const startBidStyle = {
  backgroundColor: "#064420",
  border: "none",
  width: "fit-content",
}

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  fontWeight: 600
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
}

const viewBtnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const theadStyle2 = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: 600
}

const tbodyStyle2 = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
}

const Bidding = () => {
  const { modal, updateModal, closeModal } = useModal()
  const [activeTab, setActiveTab] = useState("tab1")

  const { isLoading, data } = useQuery({
    queryKey: ["corporateClient/lac-bidding"],
    queryFn: getBidding
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
      <div className="itemContainer">
        <div className="list_title">
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h3
                className="text-dark mb-0"
                style={h3Style}
              >
                Corporate Client
              </h3>
            </div>
            <div
              className="list__btn"
              style={listStyle}
            >
              <Button
                className="crop-advisory_button"
                style={startBidStyle}
                onClick={() => updateModal("startBid")}
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
                            <thead style={theadStyle}>
                              <tr>
                                <td>Bid ID</td>
                                <td>Start Date</td>
                                <td>End Date</td>
                                <td>Status</td>
                              </tr>
                            </thead>

                            <tbody style={tbodyStyle}>
                              {
                                data.data
                                  .filter(bid => bid.status === "on-going")
                                  .map(bid => (
                                    <tr key={bid.id}>
                                      <td>{bid.bidId}</td>
                                      <td>{bid.supplyDate}</td>
                                      <td>{bid.bidEndDate}</td>
                                      <td>
                                        <button
                                          style={viewBtnStyle}
                                          onClick={() => updateModal("bidStatus", bid)}
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
                            <thead style={theadStyle2}>
                              <tr>
                                <td>Bid ID</td>
                                {/* <td>FPO ID</td>
                                <td>FPO Name</td> */}
                                <td>Lac Strain Type</td>
                                <td>Source of Tree</td>
                                <td>Origin</td>
                                <td>Seedlac Content</td>
                                <td>Fresh Resin Content</td>
                                <td>Quantity</td>
                                {/* <td>Amount</td> */}
                                <td>Status</td>
                              </tr>
                            </thead>

                            <tbody style={tbodyStyle2}>
                              {
                                data.data.map((bid) => (
                                  <tr key={bid.id}>
                                    <td>{bid.bidId}</td>
                                    {/* <td>{bid.fpoID}</td>
                                    <td>{bid.fpoName}</td> */}
                                    <td>{bid.lacStrainType}</td>
                                    <td>{bid.sourceTree}</td>
                                    <td>{bid.origin}</td>
                                    <td>{bid.seedLacContent}</td>
                                    <td>{bid.freshResinContent}</td>
                                    <td>{bid.quantity}</td>
                                    {/* <td>{bid.bidAmount}</td> */}
                                    <td>
                                      <button
                                        onClick={() => updateModal("bidStatus", bid)}
                                        style={viewBtnStyle}
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

      {
        modal.state === "startBid" &&
        <StartBid
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "bidStatus" &&
        <BidStatus
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Bidding