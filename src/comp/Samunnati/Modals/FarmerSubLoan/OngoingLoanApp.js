import { useState } from "react";
import { Modal } from "react-bootstrap";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: "1rem",
  lineHeight: "2rem",
}

const firstPageData = [
  {
    title: "Farmer ID",
    id: "farmerID",
  },
  {
    title: "Date of Application",
    id: "dateOfApp",
  },
  {
    title: "Requested Amount",
    id: "loanAmount",
  },
]

const secondPageData = [
  {
    title: "Bank Name",
    id: "bankName",
  },
  {
    title: "Account Number",
    id: "accountNo",
  },
  {
    title: "IFSC Code",
    id: "ifsc",
  },
  {
    title: "Payment Date",
    id: "paymentDate",
  },
  {
    title: "Payment Reference Number",
    id: "paymentRefNo",
  },
]

function Step1({ currentLoan, setStep }) {
  return (
    <div className="form">
      <div className="card p-2">
        {
          firstPageData.map(f => (
            <div key={f.id} className="row m-2">
              <div className="col-lg-6">
                <label>{f.title}</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={currentLoan[f.id]}
                  disabled
                />
              </div>
            </div>
          ))
        }

        <div className="row m-2">
          <div className="col-lg-12">
            <button
              className="btn btn-primary"
              onClick={() => setStep(2)}
              style={btnStyle}
            >
              View Transaction Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step2({ currentTransaction }) {
  return (
    <div className="form">
      <div className="card p-2">
        {
          secondPageData.map(f => (
            <div key={f.id} className="row m-2">
              <div className="col-lg-6">
                <label>{f.title}</label>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  value={currentTransaction[f.id]}
                  disabled
                />
              </div>
            </div>
          ))
        }

        <div className="row m-2">
          <div className="col-lg-6">
            <label>Proof of Payment</label>
          </div>
          <div className="col-lg-6">
            <button
              style={btnStyle}
            >
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OngoingLoanApp({ show, handleClose, currentLoan, currentTransaction }) {
  const [step, setStep] = useState(1)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>

      <Modal.Body>
        {
          step === 1 &&
          <Step1
            currentLoan={currentLoan}
            setStep={setStep}
          />
        }

        {
          step === 2 &&
          <Step2
            currentTransaction={currentTransaction}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default OngoingLoanApp