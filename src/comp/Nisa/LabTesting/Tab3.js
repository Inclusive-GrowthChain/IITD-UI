import Button from "react-bootstrap/Button";

const wrapperStyle = {
  position: "relative",
  float: "right",
  right: "18px",
  top: "-2rem",
};

const newTestBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  width: "fit-content",
};

const theadStyle = {
  color: "#064420",
  fontSize: "15px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: "600",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
  textAlign: "center",
};

function Tab3({ data = [], updateModal }) {
  return (
    <div>
      <div className="list__btn lt__btn my-3" style={wrapperStyle}>
        <Button
          className="new_test_button"
          style={newTestBtnStyle}
          onClick={() => updateModal("showNewTest")}
        >
          Add New Test
        </Button>
      </div>

      <div className="container card shadow ">
        <div className="table-responsive p-2">
          <table className="table table-striped">
            <thead style={theadStyle}>
              <tr>
                <td>Test Category</td>
                <td>Test Name</td>
                <td>Min. Quantity of required sample (grams)</td>
                <td>Test Fee (Rs.)</td>
                <td>Reporting Period (days)</td>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              {data.map((test) => (
                <tr key={test._id}>
                  <td>{test.category}</td>
                  <td>{test.testName}</td>
                  <td>{test.minRequiredQuantity}</td>
                  <td>{test.testFee}</td>
                  <td>{test.reportingPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tab3;
