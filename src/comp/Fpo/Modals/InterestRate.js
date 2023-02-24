import Modal from "react-bootstrap/Modal";
import RepaymentConfirm from "./RepaymentConfirm";

function InterestRate({ showInterest, handleCloseInterest, handleShowConfirm, showConfirm, handleCloseConfirm, confirmBid, cancelBid, confirmBox }) {
  return (
    <Modal show={showInterest} onHide={handleCloseInterest}>
      <Modal.Header closeButton>Interest Rate</Modal.Header>
      <Modal.Body>
        <div className="row m-2">
          <div className="col-lg-6">
            <label>Interest Rate</label>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="14%"
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-lg-12 text-center">
            <button
              className="py-0.5 mt-3"
              style={{
                backgroundColor: "#064420",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
                padding: "10px 10px",
                width: "30%",
                fontSize: "17px",
                lineHeight: "1rem",
              }}
              onClick={() => {
                handleShowConfirm()
                confirmBox()
              }}
            >
              Submit
            </button>
            <RepaymentConfirm
              showConfirm={showConfirm}
              handleCloseConfirm={handleCloseConfirm}
              confirmBid={confirmBid}
              cancelBid={cancelBid}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default InterestRate