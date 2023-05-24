import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import ProgressBar from "../../ProgressBar/ProgressBar";
import PageThree from "../../ProgressPage/PageThree";
import PageFour from "../../ProgressPage/PageFour";
import PageOne from "../../ProgressPage/PageOne";
import PageTwo from "../../ProgressPage/PageTwo";

function BidStatus({
  show, handleClose,
  labelArray, canEdit, bid
}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [page, setPage] = useState("pageone")

  const updateStep = (step) => setCurrentStep(step)
  const nextPage = (page) => setPage(page)

  return (
    <Modal
      className="progressModal"
      size="lg"
      show={show}
      onHide={handleClose}
      style={{ height: "100%" }}
    >
      <Modal.Header closeButton>
        Bid Status
      </Modal.Header>
      <Modal.Body>
        <ProgressBar
          page={page}
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
        {
          {
            pageone: (
              <PageOne onButtonClick={nextPage} bid={bid} />
            ),
            pagetwo: (
              <PageTwo onButtonClick={nextPage} bid={bid} />
            ),
            pagethree: (
              <PageThree onButtonClick={nextPage} bid={bid} />
            ),
            pagefour: (
              <PageFour onButtonClick={nextPage} bid={bid} />
            ),
          }[page]
        }
      </Modal.Body>
    </Modal>
  )
}

export default BidStatus