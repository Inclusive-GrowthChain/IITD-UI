import Modal from "react-bootstrap/Modal";

function SellProduce({ data, show, handleClose, date, month, year }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Enter details</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <label className="form-label select-label">
                  <div className="">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Date</label>
                      </div>
                      <div className="col-lg-6">
                        <label>{date}/{month}/{year}</label>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Lac Strain Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lac Strain Type"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Source of Tree</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Source of Tree"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Origin</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Origin"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Quantity</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Remarks</label>
                      </div>
                      <div className="col-lg-12 text-center">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Remarks"
                          style={{ height: "100px" }}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-12">
                        <button
                          className="btn btn-success"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                            width: "20",
                            position: "relative",
                            float: "right",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SellProduce