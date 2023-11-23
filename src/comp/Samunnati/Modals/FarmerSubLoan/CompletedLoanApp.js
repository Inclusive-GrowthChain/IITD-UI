import { useState } from 'react';
import { Modal } from "react-bootstrap";
import useModal from '../../../../hooks/useModal';
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
  lineHeight: "2rem",
}

const firstPageData = [
  {
    title: "Farmer ID",
    id: "userId",
  },
  {
    title: "Date of Application",
    id: "createdAt",
  },
  {
    title: "Requested Amount",
    id: "requestedAmount",
  },
  {
    title: "Amount Paid",
    id: "grantedAmount",
  }
]

const secondPageData = [
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
    id: "ifscCode",
  }
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
          <div className="col-lg-6">
            <label>Date of Last Payment</label>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              value={currentLoan.farmerWindowRepaymentStructure.slice(-1)[0].repaymentDate}
              disabled
            />
          </div>
        </div>
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

function Step2({ currentLoan, updateModal,modal,closeModal}) {
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
                  value={currentLoan[f.id]}
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
              onClick={() => updateModal("ShowPaymentProof", { imgUrl: currentLoan?.paymentProof })}
              style={btnStyle}
            >
              view
            </button>
          </div>
        </div>
      </div>
      {
        modal.state === "ShowPaymentProof" && <DocImg show title="Proof of Payment" handleClose={closeModal} imgUrl={modal.data.imgUrl} />
      }
    </div>
  )
}

function CompletedLoanApp({ show, handleClose, currentLoan }) {
  const [step, setStep] = useState(1)
  const { modal, updateModal, closeModal } = useModal()
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
      >
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
              currentLoan={currentLoan}
              updateModal={updateModal}
              closeModal={closeModal}
              modal={modal}
            />
          }
        </Modal.Body>
      </Modal>
      
    </>
  )
}



export default CompletedLoanApp