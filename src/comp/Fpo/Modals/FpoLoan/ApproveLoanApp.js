import Modal from "react-bootstrap/Modal";
import useModal from "../../../../hooks/useModal";
import ConfirmLoanStatus from "./ConfirmLoanStatus";

function ApproveLoanApp({ show, data, handleClose, currentLoanWindow }) {
  const { modal, updateModal, closeModal } = useModal()

  const approveLoan = async () => {
    // const newLoan = {
    //   "fpoApprovalStatus": "approved"
    // };

    // await axios
    //   .put(`http://13.232.131.203:3000/api/loanwindow/${activeLoanWindow.id}/loan/${currentLoan.id}/approval`, newLoan)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // window.location.reload();
  }


  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>
      <Modal.Body>
        <div className="form">
          <div className="card p-2">
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan ID</label>
              </div>
              <div className="col-lg-6">
                <label>{data?.loanId}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>FPO Name</label>
              </div>
              <div className="col-lg-6">
                <label>{currentLoanWindow?.fpoName}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Contact No.</label>
              </div>
              <div className="col-lg-6">
                <label>{currentLoanWindow?.contactNo}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Date of Application</label>
              </div>
              <div className="col-lg-6">
                <label>{data?.createdAt?.substring(0, 10)}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan Requested Amount</label>
              </div>
              <div className="col-lg-6">
                <label>{data?.requestedAmount}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Loan Tenure (months)</label>
              </div>
              <div className="col-lg-6">
                <label>{data?.loanTenure}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>Interest Rate (%)</label>
              </div>
              <div className="col-lg-6">
                <label>{data?.intrest}</label>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-primary"
                  style={{
                    float: "right",
                    backgroundColor: "#064420",
                    border: "none",
                  }}
                  onClick={() => updateModal("confirm")}
                >
                  Approve Loan
                </button>
              </div>
            </div>
          </div>
        </div>

        {
          modal.state &&
          <ConfirmLoanStatus
            show
            handleClose={closeModal}
            confirmLoan={approveLoan}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default ApproveLoanApp