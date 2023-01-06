import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import FPOLoanTab from "./TabContent/FPOLoanTab";
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
import logo from "../../assets/img/logo.png";

const FpoLoan = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [activeTab, setActiveTab] = useState("tab1");

  // show modal
  const [showApp, setShowApp] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showRepayment, setShowRepayment] = useState(false);
  const [showLoanDetails, setShowLoanDetails] = useState(false);
  const [showAttachInvoiceImg, setShowAttachInvoiceImg] = useState(false);
  const [showAttachPaymentImg, setShowAttachPaymentImg] = useState(false);
  const [windowId, setWindowId] = useState("");
  const [currentLoan, setCurrentLoan] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  //handle show modal
  const handleShowApp = () => {
    setShowApp(true);
  };
  const handleShowAdd = () => {
    setShowAdd(true);
  };
  const handleShowRepayment = () => {
    setShowRepayment(true);
  };
  const handleShowLoanDetails = () => {
    setShowLoanDetails(true);
  };
  const handleShowConfirm = () => {
    setShowConfirm(true);
  };

  //handle close modal
  const handleCloseApp = () => {
    setShowApp(false);
    setStep(0);
  };
  const handleCloseAdd = () => {
    setShowAdd(false);
    setStep(0);
  };
  const handleCloseRepayment = () => setShowRepayment(false);
  const handleCloseLoanDetails = () => setShowLoanDetails(false);
  const handleShowAttachInvoiceImg = () => setShowAttachInvoiceImg(true);
  const handleCloseAttachInvoiceImg = () => setShowAttachInvoiceImg(false);
  const handleShowPaymentImg = () => setShowAttachPaymentImg(true);
  const handleClosePaymentImg = () => setShowAttachPaymentImg(false);
  const handleCloseConfirm = () => setShowConfirm(false);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    alert("you are successfully submitted");
  };

  const [noOfRows, setNoOfRows] = useState(1);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [showRejectionLoan, setShowRejectionLoan] = useState(false);
  const handleShowRejectionLoan = () => {
    setShowRejectionLoan(true);
  };
  const handleCloseRejectionLoan = () => setShowRejectionLoan(false);

  const [showApplyLoan, setShowApplyLoan] = useState(false);
  const handleShowApplyLoan = () => {
    setShowApplyLoan(true);
  };
  const handleCloseApplyLoan = () => setShowApplyLoan(false);

  const confirmBid = (e) => {
    e.preventDefault();
    setShowApplyLoan(true);
  };

  const confirmAttachImg = (e) => {
    e.preventDefault();
    setShowAttachInvoiceImg(true);
  };

  const confirmPaymentImg = (e) => {
    e.preventDefault();
    setShowAttachPaymentImg(true);
  };

  const generateRandomWindowID = () => {
    let windowVal = 'W' + (Math.floor(100000 + Math.random() * 900000));
    // if(activeList.find((bid) => bid.id == bidValue)) {
    //   generateRandomBidID();
    // }
    return windowVal;
  };

  const approvedloanList = [
    {
      id: "L 1",
      Loan_approval: "12-08-2021",
      name_fpo: "abcd",
      fpo_contact: "12345XXXXX",
      granted_loan: "300000",
      payeeName: "P 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 1",
    },
    {
      id: "L 2",
      Loan_approval: "12-08-2021",
      name_fpo: "abcd",
      fpo_contact: "12345XXXXX",
      granted_loan: "300000",
      payeeName: "P 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 2",
    },
    {
      id: "L 3",
      Loan_approval: "12-08-2021",
      name_fpo: "abcd",
      fpo_contact: "12345XXXXX",
      granted_loan: "300000",
      payeeName: "P 3",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 3",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 3",
    },
  ];

  const rejectedloanList = [
    {
      id: "1",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
      reasonForRejection: "rejected",
      payeeName: "P 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 1",
    },
    {
      id: "2",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
      reasonForRejection: "rejected",
      payeeName: "P 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 2",
    },
    {
      id: "3",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
      reasonForRejection: "rejected",
      payeeName: "P 3",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 3",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 3",
    },
  ];

  const pendingloanList = [
    {
      id: "1",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
    },
    {
      id: "2",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
    },
    {
      id: "3",
      fpoName: "fpo",
      contact: "12345XXXXX",
      dateOfApp: "10-10-2021",
      requestedAmount: "20000",
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3>Loan Information</h3>
          </div>

          <div className="list_container">
            <div className="loan_wrapper">
              <button
                className="loan_btn"
                onClick={() => {
                  handleShowApp();
                  setWindowId(generateRandomWindowID());
                }}
              >
                Apply for Loan Window
              </button>
              <div>
                <Modal
                  size="lg"
                  show={showApp}
                  onHide={handleCloseApp}
                  scrollable={true}
                  // contentClassName="modal-height"
                >
                  <Modal.Header closeButton>Documents Collected </Modal.Header>
                  <Modal.Body>
                    {step === 0 && (
                      <div className="row">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>KYC Documents</u>
                        </h5>
                        <div className="col">
                          <form>
                            <div className="form">
                              <label className="form-label select-label">
                                <div className="">
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>MOA</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "30%",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>AOA</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "30%",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>
                                        Certificate of Incorporation
                                      </label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "30%",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>GST Certificate</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "30%",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>PAN Card</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "30%",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p + 1)}
                                          style={{
                                            marginTop: "80px",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Next
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {step === 1 && (
                      <div className="row mt-3">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>KYC of Authorised Signatories</u>
                        </h5>
                        <div className="col">
                          <div className="form">
                            <label className="form-label select-label">
                              <div className="">
                                <div className="row m-2">
                                  <h5>List of Directors</h5>
                                  <div className="col-lg-12">
                                    <input
                                      type="file"
                                      className="form-control"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                {[...Array(noOfRows)].map((element, index) => {
                                  return (
                                    <>
                                      <div key={index} className="row m-2 mt-3">
                                        <div className="col-4">
                                          <label>ID Proof</label>
                                        </div>
                                        <div className="col-4">
                                          <select className="form-select">
                                            <option value="select">
                                              Select
                                            </option>
                                            <option value="">PAN Card</option>
                                            <option value="">Voter ID</option>
                                          </select>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleChange}
                                            value={element || ""}
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-4">
                                          <label>Address Proof</label>
                                        </div>
                                        <div className="col-4">
                                          <select className="form-select">
                                            <option value="select">
                                              Select
                                            </option>
                                            <option value="">
                                              Aadhaar Card
                                            </option>
                                            <option value="">Voter ID</option>
                                            <option value="">
                                              Driving Lincese
                                            </option>
                                            <option value="">Passport</option>
                                          </select>
                                        </div>
                                        <div className="col-4">
                                          <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleChange}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                                <div style={{ display: "flex" }}>
                                  <button
                                    className="mx-3"
                                    style={{
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      setNoOfRows(noOfRows + 1);
                                    }}
                                  >
                                    +
                                  </button>
                                  <button
                                    className="mx-3"
                                    style={{
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      setNoOfRows(noOfRows - 1);
                                    }}
                                  >
                                    -
                                  </button>
                                </div>
                                <div
                                  className="row m-2"
                                  style={{
                                    justifyContent: "space-between",
                                    padding: "0 10px",
                                  }}
                                >
                                  {step > 0 && (
                                    <button
                                      className="btn btn-success"
                                      onClick={() => setStep((p) => p - 1)}
                                      style={{
                                        marginTop: "1rem",
                                        backgroundColor: "#064420",
                                        width: "20%",
                                      }}
                                    >
                                      Back
                                    </button>
                                  )}
                                  {(("Create" && step < 6) ||
                                    ("Create" && step < 5)) && (
                                    <button
                                      className="btn btn-success"
                                      onClick={() => setStep((p) => p + 1)}
                                      style={{
                                        marginTop: "1rem",
                                        backgroundColor: "#064420",
                                        width: "20%",
                                        position: "relative",
                                        float: "right",
                                      }}
                                    >
                                      Next
                                    </button>
                                  )}
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="row mt-3">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>Brief Profile of the FPO</u>
                        </h5>
                        <div className="col">
                          <form>
                            <div className="form">
                              <label className="form-label select-label">
                                <div className="">
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Incorporation Details</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Brief Profile of the promoting
                                        organization
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Networth statement of the promoter
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <h5 className="mt-3">Applicable Lincese</h5>
                                    <div className="col-lg-12">
                                      <label>Input Linceses</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <label>Fertilizer Linceses</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="row m-2"
                                    style={{
                                      justifyContent: "space-between",
                                      padding: "0 10px",
                                    }}
                                  >
                                    {step > 0 && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p - 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                        }}
                                      >
                                        Back
                                      </button>
                                    )}
                                    {(("Create" && step < 6) ||
                                      ("Create" && step < 5)) && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p + 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                          position: "relative",
                                          float: "right",
                                        }}
                                      >
                                        Next
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="row mt-3">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>Financial Details</u>
                        </h5>
                        <div className="col">
                          <form>
                            <div className="form">
                              <label className="form-label select-label">
                                <div className="">
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Last 3 years audited financial
                                        statements
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Current year provisonal/Interim
                                        financials
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Month wise purchase and sales data for
                                        last 6 months
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Latest 3 months stock statement
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Business Plan</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Bank statement for last 1 year
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Sanction letter copies</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        GST returns for the past 6 months
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="row m-2"
                                    style={{
                                      justifyContent: "space-between",
                                      padding: "0 10px",
                                    }}
                                  >
                                    {step > 0 && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p - 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                        }}
                                      >
                                        Back
                                      </button>
                                    )}
                                    {(("Create" && step < 6) ||
                                      ("Create" && step < 5)) && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p + 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                          position: "relative",
                                          float: "right",
                                        }}
                                      >
                                        Next
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {step === 4 && (
                      <div className="row mt-3">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>Other Details</u>
                        </h5>
                        <div className="col">
                          <form>
                            <div className="form">
                              <label className="form-label select-label">
                                <div className="">
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Product wise break up of revenues
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Latest 3 months stock statements
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Debtors ageing analysis fiscal year end
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Top 5 suppliers/vintage</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Top 5 buyers/vintage</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Sanction limit & O/svfor both WC & TL
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>Term loan summary</label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-12">
                                      <label>
                                        Project estimate & other relavant
                                        documents
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="row m-2"
                                    style={{
                                      justifyContent: "space-between",
                                      padding: "0 10px",
                                    }}
                                  >
                                    {step > 0 && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p - 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                        }}
                                      >
                                        Back
                                      </button>
                                    )}
                                    {(("Create" && step < 6) ||
                                      ("Create" && step < 5)) && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p + 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                          position: "relative",
                                          float: "right",
                                        }}
                                      >
                                        Next
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {step === 5 && (
                      <div className="row mt-3">
                        <h5
                          style={{
                            padding: "10px 25px",
                            color: "#218f2c",
                            fontWeight: "700",
                          }}
                        >
                          <u>Apply for Working Capital Loan Window</u>
                        </h5>
                        <div className="col">
                          <form>
                            <div className="form">
                              <label className="form-label select-label">
                                <div className="">
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Window ID</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={windowId}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Requested Loan Amount</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Loan Period in Months</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="row m-2"
                                    style={{
                                      justifyContent: "space-between",
                                      padding: "0 10px",
                                    }}
                                  >
                                    {step > 0 && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => setStep((p) => p - 1)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                        }}
                                      >
                                        Back
                                      </button>
                                    )}
                                    {(("Create" && step < 6) ||
                                      ("Create" && step < 5)) && (
                                      <button
                                        className="btn btn-success"
                                        onClick={() => handleSubmit(alert)}
                                        style={{
                                          marginTop: "1rem",
                                          backgroundColor: "#064420",
                                          width: "20%",
                                          position: "relative",
                                          float: "right",
                                        }}
                                      >
                                        Submit
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="tabs mt-5">
              <button
                className={`tab ${checkActive(1, "active")}`}
                onClick={() => {
                  handleClick(1);
                }}
              >
                Working Capital Loan
              </button>
              <button
                className={`tab ${checkActive(2, "active")}`}
                onClick={() => {
                  handleClick(2);
                }}
              >
                Farmer Loan
              </button>
            </div>
            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <button
                  className="loan-btn"
                  style={{
                    backgroundColor: "#064420",
                    width: "14%",
                    color: "#fff",
                    border: "none",
                    padding: "5px 5px",
                    borderRadius: "5px",
                    position: "relative",
                    float: "right",
                    top: "25px",
                    right: "50px",
                  }}
                  onClick={() => {
                    handleShowApplyLoan();
                  }}
                >
                  Apply for Loan
                </button>
                <div>
                  <Modal show={showApplyLoan} onHide={handleCloseApplyLoan}>
                    <Modal.Header closeButton>Loan Application</Modal.Header>
                    <Modal.Body>
                      <div className="row ">
                        <div className="col">
                          <form>
                            <div className="form">
                              <div className="p-2">
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Loan Window ID</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={"W123456"}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Loan ID</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Loan Id"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Name of Payee</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Account Number</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>IFSC Number</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="number"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Bank Name</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Amount</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Interest Rate (%)</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={12}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Tenure of Loan (in Months)</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Attach Invoice</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="file"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Purpose</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-12">
                                    <button
                                      className="btn btn-primary mt-3"
                                      style={{
                                        float: "right",
                                        backgroundColor: "#064420",
                                        border: "none",
                                      }}
                                      onClick={(e) => {
                                        confirmBid(e);
                                      }}
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="card_wrapper">
                  {/* <div
                  className="card_title mb-2 text-black text-bold"
                  style={{ fontSize: "22px" }}
                >
                  Title
                </div> */}
                  <div className="card_content">
                    <div className="bloc-tab">
                      <button
                        className={
                          toggleState === 1 ? "tabloan active-tab" : "tabloan"
                        }
                        style={{ width: "10%" }}
                        onClick={() => toggleTab(1)}
                      >
                        Approved Loans
                      </button>
                      <button
                        className={
                          toggleState === 2 ? "tabloan active-tab" : "tabloan"
                        }
                        style={{ width: "10%", fontSize: "15px" }}
                        onClick={() => toggleTab(2)}
                      >
                        Rejected Loans
                      </button>
                      <button
                        className={
                          toggleState === 3 ? "tabloan active-tab" : "tabloan"
                        }
                        style={{ width: "10%", fontSize: "15px" }}
                        onClick={() => toggleTab(3)}
                      >
                        Pending Loans
                      </button>
                    </div>

                    <div className="content_tab">
                      <div
                        className={
                          toggleState === 1
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
                        <table className="table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Date of Loan Approval</th>
                              <th>Name of FPO</th>
                              <th>FPO Contact</th>
                              <th>Granted Loan Amount</th>
                              <th>Repayment Structure</th>
                              <th>Loan Details</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              color: "#000",
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {approvedloanList.map((item) => (
                              <tr key={item.id}>
                                <td>{item.Loan_approval}</td>
                                <td>{item.name_fpo}</td>
                                <td>{item.fpo_contact}</td>
                                <td>{item.granted_loan}</td>
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
                                      setCurrentLoan(item);
                                      handleShowRepayment();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
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
                                      setCurrentLoan(item);
                                      handleShowLoanDetails();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                  <div>
                                    <Modal
                                      size="xl"
                                      show={showRepayment}
                                      onHide={handleCloseRepayment}
                                    >
                                      <Modal.Header closeButton>
                                        Repayment Structure
                                      </Modal.Header>
                                      <Modal.Body>
                                        <div className="repayment_title">
                                          <div className="row">
                                            <div className="col-lg-6">
                                              <div className="row">
                                                <div className="col-6">
                                                  <strong>Loan ID : </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>12345</span>
                                                </div>
                                                <div className="col-6">
                                                  <strong>
                                                    Farmer Name :{" "}
                                                  </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>abcd</span>
                                                </div>
                                                <div className="col-6">
                                                  <strong>FPO Name : </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>abcd</span>
                                                </div>
                                                <div className="col-6">
                                                  <strong>
                                                    Loan Amount :{" "}
                                                  </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>400</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-6">
                                              <div className="row">
                                                <div className="col-6">
                                                  <strong>
                                                    Loan Period in Months :{" "}
                                                  </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>1</span>
                                                </div>
                                                <div className="col-6">
                                                  <strong>
                                                    No of Repayment :{" "}
                                                  </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>1</span>
                                                </div>
                                                <div className="col-6">
                                                  <strong>
                                                    Annual Interest Rate :{" "}
                                                  </strong>
                                                </div>
                                                <div className="col-6">
                                                  <span>14%</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-5">
                                          <table
                                            style={{ border: "1px solid #eee" }}
                                          >
                                            <thead
                                              style={{
                                                backgroundColor: "#eee",
                                              }}
                                            >
                                              <tr>
                                              <th>S.No.</th>
                                              <th>Scheduled Repayment Date</th>
                                              <th>Scheduled EMI Amount</th>
                                              <th>Actual Repayment Date</th>
                                              <th>Actual Repayment Amount</th>
                                              <th>Balance Amount</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>12-10-2021</td>
                                              <td>100000</td>
                                              <td>21-10-2021</td>
                                              <td>4000000</td>
                                              <td>3000000</td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>12-10-2021</td>
                                              <td>100000</td>
                                              <td>21-10-2021</td>
                                              <td>4000000</td>
                                              <td>3000000</td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>12-10-2021</td>
                                              <td>100000</td>
                                              <td>21-10-2021</td>
                                              <td>4000000</td>
                                              <td>3000000</td>
                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>12-10-2021</td>
                                              <td>100000</td>
                                              <td>21-10-2021</td>
                                              <td>4000000</td>
                                              <td>3000000</td>
                                            </tr>
                                          </tbody>
                                          </table>
                                        </div>
                                      </Modal.Body>
                                    </Modal>
                                  </div>
                                  <div className="loan_details">
                                  <Modal
                                    size="ml"
                                    show={showLoanDetails}
                                    onHide={handleCloseLoanDetails}
                                  >
                                    <Modal.Header closeButton>
                                      Loan Details
                                    </Modal.Header>
                                    <Modal.Body>
                                      <div className="repayment_title">
                                        <div className="row ">
                                          <div className="col">
                                            <form>
                                              <div className="form">
                                                <div className="p-2">
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>Loan ID</label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.id}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Name of Payee
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.payeeName}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Account Number
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.accountNo}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>IFSC Number</label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.ifsc}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>Bank Name</label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.bankName}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>Amount</label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.amount}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Tenure of Loan (in months)
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        value={currentLoan.tenure}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Purpose
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        value={currentLoan.purpose}
                                                        disabled
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Invoice
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <button
                                                        style={{
                                                          backgroundColor:
                                                            "#064420",
                                                          color: "#fff",
                                                          alignItems: "center",
                                                          borderRadius: "5px",
                                                          border: "none",
                                                          padding:
                                                            "0.25rem 1rem",
                                                          width: "100%",
                                                          fontSize: ".75rem",
                                                          lineHeight: "2rem",
                                                        }}
                                                        onClick={(e) => {
                                                          handleShowAttachInvoiceImg();
                                                          confirmAttachImg(e);
                                                        }}
                                                      >
                                                        view
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>
                                                        Payment Proof
                                                      </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <button
                                                        style={{
                                                          backgroundColor:
                                                            "#064420",
                                                          color: "#fff",
                                                          borderRadius: "5px",
                                                          border: "none",
                                                          padding:
                                                            "0.25rem 1rem",
                                                          width: "100%",
                                                          fontSize: ".75rem",
                                                          lineHeight: "2rem",
                                                        }}
                                                        onClick={(e) => {
                                                          handleShowPaymentImg();
                                                          confirmPaymentImg(e);
                                                        }}
                                                      >
                                                        view
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        </div>
                                    </Modal.Body>
                                  </Modal>
                                </div>
                                <td />
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <Modal
                          show={showAttachInvoiceImg}
                          onHide={handleCloseAttachInvoiceImg}
                        >
                          <Modal.Header closeButton>Invoice</Modal.Header>
                          <Modal.Body>
                            <img src={logo} alt="Attach Invoice" style={{ width: "100%", height: "100%"}} />
                          </Modal.Body>
                        </Modal>
                        <Modal
                          show={showAttachPaymentImg}
                          onHide={handleClosePaymentImg}
                        >
                          <Modal.Header closeButton>Payment Proof</Modal.Header>
                          <Modal.Body>
                            <img src={logo} alt="Payment Proof" style={{ width: "100%", height: "100%"}} />
                          </Modal.Body>
                        </Modal>
                      </div>
                      <div
                        className={
                          toggleState === 2
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
                        <table className="table table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "18px",
                              verticalAlign: "top",
                              textAlign: "center",
                              fontWeight: 600,
                            }}
                          >
                            <tr>
                              <td>Date of Application</td>
                              <td>Name of FPO</td>
                              <td>Contact No.</td>
                              <td>Requested Loan Amount</td>
                              <td>Loan Application</td>
                              <td>Reason for Rejection</td>
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
                            {rejectedloanList.map((id) => (
                              <tr>
                                <td>{id.dateOfApp}</td>
                                <td>{id.fpoName}</td>
                                <td>{id.contact}</td>
                                <td>{id.requestedAmount}</td>
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
                                      setCurrentLoan(id);
                                      handleShowRejectionLoan();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                <td>{id.reasonForRejection}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <Modal
                          show={showRejectionLoan}
                          onHide={handleCloseRejectionLoan}
                        >
                          <Modal.Header closeButton>
                            Loan Application
                          </Modal.Header>
                          <Modal.Body>
                            <div className="row ">
                              <div className="col">
                                <form>
                                  <div className="form">
                                    <div className="p-2">
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Loan ID</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.id}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Name of Payee</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.payeeName}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Account Number</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.accountNo}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>IFSC Number</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.ifsc}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Bank Name</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.bankName}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Amount</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.amount}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Tenure of Loan (Months)</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.tenure}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Purpose</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={currentLoan.purpose}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-6">
                                          <label>Invoice</label>
                                        </div>
                                        <div className="col-lg-6">
                                          <button
                                            style={{
                                              backgroundColor:
                                                "#064420",
                                              color: "#fff",
                                              borderRadius: "5px",
                                              border: "none",
                                              padding:
                                                "0.25rem 1rem",
                                              width: "100%",
                                              fontSize: ".75rem",
                                              lineHeight: "2rem",
                                            }}
                                            onClick={(e) => {
                                              handleShowPaymentImg();
                                              confirmPaymentImg(e);
                                            }}
                                          >
                                            View
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </form>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </div>
                      <div
                        className={
                          toggleState === 3
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
                        <table className="table table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "17px",
                              verticalAlign: "top",
                              textAlign: "center",
                              fontWeight: "600",
                            }}
                          >
                            <tr>
                              <td>Date of Application</td>
                              <td>Name of FPO</td>
                              <td>Contact No.</td>
                              <td>Requested Loan Amount</td>
                              <td>Loan Application</td>
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
                            {pendingloanList.map((id) => {
                              return (
                                <tr>
                                  <td>{id.dateOfApp}</td>
                                  <td>{id.fpoName}</td>
                                  <td>{id.contact}</td>
                                  <td>{id.requestedAmount}</td>
                                  <td>pending</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="tabs_wrapper">
                    <ul className="nav-tab">
                      <TabNavItem
                        title="Approved Loans"
                        className="mr-3"
                        id="tab1"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabNavItem
                        title="Rejected Loans"
                        id="tab2"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabNavItem
                        title="Pending Loans"
                        id="tab3"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </ul>
                    <div className="outlet">
                      <TabContent id="tab1" activeTab={activeTab}>
                        <table className="table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Date of Loan Approval</th>
                              <th>Name of FPO</th>
                              <th>FPO Contact</th>
                              <th>Granted Loan Amount</th>
                              <th>Repayment Structure</th>
                              <th>Loan Details</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              color: "#000",
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {approvedloanList.map((item) => (
                              <tr key={item.id}>
                                <td>{item.Loan_approval}</td>
                                <td>{item.name_fpo}</td>
                                <td>{item.fpo_contact}</td>
                                <td>{item.granted_loan}</td>
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
                                      setCurrentLoan(item);
                                      handleShowRepayment();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
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
                                    onClick={(e) => {
                                      setCurrentLoan(item);
                                      handleShowLoanDetails();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TabContent>
                      <TabContent id="tab2" activeTab={activeTab}>
                        <table className="table table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "18px",
                              verticalAlign: "top",
                              textAlign: "center",
                              fontWeight: 600,
                            }}
                          >
                            <tr>
                              <td>Date of Application</td>
                              <td>Name of FPO</td>
                              <td>Contact No.</td>
                              <td>Requested Loan Amount</td>
                              <td>Loan Application</td>
                              <td>Reason for Rejection</td>
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
                            {rejectedloanList.map((id) => (
                              <tr>
                                <td>{id.dateOfApp}</td>
                                <td>{id.fpoName}</td>
                                <td>{id.contact}</td>
                                <td>{id.requestedAmount}</td>
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
                                      setCurrentLoan(id);
                                      handleShowRejectionLoan();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                <td>{id.reasonForRejection}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TabContent>
                      <TabContent id="tab3" activeTab={activeTab}>
                        <table className="table table-borderless">
                          <thead
                            style={{
                              color: "#064420",
                              fontSize: "17px",
                              verticalAlign: "top",
                              textAlign: "center",
                              fontWeight: "600",
                            }}
                          >
                            <tr>
                              <td>Date of Application</td>
                              <td>Name of FPO</td>
                              <td>Contact No.</td>
                              <td>Requested Loan Amount</td>
                              <td>Loan Application</td>
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
                            {/* {pendingloanList.map((id) => {
                              return (
                                <tr>
                                  <td>{id.dateOfApp}</td>
                                  <td>{id.fpoName}</td>
                                  <td>{id.contact}</td>
                                  <td>{id.requestedAmount}</td>
                                  <td>pending</td>
                                </tr>
                              );
                            })} */}
                          </tbody>
                        </table>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <div>
                  <button
                    className=""
                    style={{
                      backgroundColor: "#064420",
                      padding: "5px 5px",
                      position: "relative",
                      float: "right",
                      right: "50px",
                      bottom: "54px",
                      color: "#fff",
                      width: "17%",
                      borderRadius: "5px",
                    }}
                    onClick={() => {
                      setWindowId(generateRandomWindowID());
                      handleShowAdd();
                    }}
                  >
                    Apply for Farmer Loan Window
                  </button>
                  <Modal
                    size="lg"
                    show={showAdd}
                    onHide={handleCloseAdd}
                    scrollable={true}
                    contentClassName="modal-height"
                  >
                    <Modal.Header closeButton>Documents Collected</Modal.Header>
                    <Modal.Body>
                      {step === 0 && (
                        <div className="row">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>KYC Documents</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>MOA</label>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <button
                                          className="py-0.5"
                                          style={{
                                            backgroundColor: "#064420",
                                            color: "#fff",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            border: "none",
                                            padding: "5px 10px",
                                            width: "30%",
                                            fontSize: ".75rem",
                                            lineHeight: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          View
                                        </button>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>AOA</label>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <button
                                          className="py-0.5"
                                          style={{
                                            backgroundColor: "#064420",
                                            color: "#fff",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            border: "none",
                                            padding: "5px 10px",
                                            width: "30%",
                                            fontSize: ".75rem",
                                            lineHeight: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          View
                                        </button>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>
                                          Certificate of Incorporation
                                        </label>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <button
                                          className="py-0.5"
                                          style={{
                                            backgroundColor: "#064420",
                                            color: "#fff",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            border: "none",
                                            padding: "5px 10px",
                                            width: "30%",
                                            fontSize: ".75rem",
                                            lineHeight: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          View
                                        </button>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>GST Certificate</label>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <button
                                          className="py-0.5"
                                          style={{
                                            backgroundColor: "#064420",
                                            color: "#fff",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            border: "none",
                                            padding: "5px 10px",
                                            width: "30%",
                                            fontSize: ".75rem",
                                            lineHeight: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          View
                                        </button>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>PAN Card</label>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <button
                                          className="py-0.5"
                                          style={{
                                            backgroundColor: "#064420",
                                            color: "#fff",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            border: "none",
                                            padding: "5px 10px",
                                            width: "30%",
                                            fontSize: ".75rem",
                                            lineHeight: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          View
                                        </button>
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        {(("Create" && step < 6) ||
                                          ("Create" && step < 5)) && (
                                          <button
                                            className="btn btn-success"
                                            onClick={() =>
                                              setStep((p) => p + 1)
                                            }
                                            style={{
                                              marginTop: "1rem",
                                              backgroundColor: "#064420",
                                              width: "20%",
                                              position: "relative",
                                              float: "right",
                                            }}
                                          >
                                            Next
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {step === 1 && (
                        <div className="row mt-3">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>KYC of Authorised Signatories</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <h5>List of Directors</h5>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    {[...Array(noOfRows)].map(
                                      (element, index) => {
                                        return (
                                          <>
                                            <div
                                              key={index}
                                              className="row m-2 mt-3"
                                            >
                                              <div className="col-4">
                                                <label>ID Proof</label>
                                              </div>
                                              <div className="col-4">
                                                <select className="form-select">
                                                  <option value="select">
                                                    Select
                                                  </option>
                                                  <option value="">
                                                    PAN Card
                                                  </option>
                                                  <option value="">
                                                    Voter ID
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-4">
                                                <input
                                                  type="file"
                                                  className="form-control"
                                                  onChange={handleChange}
                                                  value={element || ""}
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-4">
                                                <label>Address Proof</label>
                                              </div>
                                              <div className="col-4">
                                                <select className="form-select">
                                                  <option value="select">
                                                    Select
                                                  </option>
                                                  <option value="">
                                                    Aadhaar Card
                                                  </option>
                                                  <option value="">
                                                    Voter ID
                                                  </option>
                                                  <option value="">
                                                    Driving Lincese
                                                  </option>
                                                  <option value="">
                                                    Passport
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-4">
                                                <input
                                                  type="file"
                                                  className="form-control"
                                                  onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </>
                                        );
                                      }
                                    )}
                                    <div style={{ display: "flex" }}>
                                      <button
                                        className="mx-3"
                                        style={{
                                          background: "none",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          setNoOfRows(noOfRows + 1);
                                        }}
                                      >
                                        +
                                      </button>
                                      <button
                                        className="mx-3"
                                        style={{
                                          background: "none",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          setNoOfRows(noOfRows - 1);
                                        }}
                                      >
                                        -
                                      </button>
                                    </div>
                                    <div
                                      className="row m-2"
                                      style={{
                                        justifyContent: "space-between",
                                        padding: "0 10px",
                                      }}
                                    >
                                      {step > 0 && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p - 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                          }}
                                        >
                                          Back
                                        </button>
                                      )}
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p + 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Next
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {step === 2 && (
                        <div className="row mt-3">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>Brief Profile of the FPO</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Incorporation Details</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Brief Profile of the promoting
                                          organization
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Networth statement of the promoter
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <h5 className="mt-3">
                                        Applicable Lincese
                                      </h5>
                                      <div className="col-lg-12">
                                        <label>Input Linceses</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <label>Fertilizer Linceses</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row m-2"
                                      style={{
                                        justifyContent: "space-between",
                                        padding: "0 10px",
                                      }}
                                    >
                                      {step > 0 && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p - 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                          }}
                                        >
                                          Back
                                        </button>
                                      )}
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p + 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Next
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {step === 3 && (
                        <div className="row mt-3">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>Financial Details</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Last 3 years audited financial
                                          statements
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Current year provisonal/Interim
                                          financials
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Month wise purchase and sales data for
                                          last 6 months
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Latest 3 months stock statement
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Business Plan</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Bank statement for last 1 year
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Sanction letter copies</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          GST returns for the past 6 months
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row m-2"
                                      style={{
                                        justifyContent: "space-between",
                                        padding: "0 10px",
                                      }}
                                    >
                                      {step > 0 && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p - 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                          }}
                                        >
                                          Back
                                        </button>
                                      )}
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p + 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Next
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {step === 4 && (
                        <div className="row mt-3">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>Other Details</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Product wise break up of revenues
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Latest 3 months stock statements
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Debtors ageing analysis fiscal year
                                          end
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Top 5 suppliers/vintage</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Top 5 buyers/vintage</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Sanction limit & O/svfor both WC & TL
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>Term loan summary</label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-12">
                                        <label>
                                          Project estimate & other relavant
                                          documents
                                        </label>
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          type="file"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row m-2"
                                      style={{
                                        justifyContent: "space-between",
                                        padding: "0 10px",
                                      }}
                                    >
                                      {step > 0 && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p - 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                          }}
                                        >
                                          Back
                                        </button>
                                      )}
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p + 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Next
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {step === 5 && (
                        <div className="row mt-3">
                          <h5
                            style={{
                              padding: "10px 25px",
                              color: "#218f2c",
                              fontWeight: "700",
                            }}
                          >
                            <u>Apply for farmer Loan Window</u>
                          </h5>
                          <div className="col">
                            <form>
                              <div className="form">
                                <label className="form-label select-label">
                                  <div className="">
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Window ID</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={windowId}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>Requested Loan Amount</label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="row m-2">
                                      <div className="col-lg-6">
                                        <label>
                                          Requested Loan Tenure (Months)
                                        </label>
                                      </div>
                                      <div className="col-lg-6">
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row m-2"
                                      style={{
                                        justifyContent: "space-between",
                                        padding: "0 10px",
                                      }}
                                    >
                                      {step > 0 && (
                                        <button
                                          className="btn btn-success"
                                          onClick={() => setStep((p) => p - 1)}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                          }}
                                        >
                                          Back
                                        </button>
                                      )}
                                      {(("Create" && step < 6) ||
                                        ("Create" && step < 5)) && (
                                        <button
                                          className="btn btn-success"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleShowConfirm();
                                          }}
                                          style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#064420",
                                            width: "20%",
                                            position: "relative",
                                            float: "right",
                                          }}
                                        >
                                          Submit
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                          <div>
                            <Modal
                              show={showConfirm}
                              onHide={handleCloseConfirm}
                              backdrop="static"
                              keyboard={false}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Confirm</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <label>Are you sure you want to submit?</label>
                                  </div>
                                  <div
                                    className="row m-2"
                                    style={{
                                      justifyContent: "space-between",
                                      padding: "0 10px",
                                    }}
                                  >
                                    <button
                                      className="btn btn-success"
                                      onClick={handleCloseConfirm}
                                      style={{
                                        marginTop: "1rem",
                                        backgroundColor: "#064420",
                                        width: "20%",
                                      }}
                                    >
                                      No
                                    </button>
                                    <button
                                      className="btn btn-success"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleCloseConfirm();
                                        handleCloseAdd();
                                      }}
                                      style={{
                                        marginTop: "1rem",
                                        backgroundColor: "#064420",
                                        width: "20%",
                                        position: "relative",
                                        float: "right",
                                      }}
                                    >
                                      Yes
                                    </button>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                      )}
                    </Modal.Body>
                  </Modal>
                </div>

                <FPOLoanTab />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FpoLoan;
