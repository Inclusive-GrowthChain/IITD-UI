import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "react-bootstrap";

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

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

function PendingLoanApp({ show, data, setLoanWindow, handleClose }) {
  const [step, setStep] = useState(1)
  const queryClient = useQueryClient()

  const closeAll = (status, id) => {
    queryClient.invalidateQueries(["sumunnati/loanwindow", "farmer"])
    setLoanWindow(pr => ({
      ...pr,
      loans: pr.loans.map(l => {
        if (l.id === id) {
          return {
            ...l,
            status,
            approvalAt: new Date().toISOString(),
          }
        }

        return l
      })
    }))
    handleClose()
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
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
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 3 &&
          <Step3
            data={data}
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 4 &&
          <Step4
            data={data}
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            nextBtnStyle={nextBtnStyle}
          />
        }

        {
          step === 5 &&
          <Step5
            data={data}
            setStep={setStep}
            backBtnStyle={backBtnStyle}
            closeAll={closeAll}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default PendingLoanApp