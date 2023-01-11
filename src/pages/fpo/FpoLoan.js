import React, { useState } from "react";

import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
import FPOLoanTab from "./TabContent/FPOLoanTab";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";

import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import DocumentsCollected2 from "./Modals/FpoLoan/DocumentsCollected2";
import DocumentsCollected from "./Modals/FpoLoan/DocumentsCollected";
import LoanApplication2 from "./Modals/FpoLoan/LoanApplication2";
import LoanApplication from "./Modals/FpoLoan/LoanApplication";
import PaymentProof from "./Modals/FpoLoan/PaymentProof";
import LoanDetails from "./Modals/FpoLoan/LoanDetails";
import Invoice from "./Modals/FpoLoan/Invoice";
import Confirm from "./Modals/FpoLoan/Confirm";

const approvedloanList = [
  {
    id: "L 1",
    Loan_approval: "12-08-2021",
    name_fpo: "abcd",
    fpo_contact: "12345XXXXX",
    granted_loan: "300000",
    payeeName: "P 1",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 1",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 1",
  },
  {
    id: "L 2",
    Loan_approval: "12-08-2021",
    name_fpo: "abcd",
    fpo_contact: "12345XXXXX",
    granted_loan: "300000",
    payeeName: "P 2",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 2",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 2",
  },
  {
    id: "L 3",
    Loan_approval: "12-08-2021",
    name_fpo: "abcd",
    fpo_contact: "12345XXXXX",
    granted_loan: "300000",
    payeeName: "P 3",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 3",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 3",
  },
]

const rejectedloanList = [
  {
    id: "1",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
    reasonForRejection: "rejected",
    payeeName: "P 1",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 1",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 1",
  },
  {
    id: "2",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
    reasonForRejection: "rejected",
    payeeName: "P 2",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 2",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 2",
  },
  {
    id: "3",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
    reasonForRejection: "rejected",
    payeeName: "P 3",
    accountNo: "1234567890",
    ifsc: "1234567890",
    bankName: "B 3",
    amount: "1000000",
    tenure: "12",
    purpose: "Purpose 3",
  },
]

const pendingloanList = [
  {
    id: "1",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
  },
  {
    id: "2",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
  },
  {
    id: "3",
    fpoName: "fpo",
    contact: "12345XXXXX",
    dateOfApp: "10-10-2021",
    requestedAmount: "20000",
  },
]

const FpoLoan = ({ props }) => {
  const [showAttachPaymentImg, setShowAttachPaymentImg] = useState(false)
  const [showAttachInvoiceImg, setShowAttachInvoiceImg] = useState(false)
  const [showRejectionLoan, setShowRejectionLoan] = useState(false)
  const [showLoanDetails, setShowLoanDetails] = useState(false)
  const [showRepayment, setShowRepayment] = useState(false)
  const [showApplyLoan, setShowApplyLoan] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [currentLoan, setCurrentLoan] = useState({})
  const [activeIndex, setActiveIndex] = useState(1)
  const [toggleState, setToggleState] = useState(1)
  const [activeTab, setActiveTab] = useState("tab1")
  const [windowId, setWindowId] = useState("")
  const [noOfRows, setNoOfRows] = useState(1)
  const [showApp, setShowApp] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [step, setStep] = useState(0)

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
  const handleShowRepayment = () => setShowRepayment(true)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleShowApp = () => setShowApp(true)
  const handleShowAdd = () => setShowAdd(true)
  const handleSubmit = () => alert("you are successfully submitted")
  const handleClick = (index) => setActiveIndex(index)
  const toggleTab = (index) => setToggleState(index)

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

  const confirmBid = (e) => {
    e.preventDefault()
    setShowApplyLoan(true)
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
    // if(activeList.find((bid) => bid.id == bidValue)) {
    //   generateRandomBidID()
    // }
    return windowVal
  }

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3>Loan Information</h3>
          </div>

          <div className="list_container">
            <div className="loan_wrapper">
              <button
                className="loan_btn"
                onClick={() => {
                  handleShowApp()
                  setWindowId(generateRandomWindowID())
                }}
              >
                Apply for Loan Window
              </button>
            </div>
            <div className="tabs mt-5">
              <button
                className={`tab ${checkActive(1, "active")}`}
                onClick={() => {
                  handleClick(1)
                }}
              >
                Working Capital Loan
              </button>
              <button
                className={`tab ${checkActive(2, "active")}`}
                onClick={() => {
                  handleClick(2)
                }}
              >
                Farmer Loan
              </button>
            </div>
            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <button
                  className="loan-btn"
                  style={{
                    backgroundColor: "#064420",
                    width: "14%",
                    color: "#fff",
                    border: "none",
                    padding: "5px 5px",
                    borderRadius: "5px",
                    position: "relative",
                    float: "right",
                    top: "25px",
                    right: "50px",
                  }}
                  onClick={handleShowApplyLoan}
                >
                  Apply for Loan
                </button>

                <div className="card_wrapper">
                  <div className="card_content">
                    <div className="bloc-tab">
                      <button
                        className={toggleState === 1 ? "tabloan active-tab" : "tabloan"}
                        onClick={() => toggleTab(1)}
                        style={{ fontSize: "15px" }}
                      >
                        Approved Loans
                      </button>
                      <button
                        className={toggleState === 2 ? "tabloan active-tab" : "tabloan"}
                        onClick={() => toggleTab(2)}
                        style={{ fontSize: "15px" }}
                      >
                        Rejected Loans
                      </button>
                      <button
                        className={toggleState === 3 ? "tabloan active-tab" : "tabloan"}
                        onClick={() => toggleTab(3)}
                        style={{ fontSize: "15px" }}
                      >
                        Pending Loans
                      </button>
                    </div>

                    <div className="content_tab">
                      <div
                        className={
                          toggleState === 1
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
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
                              <th>Repayment Structure</th>
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
                            {approvedloanList.map((item) => (
                              <tr key={item.id}>
                                <td>{item.Loan_approval}</td>
                                <td>{item.name_fpo}</td>
                                <td>{item.fpo_contact}</td>
                                <td>{item.granted_loan}</td>
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
                                      setCurrentLoan(item)
                                      handleShowRepayment()
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
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
                                      setCurrentLoan(item)
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

                      <div
                        className={
                          toggleState === 2
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
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
                            {rejectedloanList.map((id) => (
                              <tr>
                                <td>{id.dateOfApp}</td>
                                <td>{id.fpoName}</td>
                                <td>{id.contact}</td>
                                <td>{id.requestedAmount}</td>
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
                                      setCurrentLoan(id)
                                      handleShowRejectionLoan()
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                <td>{id.reasonForRejection}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div
                        className={
                          toggleState === 3
                            ? "content1  active_content"
                            : "content1"
                        }
                      >
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
                            {pendingloanList.map((id) => (
                              <tr>
                                <td>{id.dateOfApp}</td>
                                <td>{id.fpoName}</td>
                                <td>{id.contact}</td>
                                <td>{id.requestedAmount}</td>
                                <td>pending</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="card_wrapper">
                  <div className="tabs_wrapper">
                    <ul className="nav-tab">
                      <TabNavItem
                        title="Approved Loans"
                        className="mr-3"
                        id="tab1"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabNavItem
                        title="Rejected Loans"
                        id="tab2"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabNavItem
                        title="Pending Loans"
                        id="tab3"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </ul>
                    <div className="outlet">
                      <TabContent id="tab1" activeTab={activeTab}>
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
                              <th>Repayment Structure</th>
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
                            {approvedloanList.map((item) => (
                              <tr key={item.id}>
                                <td>{item.Loan_approval}</td>
                                <td>{item.name_fpo}</td>
                                <td>{item.fpo_contact}</td>
                                <td>{item.granted_loan}</td>
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
                                      setCurrentLoan(item)
                                      handleShowRepayment()
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
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
                                    onClick={(e) => {
                                      setCurrentLoan(item)
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
                      </TabContent>
                      <TabContent id="tab2" activeTab={activeTab}>
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
                            {rejectedloanList.map((id) => (
                              <tr>
                                <td>{id.dateOfApp}</td>
                                <td>{id.fpoName}</td>
                                <td>{id.contact}</td>
                                <td>{id.requestedAmount}</td>
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
                                      setCurrentLoan(id)
                                      handleShowRejectionLoan()
                                    }}
                                  >
                                    view
                                  </button>
                                </td>
                                <td>{id.reasonForRejection}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TabContent>
                      <TabContent id="tab3" activeTab={activeTab}>
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
                            {/* {pendingloanList.map((id) => {
                              return (
                                <tr>
                                  <td>{id.dateOfApp}</td>
                                  <td>{id.fpoName}</td>
                                  <td>{id.contact}</td>
                                  <td>{id.requestedAmount}</td>
                                  <td>pending</td>
                                </tr>
                              )
                            })} */}
                          </tbody>
                        </table>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`panel ${checkActive(2, "active")}`}>
                <button
                  className=""
                  style={{
                    backgroundColor: "#064420",
                    padding: "5px 5px",
                    position: "relative",
                    float: "right",
                    right: "50px",
                    bottom: "54px",
                    color: "#fff",
                    width: "17%",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    setWindowId(generateRandomWindowID())
                    handleShowAdd()
                  }}
                >
                  Apply for Farmer Loan Window
                </button>

                <FPOLoanTab />
              </div>
            </div>
          </div>
        </main>
      </div>

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
        confirmBid={confirmBid}
        handleCloseApplyLoan={handleCloseApplyLoan}
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
    </div>
  )
}

export default FpoLoan