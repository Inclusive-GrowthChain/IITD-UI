import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function Invoice({ showAttachInvoiceImg, handleCloseAttachInvoiceImg }) {
  return (
    <Modal
      show={showAttachInvoiceImg}
      onHide={handleCloseAttachInvoiceImg}
    >
      <Modal.Header closeButton>Invoice</Modal.Header>
      <Modal.Body>
        <img src={logo} alt="Attach Invoice" style={{ width: "100%", height: "100%" }} />
      </Modal.Body>
    </Modal>
  )
}

export default Invoice