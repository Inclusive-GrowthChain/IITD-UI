import { useState } from "react";
// import { FormProvider, useForm } from 'react-hook-form';
// import { useMutation, useQueryClient } from "@tanstack/react-query";
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

function FarmerMembershipApplication({ show, handleClose }) {
  const [step, setStep] = useState(0)

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
          />
        }
        {
          step === 2 &&
          <Step2
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 3 &&
          <Step3
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 4 &&
          <Step4
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
            setStep={setStep}
          />
        }
        {
          step === 5 &&
          <Step5
            backBtnStyle={backBtnStyle}
            setStep={setStep}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default FarmerMembershipApplication