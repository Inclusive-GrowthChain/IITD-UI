import Modal from "react-bootstrap/Modal";

function AddNewTest({ showNewTest, handleNewTestClose }) {
  return (
    <Modal
      show={showNewTest}
      onHide={handleNewTestClose}
    >
      <Modal.Header closeButton>
        Add New Test
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={"LD12345"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Category</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                      >
                        <option value="0">
                          Select Category
                        </option>
                        <option value="1">
                          Shellac / Seedlac / By-product
                          of Lac
                        </option>
                        <option value="2">
                          Bleached Lac
                        </option>
                        <option value="3">Lac Dye</option>
                        <option value="4">
                          Shellac Wax
                        </option>
                        <option value="5">
                          Aleuritic Acid
                        </option>
                        <option value="6">
                          Hydrolysed Lac
                        </option>
                        <option value="7">
                          Sealing Wax
                        </option>
                        <option value="8">
                          Gasket Shellac Compound
                        </option>
                        <option value="9">
                          Organic Substance
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>
                        Min Quantity of required sample
                        (grams)
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        style={{ height: "4rem" }}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test Fee (Rs.)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>
                        Reporting Period (days)
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
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
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddNewTest