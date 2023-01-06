/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
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
import Button from "react-bootstrap/Button";
import { ShowChart } from "@mui/icons-material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

const Sammunati_Farmer_SubLoan_Page = () => {
  const [currentLoan, setCurrentLoan] = useState({});
  const [currentTransaction, setCurrentTransaction] = useState({});
  const [showCompletedLoanDetails, setShowCompletedLoanDetails] = useState(false);
  const [showOngoingLoanDetails, setShowOngoingLoanDetails] = useState(false);
  const [showPendingLoanDetails, setShowPendingLoanDetails] = useState(false);
  const [firstPage, setFirstPage] = useState(true);
  const [showPaymentProof, setShowPaymentProof] = useState(false);
  const [step, setStep] = useState(0);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [currentPendLoan, setCurrentPendLoan] = useState({});
  const [showApproveForm, setShowApproveForm] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [showConfirmApprove, setShowConfirmApprove] = useState(false);
  const [showConfirmReject, setShowConfirmReject] = useState(false);
  const [showAadharCardImg, setShowAadharCardImg] = useState(false);
  const [showPanCardImg, setShowPanCardImg] = useState(false);

  const handleShowApproveForm = () => setShowApproveForm(true);
  const handleCloseApproveForm = () => setShowApproveForm(false);
  
  const handleShowRejectForm = () => setShowRejectForm(true);
  const handleCloseRejectForm = () => setShowRejectForm(false);

  const handleShowConfirmApprove = () => setShowConfirmApprove(true);
  const handleCloseConfirmApprove = () => setShowConfirmApprove(false);

  const handleShowConfirmReject = () => setShowConfirmReject(true);
  const handleCloseConfirmReject = () => setShowConfirmReject(false);

  const handleShowAadharCardImg = () => setShowAadharCardImg(true);
  const handleShowPanCardImg = () => setShowPanCardImg(true);
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false);
  const handleClosePanCardImg = () => setShowPanCardImg(false);

  const handlePendingLoanStatus = (e) => {
    e.preventDefault();
    if(e.target.value === "Approved") {
      setShowApproveForm(true);
    }
    else if(e.target.value === "Rejected") {
      setShowRejectForm(true);
    }
  };

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  const confirmBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("fpoId");
    navigate('/samunnati/farmer-loan', {replace: true});
  };

  const [fpoId, setFpoId] = useState(localStorage.getItem("fpoId"));

  const completedLoanList = [
    {
      id: "L 1",
      farmerID: "F 1",
      farmerName: "Farmer 1",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 1",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 2",
      farmerID: "F 2",
      farmerName: "Farmer 2",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 2",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 3",
      farmerID: "F 3",
      farmerName: "Farmer 3",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 3",
      lastPaymentDate: "2022-10-10",
    },
    {
      id: "L 4",
      farmerID: "F 4",
      farmerName: "Farmer 4",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      transactionID: "T 4",
      lastPaymentDate: "2022-10-10",
    },
  ];
    
  const ongoingLoanList = [
    {
      id: "L 1",
      farmerID: "F 1",
      farmerName: "Farmer 1",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
      transactionID: "T 4",
      tenure: "12",
    },
    {
      id: "L 2",
      farmerID: "F 2",
      farmerName: "Farmer 2",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
      transactionID: "T 5",
      tenure: "12",
    },
    {
      id: "L 3",
      farmerID: "F 3",
      farmerName: "Farmer 3",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
      transactionID: "T 6",
      tenure: "12",
    },
  ];

  const completedTransactionDetails = [
    {
      transactionID: "T 1",
      farmerID: "F 1",
      farmerName: "Farmer 1",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 2",
      farmerID: "F 2",
      farmerName: "Farmer 2",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 3",
      farmerID: "F 3",
      farmerName: "Farmer 3",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 3",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 4",
      farmerID: "F 1",
      farmerName: "Farmer 1",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 5",
      farmerID: "F 2",
      farmerName: "Farmer 2",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentRefNo: "1234567890",
      paymentDate: "2021-10-10",
      paymentAmount: "100000",
    },
    {
      transactionID: "T 6",
      farmerID: "F 3",
      farmerName: "Farmer 3",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
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
      farmerID: "F 1",
      farmerName: "Farmer 1",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 1",
      paymentAmount: "100000",
    },
    {
      loanId: "L 2",
      farmerID: "F 2",
      farmerName: "Farmer 2",
      farmerContact: "1234567890",
      aadhar: "1234567890",
      pan: "1234567890",
      accountNo: "1234567890",
      ifsc: "1234567890",
      bankName: "B 2",
      paymentAmount: "100000",
    },
  ];

  const pendingLoanList = [
    {
      id: "L 1",
      farmerID: "F 1",
      farmerName: "Farmer1",
      fpoName: "FPO 1",
      bankName: "B 1",
      accountNo: "1234567890",
      ifsc: "1234567890",
      branchName: "Br 1",
      applicantName: "A 1",
      requestedAmount: "100000",
      applicantGender: "Male",
      applicantMobile: "1234567890",
      applicantDOB: "2021-10-10",
      applicantAge: "20",
      aadharNo: "1234567890",
      panNo: "1234567890",
      coApplicantName: "CA 1",
      coApplicantGender: "Female",
      coApplicantDOB: "2021-10-10",
      coApplicantAge: "20",
      relationWithApplicant: "RA 1",
      applicantFatherName: "AF 1",
      applicantMotherName: "AM 1",
      doorNumber: "D 1",
      streetName: "St 1",
      village: "V 1",
      taluk: "T 1",
      district: "D 1",
      state: "State 1",
      pinCode: "123456",
      occupation: "O 1",
      education: "E 1",
      nativePlace: "NP 1",
      residence: "R 1",
      landHolding: "LH 1",
      typeOfLandHolding: "TLH 1",
      caste: "C 1",
      religion: "Rg 1",
      monthlyHHIncome: "100000",
      monthlyHHExpenses: "100000",
      loanPurpose: "LP 1",
      loanTenure: "12",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      loanInterest: "12",
    },
    {
      id: "L 2",
      farmerID: "F 2",
      farmerName: "Farmer2",
      fpoName: "FPO 2",
      bankName: "B 2",
      accountNo: "1234567890",
      ifsc: "1234567890",
      branchName: "Br 2",
      applicantName: "A 2",
      requestedAmount: "100000",
      applicantGender: "Female",
      applicantMobile: "1234567890",
      applicantDOB: "2021-10-10",
      applicantAge: "20",
      aadharNo: "1234567890",
      panNo: "1234567890",
      coApplicantName: "CA 2",
      coApplicantGender: "Male",
      coApplicantDOB: "2021-10-10",
      coApplicantAge: "20",
      relationWithApplicant: "RA 2",
      applicantFatherName: "AF 2",
      applicantMotherName: "AM 2",
      doorNumber: "D 2",
      streetName: "St 2",
      village: "V 2",
      taluk: "T 2",
      district: "D 2",
      state: "State 2",
      pinCode: "123456",
      occupation: "O 2",
      education: "E 2",
      nativePlace: "NP 2",
      residence: "R 2",
      landHolding: "LH 2",
      typeOfLandHolding: "TLH 2",
      caste: "C 2",
      religion: "Rg 2",
      monthlyHHIncome: "100000",
      monthlyHHExpenses: "100000",
      loanPurpose: "LP 2",
      loanTenure: "12",
      contact: "1234567890",
      dateOfApp: "2021-10-10",
      loanInterest: "12",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleShowCompletedLoanDetails = () => setShowCompletedLoanDetails(true);
  const handleCloseCompletedLoanDetails = () => {
    setFirstPage(true);
    setShowCompletedLoanDetails(false);
  };

  const handleShowOngoingLoanDetails = () => setShowOngoingLoanDetails(true);
  const handleCloseOngoingLoanDetails = () => {
    setFirstPage(true);
    setShowOngoingLoanDetails(false);
  };
  const handleShowPendingLoanDetails = () => setShowPendingLoanDetails(true);
  const handleClosePendingLoanDetails = () => {
    setShowPendingLoanDetails(false);
    setStep(0);
  };

  const handleCurrentTransaction = () => {
    // eslint-disable-next-line array-callback-return
    completedTransactionDetails.map((transaction) => {
      if (transaction.transactionID === currentLoan.transactionID) {
        setCurrentTransaction(transaction);
      }
    })
    // eslint-disable-next-line array-callback-return
    requestedTransactionDetails.map((transaction) => {
      if (transaction.loanId === currentLoan.loanId) {
        setCurrentTransaction(transaction);
      }
    })
  };

  const handleShowPaymemntProof = () => setShowPaymentProof(true);
  const handleClosePaymentProof = () => setShowPaymentProof(false);

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
            <h3 className="mb-4">Farmer Loan Requests</h3>
          </div>
          <div className="list_container">
            <div className="back_btn mt-3 mb-4">
              <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />Back to Farmer Loan Page</button>
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
                                        <td>Farmer Name</td>
                                        <td>Contact</td>
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
                                            <td>{loan.farmerName}</td>
                                            <td>{loan.farmerContact}</td>
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
                                                  <label>Farmer ID</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.farmerID}
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
                                        <td>Farmer Name</td>
                                        <td>Contact</td>
                                        <td>Date of Loan Approval</td>
                                        <td>Loan Amount</td>
                                        {/* <td>View Loan Details</td> */}
                                        <td>Tenure (in months)</td>
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
                                              <td>{loan.farmerName}</td>
                                              <td>{loan.farmerContact}</td>
                                              <td>{loan.dateOfApp}</td>
                                              <td>{loan.loanAmount}</td>
                                              {/* <td>
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
                                              </td> */}
                                              <td>{loan.tenure}</td>
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
                            <Modal show={showOngoingLoanDetails} onHide={handleCloseOngoingLoanDetails}>
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
                                                  <label>Farmer ID</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.farmerID}
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
                                              {/* <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Amount Paid</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.loanAmount - currentLoan.outstandingAmount}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Amount Remaining</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.outstandingAmount}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Next Installment Date</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.nextPaymentDate}
                                                    disabled
                                                  />
                                                </div>
                                              </div>
                                              <div className="row m-2">
                                                <div className="col-lg-6">
                                                  <label>Next Installment Amount</label>
                                                </div>
                                                <div className="col-lg-6">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={currentLoan.nextPaymentAmount}
                                                    disabled
                                                  />
                                                </div>
                                              </div> */}
                                              {/* <div className="row m-2">
                                                <div className="col-lg-12">
                                                  <button
                                                    className="btn btn-primary"
                                                    onClick={() => setFirstPage(false)}
                                                    style={{ float: "right", backgroundColor: '#064420' }}
                                                  >
                                                    View Transaction Details
                                                  </button>
                                                </div>
                                              </div> */}
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
                                        <td>Farmer Name</td>
                                        <td>Contact</td>
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
                                              <td>{loan.farmerName}</td>
                                              <td>{loan.contact}</td>
                                              <td>{loan.dateOfApp}</td>
                                              <td>{loan.requestedAmount}</td>
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
                                                    setCurrentPendLoan(loan);
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
                                {step === 0 && (
                                <div className="row">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <label className="form-label select-label">
                                          <div className="">
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Loan ID</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.id}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>FPO Name</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.fpoName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Bank Name</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.bankName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Account Number</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.accountNo}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Bank IFSC</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.ifsc}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Branch Name</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.branchName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Applicant Name</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.applicantName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Loan Requested Amount</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.requestedAmount}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Applicant Gender</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.applicantGender}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Applicant Mobile Number</label>
                                              </div>
                                              <div className="col-lg-6 text-center">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.applicantMobile}
                                                  disabled
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
                                                      marginTop: "20px",
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
                                  <div className="col">
                                    <div className="form">
                                      <label className="form-label select-label">
                                        <div className="">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Applicant DOB</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <input
                                                type="date"
                                                className="form-control"
                                                value={currentPendLoan.applicantDOB}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Applicant Age</label>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoan.applicantAge}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Aadhar Card Number</label>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoan.aadharNo}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Aadhar Card Image</label>
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
                                                  handleShowAadharCardImg();
                                                }}
                                              >
                                                View
                                              </button>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>PAN Card Number</label>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoan.panNo}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>PAN Card Image</label>
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
                                                  handleShowPanCardImg();
                                                }}
                                              >
                                                View
                                              </button>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Co-Applicant Name</label>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoan.coApplicantName}
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Co-Applicant Gender</label>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value={currentPendLoan.coApplicantGender}
                                                disabled
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
                                          <div>
                                            <Modal
                                              show={showAadharCardImg}
                                              onHide={handleCloseAadharCardImg}
                                            >
                                              <Modal.Header closeButton>Aadhar Card</Modal.Header>
                                              <Modal.Body>
                                                <img src={logo} alt="Aadhar Card" style={{ width: "100%", height: "100%"}} />
                                              </Modal.Body>
                                            </Modal>
                                            <Modal
                                              show={showPanCardImg}
                                              onHide={handleClosePanCardImg}
                                            >
                                              <Modal.Header closeButton>PAN Card</Modal.Header>
                                              <Modal.Body>
                                                <img src={logo} alt="PAN Card" style={{ width: "100%", height: "100%"}} />
                                              </Modal.Body>
                                            </Modal>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {step === 2 && (
                                <div className="row mt-3">
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <label className="form-label select-label">
                                          <div className="">
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Co-Applicant DOB</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  value={currentPendLoan.coApplicantDOB}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Co-Applicant Age</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.coApplicantAge}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Relationship with Applicant</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.relationWithApplicant}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Applicant Father Name</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.applicantFatherName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Applicant Mother Name</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.applicantMotherName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Door Number</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.doorNumber}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Street Name</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.streetName}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Village</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.village}
                                                  disabled
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
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <label className="form-label select-label">
                                          <div className="">
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Taluk</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.taluk}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>District</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.district}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>State</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.state}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Pin Code</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.pinCode}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Occupation</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.occupation}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Education</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.education}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Nature of Place</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.nativePlace}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Residence</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.residence}
                                                  disabled
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
                                  <div className="col">
                                    <form>
                                      <div className="form">
                                        <label className="form-label select-label">
                                          <div className="">
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Land Holding</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.landHolding}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Type of Land Holding</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.typeOfLandHolding}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Caste</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.caste}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Religion</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.religion}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Monthly HH Income</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.monthlyHHIncome}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Monthly HH Expenses</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.monthlyHHExpenses}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Loan Purpose</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.loanPurpose}
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <div className="row m-2">
                                              <div className="col-lg-6">
                                                <label>Loan Tenure (months)</label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={currentPendLoan.loanTenure}
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
                                                    <option value="Approved">Approve Loan</option>
                                                    <option value="Rejected">Reject Loan</option>
                                                  </select>
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
                                              <Modal
                                                show={showConfirmBox}
                                                onHide={handleCloseConfirmBox}
                                              >
                                                <Modal.Body
                                                  closeButton
                                                  style={{
                                                    position: "absolute",
                                                    top: "10rem",
                                                    width: "60%",
                                                    height: "100px",
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
                                                      Your details are submitted!
                                                    </p>
                                                  </div>
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
                                                                <label>Loan ID</label>
                                                              </div>
                                                              <div className="col-lg-6">
                                                                <input
                                                                  type="text"
                                                                  className="form-control"
                                                                  value={currentPendLoan.id}
                                                                  disabled
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="row m-2">
                                                              <div className="col-lg-6">
                                                                <label>Loan Amount</label>
                                                              </div>
                                                              <div className="col-lg-6">
                                                                <input
                                                                  type="text"
                                                                  className="form-control"
                                                                  value={currentPendLoan.requestedAmount}
                                                                  disabled
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
                                                                  value={currentPendLoan.loanTenure}
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
                                                                  value={currentPendLoan.loanInterest}
                                                                  disabled
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="row m-2">
                                                              <div className="col-lg-6">
                                                                <label>Upload Payment Proof</label>
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
                                                                    handleShowConfirmApprove();
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
                                                                <label>Loan Amount</label>
                                                              </div>
                                                              <div className="col-lg-6">
                                                                <input
                                                                  type="text"
                                                                  className="form-control"
                                                                  value={currentPendLoan.requestedAmount}
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
                                                                    handleShowConfirmReject();
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
                                            <div>
                                              <Modal show={showConfirmApprove} onHide={handleCloseConfirmApprove}>
                                                <Modal.Header closeButton>Confirm Approve Loan Application</Modal.Header>
                                                <Modal.Body>
                                                  <div className="row">
                                                    <div className="col-lg-12">
                                                      <label>Are you sure you want to approve this loan application?</label>
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
                                                          handleCloseConfirmApprove();
                                                          handleCloseApproveForm();
                                                          handleClosePendingLoanDetails();
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
                                                <Modal.Header closeButton>Confirm Reject Loan Application</Modal.Header>
                                                <Modal.Body>
                                                  <div className="row">
                                                    <div className="col-lg-12">
                                                      <label>Are you sure you want to reject this loan application?</label>
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
                                                          handleCloseConfirmReject();
                                                          handleCloseRejectForm();
                                                          handleClosePendingLoanDetails();
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
                                        </label>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              )}
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

export default Sammunati_Farmer_SubLoan_Page;
