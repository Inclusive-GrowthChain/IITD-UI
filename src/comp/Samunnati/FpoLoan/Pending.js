import { useState } from "react";
import useModal from "../../../hooks/useModal";

import PendingLoanApp from "../Modals/FpoLoan/PendingLoanApp";

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
};

function Pending({
  data = [],
  searchInputStyle,
  topWrapperStyle,
  theadStyle,
  tbodyStyle,
}) {
  const { modal, updateModal, closeModal } = useModal();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="form-group" style={topWrapperStyle}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by FPO Name or FPO ID"
          style={searchInputStyle}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card shadow">
        <div className=" table-responsive p-3">
          <table className="table table-striped">
            <thead style={theadStyle}>
              <tr>
                <td>Date of Application</td>
                <td>FPO ID</td>
                <td>Name of FPO</td>
                <td>Contact No.</td>
                <td>Requested Window Amount</td>
                <td>Loan Window Application</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {data
                .filter(
                  (a) =>
                    a?.fpoName?.toLowerCase()?.includes(search.toLowerCase()) ||
                    a?.fpoId?.toLowerCase()?.includes(search.toLowerCase())
                )
                .map((app) => (
                  <tr key={app.id}>
                    <td>{app.dateOfApplication.substring(0, 10)}</td>
                    <td>{app.fpoId}</td>
                    <td>{app.fpoName}</td>
                    <td>{app.contactNo}</td>
                    <td>{app.requestedAmount}</td>
                    <td>
                      <button
                        style={btnStyle}
                        onClick={() => updateModal("loanApp", app)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {modal.state && (
        <PendingLoanApp
          show
          data={modal.data}
          windowType="fpo"
          handleClose={closeModal}
        />
      )}
    </>
  );
}

export default Pending;
