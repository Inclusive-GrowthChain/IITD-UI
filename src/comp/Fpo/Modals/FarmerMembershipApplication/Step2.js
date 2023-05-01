import useModal from '../../../../hooks/useModal';
import DocImg from '../../../Common/DocImg';

const style = {
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

function Step2({ setStep, backBtnStyle, nextBtnStyle }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Applicant DOB
        </p>
        <p className="col-lg-6">
          07-04-2000
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Age
        </p>
        <p className="col-lg-6">
          22
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Aadhard Card Number
        </p>
        <p className="col-lg-6">
          1234567890
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Aadhar Card Image
        </p>
        <p className="col-lg-6">
          <button
            style={style}
            onClick={() => updateModal("Aadhar Card", { imgUrl: "farmerDetails.aadharCardImage" })}
          >
            view
          </button>
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          PAN Card Number
        </p>
        <p className="col-lg-6">
          1234567890
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          PAN Card Image
        </p>
        <p className="col-lg-6">
          <button
            style={style}
            onClick={() => updateModal("PAN Card", { imgUrl: "farmerDetails.panCardImage" })}
          >
            view
          </button>
        </p>
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