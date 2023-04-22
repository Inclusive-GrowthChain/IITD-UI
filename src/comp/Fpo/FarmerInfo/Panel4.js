const addSaleBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  borderRadius: "10px",
  padding: "10px 15px",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "12px",
  marginBottom: "15px",
}

function Panel4({ theadStyle3, tbodyStyle, style3, handleShowAddSale, handleShowSaleDetails }) {
  return (
    <>
      <div>
        <button
          onClick={handleShowAddSale}
          style={addSaleBtnStyle}
        >
          Add Sale
        </button>
      </div>

      <div className="card_table1">
        <div className=" table-responsive">
          <table>
            <thead style={theadStyle3}>
              <tr>
                <th>Sale Id</th>
                <th>Date of Sale</th>
                <th>Total Amount</th>
                <th>Sale Details</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              <tr>
                <td>SAM10742671</td>
                <td>12-02-22</td>
                <td>₹ 520</td>
                <td>
                  <button
                    style={style3}
                    onClick={handleShowSaleDetails}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td>SAM10742671</td>
                <td>12-02-22</td>
                <td>₹ 520</td>
                <td>
                  <button
                    style={style3}
                    onClick={handleShowSaleDetails}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td>SAM10742671</td>
                <td>12-02-22</td>
                <td>₹ 520</td>
                <td>
                  <button
                    style={style3}
                    onClick={handleShowSaleDetails}
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

export default Panel4