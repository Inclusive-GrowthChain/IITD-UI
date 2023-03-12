import React, { useState } from "react";

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

import "./Fpo.css";

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
    farmerName: "Raj kumar",
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
    farmerName: "Yashodha",
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
    farmerName: "Mark",
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

function LoanWindowTable({ onClick }) {
  return (
    <div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window Id</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value="Sum-TW-1" disabled />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window amount</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value="5,00,000" disabled />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={{ width: "180px" }}>Loan window tenure</label>
        <span>:</span>
        <input type="text" className="px-2 py-1 border-0" value="tenure-1" disabled />
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
  const [toggleState, setToggleState] = useState(1)
  const [toggleState2, setToggleState2] = useState(1)
  const [windowId, setWindowId] = useState("")
  const [noOfRows, setNoOfRows] = useState(1)
  const [showApp, setShowApp] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [step, setStep] = useState(0)
  const [activeTab, setActiveTab] = useState(1)

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
  const toggleTab = (index) => setToggleState(index)
  const toggleTab2 = (index) => setToggleState2(index)

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
    return windowVal
  }

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
              <div className="card_wrapper" style={{marginTop: "0"}}>
                <div className="card_content">
                  <div style={{ display: "flex" }}>
                    <button
                      className={toggleState === 1 ? "tab active" : "tab"}
                      onClick={() => toggleTab(1)}
                      style={{ padding: "8px" }}
                    >
                      Approved Loans
                    </button>
                    <button
                      className={toggleState === 2 ? "tab active" : "tab"}
                      onClick={() => toggleTab(2)}
                      style={{ padding: "8px" }}
                    >
                      Rejected Loans
                    </button>
                    <button
                      className={toggleState === 3 ? "tab active" : "tab"}
                      onClick={() => toggleTab(3)}
                      style={{ padding: "8px" }}
                    >
                      Pending Loans
                    </button>
                    <button
                      className={toggleState === 4 ? "tab active" : "tab"}
                      onClick={() => toggleTab(4)}
                      style={{ padding: "8px" }}
                    >
                      Loan Window
                    </button>
                  </div>

                  <div className="panels" style={{ overflowY: "auto" }}>
                    <div className={toggleState === 1 ? "panel active" : "panel"}>
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
                          {approvedloanList.map((item) => (
                            <tr key={item.id}>
                              <td>{item.Loan_approval}</td>
                              <td>{item.name_fpo}</td>
                              <td>{item.fpo_contact}</td>
                              <td>{item.granted_loan}</td>
                              <td>{item.farmerName}</td>
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

                    <div className={toggleState === 2 ? "panel active" : "panel"}>
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

                    <div className={toggleState === 3 ? "panel active" : "panel"}>
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

                    <div className={toggleState === 4 ? "panel active" : "panel"}>
                      <LoanWindowTable
                        onClick={() => {
                          handleShowApp()
                          setWindowId(generateRandomWindowID())
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper" style={{marginTop: "0"}}>
                <div className="card_content">
                  <div style={{ display: "flex" }}>
                    <button
                      className={toggleState2 === 1 ? "tab active" : "tab"}
                      onClick={() => toggleTab2(1)}
                      style={{ padding: "8px" }}
                    >
                      Approved Loans
                    </button>
                    <button
                      className={toggleState2 === 2 ? "tab active" : "tab"}
                      onClick={() => toggleTab2(2)}
                      style={{ padding: "8px" }}
                    >
                      Rejected Loans
                    </button>
                    <button
                      className={toggleState2 === 3 ? "tab active" : "tab"}
                      onClick={() => toggleTab2(3)}
                      style={{ padding: "8px" }}
                    >
                      Pending Loans
                    </button>
                    <button
                      className={toggleState2 === 4 ? "tab active" : "tab"}
                      onClick={() => toggleTab2(4)}
                      style={{ padding: "8px" }}
                    >
                      Loan Window
                    </button>
                  </div>

                  <div className="panels" style={{ overflowY: "auto" }}>
                    <div className={toggleState2 === 1 ? "panel active" : "panel"}>
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
                          {approvedloanList.map((item) => (
                            <tr key={item.id}>
                              <td>{item.Loan_approval}</td>
                              <td>{item.name_fpo}</td>
                              <td>{item.fpo_contact}</td>
                              <td>{item.granted_loan}</td>
                              <td>{item.farmerName}</td>
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

                    <div className={toggleState2 === 2 ? "panel active" : "panel"}>
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

                    <div className={toggleState2 === 3 ? "panel active" : "panel"}>
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

                    <div className={toggleState2 === 4 ? "panel active" : "panel"}>
                      <LoanWindowTable
                        onClick={() => {
                          handleShowApp()
                          setWindowId(generateRandomWindowID())
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
    </>
  )
}

export default Loan