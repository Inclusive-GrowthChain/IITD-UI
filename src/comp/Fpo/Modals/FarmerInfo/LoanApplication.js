import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DocImg from "../../../Common/DocImg";

function LoanApplication({ show, handleClose, modal }) {
  const [showImg, setShowImg] = useState(false);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleShowImg = () => setShowImg(true);
  const handleCloseImg = () => setShowImg(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Loan Application</Modal.Header>
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
                          value={modal?.data?.value?.name}
                          disabled
                        />
                      </div>
                    </div>
                    {modal?.data?.value?.email && (
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
                    )}
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Mobile</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={modal?.data?.value?.mobile}
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
                          type="text"
                          value={modal?.data?.value?.aadharCardNumber}
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
                          type="text"
                          value={modal?.data?.value?.panCardNumber}
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
                          value={`${modal?.data?.value?.doorNumber} ${modal?.data?.value?.street} ${modal?.data?.value?.village} ${modal?.data?.value?.taluk} ${modal?.data?.value?.district} ${modal?.data?.value?.state} ${modal?.data?.value?.pinCode}`}
                          disabled
                        />
                      </div>
                    </div>
                    {modal?.data?.value?.incomeType && (
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
                    )}
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Amount Required</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={modal?.data?.value?.requestedAmount}
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
                          value={modal?.data?.value?.dob}
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
                          value={modal?.data?.value?.landHolding}
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
                          value={modal?.data?.value?.purpose}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-12 col-md-6">
                        <label className="form-label">Aadhar Picture</label>
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
                            setTitle("Aadhar Card");
                            setImgUrl(modal?.data?.value?.aadharCardImage);
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label">PAN Card Picture</label>
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
                            setTitle("Pan Card");
                            setImgUrl(modal?.data?.value?.panCardImage);
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-12 col-md-6">
                        <label className="form-label">Bank Statements</label>
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
                            setTitle("Pan Card");
                            setImgUrl(modal?.data?.value?.panCardImage);
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label">Address Proof</label>
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <DocImg
        show={showImg}
        title={title}
        imgUrl={imgUrl}
        handleClose={handleCloseImg}
      />
    </>
  );
}

export default LoanApplication;
