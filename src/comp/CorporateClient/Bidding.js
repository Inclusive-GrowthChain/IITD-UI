import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import BidStatus2 from "./Modals/BidStatus2";
import BidStatus from "./Modals/BidStatus";
import StartBid from "./Modals/StartBid";

import "./CorporateClient.css";

const purchaseHistory = [
  {
    fpoID: "FPO123456",
    bidID: "B111111",
    fpoName: "FPO 1",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
  {
    fpoID: "FPO222222",
    bidID: "B222222",
    fpoName: "FPO 2",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "Chattisgarh",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 20000,
  },
  {
    fpoID: "FPO333333",
    bidID: "B333333",
    fpoName: "FPO 3",
    lacStrainType: "Kusmi",
    treeSource: "Palash",
    origin: "Jharkhand",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
  {
    fpoID: "FPO444444",
    bidID: "B444444",
    fpoName: "FPO 4",
    lacStrainType: "Kusmi",
    treeSource: "Ber",
    origin: "Mednapore",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 15000,
  },
  {
    fpoID: "FPO555555",
    bidID: "B555555",
    fpoName: "FPO 5",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "MP",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 20000,
  },
  {
    fpoID: "FPO666666",
    bidID: "B666666",
    fpoName: "FPO 6",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "MP",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
]

const Bidding = () => {
  const [showBidStatus, setShowBidStatus] = useState(false)
  const [showStartBid, setShowStartBid] = useState(false)
  const [showCustomer, setShowCustomer] = useState(false)
  const [currentBid, setCurrentBid] = useState({})
  const [activeTab, setActiveTab] = useState("tab1")
  const [currentStep, updateCurrentStep] = useState(1)
  const [page2, setPage2] = useState("pageone")
  const [page, setPage] = useState("pageone")
  const [bidList, setBidList] = useState([]);

  const handleShowStartBid = () => setShowStartBid(true)
  const handleCloseStartBid = () => setShowStartBid(false)
  const handleShowBidStatus = () => setShowBidStatus(true)
  const handleCloseCustomer = () => setShowCustomer(false)
  const nextPage = (p) => setPage(p)
  const nextPage2 = (p) => {
    console.log(p)
    setPage2(p)
  }
  const updateStep = (step) => updateCurrentStep(step)

  const handleCloseBidStatus = () => {
    setShowBidStatus(false)
    setPage("pageone")
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/auction")
      .then((response) => {
        console.log(response.data.data);
        setBidList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                onClick={handleShowStartBid}
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
                              {bidList.filter((bid) => bid.status == "on-going").map((bid) => (
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
                                      onClick={() => {
                                        setCurrentBid(bid);
                                        handleShowBidStatus();
                                      }}
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
                                bidList.map((bid) => (
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
                                        onClick={() => {
                                          setCurrentBid(bid);
                                          setShowBidStatus(true);
                                        }}
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
        showStartBid={showStartBid}
        handleCloseStartBid={handleCloseStartBid}
      />

      <BidStatus
        page={page}
        currentBid={currentBid}
        showBidStatus={showBidStatus}
        handleCloseBidStatus={handleCloseBidStatus}
        nextPage={nextPage}
        fpoBids={currentBid.bids}
      />

      <BidStatus2
        page={page}
        page2={page2}
        currentStep={currentStep}
        showCustomer={showCustomer}
        handleCloseCustomer={handleCloseCustomer}
        updateStep={updateStep}
        nextPage2={nextPage2}
      />
    </>
  )
}

export default Bidding