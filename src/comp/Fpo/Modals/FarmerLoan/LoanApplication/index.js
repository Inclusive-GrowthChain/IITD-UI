import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const nextBtnStyle = {
  marginTop: "20px",
  backgroundColor: "#064420",
  width: "20%",
  minWidth: "80px",
  position: "relative",
  float: "right",
}

const backBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
  minWidth: "80px",
}

function LoanApplication({ show, handleClose, currentLoan, currentLoanWindow }) {
  const [step, setStep] = useState(1)

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Loan Application
      </Modal.Header>

      <Modal.Body>
        {
          step === 1 &&
          <Step1
            setStep={setStep}
            nextBtnStyle={nextBtnStyle}
          />
        }
        {
          step === 2 &&
          <Step2
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }
        {
          step === 3 &&
          <Step3
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }
        {
          step === 4 &&
          <Step4
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }
        {
          step === 5 &&
          <Step5
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }
        {
          step === 6 &&
          <Step6
            setStep={setStep}
            backBtnStyle={backBtnStyle}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default LoanApplication