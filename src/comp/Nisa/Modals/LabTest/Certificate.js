import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function Certificate({ showCertificateImg, handleCloseCertificateImg }) {
  return (
    <Modal
      show={showCertificateImg}
      onHide={handleCloseCertificateImg}
    >
      <Modal.Header closeButton>
        Certificate Image
      </Modal.Header>
      <Modal.Body>
        <img
          src={logo}
          alt="Certificate"
          style={{ width: "100%", height: "100%" }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default Certificate