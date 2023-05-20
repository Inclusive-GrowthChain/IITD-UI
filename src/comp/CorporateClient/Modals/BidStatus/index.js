import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "./ProgressBar";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function BidStatus({ show, data, handleClose }) {
  const [page, setPage] = useState("pageone")
  console.log(data)
  const nextPage = (p) => setPage(p)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="progressModal"
      size="lg"
    >
      <Modal.Header closeButton>Bid Status</Modal.Header>

      <Modal.Body style={{ padding: '1.25rem' }}>
        <ProgressBar page={page} />

        {
          {
            pageone: <PageOne onButtonClick={nextPage} bid={data} />,
            pagetwo: <PageTwo onButtonClick={nextPage} outerbid={data} />,
            pagethree: <PageThree onButtonClick={nextPage} outerbid={data} />,
            pagefour: <PageFour onButtonClick={nextPage} outerbid={data} />,
            pagefive: <PageFive onButtonClick={nextPage} closeBidStatus={handleClose} outerbid={data} />,
          }[page]
        }
      </Modal.Body>
    </Modal>
  )
}

export default BidStatus