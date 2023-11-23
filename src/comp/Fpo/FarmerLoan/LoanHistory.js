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

function LoanHistory({ theadStyle, tbodyStyle, data,updateModal }) {

  return (
    <div className="card_table2" style={{ marginBottom: "50px" }}>
      <div className=" table-responsive">
        <table>
          <thead style={theadStyle}>
            <tr>
              <td>Farmer Id</td>
              <td>Farmer Name</td>
              <th>Loan Id</th>
              <th>Loan Application Date</th>
              <th>Loan Amount</th>
              <th>Loan Date</th>
              <th>Repayment Structure</th>
              <th>Loan Application</th>
            </tr>
          </thead>
          <tbody style={tbodyStyle}>
            {
              data && data?.data[0]?.loans?.filter((loan) => loan?.status === "Completed")?.map((d, ind) => (
                <tr key={ind}>
                  <td>{d?.userId}</td>
                  <td>{d?.userName || d?.name}</td>
                  <td>{d?.loanId}</td>
                  <td>{d?.createdAt?.substring(0, 10)}</td>
                  <td>₹ {d?.grantedAmount}</td>
                  <td>{d?.approvalAt?.substring(0, 10)}</td>
                  <td>
                          <button
                            className="py-0.5"
                            style={btnStyle}
                            onClick={() =>
                              updateModal("showRepaymentForm", d)
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
                              updateModal("showLoanApplication", d)
                            }
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
    </div>
  )
}

export default LoanHistory