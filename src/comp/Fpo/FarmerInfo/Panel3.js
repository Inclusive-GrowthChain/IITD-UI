const addPurchaseBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  borderRadius: "10px",
  padding: "10px 15px",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "12px",
  marginBottom: "15px",
}

function Panel3({ theadStyle2, tbodyStyle, style3, handleShowAddPurchase, handleShowPurchaseDetails }) {
  return (
    <>
      <div>
        <button
          onClick={handleShowAddPurchase}
          style={addPurchaseBtnStyle}
        >
          Add Purchase
        </button>
      </div>

      <div className="card_table1">
        <div className=" table-responsive">
          <table>
            <thead style={theadStyle2}>
              <tr>
                <th>Purchase Id</th>
                <th>Date of Purchase</th>
                <th>Total Amount</th>
                <th>Item Details</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              <tr>
                <td>SAM107254367</td>
                <td>17-02-22</td>
                <td>520</td>
                <td>
                  <button
                    style={style3}
                    onClick={handleShowPurchaseDetails}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td>SAM107254367</td>
                <td>17-02-22</td>
                <td>520</td>
                <td>
                  <button
                    style={style3}
                    onClick={handleShowPurchaseDetails}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Panel3