import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function LacSample({ showLacSampleImg, handleCloseLacSampleImg }) {
  return (
    <Modal
      show={showLacSampleImg}
      onHide={handleCloseLacSampleImg}
    >
      <Modal.Header closeButton>
        Lac Sample Image
      </Modal.Header>
      <Modal.Body>
        <img
          src={logo}
          alt="Lac Sample"
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default LacSample