import useModal from "../../../../hooks/useModal";
import { Modal } from "react-bootstrap";

import RepaymentContentTitle from "../../../Common/RepaymentContentTitle";
import AddRepayment from "./AddRepayment";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

function RepaymentStructure({ show, data, handleClose }) {
  const { modal, updateModal, closeModal } = useModal()

  // console.log(data)
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
              <RepaymentContentTitle title="Loan ID" val={data.loanId} />
              <RepaymentContentTitle title="Farmer Name" val={data.name} />
              <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
              <RepaymentContentTitle title="Loan Amount" val={data.grantedAmount} />
            </div>

            <div className="col-lg-6">
              <RepaymentContentTitle title="Loan Period in Months" val={data.loanTenure} />
              <RepaymentContentTitle title="No of Repayment" val={1} />
              <RepaymentContentTitle title="Annual Interest Rate" val={`${data.intrest}%`} />
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
                <th>Repayment Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.farmerWindowRepaymentStructure?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.repaymentDate}</td>
                  <td>{item.emi}</td>
                  {
                    !item.completed && (
                      <td>
                        <button
                          style={btnStyle}
                          onClick={() => updateModal("addRepayment", { repaymentItem: item })}
                        >
                          Add Repayment
                        </button>
                      </td>
                    )
                  }
                  {
                    item.completed && (
                      <td>
                        <span style={{ color: "green" }}>Paid</span>
                      </td>
                    )
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {
          modal.state === "addRepayment" &&
          <AddRepayment
            show
            handleClose={() => closeModal("addRepayment")}
            data={data}
            repaymentItem={modal.data.repaymentItem}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure