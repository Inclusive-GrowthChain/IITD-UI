import { useState } from "react";
import { Link } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import RepaymentStructure from "../Modals/FpoLoan/RepaymentStructure";

const linkStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
  textDecoration: "none",
  fontWeight: "400"
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

function Approved({ data = [], searchInputStyle, topWrapperStyle, theadStyle, tbodyStyle }) {
  const { modal, updateModal, closeModal } = useModal()
  const [search, setSearch] = useState("")

  return (
    <>
      <div
        className="form-group"
        style={topWrapperStyle}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search by FPO Name or FPO ID"
          style={searchInputStyle}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="card shadow">
        <div className=" table-responsive">
          <table className="table table-borderless">
            <thead style={theadStyle}>
              <tr>
                <td>Date of Loan Window Approval</td>
                <td>FPO ID</td>
                <td>Name of FPO</td>
                <td>FPO Contact</td>
                <td>Granted Window Amount</td>
                <td>Repayment Structure</td>
                <td>Number of Pending Loan Requests</td>
                <td>Loan Requests</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                data
                  .filter(a => a?.fpoName.toLowerCase().includes(search.toLowerCase()) || a?.fpoId.toLowerCase().includes(search.toLowerCase()))
                  .map(app => (
                    <tr key={app.id}>
                      <td>{app.approvalDate.substring(0, 10)}</td>
                      <td>{app.fpoId}</td>
                      <td>{app.fpoName}</td>
                      <td>{app.contactNo}</td>
                      <td>{app.grantedAmount}</td>
                      <td>
                        <button
                          style={btnStyle}
                          onClick={() => updateModal("show", app)}
                        >
                          view
                        </button>
                      </td>
                      <td>{app.loans.filter((loan) => loan.status === "pending").length}</td>
                      <td>
                        <Link
                          to={`/samunnati/farmer-subloan/${app.id}`}
                          className="data_wrapper"
                          style={linkStyle}
                          state={app}
                        >
                          view
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        modal.state &&
        <RepaymentStructure
          show
          data={modal.data}
          windowType="farmer"
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Approved