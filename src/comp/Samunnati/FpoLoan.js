import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import RepaymentConfirm from "./Modals/FpoLoan/RepaymentConfirm";
import RejectedLoanApp from "./Modals/FpoLoan/RejectedLoanApp";
import PendingLoanApp from "./Modals/FpoLoan/PendingLoanApp";
import ApproveLoanApp from "./Modals/FpoLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FpoLoan/RejectLoanApp";
import Repayment from "./Modals/FpoLoan/Repayment";
import axios from "axios";

const Samunnati_FPO_Loan = () => {
  const [showRepaymentStructure, setshowRepaymentStructure] = useState(false);
  const [showRejLoanApp, setShowRejLoanApp] = useState(false);
  const [currentRejLoanApp, setCurrentRejLoanApp] = useState({});
  const [showPendLoanApp, setShowPendLoanApp] = useState(false);
  const [currentPendLoanApp, setCurrentPendLoanApp] = useState({});
  const [showApproveForm, setShowApproveForm] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showRepaymentStatus, setShowRepaymentStatus] = useState(false);
  const [showRepaymentConfirmation, setShowRepaymentConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [step, setStep] = useState(0);
  const [noOfRows] = useState(1);
  const [fpoLoanWindowList, setFpoLoanWindowList] = useState([]);
  const [filteredFpoLoanWindowList, setFilteredFpoLoanWindowList] = useState([]);
  const [currentLoan, setCurrentLoan] = useState({})
  const [showConfirmApprove, setShowConfirmApprove] = useState(false);
  const [showConfirmReject, setShowConfirmReject] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/loanwindow?windowType=fpo")
      .then((response) => {
        console.log(response.data.data);
        setFpoLoanWindowList(response.data.data);
        var numFpoPendingRequests = 0;
        response.data.data.forEach((loanWindow) => {
          loanWindow.loans.forEach((loan) => {
            if (loanWindow.status === "approved" && loan.status === "in-process") {
              numFpoPendingRequests++;
            }
          });
        });
        localStorage.setItem("FpoLoanRequests", numFpoPendingRequests);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    searchLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fpoLoanWindowList, searchText]);

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
  const handleShowConfirmApprove = () => setShowConfirmApprove(true);
  const handleCloseConfirmApprove = () => setShowConfirmApprove(false);
  const handleShowConfirmReject = () => setShowConfirmReject(true);
  const handleCloseConfirmReject = () => setShowConfirmReject(false);

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

  const searchLoans = () => {
    if (!searchText) {
      setFilteredFpoLoanWindowList(fpoLoanWindowList);
      return;
    }
    const filteredLoanWindows = fpoLoanWindowList.filter((loanWindow) => {
      return (
        loanWindow.fpoName.toLowerCase().includes(searchText.toLowerCase()) ||
        loanWindow.fpoId.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredFpoLoanWindowList(filteredLoanWindows);
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
                    width: '100%',
                    maxWidth: '300px',
                    marginBottom: '20px',
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
                      width: "100%"
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
                            {filteredFpoLoanWindowList.filter((app) => app.status === "approved").map((app) => (
                              <tr>
                                <td>{app.approvalDate.substring(0, 10)}</td>
                                <td>{app.fpoId}</td>
                                <td>{app.fpoName}</td>
                                <td>{app.contactNo}</td>
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
                                      setCurrentLoan(app);
                                      handleShowRepaymentStructure();
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                <td>{app.loans.filter((loan) => loan.status === "in-process").length}</td>
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
                                      localStorage.setItem("loanWindowId", app.id);
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
                    currentLoan={currentLoan}
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
                    width: '100%',
                    maxWidth: '300px',
                    marginBottom: '20px',
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
                              filteredFpoLoanWindowList.filter((app) => app.status === "rejected").map((app) => (
                                <tr>
                                  <td>{app.dateOfApplication}</td>
                                  <td>{app.fpoId}</td>
                                  <td>{app.fpoName}</td>
                                  <td>{app.contactNo}</td>
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
                                  <td>{app.reason}</td>
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
                    width: '100%',
                    maxWidth: '300px',
                    marginBottom: '20px',
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
                              filteredFpoLoanWindowList.filter((app) => app.status === "pending").map((app) => {
                                return (
                                  <tr>
                                    <td>{app.dateOfApplication}</td>
                                    <td>{app.fpoId}</td>
                                    <td>{app.fpoName}</td>
                                    <td>{app.contactNo}</td>
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
                          handleShowConfirmApprove={handleShowConfirmApprove}
                          showConfirmApprove={showConfirmApprove}
                          handleCloseConfirmApprove={handleCloseConfirmApprove}
                        />
                      </div>
                      <div>
                        <RejectLoanApp
                          showRejectForm={showRejectForm}
                          handleCloseRejectForm={handleCloseRejectForm}
                          currentPendLoanApp={currentPendLoanApp}
                          handleShowConfirmReject={handleShowConfirmReject}
                          showConfirmReject={showConfirmReject}
                          handleCloseConfirmReject={handleCloseConfirmReject}
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
