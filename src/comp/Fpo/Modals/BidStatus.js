import Modal from "react-bootstrap/Modal";
import ProgressBar from "../ProgressBar/ProgressBar";
import PageOne from "../ProgressPage/PageOne";
import PageTwo from "../ProgressPage/PageTwo";
import PageThree from "../ProgressPage/PageThree";
import PageFour from "../ProgressPage/PageFour";

function BidStatus({ showCustomer, handleCloseCustomer, page, labelArray, currentStep, updateStep, canEdit, nextPage, bid }) {
  return (
    <Modal
      className="progressModal"
      size="lg"
      show={showCustomer}
      onHide={handleCloseCustomer}
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
              <PageFour onButtonClick={nextPage} canEdit={canEdit} bid={bid} />
            ),
          }[page]
        }
      </Modal.Body>
    </Modal>
  )
}

export default BidStatus