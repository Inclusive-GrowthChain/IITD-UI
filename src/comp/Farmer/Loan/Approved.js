const inprogressButtonStyle = {
  backgroundColor: "yellow",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

const repaidButtonStyle = {
  backgroundColor: "#1ad77f",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1.4rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

const theadStyle = {
  fontSize: "15px",
  verticalAlign: "top",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

const style = {
  backgroundColor: "#66FF00",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

function Approved({ data = [], updateModal }) {
  return (
    <div className="card shadow">
      <div className=" table-responsive p-3">
        <table className="table table-striped">
          <thead style={theadStyle}>
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

          <tbody style={tbodyStyle}>
            {data.map((g) => (
              <tr key={g.id}>
                <td>{g.loanId}</td>
                <td>{g.createdAt.substring(0, 10)}</td>
                <td>₹ {g.grantedAmount}</td>
                <td>{g.intrest}%</td>
                <td>{g.approvalAt.substring(0, 10)}</td>
                {g.farmerWindowRepaymentStructure.find(
                  (f) => f.completed === false
                ) && (
                  <td>
                    ₹{" "}
                    {
                      g.farmerWindowRepaymentStructure.find(
                        (f) => f.completed === false
                      ).balance
                    }
                  </td>
                )}
                {g.farmerWindowRepaymentStructure.find(
                  (f) => f.completed === false
                ) && (
                  <td>
                    ₹{" "}
                    {
                      g.farmerWindowRepaymentStructure.find(
                        (f) => f.completed === false
                      ).emi
                    }
                  </td>
                )}
                {g.farmerWindowRepaymentStructure.find(
                  (f) => f.completed === false
                ) && (
                  <td>
                    {
                      g.farmerWindowRepaymentStructure.find(
                        (f) => f.completed === false
                      ).repaymentDate
                    }
                  </td>
                )}
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
                    onClick={() => updateModal("showRepaymentLoan", g)}
                  >
                    view
                  </button>
                </td>
                <td>
                  <button
                    className="py-0.5"
                    style={
                      g.status === "In progress"
                        ? inprogressButtonStyle
                        : repaidButtonStyle
                    }
                  >
                    {g.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Approved;
