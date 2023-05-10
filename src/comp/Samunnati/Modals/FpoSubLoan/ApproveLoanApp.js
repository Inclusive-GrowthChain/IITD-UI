import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function ApproveLoanApp({ show, handleClose, data }) {
  const [grantedAmount, setGrantedAmount] = useState(0);

  const onChangeGrantedAmount = (e) => setGrantedAmount(e.target.value)
  const resetInputs = () => setGrantedAmount(0)

  const approveLoan = async () => {
    if (grantedAmount === 0) {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "status": "approved",
      "grantedAmount": grantedAmount,
      "paymentProof": "doc-1678828880007-578095983.jpg"
    };

    await axios
      .put(`http://13.232.131.203:3000/api/loanwindow/${data.windowId}/loan/${data.id}/approval`, newLoan)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Approve Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Application</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={data?.createdAt.substring(0, 10)}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Requested Amount</label>
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
                      <label>Granted Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        onChange={onChangeGrantedAmount}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Tenure (in months)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={data.loanTenure}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        value={data.intrest}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Payment Proof</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right", backgroundColor: '#064420' }}
                        onClick={approveLoan}
                      >
                        Approve Loan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ApproveLoanApp