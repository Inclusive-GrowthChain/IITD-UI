import Modal from "react-bootstrap/Modal";

function PendingLoanApp({ showPendLoanApp, handleClosePendLoanApp, step, setStep, currentPendLoanApp, noOfRows, changeLoanStatus }) {
  return (
    <Modal
      size="lg"
      show={showPendLoanApp}
      onHide={handleClosePendLoanApp}
      scrollable={true}
    // contentClassName="modal-height"
    >
      <Modal.Header closeButton>Loan Window Application</Modal.Header>
      <Modal.Body>
        {step === 0 && (
          <div className="row">
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
                            disabled
                            value={"W123456"}
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Requested Loan Window Amount</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            value={1000000}
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Window Tenure (in months)</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            value={1}
                          />
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
                                  marginTop: "1rem",
                                  backgroundColor: "#064420",
                                  width: "20%",
                                  minWidth: "80px",
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
                              minWidth: "80px",
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
                                minWidth: "80px",
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
        {step === 2 && (
          <div className="row">
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
                      <div className="col-lg-6">
                        <label>List of Directors</label>
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
                    {[...Array(noOfRows)].map((element, index) => {
                      return (
                        <>
                          <div className="row m-2">
                            <div className="col-lg-6">
                              <label>ID Proof</label>
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
                              <label>Address Proof</label>
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
                        </>
                      );
                    })}
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
                            minWidth: "80px",
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
                              minWidth: "80px",
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
        {step === 3 && (
          <div className="row">
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
                        <div className="col-lg-6">
                          <label>Incorporation Details</label>
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
                          <label>Brief Profile of the Promoting Organization</label>
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
                          <label>Networth Statement of the Promoter</label>
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
                        <h5 className="mt-3">Applicable License</h5>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Input Licences</label>
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
                            <label>Fertilizer Licences</label>
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
                              minWidth: "80px",
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
                                minWidth: "80px",
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
          <div className="row">
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
                        <div className="col-lg-6">
                          <label>Last 3 years Audited Financial Statements</label>
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
                          <label>Current Year Provisional/Interim Financials</label>
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
                          <label>Month Wise Purchase and Sales Data for Last 6 Months</label>
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
                          <label>Latest 3 Months Stock Statement</label>
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
                          <label>Business Plan</label>
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
                          <label>Bank Statement for Last 1 Year</label>
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
                          <label>Sanction Letter Copies</label>
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
                          <label>GST Returns for the Past 6 Months</label>
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
                              minWidth: "80px",
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
                                minWidth: "80px",
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
          <div className="row">
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
                        <div className="col-lg-6">
                          <label>Product wise break up of revenues (2 fiscal)</label>
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
                          <label>Latest 3 Months Stocks Statements</label>
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
                          <label>Debtors Ageing Analysis Fiscal Year End</label>
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
                          <label>Top 5 Suppliers/Vintage (last 6 months)</label>
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
                          <label>Top 5 Buyers/Vintage (last 6 months)</label>
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
                          <label>Sanction Limit & O/s for both WC & TL</label>
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
                          <label>Term Loan Summary</label>
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
                          <label>Project Estimate & Other Relevant Documents</label>
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
                            // <button
                            //   className="btn btn-success"
                            //   onClick={(e) => changeLoanStatus(e, currentPendLoanApp)}
                            //   style={{
                            //     marginTop: "1rem",
                            //     backgroundColor: "#064420",
                            //     width: "100%",
                            //     position: "relative",
                            //     float: "right",
                            //     marginTop: '5%'
                            //   }}
                            // >
                            //   Update Loan Status
                            // </button>
                            <div className="row">
                              <div className="col-lg-12">
                                <select
                                  className="form-control"
                                  onChange={(e) => changeLoanStatus(e, currentPendLoanApp)}
                                  style={{
                                    marginTop: "1rem",
                                    width: "100%",
                                    position: "relative",
                                    float: "right",
                                    // eslint-disable-next-line no-dupe-keys
                                    marginTop: '5%',
                                  }}
                                >
                                  <option value="Pending">Change Loan Window Status</option>
                                  <option value="Approved">Approve Window</option>
                                  <option value="Rejected">Reject Window</option>
                                </select>
                              </div>
                            </div>
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

export default PendingLoanApp