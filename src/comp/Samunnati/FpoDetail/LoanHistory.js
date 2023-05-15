
function LoanHistory({ data = [], theadStyle, tbodyStyle }) {
  return (
    <div className="card shadow">
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead style={theadStyle}>
            <tr>
              <td>Loan ID</td>
              <td>Date of Application</td>
              <td>Loan Amount</td>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {
              data.map(loan => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.dateOfApp}</td>
                  <td>{loan.loanAmount}</td>
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