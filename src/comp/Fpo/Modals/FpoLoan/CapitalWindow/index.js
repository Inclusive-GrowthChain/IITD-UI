import { useState } from "react";
import { Modal } from "react-bootstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const h5Style = {
  padding: "10px 25px",
  color: "#218f2c",
  fontWeight: "700",
}

const finalWrapperStyle = {
  justifyContent: "space-between",
  padding: "0 10px",
}

const backBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
}

const nextBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
  position: "relative",
  float: "right",
}


function CapitalWindow({ show, handleClose }) {
  const [step, setStep] = useState(0)

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      scrollable
    >
      <Modal.Header closeButton>Working Captial Window</Modal.Header>

      <Modal.Body>
        {
          step === 0 &&
          <Step1
            h5Style={h5Style}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 1 &&
          <Step2
            h5Style={h5Style}
            finalWrapperStyle={finalWrapperStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 2 &&
          <Step3
            h5Style={h5Style}
            finalWrapperStyle={finalWrapperStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 3 &&
          <Step4
            h5Style={h5Style}
            finalWrapperStyle={finalWrapperStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 4 &&
          <Step5
            h5Style={h5Style}
            finalWrapperStyle={finalWrapperStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 5 &&
          <Step6
            h5Style={h5Style}
            finalWrapperStyle={finalWrapperStyle}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default CapitalWindow