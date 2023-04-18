import React, { useState, useEffect } from "react";

import FPOLoanTab from "./FPOLoanTab";

import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import DocumentsCollected2 from "./Modals/FpoLoan/DocumentsCollected2";
import DocumentsCollected from "./Modals/FpoLoan/DocumentsCollected";
import LoanApplication2 from "./Modals/FpoLoan/LoanApplication2";
import LoanApplication from "./Modals/FpoLoan/LoanApp";
import PaymentProof from "./Modals/FpoLoan/PaymentProof";
import LoanDetails from "./Modals/FpoLoan/LoanDetails";
import Invoice from "./Modals/FpoLoan/Invoice";
import Confirm from "./Modals/FpoLoan/Confirm";
import axios from "axios";

function LoanWindowTable({ onClick, loanWindow }) {
  return (
    <div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window Id</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value={loanWindow && loanWindow.windowId} disabled />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window amount</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value={loanWindow && (loanWindow.grantedAmount != -1 ? loanWindow.grantedAmount : loanWindow.requestedAmount)} disabled />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window tenure</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value={loanWindow && loanWindow.windowPeriod} disabled />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Status</label>
        <span>:</span>
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
          onClick={onClick}
        >
          View
        </button>
      </div>
    </div>
  )
}

const Loan = ({ props }) => {
  const [showAttachPaymentImg, setShowAttachPaymentImg] = useState(false)
  const [showAttachInvoiceImg, setShowAttachInvoiceImg] = useState(false)
  const [showRejectionLoan, setShowRejectionLoan] = useState(false)
  const [showLoanDetails, setShowLoanDetails] = useState(false)
  const [showRepayment, setShowRepayment] = useState(false)
  const [showApplyLoan, setShowApplyLoan] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [currentLoan, setCurrentLoan] = useState({})
  const [activeIndex, setActiveIndex] = useState(1)
  const [toggleStateList, setToggleStateList] = useState([])
  const [windowId, setWindowId] = useState("")
  const [noOfRows, setNoOfRows] = useState(1)
  const [showApp, setShowApp] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [step, setStep] = useState(0)
  const [activeTab, setActiveTab] = useState(1)
  const [loanWindowList, setLoanWindowList] = useState([])
  const [activeLoanWindow, setActiveLoanWindow] = useState({})

  const checkActive = (index, className) => activeIndex === index ? className : ""

  const handleCloseAttachInvoiceImg = () => setShowAttachInvoiceImg(false)
  const handleShowAttachInvoiceImg = () => setShowAttachInvoiceImg(true)
  const handleCloseRejectionLoan = () => setShowRejectionLoan(false)
  const handleShowRejectionLoan = () => setShowRejectionLoan(true)
  const handleCloseLoanDetails = () => setShowLoanDetails(false)
  const handleClosePaymentImg = () => setShowAttachPaymentImg(false)
  const handleShowLoanDetails = () => setShowLoanDetails(true)
  const handleShowPaymentImg = () => setShowAttachPaymentImg(true)
  const handleCloseApplyLoan = () => setShowApplyLoan(false)
  const handleCloseRepayment = () => setShowRepayment(false)
  const handleShowApplyLoan = () => setShowApplyLoan(true)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleShowApp = () => setShowApp(true)
  const handleShowAdd = () => setShowAdd(true)
  const handleSubmit = () => alert("you are successfully submitted")
  const handleClick = (index) => setActiveIndex(index)

  const handleCloseApp = () => {
    setShowApp(false)
    setStep(0)
  }

  const handleCloseAdd = () => {
    setShowAdd(false)
    setStep(0)
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }

  const confirmAttachImg = (e) => {
    e.preventDefault()
    setShowAttachInvoiceImg(true)
  }

  const confirmPaymentImg = (e) => {
    e.preventDefault()
    setShowAttachPaymentImg(true)
  }

  const generateRandomWindowID = () => {
    let windowVal = 'W' + (Math.floor(100000 + Math.random() * 900000))
    return windowVal
  }

  useEffect(() => {
    async function fetchLoanWindow() {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        const response = await axios.get("http://13.232.131.203:3000/api/loanwindow?windowType=fpo");
        const loanWindow = response.data.data.filter((item) => item.fpoId === localStorage.getItem("userId"));
        setLoanWindowList(loanWindow);
        setToggleStateList(Array(loanWindow.length).fill(1));
        setActiveLoanWindow(loanWindow.reduce((prev, current) => (prev.createdAt > current.createdAt) ? prev : current));
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoanWindow();
  }, []);

  const toggleTab = (index, tabNumber) => {
    const newToggleStateList = [...toggleStateList];
    newToggleStateList[index] = tabNumber;
    setToggleStateList(newToggleStateList);
  };

  return (
    <>
      <main id="main_container" className="main_container container-fluid itemContainer">
        <div className="d-flex align-items-center">
          <h3 className="flex-grow-1">Loan Information</h3>
        </div>
        <div className="d-flex loan_btn_container">
          <button
            className="loan_btn"
            onClick={() => {
              setWindowId(generateRandomWindowID())
              handleShowAdd()
            }}
          >
            {
              activeTab === 1 ? "Apply for Working Capital Loan Window" : "Apply for Farmer Loan"
            }
          </button>
        </div>

        <div className="list_container">
          <div className="tabs mt-5">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => {
                handleClick(1)
                setActiveTab(1)
              }}
            >
              Working Capital Loan
            </button>

            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => {
                handleClick(2)
                setActiveTab(2)
              }}
            >
              Farmer Loan
            </button>
          </div>

          <div className="panels">
            <div>
              <button
                className="loan-btn"
                style={{
                  backgroundColor: "#064420",
                  width: "14%",
                  minWidth: "150px",
                  color: "#fff",
                  border: "none",
                  padding: "5px 5px",
                  borderRadius: "5px",
                  position: "relative",
                  float: "right",
                  top: "-25px",
                  right: "50px",
                }}
                onClick={handleShowApplyLoan}
              >
                Apply for Loan
              </button>
            </div>
            <div className={`panel ${checkActive(1, "active")}`} style={{ marginTop: '40px' }}>
              {
                loanWindowList && loanWindowList.map((loanWindow, index) => (
                  <div className="card_wrapper" style={{ marginTop: "0" }}>
                    <div className="card_content">
                      <div style={{ display: "flex" }}>
                        <button
                          className={toggleStateList[index] === 1 ? "tab active" : "tab"}
                          onClick={() => toggleTab(index, 1)}
                          style={{ padding: "8px" }}
                        >
                          Approved Loans
                        </button>
                        <button
                          className={toggleStateList[index] === 2 ? "tab active" : "tab"}
                          onClick={() => toggleTab(index, 2)}
                          style={{ padding: "8px" }}
                        >
                          Rejected Loans
                        </button>
                        <button
                          className={toggleStateList[index] === 3 ? "tab active" : "tab"}
                          onClick={() => toggleTab(index, 3)}
                          style={{ padding: "8px" }}
                        >
                          Pending Loans
                        </button>
                        <button
                          className={toggleStateList[index] === 4 ? "tab active" : "tab"}
                          onClick={() => toggleTab(index, 4)}
                          style={{ padding: "8px" }}
                        >
                          Loan Window
                        </button>
                      </div>

                      <div className="panels" style={{ overflowY: "auto" }}>
                        <div className={toggleStateList[index] === 1 ? "panel active" : "panel"}>
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
                                <th>Farmer Name</th>
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
                              {loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "approved").map((loan) => (
                                <tr>
                                  <td>{loan.approvalAt.substring(0, 10)}</td>
                                  <td>{loanWindow.fpoName}</td>
                                  <td>{loanWindow.contactNo}</td>
                                  <td>{loan.grantedAmount}</td>
                                  <td>{loan.farmerName}</td>
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
                                        setCurrentLoan(loan)
                                        handleShowLoanDetails()
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className={toggleStateList[index] === 2 ? "panel active" : "panel"}>
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
                              {loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "rejected").map((loan) => (
                                <tr>
                                  <td>{loan.createdAt.substring(0, 10)}</td>
                                  <td>{loanWindow.fpoName}</td>
                                  <td>{loanWindow.contactNo}</td>
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
                                        setCurrentLoan(loan)
                                        handleShowRejectionLoan()
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>{loan.reason}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className={toggleStateList[index] === 3 ? "panel active" : "panel"}>
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
                              {loanWindow.loans && loanWindow.loans.filter((loan) => loan.status === "in-process").map((loan) => (
                                <tr>
                                  <td>{loan.createdAt.substring(0, 10)}</td>
                                  <td>{loanWindow.fpoName}</td>
                                  <td>{loanWindow.contactNo}</td>
                                  <td>{loan.requestedAmount}</td>
                                  <td>Pending</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className={toggleStateList[index] === 4 ? "panel active" : "panel"}>
                          <LoanWindowTable
                            onClick={() => {
                              handleShowApp()
                              setWindowId(generateRandomWindowID())
                            }}
                            loanWindow={loanWindow}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className={`panel ${checkActive(2, "active")}`} style={{ marginTop: '40px' }}>
              <FPOLoanTab
                Comp={
                  <LoanWindowTable
                    onClick={() => {
                      setWindowId(generateRandomWindowID())
                      handleShowAdd()
                    }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </main>

      <RepaymentStructure
        showRepayment={showRepayment}
        handleCloseRepayment={handleCloseRepayment}
      />

      <LoanDetails
        currentLoan={currentLoan}
        showLoanDetails={showLoanDetails}
        confirmAttachImg={confirmAttachImg}
        confirmPaymentImg={confirmPaymentImg}
        handleShowPaymentImg={handleShowPaymentImg}
        handleCloseLoanDetails={handleCloseLoanDetails}
        handleShowAttachInvoiceImg={handleShowAttachInvoiceImg}
      />

      <Invoice
        showAttachInvoiceImg={showAttachInvoiceImg}
        handleCloseAttachInvoiceImg={handleCloseAttachInvoiceImg}
      />

      <PaymentProof
        showAttachPaymentImg={showAttachPaymentImg}
        handleClosePaymentImg={handleClosePaymentImg}
      />

      <LoanApplication
        currentLoan={currentLoan}
        showRejectionLoan={showRejectionLoan}
        confirmPaymentImg={confirmPaymentImg}
        handleShowPaymentImg={handleShowPaymentImg}
        handleCloseRejectionLoan={handleCloseRejectionLoan}
      />

      <DocumentsCollected
        showApp={showApp}
        handleCloseApp={handleCloseApp}
        step={step}
        setStep={setStep}
        handleChange={handleChange}
        noOfRows={noOfRows}
        setNoOfRows={setNoOfRows}
        windowId={windowId}
        handleSubmit={handleSubmit}
      />

      <LoanApplication2
        showApplyLoan={showApplyLoan}
        handleCloseApplyLoan={handleCloseApplyLoan}
        loanWindow={activeLoanWindow}
      />

      <DocumentsCollected2
        step={step}
        showAdd={showAdd}
        noOfRows={noOfRows}
        windowId={windowId}
        setStep={setStep}
        setNoOfRows={setNoOfRows}
        handleChange={handleChange}
        handleCloseAdd={handleCloseAdd}
        handleShowConfirm={handleShowConfirm}
      />

      <Confirm
        showConfirm={showConfirm}
        handleCloseAdd={handleCloseAdd}
        handleCloseConfirm={handleCloseConfirm}
      />
    </>
  )
}

export default Loan