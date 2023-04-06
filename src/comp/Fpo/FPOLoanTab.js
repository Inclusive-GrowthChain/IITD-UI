import { useState, useEffect } from "react";
import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import ApproveLoanApp from "./Modals/FpoLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FpoLoan/RejectLoanApp";
import ConfirmLoanStatus from "./Modals/FpoLoan/ConfirmLoanStatus";
import LoanApplication from "./Modals/FpoLoan/LoanApplication";
import ConfirmBox from "./Modals/ConfirmBox";
import Aadhar from "./Modals/Aadhar";
import Pan from "./Modals/Pan";
import axios from "axios";

function FpoLoanTab({ Comp }) {
  const [showConfirmLoanStatus, setShowConfirmLoanStatus] = useState(false)
  const [showRepaymentAmount, setShowRepaymentAmount] = useState(false)
  const [showLoanApplication, setShowLoanApplication] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showApprovedLoan, setShowApprovedLoan] = useState(false)
  const [showRejectedLoan, setShowRejectedLoan] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [toggleStateList, setToggleStateList] = useState([])
  const [fpoId, setFpoId] = useState(localStorage.getItem("userId"))
  const [loanWindowList, setLoanWindowList] = useState([])
  const [activeLoanWindow, setActiveLoanWindow] = useState({})
  const [step, setStep] = useState(0)
  const [currentLoan, setCurrentLoan] = useState({})

  const handleCloseConfirmLoanStatus = () => setShowConfirmLoanStatus(false)
  const handleShowConfirmLoanStatus = () => setShowConfirmLoanStatus(true)
  const handleCloseRepaymentAmount = () => setShowRepaymentAmount(false)
  const handleCloseLoanApplication = () => setShowLoanApplication(false)
  const handleShowRepaymentAmount = () => setShowRepaymentAmount(true)
  const handleShowLoanApplication = () => setShowLoanApplication(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleCloseApprovedLoan = () => setShowApprovedLoan(false)
  const handleCloseRejectedLoan = () => setShowRejectedLoan(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleShowPanCardImg = () => setShowPanCardImg(true)

  const changeLoanStatus = (e) => {
    e.preventDefault()
    if (e.target.value === "approve") {
      setShowApprovedLoan(true)
    } else if (e.target.value === "reject") {
      setShowRejectedLoan(true)
    }
  }

  const confirmLoanStatus = (e) => {
    e.preventDefault()
    // setShowApprovedLoan(true)
    setShowConfirmLoanStatus(true)
  }

  const confirmLoan = async (e, reason) => {
    e.preventDefault()
    if(reason) {
      rejectLoan();
    } 
    else {
      approveLoan();
    }
  }

  const approveLoan = async () => {
    const newLoan = {
      "fpoApprovalStatus": "approved"
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${activeLoanWindow.id}/loan/${currentLoan.id}/approval`, newLoan)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  const rejectLoan = async (e, reason) => {
    const newLoan = {
      "fpoApprovalStatus": "rejected",
      "reason": reason
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${activeLoanWindow.id}/loan/${currentLoan.id}/approval`, newLoan)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  useEffect(() => {
    async function fetchLoanWindow() {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        const response = await axios.get("http://13.232.131.203:3000/api/loanwindow?windowType=farmer");
        const loanWindow = response.data.data.filter((item) => item.fpoId == fpoId);
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
    <div className="loan_fpo">
      <div className="aggregate_repayment_container" style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            color: "white",
            borderRadius: "5px",
            border: "none",
            padding: "0.25rem 1rem",
            width: "fit-content",
            fontSize: "1rem",
            lineHeight: "2rem",
            backgroundColor: "#064420",
            marginRight: "50px",
          }}
          onClick={handleShowRepaymentAmount}
        >
          Aggregate Repayment
        </button>
      </div>
      <div className="card_wrapper">
        {
          loanWindowList && loanWindowList.map((loanWindow, index) => (
            <div className="card_content">
              <div style={{ display: "flex" }}>
                <button
                  className={toggleStateList[index] === 1 ? "tab active" : "tab"}
                  onClick={() => toggleTab(index, 1)}
                  style={{ width: "200px" }}
                >
                  Approved Application
                </button>
                <button
                  className={toggleStateList[index] === 2 ? "tab active" : "tab"}
                  onClick={() => toggleTab(index, 2)}
                  style={{ width: "200px" }}
                >
                  Applications History
                </button>
                <button
                  className={toggleStateList[index] === 3 ? "tab active" : "tab"}
                  onClick={() => toggleTab(index, 3)}
                  style={{ width: "200px" }}
                >
                  Applications in Process
                </button>
                <button
                  className={toggleStateList[index] === 4 ? "tab active" : "tab"}
                  onClick={() => toggleTab(index, 4)}
                  style={{ width: "200px" }}
                >
                  Loan Window
                </button>
              </div>

              <div className="panels" style={{ overflowY: "auto" }}>
                <div className={toggleStateList[index] === 1 ? "panel active" : "panel"}>
                  <table>
                    <thead
                      style={{
                        color: "#00A877",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                      }}
                    >
                      <tr>
                        <th>Date of Application</th>
                        <th>Date of Approval</th>
                        <th>Subscription Tenure</th>
                        <th>Amount</th>
                        <th>Interest Rate</th>
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
                      {
                        loanWindow.loans && loanWindow.loans.filter((loan) => loan.status == "approved").map((loan) => (
                          <tr>
                            <td>{loan.createdAt && loan.createdAt.substring(0, 10)}</td>
                            <td>{loan.fpoApprovalAt && loan.fpoApprovalAt.substring(0, 10)}</td>
                            <td>{loan.loanTenure}</td>
                            <td>{loan.requestedAmount}</td>
                            <td>{loan.intrest}%</td>
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
                                  setCurrentLoan(loan);
                                  setActiveLoanWindow(loanWindow);
                                  handleShowRepaymentAmount();
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
                                onClick={handleShowLoanApplication}
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>

                <div className={toggleStateList[index] === 2 ? "panel active" : "panel"}>
                  <table>
                    <thead
                      style={{
                        color: "#00A877",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
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
                      }}
                    >
                      {
                        loanWindow.loans && loanWindow.loans.map((loan) => (
                          <tr>
                            <td>{loan.loanId}</td>
                            <td>{loan.createdAt.substring(0, 10)}</td>
                            <td>₹ {loan.requestedAmount}</td>
                            <td>???</td>
                            <td>₹ ???</td>
                            <td>₹ ???</td>
                            <td>???</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>

                <div className={toggleStateList[index] === 3 ? "panel active" : "panel"}>
                  <table>
                    <thead
                      style={{
                        color: "#00A877",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Loan Id</th>
                        <th>Loan Application Date</th>
                        <th>Loan Amount</th>
                        <th>Loan Application</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {
                        loanWindow.loans && loanWindow.loans.filter((loan) => loan.fpoApprovalStatus == "in-process").map((loan) => (
                          <tr>
                            <td>{loan.loanId}</td>
                            <td>{loan.createdAt && loan.createdAt.substring(0, 10)}</td>
                            <td>₹ {loan.requestedAmount}</td>
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
                                  setCurrentLoan(loan);
                                  setActiveLoanWindow(loanWindow);
                                  handleShowLoanApplication();
                                }}
                              >
                                View
                              </button>
                            </td>
                            <td>
                              <div>
                                <select
                                  className="form-control"
                                  onChange={(e) => {
                                    setCurrentLoan(loan);
                                    changeLoanStatus(e)
                                  }}
                                >
                                  <option value="pending">Change Loan Status</option>
                                  <option value="approve">
                                    Approve and Forward to Samunnati
                                  </option>
                                  <option value="reject">Reject</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>

                <div className={toggleStateList[index] === 4 ? "panel active" : "panel"}>
                  {Comp}
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <ApproveLoanApp
        showApprovedLoan={showApprovedLoan}
        handleCloseApprovedLoan={handleCloseApprovedLoan}
        handleShowConfirmLoanStatus={handleShowConfirmLoanStatus}
        confirmLoanStatus={confirmLoanStatus}
        currentLoan={currentLoan}
        currentLoanWindow={activeLoanWindow}
      />

      <RejectLoanApp
        showRejectedLoan={showRejectedLoan}
        handleCloseRejectedLoan={handleCloseRejectedLoan}
        handleShowConfirmLoanStatus={handleShowConfirmLoanStatus}
        confirmLoanStatus={confirmLoanStatus}
        currentLoan={currentLoan}
        currentLoanWindow={activeLoanWindow}
      />

      <ConfirmLoanStatus
        showConfirmLoanStatus={showConfirmLoanStatus}
        handleCloseConfirmLoanStatus={handleCloseConfirmLoanStatus}
        confirmLoan={confirmLoan}
      />

      <LoanApplication
        showLoanApplication={showLoanApplication}
        handleCloseLoanApplication={handleCloseLoanApplication}
        step={step}
        setStep={setStep}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
        currentLoan={currentLoan}
        currentloanWindow={activeLoanWindow}
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

      <RepaymentStructure
        showRepayment={showRepaymentAmount}
        handleCloseRepayment={handleCloseRepaymentAmount}
        currentLoan={currentLoan}
        currentLoanWindow={activeLoanWindow}
      />

    </div>
  )
}

export default FpoLoanTab;