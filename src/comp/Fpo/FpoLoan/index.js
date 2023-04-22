import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
import { useAuthStore } from "../../../store/useAuthStore";
import useModal from "../../../hooks/useModal";

import DocumentsCollected2 from "../Modals/FpoLoan/DocumentsCollected2";
import DocumentsCollected from "../Modals/FpoLoan/DocumentsCollected";
import LoanApplication2 from "../Modals/FpoLoan/LoanApplication2";
import LoanApplication from "../Modals/FpoLoan/LoanApp";
import LoanDetails from "../Modals/FpoLoan/LoanDetails";
import FarmerLoanTab from "./FarmerLoanTab";
import Loader from "../../Common/Loader";

const applyBtnStyle = {
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
}

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

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
        <input type="text" className="px-2 py-1 border-0" value={loanWindow && (loanWindow.grantedAmount !== -1 ? loanWindow.grantedAmount : loanWindow.requestedAmount)} disabled />
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

function Loan() {
  const { modal, updateModal, closeModal } = useModal()
  const userId = useAuthStore(s => s.userDetails._id)

  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "fpo"],
    queryFn: () => getLoanwindow("fpo")
  })

  const [activeLoanWindow, setActiveLoanWindow] = useState({})
  const [toggleStateList, setToggleStateList] = useState([])
  const [loanWindowList, setLoanWindowList] = useState([])
  const [activeIndex, setActiveIndex] = useState(1)
  const [windowId, setWindowId] = useState("")

  const checkActive = (index, className) => activeIndex === index ? className : ""

  const handleClick = (index) => setActiveIndex(index)

  const generateRandomWindowID = () => {
    let windowVal = 'W' + (Math.floor(100000 + Math.random() * 900000))
    return windowVal
  }

  useEffect(() => {
    if (data) {
      console.log(data?.data)
      const loanWindow = data?.data?.filter((item) => item.fpoId === userId)
      setLoanWindowList(loanWindow)
      // setToggleStateList(Array(loanWindow.length).fill(1))
      // setActiveLoanWindow(loanWindow.reduce((prev, current) => (prev.createdAt > current.createdAt) ? prev : current))
    }
  }, [data, userId])

  const toggleTab = (index, tabNumber) => {
    const newToggleStateList = [...toggleStateList]
    newToggleStateList[index] = tabNumber
    setToggleStateList(newToggleStateList)
  }

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
      <main id="main_container" className="main_container container-fluid itemContainer">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="flex-grow-1">Loan Information</h3>

          <button
            className="loan_btn"
            onClick={() => {
              setWindowId(generateRandomWindowID())
              updateModal("showAdd")
            }}
          >
            {
              activeIndex === 1 ? "Apply for Working Capital Loan Window" : "Apply for Farmer Loan"
            }
          </button>
        </div>

        <div className="list_container">
          <div className="tabs mt-5">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Working Capital Loan
            </button>

            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Farmer Loan
            </button>
          </div>

          <div className="panels">
            <div>
              <button
                className="loan-btn"
                style={applyBtnStyle}
                onClick={() => updateModal("showApplyLoan")}
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
                              {
                                loanWindow?.loans?.filter(loan => loan.status === "approved")
                                  .map((loan) => (
                                    <tr>
                                      <td>{loan.approvalAt.substring(0, 10)}</td>
                                      <td>{loanWindow.fpoName}</td>
                                      <td>{loanWindow.contactNo}</td>
                                      <td>{loan.grantedAmount}</td>
                                      <td>{loan.farmerName}</td>
                                      <td>
                                        <button
                                          style={btnStyle}
                                          onClick={() => updateModal("showLoanDetails", loan)}
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
                              {
                                loanWindow?.loans?.filter(loan => loan.status === "rejected")
                                  .map((loan) => (
                                    <tr>
                                      <td>{loan.createdAt.substring(0, 10)}</td>
                                      <td>{loanWindow.fpoName}</td>
                                      <td>{loanWindow.contactNo}</td>
                                      <td>{loan.requestedAmount}</td>
                                      <td>
                                        <button
                                          style={btnStyle}
                                          onClick={() => updateModal("showRejectionLoan", loan)}
                                        >
                                          view
                                        </button>
                                      </td>
                                      <td>{loan.reason}</td>
                                    </tr>
                                  ))
                              }
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
                              {
                                loanWindow?.loans.filter(loan => loan.status === "in-process")
                                  .map((loan) => (
                                    <tr>
                                      <td>{loan.createdAt.substring(0, 10)}</td>
                                      <td>{loanWindow.fpoName}</td>
                                      <td>{loanWindow.contactNo}</td>
                                      <td>{loan.requestedAmount}</td>
                                      <td>Pending</td>
                                    </tr>
                                  ))
                              }
                            </tbody>
                          </table>
                        </div>

                        <div className={toggleStateList[index] === 4 ? "panel active" : "panel"}>
                          <LoanWindowTable
                            onClick={() => {
                              setWindowId(generateRandomWindowID())
                              updateModal("showApp")
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
              <FarmerLoanTab
                Comp={
                  <LoanWindowTable
                    onClick={() => {
                      setWindowId(generateRandomWindowID())
                      updateModal("showAdd")
                    }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </main>

      {
        modal.state === "showLoanDetails" &&
        <LoanDetails
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showRejectionLoan" &&
        <LoanApplication
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showApp" &&
        <DocumentsCollected
          show
          windowId={windowId}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showApplyLoan" &&
        <LoanApplication2
          show
          loanWindow={activeLoanWindow}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showAdd" &&
        <DocumentsCollected2
          show
          windowId={windowId}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Loan