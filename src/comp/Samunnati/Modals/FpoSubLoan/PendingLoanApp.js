import Modal from "react-bootstrap/Modal";
import useModal from "../../../../hooks/useModal";
import ApproveLoanApp from "./ApproveLoanApp";
import RejectLoanApp from "./RejectLoanApp";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: "1rem",
  lineHeight: "1.5rem",
}

function PendingLoanApp({ show, handleClose, data }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan Application</Modal.Header>
      <Modal.Body>
        <div className="form">
          <div className="card p-2">
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan Window ID</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data.windowId}
                  disabled
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan ID</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data.loanId}
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
                  value={data.payeeName}
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
                  value={data.accountNumber}
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
                  value={data.ifscNumber}
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
                  value={data.bankName}
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
                  value={data.requestedAmount}
                  disabled
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Interest Rate (%)</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data.intrest}
                  disabled
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Tenure of Loan in Months</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data.loanTenure}
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
                  style={btnStyle}
                >
                  View
                </button>
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
                  value={data.purpose}
                  disabled
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  className="form-control"
                  style={{ marginTop: '7%' }}
                  value={modal.state}
                  onChange={e => updateModal(e.target.value)}
                >
                  <option value="">Change Loan Status</option>
                  <option value="Approved">Approve</option>
                  <option value="Rejected">Reject</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {
          modal.state === "Approved" &&
          <ApproveLoanApp
            show
            data={data}
            handleClose={closeModal}
          />
        }

        {
          modal.state === "Rejected" &&
          <RejectLoanApp
            show
            data={data}
            handleClose={closeModal}
          />
        }

      </Modal.Body>
    </Modal>
  )
}

export default PendingLoanApp