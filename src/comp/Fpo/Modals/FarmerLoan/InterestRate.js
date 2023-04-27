import Modal from "react-bootstrap/Modal";
import RepaymentConfirm from "./RepaymentConfirm";
import useModal from "../../../../hooks/useModal";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  borderRadius: "5px",
  border: "none",
  padding: "10px 10px",
  width: "30%",
  fontSize: "17px",
  lineHeight: "1rem",
}

function InterestRate({ show, handleClose }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
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
              style={btnStyle}
              onClick={() => updateModal("confirm")}
            >
              Submit
            </button>

            {
              modal.state &&
              <RepaymentConfirm
                show
                handleClose={closeModal}
              />
            }
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default InterestRate