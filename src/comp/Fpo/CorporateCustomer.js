import React, { useEffect, useState } from "react";
import BidStatus from "./Modals/BidStatus";
import CompletedTransactions from "./Modals/CompletedTransactions";
import PlaceBid from "./Modals/PlaceBid";
import BidConfirm from "./Modals/BidConfirm";
import BidInformation from "./Modals/BidInformation";
import axios from "axios";

const labelArray = [
  "Bid Information",
  "Upload Test",
  "Invoice Upload",
  "Verify Payment",
];

const CorporateCustomer = () => {
  const [showTranscation, setShowTransaction] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [currentStep, updateCurrentStep] = useState(1)
  const [showStartBid, setShowStartBid] = useState(false)
  const [showCustomer, setShowCustomer] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [showBid, setShowBid] = useState(false)
  const [canEdit, setCanEdit] = useState(false)
  const [page, setPage] = useState("pageone")
  const [bidList, setBidList] = useState([]);
  const [currentBid, setCurrentBid] = useState({});

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const handleClick = (index) => setActiveIndex(index)
  const handleShowBid = () => setShowBid(true)
  const handleShowCustomer = () => {
    setShowCustomer(true)
    setCanEdit(true)
  }
  const handleCloseStartBid = () => setShowStartBid(false)
  const handleCloseBid = () => setShowBid(false)
  const handleCloseCustomer = () => setShowCustomer(false)
  const handleCloseTransaction = () => setShowTransaction(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const updateStep = (step) => updateCurrentStep(step)
  const nextPage = (page) => setPage(page)
  const handleShowStartBid = () => setShowStartBid(true)

  const handleShowTransaction = () => {
    setShowCustomer(true)
    setCanEdit(false)
  }

  const confirmBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const placeBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(false);
    setShowBid(false);
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
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3 className="mb-4">Corporate Customer Information</h3>
      </div>
      <div className="list_container">
        <div className="copporate_List">
          <div className="tabs mt-5">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Invited Bids
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Ongoing Bids
            </button>
            <button
              className={`tab ${checkActive(3, "active")}`}
              onClick={() => handleClick(3)}
            >
              Completed Transactions
            </button>
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead
                      style={{
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "600",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Bid Id</th>
                        <th>Quantity</th>
                        <th>Date of Supply</th>
                        <th>End Date of Bidding</th>
                        <th>Information</th>
                        <th>Status</th>
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
                        bidList.map((item, index) => (
                          <tr>
                            <td>{item.bidId}</td>
                            <td>{item.quantity}</td>
                            <td>{item.supplyDate}</td>
                            <td>{item.bidEndDate}</td>
                            <td>
                              <button
                                style={{
                                  backgroundColor: "#064420",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "fit-content",
                                  fontSize: ".75rem",
                                  lineHeight: "1rem",
                                  color: "#fff",
                                }}
                                onClick={() => {
                                  setCurrentBid(item);
                                  handleShowStartBid();
                                }}
                              >
                                View
                              </button>
                            </td>
                            <td>
                              <button
                                style={{
                                  backgroundColor: "#064420",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "fit-content",
                                  fontSize: ".75rem",
                                  lineHeight: "1rem",
                                  color: "#fff",
                                }}
                                onClick={() => {
                                  setCurrentBid(item);
                                  handleShowBid();
                                }}
                              >
                                Place a Bid
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
            <div className={`panel ${checkActive(2, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead
                      style={{
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "600",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Bid Id</th>
                        <th>Bid Price</th>
                        <th>Quantity</th>
                        <th>Date of Supply</th>
                        <th>End Date of Bidding</th>
                        <th>Status</th>
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
                        bidList
                          .filter((item) => item.status == "on-going" && item.bids.some((bid) => bid.userId === localStorage.getItem("userId")))
                          .map((item, index) => (
                            <tr>
                              <td>{item.bidId}</td>
                              <td>{item.bids.find((bid) => bid.userId === localStorage.getItem("userId")).bidAmount}</td>
                              <td>{item.quantity}</td>
                              <td>{item.supplyDate}</td>
                              <td>{item.bidEndDate}</td>
                              <td>
                                <button
                                  style={{
                                    backgroundColor: "#064420",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    border: "none",
                                    padding: "0.25rem 1rem",
                                    width: "fit-content",
                                    fontSize: ".75rem",
                                    lineHeight: "1rem",
                                    color: "#fff",
                                  }}
                                  onClick={() => {
                                    setCurrentBid(item);
                                    handleShowCustomer();
                                  }}
                                >
                                  view
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
            <div className={`panel ${checkActive(3, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead
                      style={{
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "600",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Bid Id</th>
                        <th>Date of Invoice</th>
                        <th>Invoice Number</th>
                        <th>Total Amount</th>
                        <th>Status</th>
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
                        bidList.filter((bid) => bid.status != "on-going").map((bid, index) => (
                          <tr>
                            <td>{bid.bidId}</td>
                            <td>02-01-2021</td>
                            <td>12345</td>
                            <td>200</td>
                            <td>
                              <button
                                style={{
                                  backgroundColor: "#064420",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "fit-content",
                                  fontSize: ".75rem",
                                  lineHeight: "1rem",
                                  color: "#fff",
                                }}
                                onClick={handleShowTransaction}
                              >
                                view
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
        </div>
      </div>

      <BidStatus
        showCustomer={showCustomer}
        handleCloseCustomer={handleCloseCustomer}
        page={page}
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
        nextPage={nextPage}
        canEdit={canEdit}
        bid={currentBid}
      />

      <CompletedTransactions
        showTranscation={showTranscation}
        handleCloseTransaction={handleCloseTransaction}
      />

      <PlaceBid
        showBid={showBid}
        handleCloseBid={handleCloseBid}
        confirmBid={confirmBid}
        bid={currentBid}
      />

      <BidConfirm
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
        placeBid={placeBid}
      />

      <BidInformation
        showStartBid={showStartBid}
        handleCloseStartBid={handleCloseStartBid}
        bid={currentBid}
      />

    </main>
  );
};

export default CorporateCustomer;
