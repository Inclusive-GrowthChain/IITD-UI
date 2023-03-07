import { useState } from "react";
import RepaymentStructure from "./Modals/FpoLoan/RepaymentStructure";
import ApproveLoanApp from "./Modals/FpoLoan/ApproveLoanApp";
import RejectLoanApp from "./Modals/FpoLoan/RejectLoanApp";
import ConfirmLoanStatus from "./Modals/FpoLoan/ConfirmLoanStatus";
import LoanApplication from "./Modals/FpoLoan/LoanApplication";
import ConfirmBox from "./Modals/ConfirmBox";
import Aadhar from "./Modals/Aadhar";
import Pan from "./Modals/Pan";

function FpoLoanTab({ Comp }) {
  const [showConfirmLoanStatus, setShowConfirmLoanStatus] = useState(false)
  const [showRepaymentAmount, setShowRepaymentAmount] = useState(false)
  const [showLoanApplication, setShowLoanApplication] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showApprovedLoan, setShowApprovedLoan] = useState(false)
  const [showRejectedLoan, setShowRejectedLoan] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [toggleState, setToggleState] = useState(1)
  const [step, setStep] = useState(0)

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
  const toggleTab = (index) => setToggleState(index)

  const changeLoanStatus = (e) => {
    e.preventDefault()
    if (e.target.value === "Approved") {
      setShowApprovedLoan(true)
    } else if (e.target.value === "Rejected") {
      setShowRejectedLoan(true)
    }
  }

  const confirmLoan = (e) => {
    e.preventDefault()
    setShowApprovedLoan(true)
    setShowConfirmLoanStatus(true)
  }

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
        <div className="card_content">
          <div style={{ display: "flex" }}>
            <button
              className={toggleState === 1 ? "tab active" : "tab"}
              onClick={() => toggleTab(1)}
              style={{ width: "200px" }}
            >
              Approved Application
            </button>
            <button
              className={toggleState === 2 ? "tab active" : "tab"}
              onClick={() => toggleTab(2)}
              style={{ width: "200px" }}
            >
              Applications History
            </button>
            <button
              className={toggleState === 3 ? "tab active" : "tab"}
              onClick={() => toggleTab(3)}
              style={{ width: "200px" }}
            >
              Applications in Process
            </button>
            <button
              className={toggleState === 4 ? "tab active" : "tab"}
              onClick={() => toggleTab(4)}
              style={{ width: "200px" }}
            >
              Loan Window
            </button>
          </div>

          <div className="panels" style={{ overflowY: "auto" }}>
            <div className={toggleState === 1 ? "panel active" : "panel"}>
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
                    <th>Date of Approved</th>
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
                  <tr>
                    <td>12-03-2022</td>
                    <td>12-03-2022</td>
                    <td>subscription</td>
                    <td> 5000</td>
                    <td>14%</td>
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
                        onClick={handleShowRepaymentAmount}
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
                  <tr>
                    <td>12-03-2022</td>
                    <td>12-03-2022</td>
                    <td>subscription</td>
                    <td> 5000</td>
                    <td>14%</td>
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
                        onClick={handleShowRepaymentAmount}
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
                </tbody>
              </table>
            </div>

            <div className={toggleState === 2 ? "panel active" : "panel"}>
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
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                  </tr>
                  <tr>
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

            <div className={toggleState === 3 ? "panel active" : "panel"}>
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
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <td>2022-64-07</td>
                    <td>02-05-2022</td>
                    <td>₹ 7345</td>
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
                    <td>
                      <div>
                        <select
                          className="form-control"
                          onChange={(e) => changeLoanStatus(e)}
                        >
                          <option value="Pending">Change Loan Status</option>
                          <option value="Approved">
                            Approve and Forward to Samunnati
                          </option>
                          <option value="Rejected">Reject</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={toggleState === 4 ? "panel active" : "panel"}>
              {Comp}
            </div>
          </div>
        </div>
      </div>

      <ApproveLoanApp
        showApprovedLoan={showApprovedLoan}
        handleCloseApprovedLoan={handleCloseApprovedLoan}
        handleShowConfirmLoanStatus={handleShowConfirmLoanStatus}
        confirmLoan={confirmLoan}
      />

      <RejectLoanApp
        showRejectedLoan={showRejectedLoan}
        handleCloseRejectedLoan={handleCloseRejectedLoan}
        handleShowConfirmLoanStatus={handleShowConfirmLoanStatus}
        confirmLoan={confirmLoan}
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
      />

    </div>
  )
}

export default FpoLoanTab;