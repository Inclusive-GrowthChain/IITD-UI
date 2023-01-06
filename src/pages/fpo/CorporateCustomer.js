import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "./ProgressBar/ProgressBar";
import PageOne from "./ProgressPage/PageOne";
import PageTwo from "./ProgressPage/PageTwo";
import PageThree from "./ProgressPage/PageThree";
import PageFour from "./ProgressPage/PageFour";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

const CorporateCustomer = ({ alert }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [showBid, setShowBid] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showTranscation, setShowTransaction] = useState(false);
  const handleShowBid = () => {
    setShowBid(true);
  };
  const handleShowCustomer = () => {
    setShowCustomer(true);
  };
  const handleShowTransaction = () => {
    setShowTransaction(true);
  };
  const handleCloseBid = () => setShowBid(false);
  const handleCloseCustomer = () => setShowCustomer(false);
  const handleCloseTransaction = () => setShowTransaction(false);

  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const labelArray = [
    "Bid Information",
    "Upload Test",
    "Invoice Upload",
    "Verify Payment",
  ];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  const confirmBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const placeBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(false);
    setShowBid(false);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
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
                            <th>
                              Name of Corporate <br />
                              Customer
                            </th>
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
                            // textAlign: "center",
                          }}
                        >
                          <tr>
                            <td>1</td>
                            <td>abcd</td>
                            <td>2</td>
                            <td>02-01-2021</td>
                            <td>01-05-2022</td>
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
                                  handleShowBid();
                                }}
                              >
                                Place a Bid
                              </button>
                              <div>
                                <Modal
                                  // size="sm"
                                  show={showBid}
                                  onHide={handleCloseBid}
                                >
                                  <Modal.Header closeButton>
                                    Place a Bid
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="bid_title">
                                      <div className="row">
                                        <div className="col-6">
                                          <label>Enter the Price/kg</label>
                                        </div>
                                        <div className="col-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter thr price"
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <div className="row m-1">
                                          <button
                                            className="mt-4"
                                            style={{
                                              backgroundColor: "#064420",
                                              alignItems: "center",
                                              borderRadius: "5px",
                                              border: "none",
                                              padding: "0.25rem 1rem",
                                              color: "#fff",
                                            }}
                                            onClick={(e) => {
                                              confirmBid(e);
                                            }}
                                          >
                                            Submit
                                          </button>
                                          <Modal
                                            show={showConfirmBox}
                                            onHide={handleCloseConfirmBox}
                                          >
                                            <Modal.Body
                                              closeButton
                                              style={{
                                                position: "absolute",
                                                top: "4rem",
                                                left: "6rem",
                                                width: "60%",
                                                height: "150px",
                                                timer: "1500",
                                                backgroundColor: "#e9ecef",
                                                color: "#000",
                                                textAlign: "center",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  dispalay: "flex",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <CheckCircleTwoToneIcon />
                                                <p className="text-center">
                                                  Are you confirm this order!
                                                </p>
                                                <button
                                                  style={{
                                                    backgroundColor: "#064420",
                                                    alignItems: "center",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                    padding: "0.25rem 1rem",
                                                    color: "#fff",
                                                  }}
                                                  onClick={(e) => {
                                                    placeBid(e)
                                                  }}
                                                >
                                                  Confirm
                                                </button>
                                              </div>
                                            </Modal.Body>
                                          </Modal>
                                        </div>
                                      </div>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>abcd</td>
                            <td>2</td>
                            <td>02-01-2021</td>
                            <td>01-05-2022</td>
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
                              >
                                Place a Bid
                              </button>
                            </td>
                          </tr>
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
                            <th>
                              Name of Corporate <br />
                              Customer
                            </th>
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
                            // textAlign: "center",
                          }}
                        >
                          <tr>
                            <td>1</td>
                            <td>abcd</td>
                            <td>2000</td>
                            <td>2</td>
                            <td>01-05-2021</td>
                            <td>01-05-2022</td>
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
                                  handleShowCustomer();
                                }}
                              >
                                view
                              </button>

                              <Modal
                                className="progressModal"
                                size="lg"
                                show={showCustomer}
                                onHide={handleCloseCustomer}
                                style={{ height: "100%" }}
                              >
                                <Modal.Header closeButton>
                                  Bid Status
                                </Modal.Header>
                                <Modal.Body>
                                  <ProgressBar
                                    page={page}
                                    labelArray={labelArray}
                                    currentStep={currentStep}
                                    updateStep={updateStep}
                                  />
                                  {
                                    {
                                      pageone: (
                                        <PageOne onButtonClick={nextPage} />
                                      ),
                                      pagetwo: (
                                        <PageTwo onButtonClick={nextPage} />
                                      ),
                                      pagethree: (
                                        <PageThree onButtonClick={nextPage} />
                                      ),
                                      pagefour: (
                                        <PageFour onButtonClick={nextPage} />
                                      ),
                                    }[page]
                                  }
                                </Modal.Body>
                              </Modal>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>abcd</td>
                            <td>2000</td>
                            <td>2</td>
                            <td>01-05-2021</td>
                            <td>01-05-2022</td>
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
                              >
                                view
                              </button>
                            </td>
                          </tr>
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
                            <th>
                              Name of Corporate <br />
                              Customer
                            </th>
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
                            // textAlign: "center",
                          }}
                        >
                          <tr>
                            <td>1</td>
                            <td>abcd</td>
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
                                onClick={() => {
                                  handleShowTransaction();
                                }}
                              >
                                view
                              </button>
                              <div>
                                <Modal
                                  // size="sm"
                                  show={showTranscation}
                                  onHide={handleCloseTransaction}
                                >
                                  <Modal.Header closeButton>
                                    Completed Transactions
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="bid_title">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <label>Bid Id</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="1234"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <label>
                                            Name of Corporate Customer
                                          </label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="abcd"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <label>Date of Invoice</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="01-05-2021"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <label>Invoice Number</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="2314"
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <label>Total Amount</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="200"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>abcd</td>
                            <td>02-01-2021</td>
                            <td>12345</td>
                            <td>300</td>
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
                              >
                                view
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CorporateCustomer;
