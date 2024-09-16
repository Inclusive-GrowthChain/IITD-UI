import { useState } from "react";
import { Modal } from "react-bootstrap";
import useModal from "../../../../hooks/useModal";
import DocImg from "../../../Common/DocImg";

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
    title: "Granted Amount",
    id: "grantedAmount",
  },
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
  },
  // {
  //   title: "Payment Reference Number",
  //   id: "paymentProof",
  // },
  {
    title: "Proof of Payment",
    id: "paymentProof",
    isFile: true,
  },
]

function Step1({ data, setStep }) {
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
                  value={data[f.id]}
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

function Step2({ data }) {
  const { modal, updateModal, closeModal } = useModal()

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
                {
                  f.isFile ?
                    <button
                      style={btnStyle}
                      onClick={() => updateModal(f.title, { imgUrl: data?.[f.id] })}
                    >
                      view
                    </button>
                    :
                    <input
                      type="text"
                      className="form-control"
                      value={data[f.id]}
                      disabled
                    />
                }
              </div>
            </div>
          ))
        }
      </div>

      {
        modal.state &&
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      }
    </div>
  )
}

function OngoingLoanApp({ show, handleClose, data }) {
  const [step, setStep] = useState(1)

  console.log(data)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>

      <Modal.Body>
        {
          step === 1 &&
          <Step1
            data={data}
            setStep={setStep}
          />
        }

        {
          step === 2 &&
          <Step2 data={data} />
        }
      </Modal.Body>
    </Modal>
  )
}

export default OngoingLoanApp