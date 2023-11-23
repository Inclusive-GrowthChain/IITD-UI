const theadStyle = {
  color: "#064420",
  fontSize: "15px",
  verticalAlign: "top",
  fontWeight: 600,
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

function Tab1({ data = [], style, updateModal }) {
  return (
    <div className="card shadow">
      <div className=" table-responsive p-3">
        <table className="table table-striped">
          <thead style={theadStyle}>
            <tr>
              <td>Sample ID</td>
              <td>Date of Application</td>
              <td>FPO Name</td>
              <td>Test Category</td>
              <td>Test</td>
              <td>Amount</td>
              <td>Payment Image</td>
              <td>Lac Sample Image</td>
              <td>Remarks</td>
              <td>Application</td>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {data.map((app) => (
              <tr key={app.id}>
                <td>{app.sampleId}</td>
                <td>{app.dateOfApplication}</td>
                <td>{app.fpoName}</td>
                <td>{app.category}</td>
                <td>{app.testName}</td>
                <td>{app.amount}</td>
                <td>
                  <button
                    style={style}
                    onClick={() =>
                      updateModal("showImg", {
                        imgUrl: app.paymentImg,
                        title: "Payment Image",
                      })
                    }
                  >
                    view
                  </button>
                </td>
                <td>
                  <button
                    style={style}
                    onClick={() =>
                      updateModal("showImg", {
                        imgUrl: app.lacSampleImg,
                        title: "Lac Sample Image",
                      })
                    }
                  >
                    view
                  </button>
                </td>
                <td>{app.remarks}</td>
                <td>
                  <button
                    style={style}
                    onClick={() => updateModal("showApp", app)}
                  >
                    view
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tab1;
