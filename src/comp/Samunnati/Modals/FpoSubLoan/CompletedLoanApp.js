import { useState } from "react";
import { Modal } from "react-bootstrap";
import { root } from "../../../../utils/endPoints";

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
    id: "createdAt",
  },
  {
    title: "Requested Amount",
    id: "grantedAmount",
  },
  {
    title: "Amount Paid",
    id: "loaAmount",
  },
  {
    title: "Date of Last Payment",
    id: "lastPaymentDate",
  },
]

const secondPageData = [
  {
    title: "Receiver Name",
    id: "payeeName",
  },
  {
    title: "Bank Name",
    id: "bankName",
  },
  {
    title: "Account Number",
    id: "accountNumber",
  },
  {
    title: "IFSC Code",
    id: "ifscNumber",
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

function FirstPage({ data, fpoId, setStep }) {
  return (
    <div className="form">
      <div className="card p-2">
        {
          firstPageData.map(f => (
            <div key={f.id} className="row m-2">
              <div className="col-lg-6">
                <label>{f.title}</label>
              </div>
              {
                f.id === "createdAt" && (
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      value={data?.value?.[f.id]?.substring(0, 10)}
                      disabled
                    />
                  </div>
                )
              }
              {
                f.id !== "createdAt" && (
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      value={f.id === "fpoId" ? fpoId : data?.value?.[f.id]}
                      disabled
                    />
                  </div>
                )
              }
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

function SecondPage({ data, fpoId }) {
  const [showPaymentProof, setShowPaymentProof] = useState(false)
  const handleShowPaymentProof = () => setShowPaymentProof(true)
  const handleClosePaymentProof = () => setShowPaymentProof(false)

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
                  value={f.id === "fpoId" ? fpoId : data?.value?.[f.id]}
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
              onClick={handleShowPaymentProof}
            >
              view
            </button>
          </div>
        </div>
      </div>

      <Modal show={showPaymentProof} onHide={handleClosePaymentProof}>
        <Modal.Header closeButton>Payment Proof</Modal.Header>
        <Modal.Body>
          <img
            src={`${root.imgUrl}/img/${data?.value?.paymentProof}`}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

    </div>
  )
}

function CompletedLoanApp({ show, handleClose, data, fpoId }) {
  const [step, setStep] = useState(1)

  console.log(data)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>
      <Modal.Body>
        {
          step === 1 &&
          <FirstPage
            data={data}
            fpoId={fpoId}
            setStep={setStep}
          />
        }

        {
          step === 2 &&
          <SecondPage
            data={data}
            fpoId={fpoId}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default CompletedLoanApp