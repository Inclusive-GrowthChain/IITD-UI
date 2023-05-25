
function LoanHistory({ theadStyle, tbodyStyle }) {
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
            <tr>
              <td>Farmer Id</td>
              <td>Farmer Name</td>
              <td>2022-800-07</td>
              <td>01-05-2022</td>
              <td>₹ 98765</td>
              <td> 13-07-2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoanHistory