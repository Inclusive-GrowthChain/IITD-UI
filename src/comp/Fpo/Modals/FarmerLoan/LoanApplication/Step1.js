
function Step1({ nextBtnStyle, setStep }) {
  return (
    <div className="row">
      <div className="col">
        <form>
          <div className="form">
            <label className="form-label select-label">
              <div className="">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Loan ID</label>
                  </div>
                  <div className="col-lg-6">
                    <label>hgfds</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO Name</label>
                  </div>
                  <div className="col-lg-6">
                    <label>FPO 1</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Bank Name</label>
                  </div>
                  <div className="col-lg-6">
                    <label>SBI</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Account Number</label>
                  </div>
                  <div className="col-lg-6">
                    <label>1234567890</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Bank IFSC</label>
                  </div>
                  <div className="col-lg-6">
                    <label>23423XXXX</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Branch Name</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Branch Name</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Applicant Name</label>
                  </div>
                  <div className="col-lg-6">
                    <label>N 1</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Loan Requested Amount
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>200000</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Applicant Gender</label>
                  </div>
                  <div className="col-lg-6">
                    <label>Male</label>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>
                      Applicant Mobile Number
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>1234567890</label>
                  </div>
                </div>

                <div className="row m-2">
                  <div className="col-lg-12">
                    <button
                      className="btn btn-success"
                      onClick={() => setStep(2)}
                      style={nextBtnStyle}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step1