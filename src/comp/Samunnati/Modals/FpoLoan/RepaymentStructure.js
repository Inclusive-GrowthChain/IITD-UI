import { Modal } from "react-bootstrap";
import useModal from "../../../../hooks/useModal";

import RepaymentContentTitle from "../../../Common/RepaymentContentTitle";
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

function RepaymentStructure({ show, handleClose, data, windowType }) {
  const { modal, updateModal, closeModal } = useModal()

  const repayments = data?.FPOrepaymentStructure || []

  // console.log(repayments)
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
              <RepaymentContentTitle title="Loan Window ID" val={data.windowId} />
              <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
              <RepaymentContentTitle title="Loan Amount" val={data.grantedAmount} />
            </div>

            <div className="col-lg-6">
              <div className="row">
                <RepaymentContentTitle title="Loan Period in Months" val={data.windowPeriod} />
                <RepaymentContentTitle title="No of Repayment" val={data.windowPeriod} />
                <RepaymentContentTitle title="Annual Interest Rate" val={`${data.intrest}%`} />
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
                repayments
                  ?.filter(a => a.emi)
                  ?.map((window) => (
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