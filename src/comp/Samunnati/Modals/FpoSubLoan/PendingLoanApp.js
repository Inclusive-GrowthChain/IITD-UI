import Modal from "react-bootstrap/Modal";
import useModal from "../../../../hooks/useModal";

import ApproveLoanApp from "./ApproveLoanApp";
import RejectLoanApp from "./RejectLoanApp";
import DocImg from '../../../Common/DocImg';

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: "1rem",
  lineHeight: "1.5rem",
}

const list = [
  {
    label: "Loan Window ID",
    name: "windowId",
  },
  {
    label: "Loan ID",
    name: "loanId",
  },
  {
    label: "Name of Payee",
    name: "payeeName",
  },
  {
    label: "Account Number",
    name: "accountNumber",
  },
  {
    label: "IFSC Number",
    name: "ifscNumber",
  },
  {
    label: "Bank Name",
    name: "bankName",
  },
  {
    label: "Amount",
    name: "requestedAmount",
  },
  {
    label: "Interest Rate (%)",
    name: "intrest",
  },
  {
    label: "Tenure of Loan in Months",
    name: "loanTenure",
  },
  {
    label: "Invoice",
    name: "invoice",
    isFile: true,
  },
  {
    label: "Purpose",
    name: "purpose",
  },
]

function PendingLoanApp({ show, handleClose, data, setLoanWindow }) {
  const { modal, updateModal, closeModal } = useModal()

  const closeAll = (status, id) => {
    setLoanWindow(pr => ({
      ...pr,
      loan: pr.loan.map(l => {
        if (l.id === id) {
          return {
            ...l,
            status
          }
        }

        return l
      })
    }))
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan Application</Modal.Header>
      <Modal.Body>
        <div className="form">
          <div className="card p-2">
            {
              list.map(l => (
                <div key={l.name} className="row m-2">
                  <div className="col-lg-6">
                    <label>{l.label}</label>
                  </div>
                  <div className="col-lg-6">
                    {
                      l.isFile ?
                        <button
                          style={btnStyle}
                          onClick={() => updateModal("Invoice", { imgUrl: data.invoice })}
                        >
                          View
                        </button>
                        :
                        <input
                          type="text"
                          className="form-control"
                          value={data[l.name]}
                          disabled
                        />
                    }
                  </div>
                </div>
              ))
            }

            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  className="form-control"
                  style={{ marginTop: '7%' }}
                  value={modal.state}
                  onChange={e => updateModal(e.target.value)}
                >
                  <option value="" disabled>Change Loan Status</option>
                  <option value="Approved">Approve</option>
                  <option value="Rejected">Reject</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {
          modal.state === "Invoice" &&
          <DocImg
            show
            title="Invoice"
            imgUrl={modal.data.imgUrl}
            handleClose={closeModal}
          />
        }

        {
          modal.state === "Approved" &&
          <ApproveLoanApp
            show
            data={data}
            closeAll={closeAll}
            handleClose={closeModal}
          />
        }

        {
          modal.state === "Rejected" &&
          <RejectLoanApp
            show
            data={data}
            closeAll={closeAll}
            handleClose={closeModal}
          />
        }

      </Modal.Body>
    </Modal>
  )
}

export default PendingLoanApp