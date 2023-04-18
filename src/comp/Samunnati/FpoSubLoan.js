import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import CompletedLoanApp from "./Modals/FpoSubLoan/CompletedLoanApp";
import RepaymentConfirm from "./Modals/FpoLoan/RepaymentConfirm";
import RepaymentStatus from "./Modals/FpoSubLoan/RepaymentStatus";
import OngoingLoanApp from "./Modals/FpoSubLoan/OngoingLoanApp";
import ApproveLoanApp from "./Modals/FpoSubLoan/ApproveLoanApp";
import PendingLoanApp from "./Modals/FpoSubLoan/PendingLoanApp";
import RejectLoanApp from "./Modals/FpoSubLoan/RejectLoanApp";
import PaymentProof from "./Modals/FpoSubLoan/PaymentProof";
import axios from 'axios';

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
]

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
]

const Sammunati_FPO_SubLoan_Page = () => {
  const [showRepaymentConfirmation, setShowRepaymentConfirmation] = useState(false)
  const [showCompletedLoanDetails, setShowCompletedLoanDetails] = useState(false)
  const [showOngoingLoanDetails, setShowOngoingLoanDetails] = useState(false)
  const [showPendingLoanDetails, setShowPendingLoanDetails] = useState(false)
  const [showRepaymentStatus, setShowRepaymentStatus] = useState(false)
  const [currentTransaction, setCurrentTransaction] = useState({})
  const [showPaymentProof, setShowPaymentProof] = useState(false)
  const [showApproveForm, setShowApproveForm] = useState(false)
  const [showRejectForm, setShowRejectForm] = useState(false)
  const [currentLoan, setCurrentLoan] = useState({})
  const [secondPage, setSecondPage] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1")
  const [thirdPage, setThirdPage] = useState(false)
  const [firstPage, setFirstPage] = useState(true)
  const [loanWindow, setLoanWindow] = useState({});

  useEffect(() => {
    async function fetchLoanWindow() {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        const response = await axios.get("http://13.232.131.203:3000/api/loanwindow?windowType=fpo");
        const loanWindowId = localStorage.getItem("loanWindowId")
        const loanWindow = response.data.data.filter((item) => item.id === loanWindowId)[0];
        setLoanWindow(loanWindow);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoanWindow();
  }, []);

  const navigate = useNavigate()

  useEffect(() => {
    handleCurrentTransaction()
    // eslint-disable-next-line
  }, [currentLoan])

  const handleClick = () => {
    localStorage.removeItem("fpoId")
    navigate('/samunnati/fpo-loan', { replace: true })
  }

  const handleCloseCompletedLoanDetails = () => {
    setFirstPage(true)
    setSecondPage(false)
    setThirdPage(false)
    setShowCompletedLoanDetails(false)
  }

  const handleCloseOngoingLoanDetails = () => {
    setFirstPage(true)
    setSecondPage(false)
    setThirdPage(false)
    setShowOngoingLoanDetails(false)
  }

  const handleShowPendingLoanDetails = () => setShowPendingLoanDetails(true)
  const handleShowOngoingLoanDetails = () => setShowOngoingLoanDetails(true)
  const handleClosePendingLoanDetails = () => setShowPendingLoanDetails(false)
  const handleShowCompletedLoanDetails = () => setShowCompletedLoanDetails(true)

  const handleCurrentTransaction = () => {
    completedTransactionDetails.forEach((transaction) => {
      if (transaction.transactionID === currentLoan.transactionID) {
        setCurrentTransaction(transaction)
      }
    })
    requestedTransactionDetails.forEach((transaction) => {
      if (transaction.loanId === currentLoan.id) {
        setCurrentTransaction(transaction)
      }
    })
  }

  const handleShowPaymentProof = () => setShowPaymentProof(true)
  const handleClosePaymentProof = () => setShowPaymentProof(false)
  const handleCloseApproveForm = () => setShowApproveForm(false)
  const handleCloseRejectForm = () => setShowRejectForm(false)

  const handlePendingLoanStatus = (e) => {
    e.preventDefault()
    if (e.target.value === "Approved") {
      setShowApproveForm(true)
    }
    else if (e.target.value === "Rejected") {
      setShowRejectForm(true)
    }
  }

  const handleShowRepaymentStatus = () => setShowRepaymentStatus(true)
  const handleCloseRepaymentStatus = () => setShowRepaymentStatus(false)
  const handleShowRepaymentConfirmation = () => setShowRepaymentConfirmation(true)
  const handleCloseRepaymentConfirmation = () => setShowRepaymentConfirmation(false)

  return (
    <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
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
                                        {loanWindow.fpoId}
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
                                        {loanWindow.grantedAmount}
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "completed").map((loan) => (
                                      <tr>
                                        <td>{loan.loanId}</td>
                                        <td>{loan.createdAt.substring(0, 10)}</td>
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
                          <div style={{ marginTop: '2%' }}>
                            <p>
                              Remaining Loan Window: {loanWindow.grantedAmount - loanWindow.consumedWindowLoanAmount}
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "approved").map((loan) => {
                                      return (
                                        <tr>
                                          <td>{loan.loanId}</td>
                                          <td>{loan.approvalAt.substring(0, 10)}</td>
                                          <td>{loan.grantedAmount}</td>
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
                          <div style={{ marginTop: '2%' }}>
                            <p>
                              Total amount to be paid in next installment: ???
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
                                    loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "in-process").map((loan) => {
                                      return (
                                        <tr>
                                          <td>{loan.loanId}</td>
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
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PendingLoanApp
        showPendingLoanDetails={showPendingLoanDetails}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
        currentLoan={currentLoan}
        handleShowPaymentProof={handleShowPaymentProof}
        handlePendingLoanStatus={handlePendingLoanStatus}
      />

      <PaymentProof
        showPaymentProof={showPaymentProof}
        handleClosePaymentProof={handleClosePaymentProof}
      />

      <ApproveLoanApp
        showApproveForm={showApproveForm}
        handleCloseApproveForm={handleCloseApproveForm}
        currentLoan={currentLoan}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
      />

      <RejectLoanApp
        showRejectForm={showRejectForm}
        handleCloseRejectForm={handleCloseRejectForm}
        currentLoan={currentLoan}
        handleClosePendingLoanDetails={handleClosePendingLoanDetails}
      />

      <OngoingLoanApp
        showOngoingLoanDetails={showOngoingLoanDetails}
        handleCloseOngoingLoanDetails={handleCloseOngoingLoanDetails}
        currentLoan={currentLoan}
        firstPage={firstPage}
        secondPage={secondPage}
        thirdPage={thirdPage}
        setFirstPage={setFirstPage}
        setSecondPage={setSecondPage}
        handleShowPaymentProof={handleShowPaymentProof}
        handleShowRepaymentStatus={handleShowRepaymentStatus}
        currentTransaction={currentTransaction}
      />

      <RepaymentStatus
        showRepaymentStatus={showRepaymentStatus}
        handleCloseRepaymentStatus={handleCloseRepaymentStatus}
        handleShowRepaymentConfirmation={handleShowRepaymentConfirmation}
      />

      <RepaymentConfirm
        showRepaymentConfirmation={showRepaymentConfirmation}
        handleCloseRepaymentConfirmation={handleCloseRepaymentConfirmation}
        handleCloseRepaymentStatus={handleCloseRepaymentStatus}
      />

      <CompletedLoanApp
        showCompletedLoanDetails={showCompletedLoanDetails}
        handleCloseCompletedLoanDetails={handleCloseCompletedLoanDetails}
        currentLoan={currentLoan}
        firstPage={firstPage}
        setFirstPage={setFirstPage}
        fpoId={loanWindow.fpoId}
        handleShowPaymentProof={handleShowPaymentProof}
        currentTransaction={currentTransaction}
      />

    </main>
  );
};

export default Sammunati_FPO_SubLoan_Page;
