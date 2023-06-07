import { useEffect } from "react"

function LoanHistory({ theadStyle, tbodyStyle, data = [] }) {
  useEffect(() => {
    console.log(data)
  }, [data])

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
              <th>Loan Date</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {
              data.map(d => (
                <tr key={d.id}>
                  <td>{d?.value?.userId}</td>
                  <td>{d?.value?.name}</td>
                  <td>{d?.value?.loanId}</td>
                  <td>{d?.value?.loanCreatedAt?.substring(0, 10)}</td>
                  <td>₹ {d?.value?.grantedAmount}</td>
                  <td></td>
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