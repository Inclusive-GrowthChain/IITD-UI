import Modal from "react-bootstrap/Modal";

function RepaymentStructure({ showRepayment, handleCloseRepayment }) {
  return (
    <Modal
      size="xl"
      show={showRepayment}
      onHide={handleCloseRepayment}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>
      <Modal.Body>
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>Loan ID : </strong>
                </div>
                <div className="col-6">
                  <span>12345</span>
                </div>
                <div className="col-6">
                  <strong>FPO Name : </strong>
                </div>
                <div className="col-6">
                  <span>abcd</span>
                </div>
                <div className="col-6">
                  <strong>Loan Amount : </strong>
                </div>
                <div className="col-6">
                  <span>400</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>Loan Period in Years : </strong>
                </div>
                <div className="col-6">
                  <span>1</span>
                </div>
                <div className="col-6">
                  <strong>No of Payment Per Year : </strong>
                </div>
                <div className="col-6">
                  <span>1</span>
                </div>
                <div className="col-6">
                  <strong>Annual Interest Rate : </strong>
                </div>
                <div className="col-6">
                  <span>14%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <table style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>Payment Number</th>
                <th>Payment Date</th>
                <th>Principle Amount</th>
                <th>Interest Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123456</td>
                <td>12-09-2021</td>
                <td>400</td>
                <td>14%</td>
                <td>status</td>
              </tr>
              <tr>
                <td>123456</td>
                <td>12-09-2021</td>
                <td>400</td>
                <td>14%</td>
                <td>status</td>
              </tr>
              <tr>
                <td>123456</td>
                <td>12-09-2021</td>
                <td>400</td>
                <td>14%</td>
                <td>status</td>
              </tr>
              <tr>
                <td>123456</td>
                <td>12-09-2021</td>
                <td>400</td>
                <td>14%</td>
                <td>status</td>
              </tr>
              <tr>
                <td>123456</td>
                <td>12-09-2021</td>
                <td>400</td>
                <td>14%</td>
                <td>status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure