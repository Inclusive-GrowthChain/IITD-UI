
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

function ApprovedLoans({ theadStyle, tbodyStyle, loanWindowList }) {
  return (
    <div className="card_table2">
      <div className=" table-responsive">
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
              <>
                {
                  loanWindow?.loans?.filter(loan => loan.status === "approved")
                    .map(loan => (
                      <tr>
                        <td>???</td>
                        <td>???</td>
                        <td>{loan.loanId}</td>
                        <td>{loan.createdAt?.substring(0, 10)}</td>
                        <td>{loan.grantedAmount}</td>
                        <td>
                          <button
                            className="py-0.5"
                            style={btnStyle}
                          // onClick={() => {
                          //   setCurrentLoan(loan)
                          //   setCurrentLoanWindow(loanWindow)
                          //   handleShowRepaymentForm()
                          // }}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className="py-0.5"
                            style={btnStyle}
                          // onClick={() => {
                          //   setCurrentLoan(loan)
                          //   setStep(0)
                          //   handleShowLoanApplication()
                          // }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                }
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApprovedLoans