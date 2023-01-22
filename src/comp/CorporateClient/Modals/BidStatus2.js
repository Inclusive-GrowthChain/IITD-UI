import Modal from "react-bootstrap/Modal";
import FPOProgressBar from "../../../pages/fpo/ProgressBar/ProgressBar";
import FPOPageThree from "../../../pages/fpo/ProgressPage/PageThree";
import FPOPageFour from "../../../pages/fpo/ProgressPage/PageFour";
import FPOPageOne from "../../../pages/fpo/ProgressPage/PageOne";
import FPOPageTwo from "../../../pages/fpo/ProgressPage/PageTwo";

const labelArray = [
  "Bid Information",
  "Upload Test",
  "Invoice Upload",
  "Verify Payment",
]

function BidStatus2({ showCustomer, page, page2, currentStep, updateStep, nextPage2, handleCloseCustomer }) {
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
        <FPOProgressBar
          page={page2}
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
        {page === "pageone" && <FPOPageOne onButtonClick={nextPage2} />}
        {page === "pagetwo" && <FPOPageTwo onButtonClick={nextPage2} />}
        {page === "pagethree" && <FPOPageThree onButtonClick={nextPage2} />}
        {page === "pagefour" && <FPOPageFour onButtonClick={nextPage2} canEdit={false} />}
      </Modal.Body>
    </Modal>
  )
}

export default BidStatus2