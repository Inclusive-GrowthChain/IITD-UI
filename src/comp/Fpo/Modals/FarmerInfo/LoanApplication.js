import Modal from "react-bootstrap/Modal";

function LoanApplication({ show, handleShowImg, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        Loan Application
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Name as per PAN</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"Name"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Email</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="email"
                        value={"Email"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Mobile</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        value={"1234567890"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Aadhaar Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        value={"1234567890"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>PAN Card Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        value={"1234567890"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Address</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"Address"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Income Type</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"Income Type"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Amount Required</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        value={"100000"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Birth</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="date"
                        value={"2021-10-10"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Land Owned</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"Land Owned"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Reason for loan</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"Reason"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Aadhar Picture
                      </label>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "100%",
                          fontSize: ".75rem",
                          lineHeight: "1.7rem",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowImg();
                        }}
                      >
                        View
                      </button>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        PAN Card Picture
                      </label>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "100%",
                          fontSize: ".75rem",
                          lineHeight: "1.7rem",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowImg();
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Bank Statements
                      </label>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "100%",
                          fontSize: ".75rem",
                          lineHeight: "1.7rem",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowImg();
                        }}
                      >
                        View
                      </button>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">
                        Address Proof
                      </label>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "100%",
                          fontSize: ".75rem",
                          lineHeight: "1.7rem",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleShowImg();
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-md-6">
                      <button className="btn btn-success w-100" style={{ backgroundColor: "#064420", marginTop: "3rem" }}>
                        Approve
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-success w-100" style={{ backgroundColor: "#064420", marginTop: "3rem" }}>
                        Reject
                      </button>
                    </div>
                  </div>
                  <div className="row m-2">
                    <button className="btn btn-success" style={{ backgroundColor: "#064420" }}>
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

export default LoanApplication