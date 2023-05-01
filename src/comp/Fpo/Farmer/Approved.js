import { NavLink } from "react-router-dom";

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
  fontWeight: "500",
}

function Approved({ theadStyle, tbodyStyle, data = [], updateModal }) {
  return (
    <div className="card_table1">
      <div className=" table-responsive">
        <table>
          <thead style={theadStyle}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Village</th>
              <th>Phone Number</th>
              <th>Aadhaar Number</th>
              <th>View Application</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {data.map((app, i) => (
              <tr>
                <td>farmer-{i}</td>
                <td>
                  <NavLink
                    to="/fpo/farmer-information"
                    className="info_btn"
                  >
                    {app?.farmerName}
                  </NavLink>
                </td>
                <td>{app?.village}</td>
                <td>{app?.contact}</td>
                <td>{app?.aadhaar}</td>
                <td>
                  <button
                    className="py-0.5 table_btn"
                    style={btnStyle}
                    onClick={() => updateModal("Application", app)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Approved