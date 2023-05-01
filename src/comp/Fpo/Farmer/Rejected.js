
function Rejected({ theadStyle, tbodyStyle, data = [] }) {
  return (
    <div className="card_table1">
      <div className=" table-responsive">
        <table>
          <thead style={theadStyle}>
            <tr>
              <th>Name</th>
              <th>Village</th>
              <th>Phone Number</th>
              <th>Aadhaar Number</th>
            </tr>
          </thead>
          <tbody style={tbodyStyle}>
            {data.map((app) => (
              <tr>
                <td>{app.farmerName}</td>
                <td>{app.village}</td>
                <td>{app.contact}</td>
                <td>{app.aadhaar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Rejected