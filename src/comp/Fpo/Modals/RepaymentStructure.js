import Modal from "react-bootstrap/Modal";

function RepaymentStructure({ showRepaymentForm, handleCloseRepaymentForm, repaymentList, handleShowConfirmPayment, currentLoan, currentLoanWindow }) {
  return (
    <Modal
        size="xl"
        show={showRepaymentForm}
        onHide={handleCloseRepaymentForm}
      >
        <Modal.Header closeButton>
          Repayment Structure
        </Modal.Header>
        <Modal.Body style={{overflowY: 'auto'}}>
          <div className="repayment_title">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan ID : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoan.loanId}</span>
                  </div>
                  <div className="col-6">
                    <strong>Farmer Name : </strong>
                  </div>
                  <div className="col-6">
                    <span>???</span>
                  </div>
                  <div className="col-6">
                    <strong>FPO Name : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoanWindow.fpoName}</span>
                  </div>
                  <div className="col-6">
                    <strong>Loan Amount : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoan.grantedAmount}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan Period in Months : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoan.loanTenure}</span>
                  </div>
                  <div className="col-6">
                    <strong>No of Repayment : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoan.loanTenure}</span>
                  </div>
                  <div className="col-6">
                    <strong>Annual Interest Rate : </strong>
                  </div>
                  <div className="col-6">
                    <span>{currentLoan.intrest}%</span>
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
                  <th>Repayment Status</th>
                </tr>
              </thead>
              <tbody>
                {currentLoan.repaymentStructure.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.repaymentDate}</td>
                    <td>{item.emi}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
                        onClick={() => {
                          // handleShowConfirm()
                          // confirmBox(e)
                          handleShowConfirmPayment()
                        }}
                      >
                        Add Repayment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default RepaymentStructure