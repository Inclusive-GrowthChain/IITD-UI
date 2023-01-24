import Modal from "react-bootstrap/Modal";

function SaleHistory2({ showSaleDetails, handleCloseSaleDetails }) {
  return (
    <Modal
      size="lg"
      show={showSaleDetails}
      onHide={handleCloseSaleDetails}
    >
      <Modal.Header closeButton>Sale History</Modal.Header>
      <Modal.Body>
        <div className="card_table1 table-responsive">
          <table>
            <thead
              style={{
                color: "green",
                fontSize: "17px",
                verticalAlign: "top",
                fontWeight: "bold",
                borderBottom: "1px solid #c7ccd1",
              }}
            >
              <tr>
                <th>Sale Id</th>
                <th>Date of Sale</th>
                <th>Type of Lac</th>
                <th>Quantity</th>
                <th>Rate/Unit</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#000",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <tr>
                <td>SAM107254367</td>
                <td>17-02-22</td>
                <td>Stick Lac</td>
                <td>2 kg</td>
                <td>2</td>
                <td>520</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SaleHistory2