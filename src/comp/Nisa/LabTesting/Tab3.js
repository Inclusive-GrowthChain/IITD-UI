import Button from "react-bootstrap/Button";

const wrapperStyle = {
  position: "relative",
  float: "right",
  right: "18px",
  top: "-2rem",
}

const newTestBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  width: "fit-content",
}

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: "600",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
}

function Tab3({ data = [], updateModal }) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="list__btn lt__btn"
          style={wrapperStyle}
        >
          <Button
            className="new_test_button"
            style={newTestBtnStyle}
            onClick={() => updateModal("showNewTest")}
          >
            Add New Test
          </Button>
        </div>

        <div
          className="lt_container card shadow"
          style={{ marginTop: "40px" }}
        >
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead style={theadStyle}>
                <tr>
                  <td>Test Category</td>
                  <td>Test Name</td>
                  <td>
                    Min. Quantity of required sample (grams)
                  </td>
                  <td>Test Fee (Rs.)</td>
                  <td>Reporting Period (days)</td>
                </tr>
              </thead>
              <tbody style={tbodyStyle}>
                {
                  data.map((test, i) => (
                    <tr key={i}>
                      <td>{test.category}</td>
                      <td>{test.testName}</td>
                      <td>{test.minRequiredQuantity}</td>
                      <td>{test.testFee}</td>
                      <td>{test.reportingPeriod}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab3