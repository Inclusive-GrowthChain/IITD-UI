import { useForm } from "react-hook-form";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Input from '../../../Nisa/Modals/Input';

const h5Style = {
  padding: "10px 18px",
  color: "rgb(33, 143, 44)",
  fontWeight: "700",
  textDecoration: "underline",
}

const topBtnStyle = {
  position: "absolute",
  top: "50%",
  right: "8px"
}

const textAreaStyle = { resize: "none", height: "150px" }

const list = [
  {
    label: "Bid ID",
    name: "bidId",
  },
  {
    label: "Lac Strain Type",
    name: "lacStrainType",
    isSelect: true,
    options: [
      "Kusmi",
      "Rangeeni",
    ],
  },
  {
    label: "Source of Tree",
    name: "treeSource",
    isSelect: true,
    options: [
      "Kusum",
      "Ber",
      "Palash",
      "Other",
    ],
  },
  {
    label: "Origin",
    name: "origin",
    isSelect: true,
    options: [
      "Jharkhand",
      "Chattisgarh",
      "MP",
      "Mednapore",
    ],
  },
  {
    label: "Seedlac Content",
    name: "seedLacContent",
  },
  {
    label: "Fresh Resin Content",
    name: "freshResinContent",
  },
  {
    label: "Quantity",
    name: "quantity",
    type: "number",
  },
  {
    label: "Date of Supply",
    name: "supplyDate",
    type: "date",
  },
  {
    label: "End Date for Bidding",
    name: "bidEndDate",
    type: "date",
  },
]

const PageOne = ({ onButtonClick, bid }) => {
  const { register } = useForm({
    defaultValues: bid
  })

  return (
    <main
      className="pt5 black-80 center relative"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        <div>
          <h5
            className="mt-5"
            style={h5Style}
          >
            Bid Details
          </h5>
        </div>

        <div style={topBtnStyle}>
          <button
            onClick={() => onButtonClick("pagetwo")}
            className="bg-white"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>

        <div className="form" style={{ marginTop: '3%' }}>
          {
            list.map(l => (
              <Input
                {...l}
                key={l.name}
                register={register}
                errors={{}}
                disabled
              />
            ))
          }
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Required Test Reports</label>
            </div>
            <div className="col-lg-12">
              <input
                className="form-control text-capitalize"
                {...register("reportsRequired")}
                disabled
              />
            </div>
          </div>

          <div className="row m-2">
            <div className="col-lg-6">
              <label>Remarks</label>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                style={textAreaStyle}
                {...register("remarks")}
                disabled
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
