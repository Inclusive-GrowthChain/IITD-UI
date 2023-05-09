
const btnStyle4 = {
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

function Step4({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  return (
    <>
      <h5 style={h5Style}>
        Brief Profile of the FPO
      </h5>

      <div className="row m-2">
        <div className="col-lg-6">
          <label>Incorporation Details</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
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
            style={btnStyle}
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
            style={btnStyle}
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
              style={btnStyle4}
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
              style={btnStyle4}
            >
              View
            </button>
          </div>
        </div>
      </div>

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

export default Step4