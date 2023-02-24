import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";
import { Link } from "react-router-dom";
import RejectedLoanApp from "./Modals/FarmerLoan/RejectedLoanApp";
import PendingLoanApp from "./Modals/FarmerLoan/PendingLoanApp";
import ApproveLoanApp from "./Modals/FarmerLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FarmerLoan/RejectLoanApp";
import ConfirmApprove from "./Modals/FarmerLoan/ConfirmApprove";
import ConfirmReject from "./Modals/FarmerLoan/ConfirmReject";
import RepaymentStructure from "./Modals/FarmerLoan/RepaymentStructure";
import RepaymentStatus from "./Modals/FarmerLoan/RepaymentStatus";
import RepaymentConfirm from "./Modals/FarmerLoan/RepaymentConfirm";

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

const Samunnati_Farmer_Loan = () => {
  const [showRepaymentStructure, setshowRepaymentStructure] = useState(false);
  const [showRejLoanApp, setShowRejLoanApp] = useState(false);
  const [currentRejLoanApp, setCurrentRejLoanApp] = useState({});
  const [showPendLoanApp, setShowPendLoanApp] = useState(false);
  const [currentPendLoanApp, setCurrentPendLoanApp] = useState({});
  const [showApproveForm, setShowApproveForm] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredApprovedLoanList, setFilteredApprovedLoanList] = useState([]);
  const [filteredRejectedLoanList, setFilteredRejectedLoanList] = useState([]);
  const [filteredPendingLoanList, setFilteredPendingLoanList] = useState([]);
  const [showRepaymentStatus, setShowRepaymentStatus] = useState(false);
  const [showRepaymentConfirmation, setShowRepaymentConfirmation] = useState(false);
  const [showConfirmApprove, setShowConfirmApprove] = useState(false);
  const [showConfirmReject, setShowConfirmReject] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [step, setStep] = useState(0);
  const [noOfRows] = useState(1);

  const handleShowRepaymentStructure = () => setshowRepaymentStructure(true);
  const handleCloseRepaymentStructure = () => setshowRepaymentStructure(false);
  const handleShowRejLoanApp = () => setShowRejLoanApp(true);
  const handleCloseRejLoanApp = () => setShowRejLoanApp(false);
  const handleShowPendLoanApp = () => setShowPendLoanApp(true);
  const handleClosePendLoanApp = () => setShowPendLoanApp(false);
  const handleCloseApproveForm = () => setShowApproveForm(false);
  const handleCloseRejectForm = () => setShowRejectForm(false);
  const handleShowConfirmApprove = () => setShowConfirmApprove(true);
  const handleCloseConfirmApprove = () => setShowConfirmApprove(false);
  const handleShowConfirmReject = () => setShowConfirmReject(true);
  const handleCloseConfirmReject = () => setShowConfirmReject(false);
  const handleShowRepaymentStatus = () => setShowRepaymentStatus(true);
  const handleCloseRepaymentStatus = () => setShowRepaymentStatus(false);
  const handleShowRepaymentConfirmation = () => setShowRepaymentConfirmation(true);
  const handleCloseRepaymentConfirmation = () => setShowRepaymentConfirmation(false);

  useEffect(() => {
    searchLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

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

  return (
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
                                    onClick={handleShowRepaymentStructure}
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
                    </div>
                  </div>
                </div>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
      
      <RejectedLoanApp
        showRejLoanApp={showRejLoanApp}
        handleCloseRejLoanApp={handleCloseRejLoanApp}
        currentRejLoanApp={currentRejLoanApp}
      />

      <PendingLoanApp
        showPendLoanApp={showPendLoanApp}
        handleClosePendLoanApp={handleClosePendLoanApp}
        step={step}
        setStep={setStep}
        currentPendLoanApp={currentPendLoanApp}
        noOfRows={noOfRows}
        changeLoanStatus={changeLoanStatus}
      />

      <ApproveLoanApp
        showApproveForm={showApproveForm}
        handleCloseApproveForm={handleCloseApproveForm}
        currentPendLoanApp={currentPendLoanApp}
        handleShowConfirmApprove={handleShowConfirmApprove}
      />

      <RejectLoanApp
        showRejectForm={showRejectForm}
        handleCloseRejectForm={handleCloseRejectForm}
        currentPendLoanApp={currentPendLoanApp}
        handleShowConfirmReject={handleShowConfirmReject}
      />

      <ConfirmApprove
        showConfirmApprove={showConfirmApprove}
        handleCloseConfirmApprove={handleCloseConfirmApprove}
        currentPendLoanApp={currentPendLoanApp}
        approveLoan={approveLoan}
      />

      <ConfirmReject
        showConfirmReject={showConfirmReject}
        handleCloseConfirmReject={handleCloseConfirmReject}
        currentPendLoanApp={currentPendLoanApp}
        rejectLoan={rejectLoan}
      />

      <RepaymentStructure
        showRepaymentStructure={showRepaymentStructure}
        handleCloseRepaymentStructure={handleCloseRepaymentStructure}
        handleShowRepaymentStatus={handleShowRepaymentStatus}
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

    </div>
  );
};

export default Samunnati_Farmer_Loan;
