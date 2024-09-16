import useModal from '../../../../../hooks/useModal';
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
    label: "Applicant Mobile Number",
    name: "mobile",
  },
  {
    label: "Applicant DOB",
    name: "dob",
  },
  {
    label: "Applicant Age",
    name: "age",
  },
  {
    label: "Aadhard Card Number",
    name: "aadharCardNumber",
  },
  {
    label: "Aadhard Card",
    name: "aadharCardImage",
    isFile: true
  },
  {
    label: "Pan Card Number",
    name: "panCardNumber",
  },
  {
    label: "Pan Card",
    name: "panCardImage",
    isFile: true
  },
]

function Step2({ backBtnStyle, nextBtnStyle, setStep, data }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      {
        list.map(l => (
          <div key={l.name} className="row m-2">
            <p className="col-lg-6">
              {l.label}
            </p>
            <p className="col-lg-6">
              {
                l.isFile ?
                  <button
                    style={btnStyle}
                    onClick={() => updateModal(l.label, { imgUrl: data[l.name] })}
                  >
                    view
                  </button>
                  : data[l.name]
              }
            </p>
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