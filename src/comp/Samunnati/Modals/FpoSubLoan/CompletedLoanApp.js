import { useState } from "react";
import { Modal } from "react-bootstrap";

const btnStyle = {
  float: "right",
  backgroundColor: '#064420',
  marginTop: '10%'
}

const btnStyle2 = {
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
    title: "FPO ID",
    id: "fpoId",
  },
  {
    title: "Date of Application",
    id: "dateOfApp",
  },
  {
    title: "Requested Amount",
    id: "loanAmount",
  },
  {
    title: "Amount Paid",
    id: "loanAmount",
  },
  {
    title: "Date of Last Payment",
    id: "lastPaymentDate",
  },
]

const secondPageData = [
  {
    title: "Receiver Name",
    id: "receiverName",
  },
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

function FirstPage({ currentLoan, fpoId, setStep }) {
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
                  value={f.id === "fpoId" ? fpoId : currentLoan[f.id]}
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

function SecondPage({ currentTransaction }) {
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
              style={btnStyle2}
            >
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompletedLoanApp({ show, handleClose, currentLoan, fpoId, currentTransaction }) {
  const [step, setStep] = useState(1)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
      <Modal.Body>
        {
          step === 1 &&
          <FirstPage
            currentLoan={currentLoan}
            fpoId={fpoId}
            setStep={setStep}
          />
        }

        {
          step === 2 &&
          <SecondPage
            currentTransaction={currentTransaction}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default CompletedLoanApp