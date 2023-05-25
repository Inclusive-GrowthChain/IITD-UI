const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: 600,
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
}

function Tab2({ data = [], style, updateModal }) {
  return (
    <div className="card shadow">
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead style={theadStyle}>
            <tr>
              <td>Sample ID</td>
              <td>Ref no</td>
              <td>Date of Application</td>
              <td>Test Category</td>
              <td>Test</td>
              <td>Amount</td>
              <td>Payment Image</td>
              <td>Lac Sample Image</td>
              <td>Remarks</td>
              <td>Certificate</td>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {
              data.map(item => (
                <tr key={item.id}>
                  <td>{item.sampleId}</td>
                  <td>{item.referenceNo}</td>
                  <td>{item.dateOfApplication}</td>
                  <td>{item.category}</td>
                  <td>{item.testName}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      style={style}
                      onClick={() => updateModal("showImg", { imgUrl: item.paymentImg, title: "Payment Image" })}
                    >
                      view
                    </button>
                  </td>
                  <td>
                    <button
                      style={style}
                      onClick={() => updateModal("showImg", { imgUrl: item.lacSampleImg, title: "Lac Sample Image" })}
                    >
                      view
                    </button>
                  </td>
                  <td>{item.remarks}</td>
                  <td>
                    <button
                      style={style}
                      onClick={() => updateModal("showImg", { imgUrl: item.certificate, title: "Lac Sample Image" })}
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
  )
}

export default Tab2