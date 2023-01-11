import Modal from "react-bootstrap/Modal";

function DocumentsCollected({
  showApp, handleCloseApp, step, setStep,
  handleChange, noOfRows, setNoOfRows, windowId,
  handleSubmit
}) {
  return (
    <Modal
      size="lg"
      show={showApp}
      onHide={handleCloseApp}
      scrollable={true}
    >
      <Modal.Header closeButton>Documents Collected</Modal.Header>
      <Modal.Body>
        {step === 0 && (
          <div className="row">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>KYC Documents</u>
            </h5>
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>MOA</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <button
                            className="py-0.5"
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "5px 10px",
                              width: "30%",
                              fontSize: ".75rem",
                              lineHeight: "1rem",
                              textAlign: "center",
                            }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>AOA</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <button
                            className="py-0.5"
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "5px 10px",
                              width: "30%",
                              fontSize: ".75rem",
                              lineHeight: "1rem",
                              textAlign: "center",
                            }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>
                            Certificate of Incorporation
                          </label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <button
                            className="py-0.5"
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "5px 10px",
                              width: "30%",
                              fontSize: ".75rem",
                              lineHeight: "1rem",
                              textAlign: "center",
                            }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>GST Certificate</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <button
                            className="py-0.5"
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "5px 10px",
                              width: "30%",
                              fontSize: ".75rem",
                              lineHeight: "1rem",
                              textAlign: "center",
                            }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>PAN Card</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <button
                            className="py-0.5"
                            style={{
                              backgroundColor: "#064420",
                              color: "#fff",
                              alignItems: "center",
                              borderRadius: "5px",
                              border: "none",
                              padding: "5px 10px",
                              width: "30%",
                              fontSize: ".75rem",
                              lineHeight: "1rem",
                              textAlign: "center",
                            }}
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          {(("Create" && step < 6) ||
                            ("Create" && step < 5)) && (
                              <button
                                className="btn btn-success"
                                onClick={() => setStep((p) => p + 1)}
                                style={{
                                  marginTop: "80px",
                                  backgroundColor: "#064420",
                                  width: "20%",
                                  position: "relative",
                                  float: "right",
                                }}
                              >
                                Next
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="row mt-3">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>KYC of Authorised Signatories</u>
            </h5>
            <div className="col">
              <div className="form">
                <label className="form-label select-label">
                  <div className="">
                    <div className="row m-2">
                      <h5>List of Directors</h5>
                      <div className="col-lg-12">
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleChange} />
                      </div>
                    </div>
                    {[...Array(noOfRows)].map((element, index) => {
                      return (
                        <>
                          <div key={index} className="row m-2 mt-3">
                            <div className="col-4">
                              <label>ID Proof</label>
                            </div>
                            <div className="col-4">
                              <select className="form-select">
                                <option value="select">
                                  Select
                                </option>
                                <option value="">PAN Card</option>
                                <option value="">Voter ID</option>
                              </select>
                            </div>
                            <div className="col-4">
                              <input
                                type="file"
                                className="form-control"
                                onChange={handleChange}
                                value={element || ""} />
                            </div>
                          </div>
                          <div className="row m-2">
                            <div className="col-4">
                              <label>Address Proof</label>
                            </div>
                            <div className="col-4">
                              <select className="form-select">
                                <option value="select">
                                  Select
                                </option>
                                <option value="">
                                  Aadhaar Card
                                </option>
                                <option value="">Voter ID</option>
                                <option value="">
                                  Driving Lincese
                                </option>
                                <option value="">Passport</option>
                              </select>
                            </div>
                            <div className="col-4">
                              <input
                                type="file"
                                className="form-control"
                                onChange={handleChange} />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div style={{ display: "flex" }}>
                      <button
                        className="mx-3"
                        style={{
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setNoOfRows(noOfRows + 1);
                        }}
                      >
                        +
                      </button>
                      <button
                        className="mx-3"
                        style={{
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setNoOfRows(noOfRows - 1);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div
                      className="row m-2"
                      style={{
                        justifyContent: "space-between",
                        padding: "0 10px",
                      }}
                    >
                      {step > 0 && (
                        <button
                          className="btn btn-success"
                          onClick={() => setStep((p) => p - 1)}
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                            width: "20%",
                          }}
                        >
                          Back
                        </button>
                      )}
                      {(("Create" && step < 6) ||
                        ("Create" && step < 5)) && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p + 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                              position: "relative",
                              float: "right",
                            }}
                          >
                            Next
                          </button>
                        )}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="row mt-3">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>Brief Profile of the FPO</u>
            </h5>
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Incorporation Details</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Brief Profile of the promoting
                            organization
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Networth statement of the promoter
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <h5 className="mt-3">Applicable Lincese</h5>
                        <div className="col-lg-12">
                          <label>Input Linceses</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                        <div className="col-lg-12">
                          <label>Fertilizer Linceses</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="row mt-3">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>Financial Details</u>
            </h5>
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Last 3 years audited financial
                            statements
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Current year provisonal/Interim
                            financials
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Month wise purchase and sales data for
                            last 6 months
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Latest 3 months stock statement
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Business Plan</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Bank statement for last 1 year
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Sanction letter copies</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            GST returns for the past 6 months
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="row mt-3">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>Other Details</u>
            </h5>
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Product wise break up of revenues
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Latest 3 months stock statements
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Debtors ageing analysis fiscal year end
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Top 5 suppliers/vintage</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Top 5 buyers/vintage</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Sanction limit & O/svfor both WC & TL
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>Term loan summary</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <label>
                            Project estimate & other relavant
                            documents
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="row mt-3">
            <h5
              style={{
                padding: "10px 25px",
                color: "#218f2c",
                fontWeight: "700",
              }}
            >
              <u>Apply for Working Capital Loan Window</u>
            </h5>
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Window ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={windowId}
                            disabled />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Requested Loan Amount</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Period in Months</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20%",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => handleSubmit(alert)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20%",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Submit
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default DocumentsCollected