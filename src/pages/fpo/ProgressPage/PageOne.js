import React from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PageOne = ({ onButtonClick }) => {
  // const [edit, setEdit] = useState(false);
  // const [canEdit, setCanEdit] = useState(false);

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   setEdit(true);
  // }

  // useEffect(() => {
  //   if (bid) {
  //     bid.endDate > new Date().toISOString().split("T")[0] ? setCanEdit(true) : setCanEdit(false);
  //   }
  // }, [bid]);

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        {/* {
          canEdit && (
            <div style={{
              position: "relative",
              float: "right",
              right: "18px",
              top: "-3rem",
              }}>
            <button 
              onClick={handleEdit}
              style={{backgroundColor: 'white'}}>
              <EditIcon />
            </button>
          </div>
          )
        } */}
        <div
          style={{
            position: "relative",
            float: "right",
            right: "-0.781rem",
            top: "22rem",
          }}
        >
          <button
            onClick={() => onButtonClick("pagetwo")}
            style={{ backgroundColor: "white" }}
            disabled=""
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
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
            Bid Details
          </h5>
        </div>
        <div className="form" style={{ marginTop: "3%" }}>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Bid ID</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value=""
                placeholder="B12342"
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Lac Strain Type</label>
            </div>
            <div className="col-lg-6">
              <select
                className="form-control"
                name="category"
                disabled={true}
                placeholder="kusmi"
              >
                <option value="0">select</option>
                <option value="1">Kusmi</option>
                <option value="2">Rangeeni</option>
              </select>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Source of Tree</label>
            </div>
            <div className="col-lg-6">
              <select
                className="form-control"
                name="category"
                disabled={true}
                placeholder="kusum"
              >
                <option value="0">select</option>
                <option value="1">Kusum</option>
                <option value="2">Ber</option>
                <option value="3">Palash</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Origin</label>
            </div>
            <div className="col-lg-6">
              <select
                className="form-control"
                name="category"
                disabled={true}
                placeholder="Jharkhand"
              >
                <option value="0">select</option>
                <option value="1">Jharkhand</option>
                <option value="2">Chattisgarh</option>
                <option value="3">MP</option>
                <option value="4">Mednapore</option>
              </select>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Seedlac Content</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="number"
                disabled={true}
                value=""
                placeholder="100"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Fresh Resin Content</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="number"
                disabled={true}
                value=""
                placeholder="100"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Quantity</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="number"
                disabled={true}
                value=""
                placeholder="200"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Date of Supply</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="date"
                disabled={true}
                value=""
                placeholder="10-10-2021"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>End Date for Bidding</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="date"
                disabled={true}
                value=""
                placeholder="10-10-2022"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Required Test Reports</label>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    disabled
                    placeholder="Chowri"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2" style={{ marginBottom: "5rem" }}>
            <div className="col-lg-6">
              <label>Remarks</label>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                style={{ height: "100%" }}
                disabled={true}
                value=""
                placeholder="Remarks"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
