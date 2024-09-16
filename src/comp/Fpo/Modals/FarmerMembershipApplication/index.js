import { useState } from "react";
import { Modal } from "react-bootstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

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

function FarmerMembershipApplication({ show, data, handleClose }) {
  const [step, setStep] = useState(1)

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Application Details</Modal.Header>
      <Modal.Body>
        {
          step === 1 &&
          <Step1
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
            data={data}
          />
        }
        {
          step === 2 &&
          <Step2
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
            data={data}
          />
        }
        {
          step === 3 &&
          <Step3
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
            data={data}
          />
        }
        {
          step === 4 &&
          <Step4
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
            data={data}
          />
        }
        {
          step === 5 &&
          <Step5
            backBtnStyle={backBtnStyle}
            setStep={setStep}
            data={data}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default FarmerMembershipApplication