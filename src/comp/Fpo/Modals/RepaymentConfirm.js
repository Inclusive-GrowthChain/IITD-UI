import Modal from "react-bootstrap/Modal";

function RepaymentConfirm({ showConfirm, handleCloseConfirm, confirmBid, cancelBid }) {
  return (
    <Modal show={showConfirm} onHide={handleCloseConfirm}>
      <Modal.Body
        closeButton
        style={{
          position: "absolute",
          top: "4rem",
          left: "6rem",
          width: "60%",
          height: "150px",
          timer: "1500",
          backgroundColor: "#e9ecef",
          color: "#000",
          textAlign: "center",
        }}
      >
        <div
          style={{
            dispalay: "flex",
            alignItems: "center",
          }}
        >
          <p className="text-center">Are you confirm!</p>
          <button
            style={{
              backgroundColor: "#064420",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              padding: "0.25rem 1rem",
              color: "#fff",
              marginRight: "10px",
            }}
            onClick={(e) => {
              confirmBid(e)
            }}
          >
            Yes
          </button>
          <button
            style={{
              backgroundColor: "#064420",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              padding: "0.25rem 1rem",
              color: "#fff",
            }}
            onClick={(e) => {
              cancelBid(e)
            }}
          >
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RepaymentConfirm