import { useState } from "react";
import { Modal } from "react-bootstrap";

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const btnStyle = {
  color: "#fff",
  width: "30%",
  border: "none",
  padding: "5px 10px",
  fontSize: ".75rem",
  textAlign: "center",
  lineHeight: "1rem",
  alignItems: "center",
  borderRadius: "5px",
  backgroundColor: "#064420",
}

const h5Style = {
  color: "#218f2c",
  padding: "10px 25px",
  fontWeight: "700",
}

const nextBtnStyle = {
  width: "20%",
  float: "right",
  minWidth: "80px",
  position: "relative",
  marginTop: "20px",
  backgroundColor: "#064420",
}

const backBtnStyle = {
  width: "20%",
  minWidth: "80px",
  marginTop: "1rem",
  backgroundColor: "#064420",
}

function PendingLoanApp({ show, handleClose, data }) {
  const [step, setStep] = useState(1)

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      scrollable
    >
      <Modal.Header closeButton>Loan Application</Modal.Header>

      <Modal.Body>
        {
          step === 1 &&
          <Step1
            data={data}
            setStep={setStep}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 2 &&
          <Step2
            data={data}
            setStep={setStep}
            h5Style={h5Style}
            btnStyle={btnStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 3 &&
          <Step3
            data={data}
            setStep={setStep}
            h5Style={h5Style}
            btnStyle={btnStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 4 &&
          <Step4
            data={data}
            setStep={setStep}
            h5Style={h5Style}
            btnStyle={btnStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 5 &&
          <Step5
            data={data}
            setStep={setStep}
            h5Style={h5Style}
            btnStyle={btnStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 6 &&
          <Step6
            data={data}
            setStep={setStep}
            h5Style={h5Style}
            btnStyle={btnStyle}
            backBtnStyle={backBtnStyle}
            closeAll={handleClose}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default PendingLoanApp