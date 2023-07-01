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
};

function Approved({ theadStyle, tbodyStyle, data = [], updateModal }) {
  return (
    <div className="table-responsive shadow p-3">
      <table className="table table-striped">
        <thead style={theadStyle}>
          <tr>
            <th>Name</th>
            <th>Village</th>
            <th>Phone Number</th>
            <th>Aadhaar Number</th>
            <th>View Application</th>
          </tr>
        </thead>

        <tbody style={tbodyStyle}>
          {data.map((app) => (
            <tr key={app._id}>
              <td>
                <NavLink to={`/fpo/farmer-information/${app._id}`} className="info_btn">
                  {app.userName}
                </NavLink>
              </td>
              <td>
                {app.village}
              </td>
              <td>{app.mobile}</td>
              <td>{app.aadharCardNumber}</td>
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
  );
}

export default Approved;
