import { useState } from "react";
import useModal from "../../../hooks/useModal";

import RejectedLoanApp from "../Modals/FpoLoan/RejectedLoanApp";

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

function Rejected({ data = [], searchInputStyle, topWrapperStyle, theadStyle, tbodyStyle }) {
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
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead style={theadStyle}>
                  <tr>
                    <td>Date of Application</td>
                    <td>FPO ID</td>
                    <td>Name of FPO</td>
                    <td>Contact No.</td>
                    <td>Requested Window Amount</td>
                    <td>Loan Application</td>
                    <td>Reason for Rejection</td>
                  </tr>
                </thead>

                <tbody style={tbodyStyle}>
                  {
                    data
                      .filter(a => a?.fpoName.toLowerCase().includes(search.toLowerCase()) || a?.fpoId.toLowerCase().includes(search.toLowerCase()))
                      .map((app) => (
                        <tr>
                          <td>{app.dateOfApplication}</td>
                          <td>{app.fpoId}</td>
                          <td>{app.fpoName}</td>
                          <td>{app.contactNo}</td>
                          <td>{app.requestedAmount}</td>
                          <td>
                            <button
                              style={btnStyle}
                              onClick={() => updateModal("show", app)}
                            >
                              view
                            </button>
                          </td>
                          <td>{app.reason}</td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state &&
        <RejectedLoanApp
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Rejected