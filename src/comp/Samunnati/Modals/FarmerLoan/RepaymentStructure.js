import Modal from "react-bootstrap/Modal";

function RepaymentStructure({ showRepaymentStructure, handleCloseRepaymentStructure, handleShowRepaymentStatus }) {
  return (
    <Modal
      size="xl"
      show={showRepaymentStructure}
      onHide={handleCloseRepaymentStructure}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure