import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
import { useAuthStore } from "../../../store/useAuthStore";
import useModal from "../../../hooks/useModal";

import DocumentsCollected from "../Modals/FpoLoan/DocumentsCollected";
import LoanApplication2 from "../Modals/FpoLoan/LoanApplication2";
import LoanApplication from "../Modals/FpoLoan/LoanApp";
import LoanDetails from "../Modals/FpoLoan/LoanDetails";
import LoanWindowTable from './LoanWindowTable';
import Loader from "../../Common/Loader";

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

const tabs = [
  {
    id: 1,
    title: "Approved Loans",
  },
  {
    id: 2,
    title: "Rejected Loans",
  },
  {
    id: 3,
    title: "Pending Loans",
  },
  {
    id: 4,
    title: "Loan Window",
  },
]

function WindowRow({ loanWindow, updateModal }) {
  const [active, setActive] = useState(1)

  return (
    <div className="card_wrapper" style={{ marginTop: "0" }}>
      <div className="card_content">
        <div style={{ display: "flex" }}>
          {
            tabs.map(t => (
              <button
                className={`tab ${active === t.id ? "active" : ""}`}
                onClick={() => setActive(t.id)}
                style={{ padding: "8px" }}
              >
                {t.title}
              </button>
            ))
          }

          <button
            className="loan-btn"
            style={applyBtnStyle}
            onClick={() => updateModal("showApplyLoan")}
          >
            Apply for Loan
          </button>
        </div>

        <div className="panels" style={{ overflowY: "auto" }}>
          <div className={active === 1 ? "panel active" : "panel"}>
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

          <div className={active === 2 ? "panel active" : "panel"}>
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

          <div className={active === 3 ? "panel active" : "panel"}>
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

          <div className={active === 4 ? "panel active" : "panel"}>
            <LoanWindowTable
              onClick={() => updateModal("showApp")}
              loanWindow={loanWindow}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CapitalLoanTab() {
  const { modal, updateModal, closeModal } = useModal()
  const userId = useAuthStore(s => s.userDetails._id)

  const [loanWindowList, setLoanWindowList] = useState([])

  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "fpo"],
    queryFn: () => getLoanwindow("fpo")
  })

  useEffect(() => {
    if (data) {
      const loanWindow = data?.data?.filter((item) => item.fpoId === userId)
      setLoanWindowList(loanWindow)
    }
  }, [data, userId])

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
      {
        loanWindowList.map(loanWindow => (
          <WindowRow
            loanWindow={loanWindow}
            updateModal={updateModal}
          />
        ))
      }

      {
        modal.state === "showApp" &&
        <DocumentsCollected
          show
          windowId=""
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showApplyLoan" &&
        <LoanApplication2
          show
          loanWindow={{}} // activeLoanWindow
          handleClose={closeModal}
        />
      }

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
    </>
  )
}

export default CapitalLoanTab