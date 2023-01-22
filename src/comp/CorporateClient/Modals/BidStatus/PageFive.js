import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageFive = ({ onButtonClick, closeBidStatus }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    closeBidStatus();
  };

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        <div>
          <h5
            className="mt-5"
            style={{
              padding: "10px 18px",
              color: "rgb(33, 143, 44)",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Upload Payment Proof
          </h5>
        </div>
        <div className="form" style={{ marginTop: '3%' }}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "4rem",
          }}>
            <button
              onClick={() => onButtonClick("pagefour")}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div className="row m-2">
            <div className="col-lg-6" style={{ marginLeft: '-2%' }}>
              <label>Invoice Number</label>
            </div>
            <div className="col-lg-6" style={{ marginLeft: '1%' }}>
              <input className="form-control" type="number" style={{ width: '103%' }} />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Invoice Date</label>
            </div>
            <div className="col-lg-6">
              <input className="form-control" type="date" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Amount</label>
            </div>
            <div className="col-lg-6">
              <input className="form-control" type="number" />
            </div>
            <div className="row m-2">
              <div className="col-lg-6" style={{ marginLeft: '-2.75%' }}>
                <label>Invoice</label>
              </div>
              <div className="col-lg-6">
                <input className="form-control" type="file" style={{ marginLeft: '3%', width: '103.5%' }} />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-success"
                  style={{ marginTop: '1rem', backgroundColor: '#064420', width: '96%' }}
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageFive;
