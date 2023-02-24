import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "react-bootstrap/Modal";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";
import PendingLoanApp from "./Modals/FpoSubLoan/PendingLoanApp";
import PaymentProof from "./Modals/FpoSubLoan/PaymentProof";
import ApproveLoanApp from "./Modals/FpoSubLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FpoSubLoan/RejectLoanApp";
import OngoingLoanApp from "./Modals/FpoSubLoan/OngoingLoanApp";
import RepaymentStatus from "./Modals/FpoSubLoan/RepaymentStatus";
import RepaymentConfirm from "./Modals/FpoLoan/RepaymentConfirm";
import CompletedLoanApp from "./Modals/FpoSubLoan/CompletedLoanApp";

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
]

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
]

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
  const [fpoId] = useState(localStorage.getItem("fpoId"))

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
        fpoId={fpoId}
        handleShowPaymentProof={handleShowPaymentProof}
        currentTransaction={currentTransaction}
      />

    </main>
  );
};

export default Sammunati_FPO_SubLoan_Page;
