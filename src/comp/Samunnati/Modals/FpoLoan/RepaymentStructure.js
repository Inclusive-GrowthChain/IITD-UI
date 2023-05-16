import { Modal } from "react-bootstrap";
import useModal from "../../../../hooks/useModal";
import Repayment from "./Repayment";

const btnStyle = {
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
}

const strongStyle = {
  width: "12rem",
  display: "inline-block"
}

function RepaymentStructure({ show, handleClose, data, windowType }) {
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
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <p>
                <strong style={strongStyle}>Loan Window ID</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.windowId}
              </p>
              <p>
                <strong style={strongStyle}>FPO Name</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.fpoName}
              </p>
              <p>
                <strong style={strongStyle}>Loan Amount</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.grantedAmount}
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <p>
                  <strong style={strongStyle}>Loan Period in Months</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.windowPeriod}
                </p>
                <p>
                  <strong style={strongStyle}>No of Repayment</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.windowPeriod}
                </p>
                <p>
                  <strong style={strongStyle}>Annual Interest Rate</strong> : &nbsp;&nbsp;&nbsp;&nbsp; {data.interest}%
                </p>
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
                  <tr key={window.id}>
                    <td>{window.id}</td>
                    <td>{window.repaymentDate}</td>
                    <td>{window.emi}</td>
                    <td>
                      <button
                        style={btnStyle}
                        onClick={() => updateModal("showRepayment", { ...window, lWId: data.id })}
                      >
                        View
                      </button>
                    </td>
                    <td>{window.balance}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {
          modal.state &&
          <Repayment
            show
            data={modal.data}
            windowType={windowType}
            closeAll={handleClose}
            handleClose={closeModal}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure