/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Dashboard.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/img/logo.png";
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/Button";
// eslint-disable-next-line no-unused-vars
import { ShowChart } from "@mui/icons-material";

const Sammunati_FPO_SubLoan_Page = () => {
  const [currentLoan, setCurrentLoan] = useState({});
  const [currentTransaction, setCurrentTransaction] = useState({});
  const [showCompletedLoanDetails, setShowCompletedLoanDetails] = useState(false);
  const [showOngoingLoanDetails, setShowOngoingLoanDetails] = useState(false);
  const [showPendingLoanDetails, setShowPendingLoanDetails] = useState(false);
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [showPaymentProof, setShowPaymentProof] = useState(false);
  const [showApproveForm, setShowApproveForm] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [showRepaymentStatus, setShowRepaymentStatus] = useState(false);
  const [showRepaymentConfirmation, setShowRepaymentConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("fpoId");
    navigate('/samunnati/fpo-loan', {replace: true});
  };

  // eslint-disable-next-line no-unused-vars
  const [fpoId, setFpoId] = useState(localStorage.getItem("fpoId"));

  const completedLoanList = [
    {
      id: "L 1",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 1",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 2",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 2",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 3",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 3",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 4",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 4",
      lastPaymentDate: "2022-10-10",
    },
  ];
    
  const ongoingLoanList = [
    {
      id: "L 1",
      payeeName: "P 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 1",
      dateOfApproval: "2021-10-10",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
    {
      id: "L 2",
      payeeName: "P 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 2",
      dateOfApproval: "2021-10-10",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
    {
      id: "L 3",
      payeeName: "P 3",
      accountNo: "1234567890",
      ifsc: "1234567890",
      amount: "1000000",
      tenure: "12",
      purpose: "Purpose 3",
      dateOfApproval: "2021-10-10",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
  ];

  const completedTransactionDetails = [
    {
      transactionID: "T 1",
      receiverName: "R 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 2",
      receiverName: "R 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 3",
      receiverName: "R 3",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 3",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 4",
      receiverName: "R 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 5",
      receiverName: "R 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 6",
      receiverName: "R 3",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 3",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
  ];

  const requestedTransactionDetails = [
    {
      loanId: "L 1",
      receiverName: "R 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentAmount: "100000",
    },
    {
      loanId: "L 2",
      receiverName: "R 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentAmount: "100000",
    },
  ];

  const pendingLoanList = [
    {
      id: "L 1",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      windowId: "W123456",
      payeeName: "P 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      interest: "12",
      tenure: "12",
      purpose: "Purpose 1",
    },
    {
      id: "L 2",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      windowId: "W654321",
      payeeName: "P 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      interest: "12",
      tenure: "12",
      purpose: "Purpose 2",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleShowCompletedLoanDetails = () => setShowCompletedLoanDetails(true);
  const handleCloseCompletedLoanDetails = () => {
    setFirstPage(true);
    setSecondPage(false);
    setThirdPage(false);
    setShowCompletedLoanDetails(false);
  };

  const handleShowOngoingLoanDetails = () => setShowOngoingLoanDetails(true);
  const handleCloseOngoingLoanDetails = () => {
    setFirstPage(true);
    setSecondPage(false);
    setThirdPage(false);
    setShowOngoingLoanDetails(false);
  };
  const handleShowPendingLoanDetails = () => setShowPendingLoanDetails(true);
  const handleClosePendingLoanDetails = () => setShowPendingLoanDetails(false);

  const handleCurrentTransaction = () => {
    // eslint-disable-next-line array-callback-return
    completedTransactionDetails.map((transaction) => {
      if (transaction.transactionID === currentLoan.transactionID) {
        setCurrentTransaction(transaction);
      }
    })
    // eslint-disable-next-line array-callback-return
    requestedTransactionDetails.map((transaction) => {
      if (transaction.loanId === currentLoan.id) {
        setCurrentTransaction(transaction);
      }
    })
  };

  const handleShowPaymemntProof = () => setShowPaymentProof(true);
  const handleClosePaymentProof = () => setShowPaymentProof(false);
  // eslint-disable-next-line no-unused-vars
  const handleShowApproveForm = () => setShowApproveForm(true);
  const handleCloseApproveForm = () => setShowApproveForm(false);
  // eslint-disable-next-line no-unused-vars
  const handleShowRejectForm = () => setShowRejectForm(true);
  const handleCloseRejectForm = () => setShowRejectForm(false);

  const handlePendingLoanStatus = (e) => {
    e.preventDefault();
    if(e.target.value === "Approved") {
      setShowApproveForm(true);
    }
    else if(e.target.value === "Rejected") {
      setShowRejectForm(true);
    }
  };

  const handleShowRepaymentStatus = () => setShowRepaymentStatus(true);
  const handleCloseRepaymentStatus = () => setShowRepaymentStatus(false);
  const handleShowRepaymentConfirmation = () => setShowRepaymentConfirmation(true);
  const handleCloseRepaymentConfirmation = () => setShowRepaymentConfirmation(false);

  useEffect(() => {
    handleCurrentTransaction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLoan]);

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer" style={{marginTop: "-3.188rem"}}>
        <Sidebar />
        <main id="main_container" className="main_container container-fluid" style={{marginTop: "3.188rem"}}>
          <div className="">
            <h3 className="mb-4">FPO Loan Requests</h3>
          </div>
          <div className="list_container">
            <div className="back_btn mt-3 mb-4">
              <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />Back to FPO Loan Page</button>
            </div>
            <div className="list_tab">
              <div className="itemContainer">
                <div className="list_title">
                  <div className="container-fluid">
                    <div className="tabs_wrapper">
                      <ul className="nav-tab">
                      <TabNavItem
                          title="Profile"
                          id="tab1"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Loan History"
                          className="mr-3"
                          id="tab2"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Ongoing Loans"
                          id="tab3"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Pending Loans"
                          id="tab4"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                      </ul>
                      <div className="outlet">
                        <TabContent id="tab1" activeTab={activeTab}>
                          <div className="row">
                            <div className="col">
                              <div className="card shadow">
                                <div className="card_table">
                                  <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
                                    FPO Information
                                  </h6>
                                  <div className="pl-lg-4">
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ID
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            {fpoId}
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Name
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Name
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Phone
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Phone
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Email
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Email
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Location
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Location
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Approved Loan Amount
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            100000
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                                        <td>Loan ID</td>
                                        <td>Date of Application</td>
                                        <td>Loan Amount</td>
                                        <td>View Transaction Details</td>
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
                                        completedLoanList.map((loan) => (
                                          <tr>
                                            <td>{loan.id}</td>
                                            <td>{loan.dateOfApp}</td>
                                            <td>{loan.loanAmount}</td>
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
                                                    setCurrentLoan(loan);
                                                    handleCurrentTransaction();
                                                    handleShowCompletedLoanDetails();
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
                              <div style={{marginTop: '2%'}}>
                                  <p>
                                    Remaining Loan Window: 60000
                                  </p>
                                </div>
                            </div>
                          </div>
                          <div>
                            <Modal show={showCompletedLoanDetails} onHide={handleCloseCompletedLoanDetails}>
                              <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      {
                                        firstPage && (
                                          <div className="form">
                                            <div className="card p-2">
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>FPO ID</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={fpoId}
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
                                                    value={currentLoan.dateOfApp}
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
                                                    value={currentLoan.loanAmount}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Amount Paid</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.loanAmount}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Date of Last Payment</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.lastPaymentDate}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-12">
                                                  <button
                                                    className="btn btn-primary"
                                                    onClick={() => setFirstPage(false)}
                                                    style={{ float: "right", backgroundColor: '#064420', marginTop: '10%'}}
                                                  >
                                                    View Transaction Details
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      }
                                      {
                                        !firstPage && (
                                          <div className="form">
                                            <div className="card p-2">
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Receiver Name</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.receiverName}
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
                                                    value={currentTransaction.bankName}
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
                                                    value={currentTransaction.accountNo}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>IFSC Code</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.ifsc}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Payment Date</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    value={currentTransaction.paymentDate}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Payment Reference Number</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.paymentRefNo}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Proof of Payment</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <button
                                                    style={{
                                                      backgroundColor: "#064420",
                                                      color: "#fff",
                                                      alignItems: "center",
                                                      borderRadius: "5px",
                                                      border: "none",
                                                      padding: "0.25rem 1rem",
                                                      width: "100%",
                                                      fontSize: "1rem",
                                                      lineHeight: "2rem",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleShowPaymemntProof();
                                                    }}
                                                  >
                                                    view
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-12">
                                                  <button
                                                    className="btn btn-primary"
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleCloseCompletedLoanDetails();
                                                    }}
                                                    style={{ float: "right", backgroundColor: '#064420', marginTop: '10%'}}
                                                  >
                                                    Close
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      }
                                    </form>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                          <div>
                            <Modal show={showPaymentProof} onHide={handleClosePaymentProof}>
                              <Modal.Header closeButton>Proof of Payment</Modal.Header>
                              <Modal.Body>
                         
                                <img
                                  src={logo}
                                  alt="Payment Image"
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </Modal.Body>
                            </Modal>
                          </div>
                        </TabContent>
                        <TabContent id="tab3" activeTab={activeTab}>
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
                                        <td>Loan ID</td>
                                        <td>Date of Loan Approval</td>
                                        <td>Loan Amount</td>
                                        <td>Outstanding Amount</td>
                                        <td>Next Payment Amount</td>
                                        <td>Next Payment Date</td>
                                        <td>View Loan Details</td>
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
                                        ongoingLoanList.map((loan) => {
                                          return (
                                            <tr>
                                              <td>{loan.id}</td>
                                              <td>{loan.dateOfApproval}</td>
                                              <td>{loan.amount}</td>
                                              <td>{loan.outstandingAmount}</td>
                                              <td>{loan.nextPaymentAmount}</td>
                                              <td>{loan.nextPaymentDate}</td>
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
                                                    setCurrentLoan(loan);
                                                    handleCurrentTransaction();
                                                    handleShowOngoingLoanDetails();
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
                              </div>
                              <div style={{marginTop: '2%'}}>
                                  <p>
                                    Total amount to be paid in next installment: 30000
                                  </p>
                                </div>
                            </div>
                          </div>
                          <div>
                            <Modal show={showOngoingLoanDetails} onHide={handleCloseOngoingLoanDetails} size='xl'>
                              <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      {
                                        firstPage && (
                                          <div className="form">
                                            <div className="card p-2">
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
                                                  <label>IFSC Code</label>
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
                                                  <label>Tenure of Loan (in months)</label>
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
                                                      backgroundColor: "#064420",
                                                      color: "#fff",
                                                      alignItems: "center",
                                                      borderRadius: "5px",
                                                      border: "none",
                                                      padding: "0.25rem 1rem",
                                                      width: "100%",
                                                      fontSize: "1rem",
                                                      lineHeight: "2rem",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleShowPaymemntProof();
                                                    }}
                                                  >
                                                    view
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Payment Proof</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <button
                                                    style={{
                                                      backgroundColor: "#064420",
                                                      color: "#fff",
                                                      alignItems: "center",
                                                      borderRadius: "5px",
                                                      border: "none",
                                                      padding: "0.25rem 1rem",
                                                      width: "100%",
                                                      fontSize: "1rem",
                                                      lineHeight: "2rem",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleShowPaymemntProof();
                                                    }}
                                                  >
                                                    view
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-12">
                                                  <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                      setSecondPage(true);
                                                      setFirstPage(false);
                                                    }}
                                                    style={{ float: "right", backgroundColor: '#064420' }}
                                                  >
                                                    View Repayment Details
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      }
                                      {
                                        secondPage && (
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
                                        )
                                      }
                                      {
                                        thirdPage && (
                                          <div className="form">
                                            <div className="card p-2">
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Receiver Name</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.receiverName}
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
                                                    value={currentTransaction.bankName}
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
                                                    value={currentTransaction.accountNo}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>IFSC Code</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.ifsc}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Payment Date</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    value={currentTransaction.paymentDate}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Payment Reference Number</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentTransaction.paymentRefNo}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Proof of Payment</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <button
                                                    style={{
                                                      backgroundColor: "#064420",
                                                      color: "#fff",
                                                      alignItems: "center",
                                                      borderRadius: "5px",
                                                      border: "none",
                                                      padding: "0.25rem 1rem",
                                                      width: "100%",
                                                      fontSize: "1rem",
                                                      lineHeight: "2rem",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleShowPaymemntProof();
                                                    }}
                                                  >
                                                    view
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-12">
                                                  <button
                                                    className="btn btn-primary"
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      handleCloseOngoingLoanDetails();
                                                    }}
                                                    style={{ float: "right", backgroundColor: '#064420' }}
                                                  >
                                                    Close
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      }
                                    </form>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                          <div>
                            <Modal show={showPaymentProof} onHide={handleClosePaymentProof}>
                              <Modal.Header closeButton>Proof of Payment</Modal.Header>
                              <Modal.Body>
                                <img
                                  src={logo}
                                  alt="Payment Image"
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </Modal.Body>
                            </Modal>
                          </div>
                          <div>
                            <Modal show={showRepaymentStatus} onHide={handleCloseRepaymentStatus}>
                              <Modal.Header closeButton>Repayment</Modal.Header>
                              <Modal.Body>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <label style={{marginTop: '10%'}}>Repayment Date</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="date"
                                      className="form-control"
                                      style={{marginTop: '7.5%'}}
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <label style={{marginTop: '20%'}}>Repayment Amount</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="number"
                                      className="form-control"
                                      style={{marginTop: '17.5%'}}
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <button
                                      className="btn btn-primary"
                                      style={{ float: "right", backgroundColor: '#064420', marginTop: '10%', width: '100%' }}
                                      onClick={() => {handleShowRepaymentConfirmation()}}
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
                                      onClick={() => {handleCloseRepaymentConfirmation()}}
                                    >
                                      No
                                    </button>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </TabContent>
                        <TabContent id="tab4" activeTab={activeTab}>
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
                                        <td>Loan ID</td>
                                        <td>Date of Application</td>
                                        <td>Loan Amount</td>
                                        <td>View Loan Application</td>
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
                                        pendingLoanList.map((loan) => {
                                          return (
                                            <tr>
                                              <td>{loan.id}</td>
                                              <td>{loan.dateOfApp}</td>
                                              <td>{loan.loanAmount}</td>
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
                                                    setCurrentLoan(loan);
                                                    handleCurrentTransaction();
                                                    handleShowPendingLoanDetails();
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
                              </div>
                            </div>
                          </div>
                          <div>
                            <Modal show={showPendingLoanDetails} onHide={handleClosePendingLoanDetails}>
                              <Modal.Header closeButton>Loan Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Loan Window ID</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              type="text"
                                              className="form-control"
                                              value={currentLoan.windowId}
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
                                              type="number"
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
                                              value={currentLoan.loanAmount}
                                              disabled
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
                                              value={currentLoan.interest}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Tenure of Loan in Months</label>
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
                                            <label>Invoice</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <button
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "0.25rem 1rem",
                                                width: "100%",
                                                fontSize: "1rem",
                                                lineHeight: "1.5rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                handleShowPaymemntProof();
                                              }}
                                            >
                                              View
                                            </button>
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
                                            <div className="col-lg-12">
                                              <select
                                                  className="form-control"
                                                  onChange={(e) => handlePendingLoanStatus(e)}
                                                  style={{marginTop: '7%'}}
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
                          </div>
                          <div>
                            <Modal show={showPaymentProof} onHide={handleClosePaymentProof}>
                              <Modal.Header closeButton>Proof of Payment</Modal.Header>
                              <Modal.Body>
                                <img
                                  src={logo}
                                  alt="Payment Image"
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </Modal.Body>
                            </Modal>
                          </div>
                          <div>
                            <Modal show={showApproveForm} onHide={handleCloseApproveForm}>
                              <Modal.Header closeButton>Approve Loan Application</Modal.Header>
                              <Modal.Body>
                                <div className="row ">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <div className="card p-2">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentLoan.dateOfApp}
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
                                                value={currentLoan.loanAmount}
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
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Tenure (in months)</label>
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
                                              <label>Interest Rate</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="number"
                                                className="form-control"
                                                value={currentLoan.interest}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Payment Proof</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="file"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              <button
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleCloseApproveForm();
                                                  handleClosePendingLoanDetails();
                                                }}
                                                style={{ float: "right", backgroundColor: '#064420' }}
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
                                              <label>Date of Application</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentLoan.dateOfApp}
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
                                                value={currentLoan.loanAmount}
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
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              <button
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleCloseRejectForm();
                                                  handleClosePendingLoanDetails();
                                                }}
                                                style={{ float: "right", backgroundColor: '#064420' }}
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
                        </TabContent>
                      </div>
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

export default Sammunati_FPO_SubLoan_Page;
