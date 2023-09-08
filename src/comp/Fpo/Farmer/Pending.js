import useModal from "../../../hooks/useModal";
import FarmerMemberShipApproval from "../Modals/FarmerMemberShipApproval";

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
};

function Select({ _id }) {
  const { modal, updateModal, closeModal } = useModal();

  return (
    <>
      <select
        className="form-select"
        value={modal.state}
        onChange={(e) => updateModal(e.target.value)}
      >
        <option value="" disabled>
          Select
        </option>
        <option value="accepted">Approve</option>
        <option value="rejected">Reject</option>
      </select>

      {modal.state && (
        <FarmerMemberShipApproval
          show
          data={{ status: modal.state, _id }}
          handleClose={closeModal}
        />
      )}
    </>
  );
}

function Pending({ theadStyle, tbodyStyle, data = [], updateModal }) {
  return (
    <div className="table-responsive shadow p-3">
      <table className="table table-striped">
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
            <tr key={app._id}>
              <td>{app.userName}</td>
              <td>{app.village}</td>
              <td>{app.contactNumber}</td>
              <td>{app.aadharCardNumber}</td>
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
                <Select _id={app._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pending;
