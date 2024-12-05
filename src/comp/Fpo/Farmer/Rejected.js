function Rejected({ theadStyle, tbodyStyle, data = [] }) {
  return (
    <div className="table-responsive shadow p-3">
      <table className="table table-striped">
        <thead style={theadStyle}>
          <tr>
            <th>Farmer Name</th>
            <th>Village</th>
            <th>Phone Number</th>
            <th>Aadhaar Number</th>
          </tr>
        </thead>

        <tbody style={tbodyStyle}>
          {data.map((app) => (
            <tr key={app._id}>
              <td className="text-capitalize">{app?.firstName} {app?.lastName}</td>
              <td>{app.village}</td>
              <td>{app.contactNumber}</td>
              <td>{app.aadharCardNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rejected;
