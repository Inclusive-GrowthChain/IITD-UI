
const btnStyle2 = {
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
}

const btnStyle3 = {
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
}

function Step3({ data, backBtnStyle, nextBtnStyle, h5Style, setStep }) {
  return (
    <>
      <h5 style={h5Style}>
        KYC of Authorised Signatories
      </h5>

      <div className="row m-2">
        <div className="col-lg-6">
          <label>List of Directors</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle2}
          >
            View
          </button>
        </div>
      </div>

      {[...Array(1)].map((element, index) => {
        return (
          <>
            <div className="row m-2">
              <div className="col-lg-6">
                <label>ID Proof</label>
              </div>
              <div className="col-lg-6 text-center">
                <button
                  className="py-0.5"
                  style={btnStyle3}
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
                  style={btnStyle3}
                >
                  View
                </button>
              </div>
            </div>
          </>
        )
      })}


      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(1)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step3