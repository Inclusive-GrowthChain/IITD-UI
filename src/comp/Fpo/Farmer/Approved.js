import { NavLink } from "react-router-dom";
import { resetFarmerPassword } from "../../../actions/fpo";
import { useState } from "react";
import ResetPassword from "../Modals/CC/ResetPassword";

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

  const [farmerPassword, setFarmerPassword] = useState("")
  const [showPassword, setClosePassword] = useState(false)

  const resetPasswordOnClick = async () => {
    try {
      const response = await resetFarmerPassword(data?.[0]?._id);
      setFarmerPassword(response.newPassword)
    } catch (error) {
      console.error("API error:", error);
    }
  };

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
            <th>Reset Password</th>
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
              <td>{app.contactNumber}</td>
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
              <td>
                {/* {
                  app && <button
                    className="py-0.5 table_btn"
                    style={btnStyle}
                  >
                    Reset
                  </button>
                } */}
                <button
                  onClick={() => {
                    resetPasswordOnClick()
                    setClosePassword(true)
                  }}
                  className="py-0.5 table_btn"
                  style={btnStyle}
                >
                  Reset
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        showPassword && <ResetPassword show newPassword={farmerPassword} handleClose={setClosePassword} />
      }
    </div>
  );
}

export default Approved;
