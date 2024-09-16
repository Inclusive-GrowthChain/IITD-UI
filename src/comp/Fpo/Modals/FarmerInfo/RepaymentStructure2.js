import Modal from "react-bootstrap/Modal";

function RepaymentStructure2({ showRepayment, handleCloseRepayment, modal }) {
  return (
    <Modal size="xl" show={showRepayment} onHide={handleCloseRepayment}>
      <Modal.Header closeButton>Repayment Structure</Modal.Header>
      <Modal.Body>
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>Loan ID : </strong>
                </div>
                <div className="col-6">
                  <span>{modal?.data?.value?.loanId}</span>
                </div>
                <div className="col-6">
                  <strong>FPO Name : </strong>
                </div>
                <div className="col-6">
                  <span>{modal?.data?.value?.fpoName}</span>
                </div>
                <div className="col-6">
                  <strong>Loan Amount : </strong>
                </div>
                <div className="col-6">
                  <span>{modal?.data?.value?.grantedAmount}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <strong>Loan Period in Months : </strong>
                </div>
                <div className="col-6">
                  <span>{modal?.data?.value?.loanTenure}</span>
                </div>
                <div className="col-6">
                  <strong>No of Payment Installments : </strong>
                </div>
                <div className="col-6">
                  <span>
                    {modal?.data?.value?.farmerWindowRepaymentStructure?.length}
                  </span>
                </div>
                <div className="col-6">
                  <strong>Annual Interest Rate : </strong>
                </div>
                <div className="col-6">
                  <span>{modal?.data?.value?.fpointrest}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <table style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>S.No</th>
                <th>Scheduled Repayment Date</th>
                <th>Scheduled EMI Amount</th>
                <th>Actual Repayment Date</th>
                <th>Actual Repayment Amount</th>
                <th>Balance Amount</th>
              </tr>
            </thead>
            <tbody>
              {modal?.data?.value?.farmerWindowRepaymentStructure?.map((d,ind) => {
                return (
                  <tr key={ind}>
                    <td>{d.id}</td>
                    <td>{d.repaymentDate}</td>
                    <td>{d.emi}</td>
                    <td>{d.paymentDate ? d.paymentDate : "Pending"}</td>
                    <td>{d.paidAmount !== 0 ? d.paidAmount : "Pending"}</td>
                    <td>{d.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RepaymentStructure2;
