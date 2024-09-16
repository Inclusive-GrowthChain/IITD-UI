import Modal from "react-bootstrap/Modal";

function PurchaseHistory({ showPurchaseDetails, handleClosePurchaseDetails }) {
  return (
    <Modal
      size="lg"
      show={showPurchaseDetails}
      onHide={handleClosePurchaseDetails}
    >
      <Modal.Header closeButton>Purchase History</Modal.Header>
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
                <th>Purchase Id</th>
                <th>Date of Purchase</th>
                <th>Item Name</th>
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
                <td>Nylon Bag</td>
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

export default PurchaseHistory