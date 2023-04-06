import Modal from "react-bootstrap/Modal";
import MultiStepProgressBar from "./ProgressBar";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function BidStatus({ page, showBidStatus, nextPage, currentBid, handleCloseBidStatus, fpoBids }) {
  return (
    <Modal
      show={showBidStatus}
      onHide={handleCloseBidStatus}
      className="progressModal"
      size="lg"
    >
      <Modal.Header closeButton>Bid Status</Modal.Header>
      <Modal.Body style={{ padding: '1.25rem' }}>
        <MultiStepProgressBar page={page} />
        {
          {
            pageone: <PageOne onButtonClick={nextPage} bid={currentBid} />,
            pagetwo: <PageTwo onButtonClick={nextPage} fpoBids={fpoBids}/>,
            pagethree: <PageThree onButtonClick={nextPage} />,
            pagefour: <PageFour onButtonClick={nextPage} />,
            pagefive: <PageFive onButtonClick={nextPage} closeBidStatus={handleCloseBidStatus} />,
          }[page]
        }
      </Modal.Body>
    </Modal>
  )
}

export default BidStatus