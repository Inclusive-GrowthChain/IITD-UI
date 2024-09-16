import Modal from "react-bootstrap/Modal";

function RepaymentStructure({ show, handleClose, data }) {
  return (
    <Modal
      size="xl"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>
      <Modal.Body style={{ overflowY: "auto" }}>
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>Loan ID : </strong>
                </div>
                <div className="col-6">
                  <span>{data?.loanId}</span>
                </div>
                <div className="col-6">
                  <strong>
                    Farmer Name :
                  </strong>
                </div>
                <div className="col-6">
                  <span>{data.name}</span>
                </div>
                <div className="col-6">
                  <strong>FPO Name : </strong>
                </div>
                <div className="col-6">
                  <span>{data?.fpoName}</span>
                </div>
                <div className="col-6">
                  <strong>
                    Loan Amount :
                  </strong>
                </div>
                <div className="col-6">
                  <span>{data?.requestedAmount}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>
                    Loan Period in Months :
                  </strong>
                </div>
                <div className="col-6">
                  <span>{data?.tenure}</span>
                </div>
                <div className="col-6">
                  <strong>
                    No of Repayment :
                  </strong>
                </div>
                <div className="col-6">
                  <span>{data?.tenure}</span>
                </div>
                <div className="col-6">
                  <strong>
                    Annual Interest Rate :
                  </strong>
                </div>
                <div className="col-6">
                  <span>{data?.intrest}%</span>
                </div>
              </div>
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
                data?.repaymentStructure?.map((repayment) => (
                  <tr>
                    <td>{repayment.id}</td>
                    <td>{repayment.repaymentDate}</td>
                    <td>{repayment.emi}</td>
                    <td>???</td>
                    <td>???</td>
                    <td>{repayment.balance}</td>
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