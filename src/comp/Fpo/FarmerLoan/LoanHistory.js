import { useEffect } from "react"
import { useAuthStore } from "../../../store/useAuthStore"

function LoanHistory({ theadStyle, tbodyStyle, data = [] }) {
  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  const fpoId = useAuthStore((s) => s.userDetails._id);

  return (
    <div className="card_table2" style={{marginBottom: "50px"}}>
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
              data.filter((d) => d?.value?.fpoId === fpoId).map((d,ind )=> (
                <tr key={ind}>
                  <td>{d?.value?.userId}</td>
                  <td>{d?.value?.name}</td>
                  <td>{d?.value?.loanId}</td>
                  <td>{d?.value?.createdAt?.substring(0, 10)}</td>
                  <td>₹ {d?.value?.grantedAmount}</td>
                  <td>{d?.value?.approvalAt?.substring(0, 10)}</td>
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