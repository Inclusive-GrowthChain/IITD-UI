import { Fragment } from "react";

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
};

function ApprovedLoans({
  theadStyle,
  tbodyStyle,
  loanWindowList,
  updateModal,
}) {

  return (
    <div className="card_table2">
      <div className="table-responsive">
        <table>
          <thead style={theadStyle}>
            <tr>
              <td>Farmer Id</td>
              <td>Farmer Name</td>
              <th>Loan Id</th>
              <th>Loan Application Date</th>
              <th>Loan Amount</th>
              <th>Repayment Structure</th>
              <th>Loan Application</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {loanWindowList?.map((loanWindow) => (
              <Fragment key={loanWindow.id}>
                {loanWindow?.loans
                  ?.filter((loan) => loan.status === "approved")
                  .map((loan) => {
                    return (
                      <tr key={loan.id}>
                        <td>{loan.userId}</td>
                        <td>{loan.userName || loan?.name}</td>
                        <td>{loan.loanId}</td>
                        <td>{loan.createdAt?.substring(0, 10)}</td>
                        <td>{loan.grantedAmount}</td>
                        <td>
                          <button
                            className="py-0.5"
                            style={btnStyle}
                            onClick={() =>
                              updateModal("showRepaymentForm", loan)
                            }
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className="py-0.5"
                            style={btnStyle}
                            onClick={() =>
                              updateModal("showLoanApplication", loan)
                            }
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApprovedLoans;
