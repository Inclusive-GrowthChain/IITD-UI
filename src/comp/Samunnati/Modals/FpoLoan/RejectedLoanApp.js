import { Modal } from "react-bootstrap";

const list = [
  {
    label: "FPO Name",
    name: "fpoName",
  },
  {
    label: "Contact No.",
    name: "contactNo",
  },
  {
    label: "Window ID",
    name: "windowId",
  },
  {
    label: "Date of Application",
    name: "dateOfApplication",
  },
  {
    label: "Window Tenure (months)",
    name: "windowPeriod",
  },
  {
    label: "Requested Amount",
    name: "requestedAmount",
  },
  {
    label: "Reason for Rejection",
    name: "reason",
  },
]

function RejectedLoanApp({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan Application</Modal.Header>

      <Modal.Body>
        {
          list.map(l => (
            <div key={l.name} className="row m-2">
              <div className="col-lg-6">
                <label>{l.label}</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={data[l.name]}
                  disabled
                />
              </div>
            </div>
          ))
        }
      </Modal.Body>
    </Modal>
  )
}

export default RejectedLoanApp