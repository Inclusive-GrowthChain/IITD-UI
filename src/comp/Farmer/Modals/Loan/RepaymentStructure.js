import Modal from "react-bootstrap/Modal";
import RepaymentContentTitle from "../../../Common/RepaymentContentTitle";
import { useEffect } from "react";

function RepaymentStructure({ show, data, handleClose }) {
  useEffect(() => {
  }, [data])

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
          {
            data.farmerWindowRepaymentStructure ? <div className="row">
              <div className="col-lg-6">
                <RepaymentContentTitle title="Loan ID" val={data.loanId} />
                <RepaymentContentTitle title="Farmer Name" val={data.userName || data.name} />
                <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
                <RepaymentContentTitle title="Requested Amount" val={data.requestedAmount} />
                <RepaymentContentTitle title="Loan Granted Amount" val={data.grantedAmount} />
              </div>

              <div className="col-lg-6">
                <RepaymentContentTitle title="Loan Window Period in Months" val={data.loanTenure} />
                <RepaymentContentTitle title="No of Repayment" val={data?.farmerWindowRepaymentStructure.length} />
                <RepaymentContentTitle title="Annual Interest Rate" val={`${data.fpointrest}%`} />
              </div>
            </div> : <div className="row">
              <div className="col-lg-6">
                <RepaymentContentTitle title="Loan Window ID" val={data.windowId} />
                <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
                <RepaymentContentTitle title="Requested Amount" val={data.requestedAmount || 0} />
                <RepaymentContentTitle title="Loan Granted Amount" val={data.grantedAmount === -1 ? 0 : data.grantedAmount} />
              </div>

              <div className="col-lg-6">
                <RepaymentContentTitle title="Loan Window Period in Months" val={data.windowPeriod} />
                <RepaymentContentTitle title="No of Repayment" val={data?.FPOrepaymentStructure?.filter((repayment) => repayment.emi !== 0).length || 0} />
                <RepaymentContentTitle title="Annual Interest Rate" val={`${data?.intrest ? data?.intrest : 0}%`} />
              </div>
            </div>
          }
        </div>

        <div className="mt-5 table-responsive">
          <table className="table" style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>S.No.</th>
                <th>Scheduled Repayment Date</th>
                <th>Scheduled EMI Amount</th>
                <th>Actual Repayment Date</th>
                <th>Actual Repayment Amount</th>
                <th>{data?.farmerWindowRepaymentStructure ? "Balance Amount" :  "Status"}</th>
              </tr>
            </thead>

            <tbody>
              {
                data?.farmerWindowRepaymentStructure?.map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.paymentDate ? r.paymentDate : "Pending"}</td>
                    <td>{r.paidAmount !== 0 ? r.paidAmount : "Pending"}</td>
                    <td>{r.balance}</td>
                  </tr>
                )) || data?.FPOrepaymentStructure?.filter((repayment)=> repayment?.emi !== 0).map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.paymentDate ? r.paymentDate : "Pending"}</td>
                    <td>{r.paidAmount !== 0 ? r.paidAmount : "Pending"}</td>
                    <td>{r.completed ? "Paid" : "Not Paid"}</td>
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