import Modal from "react-bootstrap/Modal";
import useModal from "../../../../hooks/useModal";
import RepaymentStatus from "./RepaymentStatus";

function RepaymentStructure({ show, handleClose, data }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <Modal
      size="xl"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'auto' }}>
        <div>
          <div className="repayment_title">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-4">
                    <strong>Loan ID : </strong>
                  </div>
                  <div className="col-8">
                    <span>{data.id}</span>
                  </div>
                  <div className="col-6">
                    <strong>FPO Name : </strong>
                  </div>
                  <div className="col-6">
                    <span>{data.fpoName}</span>
                  </div>
                  <div className="col-6">
                    <strong>
                      Loan Amount :{" "}
                    </strong>
                  </div>
                  <div className="col-6">
                    <span>{data.grantedAmount}</span>
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
                    <span>{data.windowPeriod}</span>
                  </div>
                  <div className="col-6">
                    <strong>
                      No of Repayment :{" "}
                    </strong>
                  </div>
                  <div className="col-6">
                    <span>{data.windowPeriod}</span>
                  </div>
                  <div className="col-6">
                    <strong>
                      Annual Interest Rate :{" "}
                    </strong>
                  </div>
                  <div className="col-6">
                    <span>{data.intrest}%</span>
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
                  <th>Repayment</th>
                  <th>Balance</th>
                </tr>
              </thead>

              <tbody>
                {
                  data?.windowRepaymentStructure?.map((window) => (
                    <tr>
                      <td>{window.id}</td>
                      <td>{window.repaymentDate}</td>
                      <td>{window.emi}</td>
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
                          onClick={() => updateModal("show")}
                        >
                          Repayment
                        </button>
                      </td>
                      <td>{window.balance}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

        {
          modal.state &&
          <RepaymentStatus
            show
            handleClose={closeModal}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure