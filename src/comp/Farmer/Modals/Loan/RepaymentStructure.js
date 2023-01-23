import Modal from "react-bootstrap/Modal";

function RepaymentStructure({ showRepaymentLoan, handleCloseRepaymentLoan }) {
  return (
    <Modal
      size="xl"
      show={showRepaymentLoan}
      onHide={handleCloseRepaymentLoan}
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
                  <strong>Farmer Name : </strong>
                </div>
                <div className="col-6">
                  <span>abcd</span>
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
                  <strong>
                    Loan Period in Months :{" "}
                  </strong>
                </div>
                <div className="col-6">
                  <span>1</span>
                </div>
                <div className="col-6">
                  <strong>No of Repayment : </strong>
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
            <thead
              style={{
                backgroundColor: "#eee",
              }}
            >
              <tr>
                <th>S.No.</th>
                <th>Scheduled Repayment Date</th>
                <th>Scheduled EMI Amount</th>
                <th>Actual Repayment Date</th>
                <th>Actual Repayment Amount</th>
                <th>Balance Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12-10-2021</td>
                <td>100000</td>
                <td>21-10-2021</td>
                <td>4000000</td>
                <td>3000000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>12-10-2021</td>
                <td>100000</td>
                <td>21-10-2021</td>
                <td>4000000</td>
                <td>3000000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>12-10-2021</td>
                <td>100000</td>
                <td>21-10-2021</td>
                <td>4000000</td>
                <td>3000000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>12-10-2021</td>
                <td>100000</td>
                <td>21-10-2021</td>
                <td>4000000</td>
                <td>3000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure