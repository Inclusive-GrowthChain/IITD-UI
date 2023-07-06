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
              <RepaymentContentTitle title="Loan ID" val={data?.value?.loanId || data?.loanId} />
              <RepaymentContentTitle title="Farmer Name" val={data?.value?.name || data?.name} />
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

        <div className="mt-5">
          <table style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>S.No.</th>
                <th>Scheduled Repayment Date</th>
                <th>Scheduled EMI Amount</th>
                <th>Actual Repayment Date</th>
                <th>Actual Repayment Amount</th>
                <th>Balance Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.value?.farmerWindowRepaymentStructure.map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.paymentDate ? r.paymentDate : "Pending"}</td>
                    <td>{r.paidAmount !== 0 ? r.paidAmount : "Pending"}</td>
                    <td>{r.balance}</td>
                  </tr>
                )) || data.farmerWindowRepaymentStructure.map((r, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{r.repaymentDate}</td>
                    <td>{r.emi}</td>
                    <td>{r.paymentDate ? r.paymentDate : "Pending"}</td>
                    <td>{r.paidAmount !== 0 ? r.paidAmount : "Pending"}</td>
                    <td>{r.balance}</td>
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
            repaymentItem={modal.data.repaymentItem}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentStructure