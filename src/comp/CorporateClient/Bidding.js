import { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import ConfirmOrder from "./Modals/ConfirmOrder";
import BidStatus2 from "./Modals/BidStatus2";
import BidStatus from "./Modals/BidStatus";
import StartBid from "./Modals/StartBid";

import "./CorporateClient.css";

const activeBidList = [
  {
    id: "B123456",
    startDate: "2021-10-10",
    endDate: "2023-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 1",
  },
  {
    id: "B767622",
    startDate: "2020-10-10",
    endDate: "2021-10-10",
    status: "Active",
    lacStrainType: "Rangeeni",
    treeSource: "Ber",
    origin: "Chattisgarh",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: false,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 2",
  },
  {
    id: "B989898",
    startDate: "2020-10-10",
    endDate: "2022-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Palash",
    origin: "MP",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: false,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 3",
  },
  {
    id: "B555555",
    startDate: "2020-10-10",
    endDate: "2021-10-10",
    status: "Active",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 4",
  },
  {
    id: "B987654",
    startDate: "2021-10-10",
    endDate: "2023-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: false,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 5",
  },
]

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
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showBidStatus, setShowBidStatus] = useState(false)
  const [showStartBid, setShowStartBid] = useState(false)
  const [showCustomer, setShowCustomer] = useState(false)
  const [currentBid, setCurrentBid] = useState({})
  const [activeTab, setActiveTab] = useState("tab1")
  const [currentStep, updateCurrentStep] = useState(1)
  const [page2, setPage2] = useState("pageone")
  const [page, setPage] = useState("pageone")

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

  const generateRandomBidID = () => {
    let bidValue = 'B' + (Math.floor(100000 + Math.random() * 900000))
    // eslint-disable-next-line eqeqeq
    if (activeBidList.find((bid) => bid.id == bidValue)) {
      generateRandomBidID()
    }
    return bidValue
  }

  const confirmBid = (e) => {
    e.preventDefault()
    setShowConfirmBox(true)
  }

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false)
  }

  const placeBid = (e) => {
    e.preventDefault()
    setShowConfirmBox(false)
    setShowStartBid(false)
  }

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
                              {activeBidList.map((bid) => (
                                <tr>
                                  <td>{bid.id}</td>
                                  <td>{bid.startDate}</td>
                                  <td>{bid.endDate}</td>
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
                                purchaseHistory.map((purchase) => (
                                  <tr>
                                    <td>{purchase.bidID}</td>
                                    <td>{purchase.fpoID}</td>
                                    <td>{purchase.fpoName}</td>
                                    <td>{purchase.lacStrainType}</td>
                                    <td>{purchase.treeSource}</td>
                                    <td>{purchase.origin}</td>
                                    <td>{purchase.seedlacContent}</td>
                                    <td>{purchase.freshResinContent}</td>
                                    <td>{purchase.quantity}</td>
                                    <td>{purchase.amount}</td>
                                    <td>
                                      <button
                                        onClick={() => setShowCustomer(true)}
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

      <ConfirmOrder
        placeBid={placeBid}
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
      />

      <StartBid
        showStartBid={showStartBid}
        generateRandomBidID={generateRandomBidID}
        handleCloseStartBid={handleCloseStartBid}
        confirmBid={confirmBid}
      />

      <BidStatus
        page={page}
        currentBid={currentBid}
        showBidStatus={showBidStatus}
        handleCloseBidStatus={handleCloseBidStatus}
        nextPage={nextPage}
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