import Modal from "react-bootstrap/Modal";

import useModal from "../../../../hooks/useModal";
import Confirm from "../FpoLoan/Confirm";

function RejectLoanApp({ show, handleClose, data }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>

      <Modal.Body>
        <form className="form">
          <div className="card p-2">
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan Amount</label>
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
                <label>Reason for Rejection</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-primary"
                  onClick={() => updateModal("show")}
                  style={{ float: "right", backgroundColor: '#064420' }}
                >
                  Reject Loan
                </button>
              </div>
            </div>
          </div>
        </form>

        {
          modal.state &&
          <Confirm
            show
            title="Confirm Reject Loan Application"
            confirmText="Are you sure you want to reject this loan application?"
            handleClose={closeModal}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RejectLoanApp