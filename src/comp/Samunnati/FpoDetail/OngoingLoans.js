
function OngoingLoans({ data = [], theadStyle, tbodyStyle }) {
  return (
    <div className="card shadow">
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead style={theadStyle}>
            <tr>
              <td>Loan ID</td>
              <td>Date of Application</td>
              <td>Loan Amount</td>
              <td>Outstanding Amount</td>
              <td>Next Payment Amount</td>
              <td>Next Payment Date</td>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {
              data.map(loan => (
                <tr key={loan}>
                  <td>{loan.id}</td>
                  <td>{loan.dateOfApp}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.outstandingAmount}</td>
                  <td>{loan.nextPaymentAmount}</td>
                  <td>{loan.nextPaymentDate}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OngoingLoans