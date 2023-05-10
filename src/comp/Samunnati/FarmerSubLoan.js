import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import CompletedLoanApp from "./Modals/FarmerSubLoan/CompletedLoanApp";
import OngoingLoanApp from "./Modals/FarmerSubLoan/OngoingLoanApp";
import PendingLoanApp from "./Modals/FarmerSubLoan/PendingLoanApp";
import ApproveLoanApp from "./Modals/FarmerSubLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FarmerSubLoan/RejectLoanApp";
import ConfirmReject from "./Modals/FarmerSubLoan/ConfirmReject";
import PaymentProof from "./Modals/FpoSubLoan/PaymentProof";
import ConfirmBox from "../Fpo/Modals/FarmerLoan/ConfirmBox";
import Aadhar from "../Fpo/Modals/Aadhar";
import Pan from "../Fpo/Modals/Pan";
import axios from "axios";

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
  const [activeTab, setActiveTab] = useState("tab1");
  const [loanWindow, setLoanWindow] = useState([]);

  const handleCloseApproveForm = () => setShowApproveForm(false);
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
    if (e.target.value === "Approved") {
      setShowApproveForm(true);
    }
    else if (e.target.value === "Rejected") {
      setShowRejectForm(true);
    }
  };

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("fpoId");
    navigate('/samunnati/farmer-loan', { replace: true });
  };

  const handleShowCompletedLoanDetails = () => setShowCompletedLoanDetails(true);
  const handleCloseCompletedLoanDetails = () => {
    setFirstPage(true);
    setShowCompletedLoanDetails(false);
  };

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

  const handleShowPaymentProof = () => setShowPaymentProof(true);
  const handleClosePaymentProof = () => setShowPaymentProof(false);

  useEffect(() => {
    handleCurrentTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLoan]);

  useEffect(() => {
    async function fetchLoanWindow() {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        const response = await axios.get("http://13.232.131.203:3000/api/loanwindow?windowType=farmer");
        const loanWindow = response.data.data.filter((item) => item.id === localStorage.getItem("loanWindowId"))[0];
        setLoanWindow(loanWindow);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoanWindow();
  }, []);

  return (
    <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
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
                                        fpoId
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
                                        FPO-fpoId-Name
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
                                        FPO-fpoId-Phone
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
                                        FPO-fpoId-Email
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
                                        FPO-fpoId-Location
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
                                    <td>Farmer ID</td>
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "completed").map((loan, i) => (
                                      <tr>
                                        <td>{loan.loanId}</td>
                                        <td>Farmer-{i}</td>
                                        <td>{loan.farmerName}</td>
                                        <td>{loan.farmerContact}</td>
                                        <td>{loan.createdAt.substring(0, 10)}</td>
                                        <td>{loan.grantedAmount}</td>
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
                          <div style={{ marginTop: '2%' }}>
                            <p>
                              Remaining Loan Window: 60000
                            </p>
                          </div>
                        </div>
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
                                    <td>Farmer ID</td>
                                    <td>Farmer Name</td>
                                    <td>Contact</td>
                                    <td>Date of Loan Approval</td>
                                    <td>Loan Amount</td>
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "approved").map((loan, i) => {
                                      return (
                                        <tr>
                                          <td>{loan.loanId}</td>
                                          <td>Farmer-{i}</td>
                                          <td>{loan.farmerName}</td>
                                          <td>{loan.farmerContact}</td>
                                          <td>{loan.approvalAt.substring(0, 10)}</td>
                                          <td>{loan.grantedAmount}</td>
                                          <td>{loan.loanTenure}</td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div style={{ marginTop: '2%' }}>
                            <p>
                              Total amount to be paid in next installment: 30000
                            </p>
                          </div>
                        </div>
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
                                    <td>Farmer ID</td>
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.fpoApprovalStatus === "approved" && loan.status === "in-process").map((loan, i) => {
                                      return (
                                        <tr>
                                          <td>{loan.loanId}</td>
                                          <td>Farmer-{i}</td>
                                          <td>{loan.farmerName}</td>
                                          <td>{loan.contact}</td>
                                          <td>{loan.createdAt.substring(0, 10)}</td>
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
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompletedLoanApp
        showCompletedLoanDetails={showCompletedLoanDetails}
        handleCloseCompletedLoanDetails={handleCloseCompletedLoanDetails}
        currentLoan={currentLoan}
        firstPage={firstPage}
        currentTransaction={currentTransaction}
        handleShowPaymentProof={handleShowPaymentProof}
      />

      <PaymentProof
        showPaymentProof={showPaymentProof}
        handleClosePaymentProof={handleClosePaymentProof}
      />

      <OngoingLoanApp
        showOngoingLoanDetails={showOngoingLoanDetails}
        handleCloseOngoingLoanDetails={handleCloseOngoingLoanDetails}
        currentLoan={currentLoan}
        firstPage={firstPage}
        currentTransaction={currentTransaction}
        handleShowPaymentProof={handleShowPaymentProof}
      />

      <PendingLoanApp
        showPendingLoanDetails={showPendingLoanDetails}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
        currentPendLoan={currentPendLoan}
        step={step}
        setStep={setStep}
        handlePendingLoanStatus={handlePendingLoanStatus}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
      />

      <Aadhar
        showAadharCardImg={showAadharCardImg}
        handleCloseAadharCardImg={handleCloseAadharCardImg}
      />

      <Pan
        showPanCardImg={showPanCardImg}
        handleClosePanCardImg={handleClosePanCardImg}
      />

      <ConfirmBox
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
      />

      <ApproveLoanApp
        showApproveForm={showApproveForm}
        handleCloseApproveForm={handleCloseApproveForm}
        currentPendLoan={currentPendLoan}
        handleShowConfirmApprove={handleShowConfirmApprove}
        showConfirmApprove={showConfirmApprove}
        handleCloseConfirmApprove={handleCloseConfirmApprove}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
      />

      <RejectLoanApp
        showRejectForm={showRejectForm}
        handleCloseRejectForm={handleCloseRejectForm}
        currentPendLoan={currentPendLoan}
        handleShowConfirmReject={handleShowConfirmReject}
      />

      {/* <ConfirmApprove
        showConfirmApprove={showConfirmApprove}
        handleCloseConfirmApprove={handleCloseConfirmApprove}
        handleCloseApproveForm={handleCloseApproveForm}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
      /> */}

      <ConfirmReject
        showConfirmReject={showConfirmReject}
        handleCloseConfirmReject={handleCloseConfirmReject}
        handleCloseRejectForm={handleCloseRejectForm}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
      />
    </main>
  );
};

export default Sammunati_Farmer_SubLoan_Page;
