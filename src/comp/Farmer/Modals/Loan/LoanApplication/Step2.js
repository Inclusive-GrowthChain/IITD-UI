import useModal from '../../../../../hooks/useModal';
import Input from "../../../../Nisa/Modals/Input";
import DocImg from '../../../../Common/DocImg';

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "2px 12px",
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
    isImage: true
  },
  {
    label: "Pan Card Number",
    name: "panCardNumber",
  },
  {
    label: "Pan Card",
    name: "panCardImage",
    isImage: true
  },
]

function Step2({ backBtnStyle, nextBtnStyle, setStep, register, errors, getValues }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      {
        list.map(l => {
          if (!l.isImage) {
            return (
              <Input
                {...l}
                key={l.name}
                disabled
                errors={errors}
                register={register}
              />
            )
          }

          return (
            <div key={l.name} className="row m-2">
              <p className="col-lg-6">
                {l.label}
              </p>
              <p className="col-lg-6">
                <button
                  style={btnStyle}
                  onClick={() => updateModal(l.label, { imgUrl: getValues(l.name) })}
                >
                  view
                </button>
              </p>
            </div>
          )
        })
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