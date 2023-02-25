import Modal from "react-bootstrap/Modal";

function LoanDetails({
  showLoanDetails, currentLoan, handleCloseLoanDetails,
  confirmAttachImg, handleShowAttachInvoiceImg,
  confirmPaymentImg, handleShowPaymentImg,
}) {
  return (
    <Modal
      size="ml"
      show={showLoanDetails}
      onHide={handleCloseLoanDetails}
    >
      <Modal.Header closeButton>
        Loan Details
      </Modal.Header>
      <Modal.Body>
        <div className="repayment_title">
          <div className="row ">
            <div className="col">
              <form>
                <div className="form">
                  <div className="p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Loan ID</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentLoan.id}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Name of Payee
                        </label>
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
                        <label>
                          Account Number
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentLoan.accountNo}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>IFSC Number</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentLoan.ifsc}
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
                          value={currentLoan.bankName}
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
                          value={currentLoan.amount}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Tenure of Loan (in months)
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="number"
                          className="form-control"
                          value={currentLoan.tenure}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Purpose
                        </label>
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
                        <label>
                          Invoice
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={{
                            backgroundColor:
                              "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding:
                              "0.25rem 1rem",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "2rem",
                          }}
                          onClick={(e) => {
                            handleShowAttachInvoiceImg()
                            confirmAttachImg(e)
                          }}
                        >
                          view
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Payment Proof
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <button
                          style={{
                            backgroundColor:
                              "#064420",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "none",
                            padding:
                              "0.25rem 1rem",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "2rem",
                          }}
                          onClick={(e) => {
                            handleShowPaymentImg()
                            confirmPaymentImg(e)
                          }}
                        >
                          view
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoanDetails