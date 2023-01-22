import { Modal } from "react-bootstrap";

function EditCA({ currentCA, showEditCA, handleEditCAClose }) {
  return (
    <Modal
      show={showEditCA}
      onHide={handleEditCAClose}
    >
      <Modal.Header closeButton>
        Edit Crop Advisory
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Title</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={currentCA.title}
                      />
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
                        defaultValue={currentCA.description}
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

export default EditCA