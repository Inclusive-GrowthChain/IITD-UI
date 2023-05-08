import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
import { useAuthStore } from "../../../store/useAuthStore";
import useModal from "../../../hooks/useModal";

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
  color: "#fff",
  border: "none",
  padding: "4px 16px",
  borderRadius: "5px",
  top: 0,
  right: 0,
}

const theadStyle = {
  color: "#064420",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: 600,
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
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
    <div className="card_content mb-5">
      <div className="d-flex align-items-center">
        {
          tabs.map(t => (
            <button
              className={`tab ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
              style={{ padding: "8px" }}
              key={t.id}
            >
              {t.title}
            </button>
          ))
        }
      </div>

      <div className="panels" style={{ overflowY: "auto" }}>
        <div className={active === 1 ? "panel active" : "panel"}>
          <table className="table-borderless">
            <thead style={theadStyle}>
              <tr>
                <th>Date of Loan Approval</th>
                <th>Name of FPO</th>
                <th>FPO Contact</th>
                <th>Granted Loan Amount</th>
                <th>Farmer Name</th>
                <th>Loan Details</th>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans?.filter(loan => loan.status === "approved")
                  .map((loan) => (
                    <tr key={loan.id}>
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
            <thead style={theadStyle}>
              <tr>
                <td>Date of Application</td>
                <td>Name of FPO</td>
                <td>Contact No.</td>
                <td>Requested Loan Amount</td>
                <td>Loan Application</td>
                <td>Reason for Rejection</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans?.filter(loan => loan.status === "rejected")
                  .map((loan) => (
                    <tr key={loan.id}>
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
            <thead style={theadStyle}>
              <tr>
                <td>Date of Application</td>
                <td>Name of FPO</td>
                <td>Contact No.</td>
                <td>Requested Loan Amount</td>
                <td>Loan Application</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans.filter(loan => loan.status === "in-process")
                  .map((loan) => (
                    <tr key={loan.id}>
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
          <LoanWindowTable loanWindow={loanWindow} />
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
    queryFn: () => getLoanwindow({ windowType: "fpo" })
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
      <button
        className="loan-btn position-absolute"
        style={applyBtnStyle}
        onClick={() => updateModal("showApplyLoan", {
          windowId: loanWindowList[0]?.windowId,
          id: loanWindowList[0]?.id
        })}
      >
        Apply for Loan
      </button>

      {
        loanWindowList.map(loanWindow => (
          <WindowRow
            key={loanWindow.id}
            loanWindow={loanWindow}
            updateModal={updateModal}
          />
        ))
      }

      {
        modal.state === "showApplyLoan" &&
        <LoanApplication2
          show
          applyFor="fpo"
          loanWindow={modal.data}
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