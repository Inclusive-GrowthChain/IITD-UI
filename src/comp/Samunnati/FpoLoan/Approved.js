import { useState } from "react";
import { Link } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import RepaymentStructure from "../Modals/FpoLoan/RepaymentStructure";

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

      <div className="row">
        <div className="col">
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
                    <td>View Loan Requests</td>
                  </tr>
                </thead>

                <tbody style={tbodyStyle}>
                  {
                    data
                      .filter(a => a?.fpoName.toLowerCase().includes(search.toLowerCase()) || a?.fpoId.toLowerCase().includes(search.toLowerCase()))
                      .map((app) => (
                        <tr>
                          <td>{app.approvalDate.substring(0, 10)}</td>
                          <td>{app.fpoId}</td>
                          <td>{app.fpoName}</td>
                          <td>{app.contactNo}</td>
                          <td>{app.grantedAmount}</td>
                          <td>
                            <button
                              style={btnStyle}
                              onClick={() => updateModal("showRepaymentStructure", data)}
                            >
                              view
                            </button>
                          </td>
                          <td>{app.loans.filter((loan) => loan.status === "in-process").length}</td>
                          <td>
                            <Link to="/samunnati/fpo-subloan"
                              className="data_wrapper"
                              style={linkStyle}
                              onClick={() => localStorage.setItem("loanWindowId", app.id)}
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
        </div>
      </div>

      {
        modal.state &&
        <RepaymentStructure
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Approved