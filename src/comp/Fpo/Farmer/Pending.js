const btnStyle2 = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "20%",
  minWidth: "80px",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

function Pending({ theadStyle, tbodyStyle, data = [], updateModal }) {
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
              <th>Farmer Application Details</th>
              <th>Membership Status</th>
            </tr>
          </thead>
          <tbody style={tbodyStyle}>
            {data.map((app) => (
              <tr>
                <td>{app.farmerName}</td>
                <td>{app.village}</td>
                <td>{app.contact}</td>
                <td>{app.aadhaar}</td>
                <td>
                  <button
                    className="py-0.5"
                    style={btnStyle2}
                    onClick={() => updateModal("Application", app)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <select className="form-select">
                    <option value="">Select</option>
                    <option value="">Approve</option>
                    <option value="">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pending