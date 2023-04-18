const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  fontWeight: 600,
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
}

function Tab1({ data = [], style, updateModal }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card shadow">
          <div className=" table-responsive">
            <table className="table table-borderless">
              <thead style={theadStyle}>
                <tr>
                  <td>Sample ID</td>
                  <td>Date of Application</td>
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
                {
                  data
                    .filter(app => app.applicationStatus === "in-process")
                    .map(app => (
                      <tr key={app.id}>
                        <td>{app.sampleId}</td>
                        <td>{app.dateOfApplication}</td>
                        <td>{app.category}</td>
                        <td>{app.testName}</td>
                        <td>{app.amount}</td>
                        <td>
                          <button
                            style={style}
                            onClick={() => updateModal("showPaymentImg")}
                          >
                            view
                          </button>
                        </td>
                        <td>
                          <button
                            style={style}
                            onClick={() => updateModal("showLacSampleImg")}
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
      </div>
    </div>
  )
}

export default Tab1