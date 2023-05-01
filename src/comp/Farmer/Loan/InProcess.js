const style = {
  backgroundColor: "#66FF00",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const theadStyle = {
  fontSize: "17px",
  verticalAlign: "top",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

function InProcess({ data = [] }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card shadow">
          <div className="table-responsive">
            <table>
              <thead style={theadStyle}>
                <tr>
                  <th>Loan Id</th>
                  <th>Loan application date</th>
                  <th>Proposed Loan amount</th>
                  <th>Loan application</th>
                </tr>
              </thead>

              <tbody style={tbodyStyle}>
                {
                  data.map(ip => (
                    <tr key={ip.id}>
                      <td>{ip.loanId}</td>
                      <td>{ip.createdAt.substring(0, 10)}</td>
                      <td>₹ {ip.requestedAmount}</td>
                      <td>
                        <button
                          style={style}
                        // onClick={handleShowInProcessLoanApp}
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
        </div>
      </div>
    </div>
  )
}

export default InProcess