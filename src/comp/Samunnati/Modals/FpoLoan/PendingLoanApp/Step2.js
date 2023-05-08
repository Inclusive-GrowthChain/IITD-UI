
function Step2({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  return (
    <>
      <h5 style={h5Style}>
        KYC Documents
      </h5>

      <div className="row m-2">
        <div className="col-lg-6">
          <label>MOA</label>
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
          <label>AOA</label>
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
          <label>
            Certificate of Incorporation
          </label>
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
          <label>GST Certificate</label>
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
          <label>PAN Card</label>
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

export default Step2