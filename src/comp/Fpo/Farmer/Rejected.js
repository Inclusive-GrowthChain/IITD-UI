function Rejected({ theadStyle, tbodyStyle, data = [] }) {
  return (
    <div className="table-responsive shadow p-3">
      <table className="table table-striped">
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
            <tr key={app._id}>
              <td>{app.userName}</td>
              <td>{app.village}</td>
              <td>{app.mobile}</td>
              <td>{app.aadharCardNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rejected;
