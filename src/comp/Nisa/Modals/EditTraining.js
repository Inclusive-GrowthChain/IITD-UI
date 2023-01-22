import { Modal } from "react-bootstrap";

function EditTraining({ currentTP, showEditTP, handleEditTPClose }) {
  return (
    <Modal show={showEditTP} onHide={handleEditTPClose}>
      <Modal.Header closeButton>Edit Training Program</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Training Course Name</label>
                    </div>
                    <div className="col-lg-12">
                      <input className="form-control" type="text" defaultValue={currentTP.name} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Course Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.courseStartDate} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Duration</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" defaultValue={currentTP.duration} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.appStartDate} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application End Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.appEndDate} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fee (in Rs.)</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" defaultValue={currentTP.fee} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control"
                        style={{ height: "200%" }}
                        defaultValue={100}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{ marginTop: '5rem', backgroundColor: '#064420' }}
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

export default EditTraining