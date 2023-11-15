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
  console.log(data)
  return (
    <Modal
      size="xl"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Repayment Structure
      </Modal.Header>

      <Modal.Body className="mx-2">
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <RepaymentContentTitle title="Loan ID" val={data?.value?.loanId || data?.loanId} />
              <RepaymentContentTitle title="Farmer Name" val={data?.value?.name || data?.userName} />
              <RepaymentContentTitle title="FPO Name" val={data?.value?.fpoName || data?.fpoName} />
              <RepaymentContentTitle title="Loan Amount" val={data?.value?.grantedAmount || data?.grantedAmount} />
            </div>

            <div className="col-lg-6">
              <RepaymentContentTitle title="Loan Period in Months" val={data?.value?.loanTenure || data?.loanTenure} />
              <RepaymentContentTitle title="No of Repayment" val={data?.value?.farmerWindowRepaymentStructure?.length || data?.farmerWindowRepaymentStructure.length} />
              <RepaymentContentTitle title="Annual Interest Rate" val={`${data?.value?.intrest || data?.intrest}%`} />
            </div>
          </div>
        </div>

        <div className="my-5" style={{ overflowY: 'auto' }}>
          <table className="table" style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>S.No.</th>
                <th>Scheduled Repayment Date</th>
                <th>Scheduled EMI Amount</th>
                <th>Balance Amount</th>
                <th>Repayment Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.farmerWindowRepaymentStructure?.map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.balance}</td>
                    <td><button disabled={r.completed}
                      className="py-0.5"
                      style={btnStyle}
                      onClick={() => updateModal("addRepayment", r.id)}
                    >
                      Add Repayment
                    </button></td>
                  </tr>
                )) || data?.value?.farmerWindowRepaymentStructure?.map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.balance}</td>
                    <td><button disabled={r.completed}
                      className="py-0.5"
                      style={btnStyle}
                      onClick={() => updateModal("addRepayment", r.id)}
                    >
                      Add Repayment
                    </button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {
          modal.state === "addRepayment" &&
          <AddRepayment
            show
            handleClose={() => closeModal("addRepayment")}
            data={data}
            repaymentItem={modal?.data}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure