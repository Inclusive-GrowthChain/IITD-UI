import Modal from "react-bootstrap/Modal";
import RepaymentContentTitle from "../../../Common/RepaymentContentTitle";

function RepaymentStructure({ show, data, handleClose }) {
  return (
    <Modal
      size="xl"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>
      <Modal.Body>
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <RepaymentContentTitle title="Loan ID" val={data.loanId} />
              <RepaymentContentTitle title="Farmer Name" val={data.name} />
              <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
              <RepaymentContentTitle title="Loan Amount" val={data.grantedAmount} />
            </div>

            <div className="col-lg-6">
              <RepaymentContentTitle title="Loan Period in Months" val={data.tenure} />
              <RepaymentContentTitle title="No of Repayment" val={1} />
              <RepaymentContentTitle title="Annual Interest Rate" val={`${data.intrest}%`} />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <table style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
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
              {
                data?.repaymentStructure.map(r => (
                  <tr>
                    <td>1</td>
                    <td>12-10-2021</td>
                    <td>100000</td>
                    <td>21-10-2021</td>
                    <td>4000000</td>
                    <td>3000000</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure