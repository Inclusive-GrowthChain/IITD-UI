import Modal from "react-bootstrap/Modal";

function Confirm({ showConfirm, handleCloseAdd, handleCloseConfirm }) {
  return (
    <Modal
      show={showConfirm}
      onHide={handleCloseConfirm}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <label>Are you sure you want to submit?</label>
          </div>
          <div
            className="row m-2"
            style={{
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <button
              className="btn btn-success"
              onClick={handleCloseConfirm}
              style={{
                marginTop: "1rem",
                backgroundColor: "#064420",
                width: "20%",
              }}
            >
              No
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault()
                handleCloseConfirm()
                handleCloseAdd()
              }}
              style={{
                marginTop: "1rem",
                backgroundColor: "#064420",
                width: "20%",
                position: "relative",
                float: "right",
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Confirm