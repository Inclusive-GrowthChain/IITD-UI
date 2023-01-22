import { Modal } from "react-bootstrap";

function AddCA({ showAddCA, handleCAClose }) {
  return (
    <Modal
      show={showAddCA}
      onHide={handleCAClose}
    >
      <Modal.Header closeButton>Add Crop Advisory</Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Crop Advisory ID</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        value={"CA12345"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Title</label>
                    </div>
                    <div className="col-lg-12">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Content</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        style={{ height: "200%" }}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "5rem",
                        backgroundColor: "#064420",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddCA