import Modal from "react-bootstrap/Modal";

function OngoingLoanApp({ showOngoingLoanDetails, handleCloseOngoingLoanDetails, currentLoan, firstPage, secondPage, thirdPage, setFirstPage, setSecondPage, handleShowPaymentProof, handleShowRepaymentStatus, currentTransaction }) {
  return (
    <Modal show={showOngoingLoanDetails} onHide={handleCloseOngoingLoanDetails} size='xl'>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
      <Modal.Body style={{overflowY: 'auto'}}>
        <div className="row ">
          <div className="col">
            <form>
              {
                firstPage && (
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.loanId}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Name of Payee</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.payeeName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Account Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.accountNumber}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>IFSC Code</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.ifscNumber}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Amount</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.grantedAmount}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Tenure of Loan (in months)</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.loanTenure}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Purpose</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentLoan.purpose}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Invoice</label>
                        </div>
                        <div className="col-lg-6">
                          <button
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "0.25rem 1rem",
                              width: "100%",
                              fontSize: "1rem",
                              lineHeight: "2rem",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleShowPaymentProof();
                            }}
                          >
                            view
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Proof</label>
                        </div>
                        <div className="col-lg-6">
                          <button
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "0.25rem 1rem",
                              width: "100%",
                              fontSize: "1rem",
                              lineHeight: "2rem",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleShowPaymentProof();
                            }}
                          >
                            view
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setSecondPage(true);
                              setFirstPage(false);
                            }}
                            style={{ float: "right", backgroundColor: '#064420' }}
                          >
                            View Repayment Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                secondPage && (
                  <div>
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
                              <strong>
                                Loan Amount :{" "}
                              </strong>
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
                              <strong>
                                No of Repayment :{" "}
                              </strong>
                            </div>
                            <div className="col-6">
                              <span>1</span>
                            </div>
                            <div className="col-6">
                              <strong>
                                Annual Interest Rate :{" "}
                              </strong>
                            </div>
                            <div className="col-6">
                              <span>14%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <table
                        style={{ border: "1px solid #eee" }}
                      >
                        <thead
                          style={{
                            backgroundColor: "#eee",
                          }}
                        >
                          <tr>
                            <th>S.No.</th>
                            <th>Scheduled Repayment Date</th>
                            <th>Scheduled EMI Amount</th>
                            <th>Repayment</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>12-10-2021</td>
                            <td>100000</td>
                            <td>
                              <button
                                style={{
                                  color: "blue",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "100%",
                                  fontSize: "1rem",
                                  lineHeight: "2rem",
                                  textDecoration: "underline",
                                  backgroundColor: "rgb(255, 255, 255, 0)",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShowRepaymentStatus();
                                }}
                              >
                                Repayment
                              </button>
                            </td>
                            <td>90000</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>12-10-2021</td>
                            <td>100000</td>
                            <td>
                              <button
                                style={{
                                  color: "blue",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "100%",
                                  fontSize: "1rem",
                                  lineHeight: "2rem",
                                  textDecoration: "underline",
                                  backgroundColor: "rgb(255, 255, 255, 0)",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShowRepaymentStatus();
                                }}
                              >
                                Repayment
                              </button>
                            </td>
                            <td>90000</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>12-10-2021</td>
                            <td>100000</td>
                            <td>
                              <button
                                style={{
                                  color: "blue",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "100%",
                                  fontSize: "1rem",
                                  lineHeight: "2rem",
                                  textDecoration: "underline",
                                  backgroundColor: "rgb(255, 255, 255, 0)",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShowRepaymentStatus();
                                }}
                              >
                                Repayment
                              </button>
                            </td>
                            <td>90000</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>12-10-2021</td>
                            <td>100000</td>
                            <td>
                              <button
                                style={{
                                  color: "blue",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "100%",
                                  fontSize: "1rem",
                                  lineHeight: "2rem",
                                  textDecoration: "underline",
                                  backgroundColor: "rgb(255, 255, 255, 0)",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShowRepaymentStatus();
                                }}
                              >
                                Repayment
                              </button>
                            </td>
                            <td>90000</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>12-10-2021</td>
                            <td>100000</td>
                            <td>
                              <button
                                style={{
                                  color: "blue",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "100%",
                                  fontSize: "1rem",
                                  lineHeight: "2rem",
                                  textDecoration: "underline",
                                  backgroundColor: "rgb(255, 255, 255, 0)",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShowRepaymentStatus();
                                }}
                              >
                                Repayment
                              </button>
                            </td>
                            <td>90000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              }
              {
                thirdPage && (
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Receiver Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.receiverName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.bankName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Account Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.accountNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>IFSC Code</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.ifsc}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Date</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                            value={currentTransaction.paymentDate}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Reference Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentTransaction.paymentRefNo}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Proof of Payment</label>
                        </div>
                        <div className="col-lg-6">
                          <button
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "0.25rem 1rem",
                              width: "100%",
                              fontSize: "1rem",
                              lineHeight: "2rem",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleShowPaymentProof();
                            }}
                          >
                            view
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCloseOngoingLoanDetails();
                            }}
                            style={{ float: "right", backgroundColor: '#064420' }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default OngoingLoanApp