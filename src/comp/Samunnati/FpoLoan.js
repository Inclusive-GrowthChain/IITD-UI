import React, { useState, useEffect } from "react";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";
import { Link } from "react-router-dom";
import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import Repayment from "./Modals/FpoLoan/Repayment";
import RepaymentConfirm from "./Modals/FpoLoan/RepaymentConfirm";
import RejectedLoanApp from "./Modals/FpoLoan/RejectedLoanApp";
import PendingLoanApp from "./Modals/FpoLoan/PendingLoanApp";
import ApproveLoanApp from "./Modals/FpoLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FpoLoan/RejectLoanApp";

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
    fpoName: 'FPO 2',
    contact: '1234567890',
    dateOfApp: '2021-10-10',
    requestedAmount: '100000',
    grantedAmount: "",
    reasonForRejection: "",
    status: 'Pending',
    numberOfRequests: '2',
    windowId: 'W545454',
    tenure: '12',
  },
  {
    loanId: 6,
    fpoId: 'F666666',
    fpoName: 'FPO 6',
    contact: '1234567890',
    dateOfApp: '2021-10-10',
    requestedAmount: '100000',
    grantedAmount: "",
    reasonForRejection: "",
    status: 'Pending',
    numberOfRequests: '2',
    windowId: 'W222222',
    tenure: '12',
  },
];

const Samunnati_FPO_Loan = () => {
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
  const [activeTab, setActiveTab] = useState("tab1");
  const [step, setStep] = useState(0);
  const [noOfRows] = useState(1);

  useEffect(() => {
    searchLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleShowRepaymentStructure = () => setshowRepaymentStructure(true);
  const handleCloseRepaymentStructure = () => setshowRepaymentStructure(false);
  const handleShowRejLoanApp = () => setShowRejLoanApp(true);
  const handleCloseRejLoanApp = () => setShowRejLoanApp(false);
  const handleClosePendLoanApp = () => setShowPendLoanApp(false);
  const handleCloseApproveForm = () => setShowApproveForm(false);
  const handleCloseRejectForm = () => setShowRejectForm(false);
  const handleShowRepaymentStatus = () => setShowRepaymentStatus(true);
  const handleCloseRepaymentStatus = () => setShowRepaymentStatus(false);
  const handleShowRepaymentConfirmation = () => setShowRepaymentConfirmation(true);
  const handleCloseRepaymentConfirmation = () => setShowRepaymentConfirmation(false);

  const handleShowPendLoanApp = () => {
    setShowPendLoanApp(true);
    setStep(0);
  };

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
    handleClosePendLoanApp();
  };

  const rejectLoan = (e) => {
    e.preventDefault();
    setShowRejectForm(false);
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
              FPO Loan Window
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
                              <td>View Loan Requests</td>
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
                                  <Link to="/samunnati/fpo-subloan"
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
                  <RepaymentStructure
                    showRepaymentStructure={showRepaymentStructure}
                    handleCloseRepaymentStructure={handleCloseRepaymentStructure}
                    handleShowRepaymentStatus={handleShowRepaymentStatus}
                  />
                </div>
                <div>
                  <Repayment
                    showRepaymentStatus={showRepaymentStatus}
                    handleCloseRepaymentStatus={handleCloseRepaymentStatus}
                    handleShowRepaymentConfirmation={handleShowRepaymentConfirmation}
                  />
                </div>
                <div>
                  <RepaymentConfirm
                    showRepaymentConfirmation={showRepaymentConfirmation}
                    handleCloseRepaymentConfirmation={handleCloseRepaymentConfirmation}
                    handleCloseRepaymentStatus={handleCloseRepaymentStatus}
                  />
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
                        <RejectedLoanApp
                          showRejLoanApp={showRejLoanApp}
                          handleCloseRejLoanApp={handleCloseRejLoanApp}
                          currentRejLoanApp={currentRejLoanApp}
                        />
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
                      <div>
                        <PendingLoanApp
                          showPendLoanApp={showPendLoanApp}
                          handleClosePendLoanApp={handleClosePendLoanApp}
                          step={step}
                          setStep={setStep}
                          noOfRows={noOfRows}
                          changeLoanStatus={changeLoanStatus}
                          currentPendLoanApp={currentPendLoanApp}
                        />
                      </div>
                      <div>
                        <ApproveLoanApp
                          showApproveForm={showApproveForm}
                          handleCloseApproveForm={handleCloseApproveForm}
                          currentPendLoanApp={currentPendLoanApp}
                          approveLoan={approveLoan}
                        />
                      </div>
                      <div>
                        <RejectLoanApp
                          showRejectForm={showRejectForm}
                          handleCloseRejectForm={handleCloseRejectForm}
                          currentPendLoanApp={currentPendLoanApp}
                          rejectLoan={rejectLoan}
                        />
                        {/* <Modal show={showRejectForm} onHide={handleCloseRejectForm}>
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
                                          />
                                        </div>
                                      </div>
                                      <div className="row m-2">
                                        <div className="col-lg-12">
                                          <button
                                            className="btn btn-primary"
                                            onClick={(e) => rejectLoan(e, currentPendLoanApp)}
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
                        </Modal> */}
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
  );
};

export default Samunnati_FPO_Loan;
