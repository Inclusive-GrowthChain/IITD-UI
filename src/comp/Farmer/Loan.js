import { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import SumunnatiPaymentProof from "./Modals/Loan/SumunnatiPaymentProof";
import RepaymentStructure from "./Modals/Loan/RepaymentStructure";
import LoanApplication2 from "./Modals/Loan/LoanApplication2";
import LoanApplication from "./Modals/Loan/LoanApplication";
import FarmerLoan from "./Modals/Loan/FarmerLoan";
import AadharCard from "./Modals/Loan/AadharCard";
import Submitted from "./Modals/Loan/Submitted";
import PanCard from "./Modals/Loan/PanCard";

import { useQuery } from "@tanstack/react-query";

import { getLoanList } from "../../actions/farmer";
import useModal from "../../hooks/useModal";

import Loader from "../Common/Loader";

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
  // const [showGrantedLoanApplication, setShowGrantedLoanApplication] = useState(false)
  const [showSamunnatiPaymentProof, setShowSamunnatiPaymentProof] = useState(false)
  // const [showInProcessLoanApp, setShowInProcessLoanApp] = useState(false)
  const [showRepaymentLoan, setShowRepaymentLoan] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  // const [showLoanApp, setShowLoanApp] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1")
  const [step, setStep] = useState(0)

  // const handleCloseLoanApp = () => setShowLoanApp(false)
  // const handleShowLoanApp = () => setShowLoanApp(true)
  const handleShowRepaymentLoan = () => setShowRepaymentLoan(true)
  // const handleCloseGrantedLoanApplication = () => setShowGrantedLoanApplication(false)
  // const handleShowGrantedLoanApplication = () => setShowGrantedLoanApplication(true)
  // const handleCloseInProcessLoanApp = () => setShowInProcessLoanApp(false)
  // const handleShowInProcessLoanApp = () => setShowInProcessLoanApp(true)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleShowSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(true)
  const handleCloseSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleCloseRepaymentLoan = () => setShowRepaymentLoan(false)

  const confirm = (e) => {
    e.preventDefault()
    setShowConfirmBox(true)
  }

  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["farmer/loans"],
    queryFn: getLoanList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

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
              onClick={() => updateModal("FarmerLoan")}
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
                              data && data.data
                                .filter((g) => g.status === "approved")
                                .map(g => (
                                  <tr key={g.id}>
                                    <td>{g.loanId}</td>
                                    <td>{g.createdAt.substring(0, 10)}</td>
                                    <td>₹ {g.grantedAmount}</td>
                                    <td>{g.intrest}%</td>
                                    <td>{g.loanDate}</td>
                                    <td>₹ {g.outstandingAmount}</td>
                                    <td>₹ {g.nextPaymentAmount}</td>
                                    <td>{g.nextPaymentDate}</td>
                                    <td>
                                      <button
                                        style={style}
                                        onClick={() => updateModal("LoanApplication", g)}
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
                <div className="row" style={{ marginBottom: '50px' }}>
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
                              data && data.data
                                .filter((r) => r.status === "rejected" || r.fpoApprovalStatus === "rejected")
                                .map(r => (
                                  <tr key={r.id}>
                                    <td>{r.loanId}</td>
                                    <td>{r.createdAt.substring(0, 10)}</td>
                                    <td>₹ {r.requestedAmount}</td>
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
                              data && data.data
                                .filter((ip) => ip.status === "in-process" && ip.fpoApprovalStatus !== "rejected")
                                .map(ip => (
                                  <tr key={ip.id}>
                                    <td>{ip.loanId}</td>
                                    <td>{ip.createdAt.substring(0, 10)}</td>
                                    <td>₹ {ip.requestedAmount}</td>
                                    <td>
                                      <button
                                        style={style}
                                        // onClick={handleShowInProcessLoanApp}
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

      {
        modal.state === "FarmerLoan" &&
        <FarmerLoan
          show
          step={step}
          setStep={setStep}
          confirm={confirm}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "LoanApplication" &&
        <LoanApplication
          show
          step={step}
          data={data}
          setStep={setStep}
          handleShowPanCardImg={handleShowPanCardImg}
          handleShowAadharCardImg={handleShowAadharCardImg}
          handleClose={closeModal}
        />
      }

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
        show
        handleClose={closeModal}
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
