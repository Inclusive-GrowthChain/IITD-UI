import useModal from "../../../../../hooks/useModal";
import DocImg from '../../../../Common/DocImg';

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "2rem",
}

const list = [
  {
    label: "Applicant DOB",
    name: "dob",
  },
  {
    label: "Applicant Age",
    name: "age",
  },
  {
    label: "Aadhar Card Number",
    name: "aadharCardNumber",
  },
  {
    label: "Aadhar Card",
    name: "aadharCardImage",
    isFile: true,
  },
  {
    label: "PAN Card Number",
    name: "panCardNumber",
  },
  {
    label: "PAN Card",
    name: "panCardImage",
    isFile: true,
  },
  {
    label: "Co-Applicant Name",
    name: "coApplicantName",
  },
  {
    label: "Co-Applicant Gender",
    name: "coApplicantGender",
  },
]

function Step2({ data, backBtnStyle, nextBtnStyle, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      {
        list.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6">
              {
                l.isFile ?
                  <button
                    style={btnStyle}
                    onClick={() => updateModal(l.label, { imgUrl: data[l.name] })}
                  >
                    View
                  </button>
                  :
                  <input
                    type="text"
                    className="form-control"
                    value={data[l.name]}
                    disabled
                  />
              }
            </div>
          </div>
        ))
      }

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

      {
        modal.state &&
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step2