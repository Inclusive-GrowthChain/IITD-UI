import React, { useState, useEffect } from "react";
import RepaymentStructure from "./Modals/RepaymentStructure";
import AddRepayment from "./Modals/AddRepayment";
import RepaymentConfirm from "./Modals/RepaymentConfirm";
import LoanApplication from "./Modals/LoanApplication";
import Aadhar from "./Modals/Aadhar";
import Pan from "./Modals/Pan";
import ConfirmBox from "./Modals/ConfirmBox";
import ConfirmApproveLoanApp from "./Modals/ConfirmApproveLoanApp";
import Img from "./Modals/FarmerInfo/Img";
import InterestRate from "./Modals/InterestRate";
import AggRepaymentStructure from "./Modals/AggRepaymentStructure";
import axios from "axios";

import "./Fpo.css";

const repaymentList = [
  {
    id: "1",
    sno: "1",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "2",
    sno: "2",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "3",
    sno: "3",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "4",
    sno: "4",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "5",
    sno: "5",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
]

const farmerList = [
  {
    id: "F 1",
    name: "Farmer Name",
    loanId: "L 1",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approval Pending",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 2",
    name: "Farmer Name",
    loanId: "L 2",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approval Pending",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 3",
    name: "Farmer Name",
    loanId: "L 3",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approved",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 4",
    name: "Farmer Name",
    loanId: "L 4",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approved",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
]

const FarmerLoan = ({ isToggled, onToggle }) => {
  const [showLoanApplication, setShowLoanApplication] = useState(false)
  const [showApproveConfirm, setShowApproveConfirm] = useState(false)
  const [showConfirmPayment, setShowConfirmPayment] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showRepaymentForm, setShowRepaymentForm] = useState(false)
  const [showAggRepayment, setShowAggRepayment] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showInterest, setShowInterest] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [textState, setTextState] = useState("")
  const [showImg, setShowImg] = useState(false)
  const [step, setStep] = useState(0)
  const [loanWindowList, setLoanWindowList] = useState([])
  const [currentLoan, setCurrentLoan] = useState({})
  const [currentLoanWindow, setCurrentLoanWindow] = useState({})

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleCloseLoanApplication = () => setShowLoanApplication(false)
  const handleCloseApproveConfirm = () => setShowApproveConfirm(false)
  const handleShowLoanApplication = () => setShowLoanApplication(true)
  const handleCloseConfirmPayment = () => setShowConfirmPayment(false)
  const handleShowConfirmPayment = () => setShowConfirmPayment(true)
  const handleCloseRepaymentForm = () => setShowRepaymentForm(false)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleCloseAggRepayment = () => setShowAggRepayment(false)
  const handleShowRepaymentForm = () => setShowRepaymentForm(true)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  // const handleShowAggRepayment = () => setShowAggRepayment(true)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseInterest = () => setShowInterest(false)
  const handleShowInterest = () => setShowInterest(true)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleCloseImg = () => setShowImg(false)
  const handleShowImg = () => setShowImg(true)
  const handleClick = i => setActiveIndex(i)

  const confirmBox = (e) => {
    e.preventDefault()
    setShowConfirmPayment(true)
  }

  const confirmBid = (e) => {
    e.preventDefault()
    setShowConfirm(false)
    setShowInterest(false)
  }

  const cancelBid = (e) => {
    e.preventDefault()
    setShowConfirm(false)
    setShowInterest(false)
  }

  const toggleText = () => {
    setTextState((state) =>
      state === "Receive Loan Application Enabled"
        ? "Receive Loan Application Disabled"
        : "Receive Loan Application Enabled"
    )
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/loanwindow?windowType=farmer")
      .then((response) => {
        console.log(response.data.data);
        setLoanWindowList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3 className="mb-4">Farmer Loan Information</h3>
      </div>
      <div className="list_container">
        <div
          style={{
            border: "none",
            padding: "5px 5px",
            borderRadius: "5px",
            position: "absolute",
            right: "10%",
            top: "120px",
          }}
          className="list_container_inner"
        >
          <h3
            style={{
              fontSize: "15px",
              position: "fixed",
              right: "5.5%",
            }}
          >
            {textState}
          </h3>
          <div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isToggled}
                onChange={onToggle}
                onClick={toggleText}
              />
              <span className="switch" />
            </label>
          </div>
        </div>
        <button
          className="loan_btn"
          onClick={handleShowInterest}
        >
          Set Interest Rate
        </button>
        <>
          <div className="tabs mt-5">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Loans Approved by Samunnati
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Loan History
            </button>
            {/* <button
                  style={{
                    color: "blue",
                    borderRadius: "5px",
                    border: "none",
                    padding: "0.25rem 1rem",
                    width: "fit-content",
                    fontSize: "1rem",
                    lineHeight: "2rem",
                    textDecoration: "underline",
                    backgroundColor: "rgb(255, 255, 255, 0)",
                    position: "relative",
                    left: "400px",
                  }}
                  onClick={handleShowAggRepayment}
                >
                  Aggregate Repayment
                </button> */}
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <div className="card_table2">
                <div className=" table-responsive">
                  <table>
                    <thead
                      style={{
                        color: "#064420",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <td>Farmer Id</td>
                        <td>Farmer Name</td>
                        <th>Loan Id</th>
                        <th>Loan Application Date</th>
                        <th>Loan Amount</th>
                        <th>Repayment Structure</th>
                        <th>Loan Application</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {loanWindowList && loanWindowList.map((loanWindow) => (
                        <>
                          {
                            loanWindow && loanWindow.loans && loanWindow.loans.filter((loan) => loan.status == "approved").map((loan) => {
                              return (
                                <tr>
                                  <td>???</td>
                                  <td>???</td>
                                  <td>{loan.loanId}</td>
                                  <td>{loan.createdAt && loan.createdAt.substring(0, 10)}</td>
                                  <td>{loan.grantedAmount}</td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "#064420",
                                        color: "#fff",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        setCurrentLoan(loan)
                                        setCurrentLoanWindow(loanWindow)
                                        handleShowRepaymentForm()
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "#064420",
                                        color: "#fff",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        setCurrentLoan(loan)
                                        setStep(0)
                                        handleShowLoanApplication()
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <div className="card_table2">
                <div className=" table-responsive">
                  <table>
                    <thead
                      style={{
                        color: "#064420",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <td>Farmer Id</td>
                        <td>Farmer Name</td>
                        <th>Loan Id</th>
                        <th>Loan Application Date</th>
                        <th>Loan Amount</th>
                        <th>Loan Date</th>
                        <th>Outstanding Amount</th>
                        <th>Next Payment Amount</th>
                        <th>Next Payment Date</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <td>Farmer Id</td>
                        <td>Farmer Name</td>
                        <td>2022-800-07</td>
                        <td>01-05-2022</td>
                        <td>₹ 98765</td>
                        <td> 13-07-2022</td>
                        <td>₹ 3778</td>
                        <td>₹ 761434</td>
                        <td> 24-09-2022</td>
                      </tr>
                      <tr>
                        <td>Farmer Id</td>
                        <td>Farmer Name</td>
                        <td>2022-800-07</td>
                        <td>01-05-2022</td>
                        <td>₹ 98765</td>
                        <td> 13-07-2022</td>
                        <td>₹ 3778</td>
                        <td>₹ 761434</td>
                        <td> 24-09-2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <RepaymentStructure
        showRepaymentForm={showRepaymentForm}
        handleCloseRepaymentForm={handleCloseRepaymentForm}
        repaymentList={repaymentList}
        handleShowConfirmPayment={handleShowConfirmPayment}
        currentLoan={currentLoan}
        currentLoanWindow={currentLoanWindow}
      />

      <AddRepayment
        showConfirmPayment={showConfirmPayment}
        handleCloseConfirmPayment={handleCloseConfirmPayment}
        confirmBid={confirmBid}
        handleShowConfirm={handleShowConfirm}
      />

      <RepaymentConfirm
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        confirmBid={confirmBid}
        cancelBid={cancelBid}
      />

      <LoanApplication
        showLoanApplication={showLoanApplication}
        handleCloseLoanApplication={handleCloseLoanApplication}
        step={step} 
        setStep={setStep}
        currentLoan={currentLoan}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
        handleShowImg={handleShowImg}
        currentLoanWindow={currentLoanWindow}
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

      <ConfirmApproveLoanApp
        showApproveConfirm={showApproveConfirm}
        handleCloseApproveConfirm={handleCloseApproveConfirm}
      />

      <Img
        showImg={showImg}
        handleCloseImg={handleCloseImg}
      />

      <InterestRate
        showInterest={showInterest}
        handleCloseInterest={handleCloseInterest}
        handleShowConfirm={handleShowConfirm}
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        confirmBid={confirmBid}
        cancelBid={cancelBid}
        confirmBox={confirmBox}
      />

      <AggRepaymentStructure
        showAggRepayment={showAggRepayment}
        handleCloseAggRepayment={handleCloseAggRepayment}
      />

    </main>
  )
}

export default FarmerLoan
