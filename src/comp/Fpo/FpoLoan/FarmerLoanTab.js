import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
import { useAuthStore } from "../../../store/useAuthStore";
import useModal from "../../../hooks/useModal";

import FarmerLoanApplication from "../Modals/FpoLoan/FarmerLoanApplication";
import ApproveLoanApp from "../Modals/FpoLoan/ApproveLoanApp";
import RejectLoanApp from "../Modals/FpoLoan/RejectLoanApp";
import LoanWindowTable from './LoanWindowTable';
import Loader from "../../Common/Loader";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const theadStyle = {
  color: "#00A877",
  fontSize: "17px",
  fontWeight: "bold",
  borderBottom: "1px solid #c7ccd1",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

const tabs = [
  {
    id: 1,
    title: "Approved Application",
  },
  {
    id: 2,
    title: "Rejected Applications",
  },
  {
    id: 3,
    title: "Pending Applications",
  },
  {
    id: 4,
    title: "Loan Window",
  },
]

function Select({ updateModal }) {
  const [val, setVal] = useState("")

  return (
    <select
      className="form-control"
      value={val}
      onChange={e => {
        setVal(e.target.value)
        updateModal(e.target.value === "approve" ? "showApprovedLoan" : "showRejectedLoan")
      }}
    >
      <option value="" disabled>Change Loan Status</option>
      <option value="approve">Approve and Forward to Samunnati</option>
      <option value="reject">Reject</option>
    </select>
  )
}

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
          <table>
            <thead style={theadStyle}>
              <tr>
                <th>Date of Application</th>
                <th>Date of Approval</th>
                <th>Subscription Tenure</th>
                <th>Amount</th>
                <th>Interest Rate</th>
                <th>Loan Details</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans?.filter(loan => loan.fpoApprovalStatus === "approved")
                  .map(loan => (
                    <tr key={loan.id}>
                      <td>{loan?.createdAt?.substring(0, 10)}</td>
                      <td>{loan?.fpoApprovalAt?.substring(0, 10)}</td>
                      <td>{loan.loanTenure}</td>
                      <td>{loan.requestedAmount}</td>
                      <td>{loan.intrest}%</td>
                      <td>
                        <button
                          className="py-0.5"
                          style={btnStyle}
                          onClick={() => updateModal("showLoanApplication", loan)}
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

        <div className={active === 2 ? "panel active" : "panel"}>
          <table>
            <thead style={theadStyle}>
              <tr>
                <th>Farmer Name</th>
                <th>Loan Amount</th>
                <th>Loan Date</th>
                <th>Reason</th>
                <th>Loan Details</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans?.filter(loan => loan.fpoApprovalStatus === "rejected")
                  .map(loan => (
                    <tr key={loan.id}>
                      <td>{loan.name}</td>
                      <td>₹ {loan.requestedAmount}</td>
                      <td>{loan?.createdAt?.substring(0, 10)}</td>
                      <td>{loan.reason}</td>
                      <td>
                        <button
                          className="py-0.5"
                          style={btnStyle}
                          onClick={() => updateModal("showLoanApplication", loan)}
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

        <div className={active === 3 ? "panel active" : "panel"}>
          <table>
            <thead style={theadStyle}>
              <tr>
                <th>Loan Id</th>
                <th>Loan Application Date</th>
                <th>Loan Amount</th>
                <th>Loan Application</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              {
                loanWindow?.loans?.filter((loan) => loan.fpoApprovalStatus === "in-process")
                  .map((loan) => (
                    <tr key={loan.id}>
                      <td>{loan.loanId}</td>
                      <td>{loan.createdAt && loan.createdAt.substring(0, 10)}</td>
                      <td>₹ {loan.requestedAmount}</td>
                      <td>
                        <button
                          className="py-0.5"
                          style={btnStyle}
                          onClick={() => updateModal("showLoanApplication", loan)}
                        >
                          View
                        </button>
                      </td>
                      <td>
                        <Select updateModal={val => updateModal(val, loan)} />
                      </td>
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

function FarmerLoanTab() {
  const { modal, updateModal, closeModal } = useModal()
  const userId = useAuthStore(s => s.userDetails._id)

  const [loanWindowList, setLoanWindowList] = useState([])

  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "farmer"],
    queryFn: getLoanwindow
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
            key={loanWindow.id}
            loanWindow={loanWindow}
            updateModal={updateModal}
          />
        ))
      }

      {
        modal.state === "showApprovedLoan" &&
        <ApproveLoanApp
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showRejectedLoan" &&
        <RejectLoanApp
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showLoanApplication" &&
        <FarmerLoanApplication
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default FarmerLoanTab;