/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo.png";

const Samunnati_Farmer_Loan = () => {
  const [showRepaymentStructure, setshowRepaymentStructure] = useState(false);
  const [showRejLoanApp, setShowRejLoanApp] = useState(false);
  const [currentRejLoanApp, setCurrentRejLoanApp] = useState({});
  const [showPendLoanApp, setShowPendLoanApp] = useState(false);
  const [currentPendLoanApp, setCurrentPendLoanApp] = useState({});
  const [showApproveForm, setShowApproveForm] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [grantedAmount, setGrantedAmount] = useState(0);
  const [rejectionReason, setRejectionReason] = useState("");
  const [newRepaymentStructure, setNewRepaymentStructure] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredApprovedLoanList, setFilteredApprovedLoanList] = useState([]);
  const [filteredRejectedLoanList, setFilteredRejectedLoanList] = useState([]);
  const [filteredPendingLoanList, setFilteredPendingLoanList] = useState([]);
  const [showRepaymentStatus, setShowRepaymentStatus] = useState(false);
  const [showRepaymentConfirmation, setShowRepaymentConfirmation] = useState(false);
  const [showConfirmApprove, setShowConfirmApprove] = useState(false);
  const [showConfirmReject, setShowConfirmReject] = useState(false);

  const approvedLoanList = [
    {
      loanId: 1,
      fpoId: 'F111111',
      fpoName: "FPO 1",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "100000",
      reasonForRejection: "",
      status: "Approved",
      numberOfRequests: '2',
    },
    {
      loanId: 3,
      fpoId: 'F333333',
      fpoName: "FPO 3",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "100000",
      reasonForRejection: "",
      status: "Approved",
      numberOfRequests: '2',
    },
    {
      loanId: 4,
      fpoId: 'F444444',
      fpoName: "FPO 4",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "50000",
      reasonForRejection: "",
      status: "Approved",
      numberOfRequests: '2',
    },
    {
      loanId: 8,
      fpoId: 'F888888',
      fpoName: "FPO 8",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "80000",
      reasonForRejection: "",
      status: "Approved",
      numberOfRequests: '2',
    },
    {
      loanId: 9,
      fpoId: 'F999999',
      fpoName: "FPO 9",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "70000",
      reasonForRejection: "",
      status: "Approved",
      numberOfRequests: '2',
    },
  ];

  const rejectedLoanList = [
    {
      loanId: 5,
      fpoId: 'F555555',
      fpoName: "FPO 5",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "",
      reasonForRejection: "Not eligible",
      status: "Rejected",
      numberOfRequests: '2',
    },
    {
      loanId: 7,
      fpoId: 'F777777',
      fpoName: "FPO 7",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "",
      reasonForRejection: "Not eligible",
      status: "Rejected",
      numberOfRequests: '2',
    },
    {
      loanI: 10,
      fpoId: 'F101010',
      fpoName: "FPO 10",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "",
      reasonForRejection: "Not eligible",
      status: "Rejected",
      numberOfRequests: '2',
    },
  ];

  const pendingLoanList = [
    {
      loanId: 2,
      fpoId: 'F222222',
      fpoName: "FPO 2",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "",
      reasonForRejection: "",
      status: "Pending",
      tenure: 12,
      interest: 12,
    },
    {
      loanId: 6,
      fpoId: 'F666666',
      fpoName: "FPO 6",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      requestedAmount: "100000",
      grantedAmount: "",
      reasonForRejection: "",
      status: "Pending",
      tenure: 12,
      interest: 12,
    },
  ];

  const handleShowRepaymentStructure = () => setshowRepaymentStructure(true);
  const handleCloseRepaymentStructure = () => setshowRepaymentStructure(false);
  const handleShowRejLoanApp = () => setShowRejLoanApp(true);
  const handleCloseRejLoanApp = () => setShowRejLoanApp(false);
  const handleShowPendLoanApp = () => setShowPendLoanApp(true);
  const handleClosePendLoanApp = () => setShowPendLoanApp(false);
  const handleShowApproveForm = () => setShowApproveForm(true);
  const handleCloseApproveForm = () => setShowApproveForm(false);
  const handleShowRejectForm = () => setShowRejectForm(true);
  const handleCloseRejectForm = () => setShowRejectForm(false);
  const handleShowConfirmApprove = () => setShowConfirmApprove(true);
  const handleCloseConfirmApprove = () => setShowConfirmApprove(false);
  const handleShowConfirmReject = () => setShowConfirmReject(true);
  const handleCloseConfirmReject = () => setShowConfirmReject(false);

  const changeLoanStatus = (e, loanApp) => {
    e.preventDefault();
    if (e.target.value === "Approved") {
      setCurrentPendLoanApp(loanApp);
      setShowApproveForm(true);
    }
    else if (e.target.value === "Rejected") {
      setCurrentPendLoanApp(loanApp);
      setShowRejectForm(true);
    }
  };

  const approveLoan = (e) => {
    e.preventDefault();
    setShowApproveForm(false);
    handleCloseConfirmApprove();
    handleClosePendLoanApp();
  };

  const rejectLoan = (e) => {
    e.preventDefault();
    setShowRejectForm(false);
    handleCloseConfirmReject();
    handleClosePendLoanApp();
  };

  const searchLoans = () => {
    const filteredApprovedLoans = approvedLoanList.filter((loan) => {
      return (
        loan.fpoId.toLowerCase().includes(searchText.toLowerCase()) ||
        loan.fpoName.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    const filteredRejectedLoans = rejectedLoanList.filter((loan) => {
      return (
        loan.fpoId.toLowerCase().includes(searchText.toLowerCase()) ||
        loan.fpoName.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    const filteredPendingLoans = pendingLoanList.filter((loan) => {
      return (
        loan.fpoId.toLowerCase().includes(searchText.toLowerCase()) ||
        loan.fpoName.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredApprovedLoanList(filteredApprovedLoans);
    setFilteredRejectedLoanList(filteredRejectedLoans);
    setFilteredPendingLoanList(filteredPendingLoans);
  };

  const [step, setStep] = useState(0);

  const [noOfRows, setNoOfRows] = useState(1);

  const handleShowRepaymentStatus = () => setShowRepaymentStatus(true);
  const handleCloseRepaymentStatus = () => setShowRepaymentStatus(false);
  const handleShowRepaymentConfirmation = () => setShowRepaymentConfirmation(true);
  const handleCloseRepaymentConfirmation = () => setShowRepaymentConfirmation(false);

  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    searchLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="sammunati">
      <Sidebar />
      <div className="sammunatiContainer">
        <Navbar />
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
                  Farmer Loans
                </h3>
              </div>
              <div className="tabs_wrapper">
                <ul className="nav-tab">
                  <TabNavItem
                    title="Approved Loan Windows"
                    className="mr-3"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Rejected Loan Windows"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Pending Loan Windows"
                    id="tab3"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </ul>
                <div className="outlet">
                  <TabContent id="tab1" activeTab={activeTab}>
                    <div
                      className="form-group"
                      style={{
                        width: '20%',
                        marginBottom: '1%',
                        borderRadius: '5px',
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by FPO Name or FPO ID"
                        style={{
                          color: "#000",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          searchLoans();
                        }}
                      />
                    </div>
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
                                  <td>Date of Loan Window Approval</td>
                                  <td>FPO ID</td>
                                  <td>Name of FPO</td>
                                  <td>FPO Contact</td>
                                  <td>Granted Window Amount</td>
                                  <td>Repayment Structure</td>
                                  <td>Number of Pending Loan Requests</td>
                                  <td>Loan Requests</td>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  color: "#000",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                {filteredApprovedLoanList.map((app) => (
                                  <tr>
                                    <td>{app.dateOfApp}</td>
                                    <td>{app.fpoId}</td>
                                    <td>{app.fpoName}</td>
                                    <td>{app.contact}</td>
                                    <td>{app.grantedAmount}</td>
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
                                          handleShowRepaymentStructure();
                                        }}
                                      >
                                        view
                                      </button>
                                    </td>
                                    <td>{app.numberOfRequests}</td>
                                    <td>
                                      <Link to="/samunnati/farmer-subloan"
                                        className="data_wrapper"
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
                                          textDecoration: "none",
                                          fontWeight: "400"
                                        }}
                                        onClick={() => {
                                          localStorage.setItem("fpoId", app.fpoId);
                                        }}
                                      >
                                        view
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Modal
                        size="xl"
                        show={showRepaymentStructure}
                        onHide={handleCloseRepaymentStructure}
                      >
                        <Modal.Header closeButton>
                          Repayment Structure
                        </Modal.Header>
                        <Modal.Body>
                          <div>
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
                                    <th>Repayment</th>
                                    <th>Balance</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>12-10-2021</td>
                                    <td>100000</td>
                                    <td>
                                      <button
                                        style={{
                                          color: "blue",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "100%",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                          textDecoration: "underline",
                                          backgroundColor: "rgb(255, 255, 255, 0)",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleShowRepaymentStatus();
                                        }}
                                      >
                                        Repayment
                                      </button>
                                    </td>
                                    <td>90000</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>12-10-2021</td>
                                    <td>100000</td>
                                    <td>
                                      <button
                                        style={{
                                          color: "blue",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "100%",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                          textDecoration: "underline",
                                          backgroundColor: "rgb(255, 255, 255, 0)",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleShowRepaymentStatus();
                                        }}
                                      >
                                        Repayment
                                      </button>
                                    </td>
                                    <td>90000</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>12-10-2021</td>
                                    <td>100000</td>
                                    <td>
                                      <button
                                        style={{
                                          color: "blue",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "100%",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                          textDecoration: "underline",
                                          backgroundColor: "rgb(255, 255, 255, 0)",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleShowRepaymentStatus();
                                        }}
                                      >
                                        Repayment
                                      </button>
                                    </td>
                                    <td>90000</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>12-10-2021</td>
                                    <td>100000</td>
                                    <td>
                                      <button
                                        style={{
                                          color: "blue",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "100%",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                          textDecoration: "underline",
                                          backgroundColor: "rgb(255, 255, 255, 0)",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleShowRepaymentStatus();
                                        }}
                                      >
                                        Repayment
                                      </button>
                                    </td>
                                    <td>90000</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>12-10-2021</td>
                                    <td>100000</td>
                                    <td>
                                      <button
                                        style={{
                                          color: "blue",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "100%",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                          textDecoration: "underline",
                                          backgroundColor: "rgb(255, 255, 255, 0)",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleShowRepaymentStatus();
                                        }}
                                      >
                                        Repayment
                                      </button>
                                    </td>
                                    <td>90000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div>
                      <Modal show={showRepaymentStatus} onHide={handleCloseRepaymentStatus}>
                        <Modal.Header closeButton>Repayment</Modal.Header>
                        <Modal.Body>
                          <div className="row">
                            <div className="col-lg-6">
                              <label style={{ marginTop: '10%' }}>Repayment Date</label>
                            </div>
                            <div className="col-lg-6">
                              <input
                                type="date"
                                className="form-control"
                                style={{ marginTop: '7.5%' }}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label style={{ marginTop: '20%' }}>Repayment Amount</label>
                            </div>
                            <div className="col-lg-6">
                              <input
                                type="number"
                                className="form-control"
                                style={{ marginTop: '17.5%' }}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <button
                                className="btn btn-primary"
                                style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
                                onClick={() => { handleShowRepaymentConfirmation() }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div>
                      <Modal show={showRepaymentConfirmation} onHide={handleCloseRepaymentConfirmation}>
                        <Modal.Header closeButton>Confirm</Modal.Header>
                        <Modal.Body>
                          <p>
                            Confirm Repayment Details?
                          </p>
                          <div className="row">
                            <div className="col-lg-6">
                              <button
                                className="btn btn-primary"
                                style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
                                onClick={() => {
                                  handleCloseRepaymentConfirmation();
                                  handleCloseRepaymentStatus();
                                }}
                              >
                                Yes
                              </button>
                            </div>
                            <div className="col-lg-6">
                              <button
                                className="btn btn-primary"
                                style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
                                onClick={() => { handleCloseRepaymentConfirmation() }}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </TabContent>
                  <TabContent id="tab2" activeTab={activeTab}>
                    <div
                      className="form-group"
                      style={{
                        width: '20%',
                        marginBottom: '1%',
                        borderRadius: '5px',
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by FPO Name or FPO ID"
                        style={{
                          color: "#000",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          searchLoans();
                        }}
                      />
                    </div>
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
                                  <td>Date of Application</td>
                                  <td>FPO ID</td>
                                  <td>Name of FPO</td>
                                  <td>Contact No.</td>
                                  <td>Requested Window Amount</td>
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
                                {
                                  filteredRejectedLoanList.map((app) => (
                                    <tr>
                                      <td>{app.dateOfApp}</td>
                                      <td>{app.fpoId}</td>
                                      <td>{app.fpoName}</td>
                                      <td>{app.contact}</td>
                                      <td>{app.requestedAmount}</td>
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
                                            setCurrentRejLoanApp(app);
                                            handleShowRejLoanApp();
                                          }}
                                        >
                                          view
                                        </button>
                                      </td>
                                      <td>{app.reasonForRejection}</td>
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </table>
                          </div>
                          <div>
                            <Modal show={showRejLoanApp} onHide={handleCloseRejLoanApp}>
                              <Modal.Header closeButton>Loan Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>FPO Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentRejLoanApp.fpoName}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Contact No.</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentRejLoanApp.contact}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentRejLoanApp.dateOfApp}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Requested Amount</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentRejLoanApp.requestedAmount}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Reason for Rejection</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentRejLoanApp.reasonForRejection}
                                                disabled
                                              />
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
                        </div>
                      </div>
                    </div>

                  </TabContent>
                  <TabContent id="tab3" activeTab={activeTab}>
                    <div
                      className="form-group"
                      style={{
                        width: '20%',
                        marginBottom: '1%',
                        borderRadius: '5px',
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by FPO Name or FPO ID"
                        style={{
                          color: "#000",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          searchLoans();
                        }}
                      />
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className="table-responsive">
                            <table
                              className="table table-borderless"
                            >
                              <thead
                                style={{
                                  color: "#064420",
                                  fontSize: "18px",
                                  verticalAlign: "top",
                                  textAlign: "center",
                                  fontWeight: "600",
                                }}
                              >
                                <tr>
                                  <td>Date of Application</td>
                                  <td>FPO ID</td>
                                  <td>Name of FPO</td>
                                  <td>Contact No.</td>
                                  <td>Requested Window Amount</td>
                                  <td>Loan Window Application</td>
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
                                  filteredPendingLoanList.map((app) => {
                                    return (
                                      <tr>
                                        <td>{app.dateOfApp}</td>
                                        <td>{app.fpoId}</td>
                                        <td>{app.fpoName}</td>
                                        <td>{app.contact}</td>
                                        <td>{app.requestedAmount}</td>
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
                                              setCurrentPendLoanApp(app);
                                              handleShowPendLoanApp();
                                            }}
                                          >
                                            view
                                          </button>
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </table>
                          </div>
                          {/* <div>
                            <Modal show={showPendLoanApp} onHide={handleClosePendLoanApp}>
                              <Modal.Header closeButton>Loan Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>FPO Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.fpoName}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Contact No.</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.contact}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.dateOfApp}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Requested Amount</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.requestedAmount}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              <select
                                                className="form-control"
                                                onChange={(e) => changeLoanStatus(e, currentPendLoanApp)}
                                              >
                                                <option value="Pending">Change Loan Status</option>
                                                <option value="Approved">Approve</option>
                                                <option value="Rejected">Reject</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div> */}
                          <div>
                            <Modal
                              size="lg"
                              show={showPendLoanApp}
                              onHide={handleClosePendLoanApp}
                              scrollable={true}
                            // contentClassName="modal-height"
                            >
                              <Modal.Header closeButton>Loan Window Application</Modal.Header>
                              <Modal.Body>
                                {step === 0 && (
                                  <div className="row">
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
                                                    disabled
                                                    value={"W123456"}
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Requested Loan Window Amount</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    disabled
                                                    value={1000000}
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Loan Window Tenure (in months)</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    disabled
                                                    value={1}
                                                  />
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
                                  <div className="row">
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
                                              <div className="col-lg-6">
                                                <label>List of Directors</label>
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
                                            {[...Array(noOfRows)].map((element, index) => {
                                              return (
                                                <>
                                                  <div className="row m-2">
                                                    <div className="col-lg-6">
                                                      <label>ID Proof</label>
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
                                                      <label>Address Proof</label>
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
                                                </>
                                              );
                                            })}
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
                                {step === 3 && (
                                  <div className="row">
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
                                                <div className="col-lg-6">
                                                  <label>Incorporation Details</label>
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
                                                  <label>Brief Profile of the Promoting Organization</label>
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
                                                  <label>Networth Statement of the Promoter</label>
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
                                                <h5 className="mt-3">Applicable License</h5>
                                                <div className="row m-2">
                                                  <div className="col-lg-6">
                                                    <label>Input Licences</label>
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
                                                    <label>Fertilizer Licences</label>
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
                                  <div className="row">
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
                                                <div className="col-lg-6">
                                                  <label>Last 3 years Audited Financial Statements</label>
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
                                                  <label>Current Year Provisional/Interim Financials</label>
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
                                                  <label>Month Wise Purchase and Sales Data for Last 6 Months</label>
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
                                                  <label>Latest 3 Months Stock Statement</label>
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
                                                  <label>Business Plan</label>
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
                                                  <label>Bank Statement for Last 1 Year</label>
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
                                                  <label>Sanction Letter Copies</label>
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
                                                  <label>GST Returns for the Past 6 Months</label>
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
                                  <div className="row">
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
                                                <div className="col-lg-6">
                                                  <label>Product wise break up of revenues (2 fiscal)</label>
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
                                                  <label>Latest 3 Months Stocks Statements</label>
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
                                                  <label>Debtors Ageing Analysis Fiscal Year End</label>
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
                                                  <label>Top 5 Suppliers/Vintage (last 6 months)</label>
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
                                                  <label>Top 5 Buyers/Vintage (last 6 months)</label>
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
                                                  <label>Sanction Limit & O/s for both WC & TL</label>
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
                                                  <label>Term Loan Summary</label>
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
                                                  <label>Project Estimate & Other Relevant Documents</label>
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
                                                    // <button
                                                    //   className="btn btn-success"
                                                    //   onClick={(e) => changeLoanStatus(e, currentPendLoanApp)}
                                                    //   style={{
                                                    //     marginTop: "1rem",
                                                    //     backgroundColor: "#064420",
                                                    //     width: "100%",
                                                    //     position: "relative",
                                                    //     float: "right",
                                                    //     marginTop: '5%'
                                                    //   }}
                                                    // >
                                                    //   Update Loan Status
                                                    // </button>
                                                    <div className="row">
                                                      <div className="col-lg-12">
                                                        <select
                                                          className="form-control"
                                                          onChange={(e) => changeLoanStatus(e, currentPendLoanApp)}
                                                          style={{
                                                            marginTop: "1rem",
                                                            width: "100%",
                                                            position: "relative",
                                                            float: "right",
                                                            // eslint-disable-next-line no-dupe-keys
                                                            marginTop: '5%',
                                                          }}
                                                        >
                                                          <option value="Pending">Change Loan Window Status</option>
                                                          <option value="Approved">Approve Window</option>
                                                          <option value="Rejected">Reject Window</option>
                                                        </select>
                                                      </div>
                                                    </div>
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
                          <div>
                            <Modal show={showApproveForm} onHide={handleCloseApproveForm}>
                              <Modal.Header closeButton>Approve Farmer Loan Window Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>FPO Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.fpoName}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Contact No.</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.contact}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.dateOfApp}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Requested Amount</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.requestedAmount}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Granted Amount</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="number"
                                                className="form-control"
                                              // onInput={(e) => {setGrantedAmount(e.target.value)}}
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Farmer Loan Window Tenure (in months)</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="number"
                                                className="form-control"
                                                value={currentPendLoanApp.tenure}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Farmer Loan Window Interest Rate (%)</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="number"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              <button
                                                className="btn btn-primary"
                                                // onClick={(e) => approveLoan(e, currentPendLoanApp)}
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleShowConfirmApprove();
                                                }}
                                                style={{ float: "right", backgroundColor: '#064420' }}
                                              // disabled={grantedAmount == 0 || newRepaymentStructure == ""}
                                              >
                                                Approve Loan
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
                          <div>
                            <Modal show={showRejectForm} onHide={handleCloseRejectForm}>
                              <Modal.Header closeButton>Reject Loan Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>FPO Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.fpoName}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Contact No.</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.contact}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.dateOfApp}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Requested Amount</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoanApp.requestedAmount}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Reason for Rejection</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                              // onInput={(e) => {setRejectionReason(e.target.value)}}
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              <button
                                                className="btn btn-primary"
                                                // onClick={(e) => rejectLoan(e, currentPendLoanApp)}
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleShowConfirmReject();
                                                }}
                                                style={{ float: "right", backgroundColor: '#064420' }}
                                              // disabled={rejectionReason == ""}
                                              >
                                                Reject Loan
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
                          <div>
                            <Modal show={showConfirmApprove} onHide={handleCloseConfirmApprove}>
                              <Modal.Header closeButton>Confirm Approve Farmer Loan Window Application</Modal.Header>
                              <Modal.Body>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <label>Are you sure you want to approve this farmer loan window application?</label>
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
                                      onClick={handleCloseConfirmApprove}
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
                                        approveLoan(e, currentPendLoanApp);
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
                          <div>
                            <Modal show={showConfirmReject} onHide={handleCloseConfirmReject}>
                              <Modal.Header closeButton>Confirm Reject Farmer Loan Window Application</Modal.Header>
                              <Modal.Body>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <label>Are you sure you want to reject this farmer loan window application?</label>
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
                                      onClick={handleCloseConfirmReject}
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
                                        rejectLoan(e, currentPendLoanApp);
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
                      </div>
                    </div>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samunnati_Farmer_Loan;
