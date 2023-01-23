import { useState } from "react";
import Button from "react-bootstrap/Button";

import { grantedLoans, rejectedLoans, inProgressLoans } from './dummyLoanData';

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import SumunnatiPaymentProof from "./Modals/Loan/SumunnatiPaymentProof";
import RepaymentStructure from "./Modals/Loan/RepaymentStructure";
import LoanApplication2 from "./Modals/Loan/LoanApplication2";
import LoanApplication from "./Modals/Loan/LoanApplication";
import FarmerLoan from "./Modals/Loan/FarmerLoan";
import AadharCard from "./Modals/Loan/AadharCard";
import Submitted from "./Modals/Loan/Submitted";
import PanCard from "./Modals/Loan/PanCard";

const style = {
  backgroundColor: "#66FF00",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const inprogressButtonStyle = {
  backgroundColor: "yellow",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const repaidButtonStyle = {
  backgroundColor: "#1ad77f",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1.4rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const Loan = () => {
  const [showGrantedLoanApplication, setShowGrantedLoanApplication] = useState(false)
  const [showSamunnatiPaymentProof, setShowSamunnatiPaymentProof] = useState(false)
  const [showInProcessLoanApp, setShowInProcessLoanApp] = useState(false)
  const [showRepaymentLoan, setShowRepaymentLoan] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showLoanApp, setShowLoanApp] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1")
  const [step, setStep] = useState(0)

  const handleCloseLoanApp = () => setShowLoanApp(false)
  const handleShowLoanApp = () => setShowLoanApp(true)
  const handleShowRepaymentLoan = () => setShowRepaymentLoan(true)
  const handleCloseGrantedLoanApplication = () => setShowGrantedLoanApplication(false)
  const handleShowGrantedLoanApplication = () => setShowGrantedLoanApplication(true)
  const handleCloseInProcessLoanApp = () => setShowInProcessLoanApp(false)
  const handleShowInProcessLoanApp = () => setShowInProcessLoanApp(true)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleShowSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(true)
  const handleCloseSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleCloseRepaymentLoan = () => setShowRepaymentLoan(false)

  const confirmBid = (e) => {
    e.preventDefault()
    setShowConfirmBox(true)
  }

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
              Apply for loan
            </h3>
          </div>
          <div
            className="list__btn"
            style={{
              position: "relative",
              float: "right",
              right: "18px",
              top: "10px",
            }}
          >
            <Button
              className="loan_button"
              style={{
                backgroundColor: "#064420",
                border: "none",
                width: "130px",
              }}
              onClick={handleShowLoanApp}
            >
              Apply Loan
            </Button>
          </div>

          <div className="tabs_wrapper">
            <ul className="nav-tab">
              <TabNavItem
                title="Granted Loans"
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
                title="Loan in process"
                id="tab3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>

            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTab}>
                <div className="row">
                  <div className="col">
                    <div className="card shadow">
                      <div className="table-responsive">
                        <table>
                          <thead
                            style={{
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan application date</th>
                              <th>Loan amount</th>
                              <th>Interest rate</th>
                              <th>Loan date</th>
                              <th>Outstanding amount</th>
                              <th>Next payment amount</th>
                              <th>Next payment date</th>
                              <th>Loan Application</th>
                              <th>Repayment structure</th>
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
                              grantedLoans.map(g => (
                                <tr key={g.id}>
                                  <td>{g.id}</td>
                                  <td>{g.applicationDate}</td>
                                  <td>₹ {g.amount}</td>
                                  <td>{g.rate}%</td>
                                  <td>{g.loanDate}</td>
                                  <td>₹ {g.outstandingAmount}</td>
                                  <td>₹ {g.nextPaymentAmount}</td>
                                  <td>{g.nextPaymentDate}</td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowRepaymentLoan}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={g.status === "In progress" ? inprogressButtonStyle : repaidButtonStyle}
                                    >
                                      {g.status}
                                    </button>
                                  </td>
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

              <TabContent id="tab2" activeTab={activeTab}>
                <div className="row">
                  <div className="col">
                    <div className="card shadow">
                      <div className="table-responsive">
                        <table>
                          <thead
                            style={{
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan application date</th>
                              <th>Proposed Loan amount</th>
                              <th>Reason for rejection</th>
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
                              rejectedLoans.map(r => (
                                <tr key={r.id}>
                                  <td>{r.id}</td>
                                  <td>{r.date}</td>
                                  <td>₹ {r.amount}</td>
                                  <td>{r.reason}</td>
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
                <div className="row">
                  <div className="col">
                    <div className="card shadow">
                      <div className="table-responsive">
                        <table>
                          <thead
                            style={{
                              fontSize: "17px",
                              verticalAlign: "top",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan application date</th>
                              <th>Proposed Loan amount</th>
                              <th>Loan application</th>
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
                              inProgressLoans.map(ip => (
                                <tr key={ip.id}>
                                  <td>{ip.id}</td>
                                  <td>{ip.date}</td>
                                  <td>₹ {ip.amount}</td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowInProcessLoanApp}
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
                  </div>
                </div>
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      <FarmerLoan
        step={step}
        setStep={setStep}
        showLoanApp={showLoanApp}
        confirmBid={confirmBid}
        handleCloseLoanApp={handleCloseLoanApp}
      />

      <LoanApplication
        step={step}
        setStep={setStep}
        showInProcessLoanApp={showInProcessLoanApp}
        handleShowPanCardImg={handleShowPanCardImg}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleCloseInProcessLoanApp={handleCloseInProcessLoanApp}
      />

      <Submitted
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
      />

      <AadharCard
        showAadharCardImg={showAadharCardImg}
        handleCloseAadharCardImg={handleCloseAadharCardImg}
      />

      <PanCard
        showPanCardImg={showPanCardImg}
        handleClosePanCardImg={handleClosePanCardImg}
      />

      <LoanApplication2
        step={step}
        setStep={setStep}
        showGrantedLoanApplication={showGrantedLoanApplication}
        handleCloseGrantedLoanApplication={handleCloseGrantedLoanApplication}
        handleShowSamunnatiPaymentProof={handleShowSamunnatiPaymentProof}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
      />

      <SumunnatiPaymentProof
        showSamunnatiPaymentProof={showSamunnatiPaymentProof}
        handleCloseSamunnatiPaymentProof={handleCloseSamunnatiPaymentProof}
      />

      <RepaymentStructure
        showRepaymentLoan={showRepaymentLoan}
        handleCloseRepaymentLoan={handleCloseRepaymentLoan}
      />
    </div>
  )
}

export default Loan
