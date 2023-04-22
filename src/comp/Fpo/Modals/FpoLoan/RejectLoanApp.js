import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useModal from "../../../../hooks/useModal";
import ConfirmLoanStatus from "./ConfirmLoanStatus";

function RejectLoanApp({ show, data, handleClose, currentLoanWindow }) {
  const { modal, updateModal, closeModal } = useModal()
  const [reason, setReason] = useState("");

  const onChangeReason = (e) => {
    setReason(e.target.value);
  };

  const rejectLoan = async (e, reason) => {
    // const newLoan = {
    //   "fpoApprovalStatus": "rejected",
    //   "reason": reason
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
    >
      <Modal.Header closeButton>Reject Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
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
                      <label>{data?.createdAt.substring(0, 10)}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Requested Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <label>{data?.requestedAmount}</label>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Reason for Rejection</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={reason} onChange={onChangeReason} />
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
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   handleShowConfirmLoanStatus();
                      //   confirmLoanStatus(e, reason);
                      // }}
                      >
                        Reject Loan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {
          modal.state &&
          <ConfirmLoanStatus
            show
            handleClose={closeModal}
            confirmLoan={rejectLoan}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RejectLoanApp