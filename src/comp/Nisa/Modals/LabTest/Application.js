import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/img/logo.png";

function Application({ currentApp, showApp, showFirstAppForm, setShowFirstAppForm, handleCloseApp }) {
  return (
    <Modal
      show={showApp}
      onHide={handleCloseApp}
    >
      <Modal.Header closeButton>
        Application
      </Modal.Header>

      <Modal.Body>
        <div className="row ">
          <div className="col">
            {showFirstAppForm && (
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>FPO Name</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.fpoName}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>FPO Contact</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.fpoContact}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Sample ID</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.sampleID}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Date of Application
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.dateOfApp}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Category</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.testCategory}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Test</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.test}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Amount</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.amount}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Payment Ref no.</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.paymentRefNo}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Payment Image</label>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={logo}
                          alt="payment"
                          style={{
                            height: "100px",
                            width: "100px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Lac Sample Image</label>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={logo}
                          alt="Lab Sample"
                          style={{
                            height: "100px",
                            width: "100px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Remarks</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          value={currentApp.remarks}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-12">
                        <button
                          className="btn btn-primary"
                          onClick={() => setShowFirstAppForm(false)}
                          style={{
                            float: "right",
                            backgroundColor: "#064420",
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {!showFirstAppForm && (
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Ref no.</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Certificate</label>
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="file"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <button
                        className="btn btn-success"
                        style={{
                          marginTop: "1rem",
                          backgroundColor: "#064420",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Application