const theadStyle = {
  fontSize: "17px",
  verticalAlign: "top",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

function Rejected({ data = [] }) {
  return (
    <div className="card shadow">
      <div className="table-responsive">
        <table>
          <thead style={theadStyle}>
            <tr>
              <th>Loan Id</th>
              <th>Loan application date</th>
              <th>Proposed Loan amount</th>
              <th>Reason for rejection</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {
              data.map(r => (
                <tr key={r.id}>
                  <td>{r.loanId}</td>
                  <td>{r.createdAt.substring(0, 10)}</td>
                  <td>₹ {r.requestedAmount}</td>
                  <td>{r.reason}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Rejected