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

function Step2({ backBtnStyle, nextBtnStyle, setStep, farmerDetails }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Applicant DOB
        </p>
        <p className="col-lg-6">
          {farmerDetails.dateOfBirth}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Age
        </p>
        <p className="col-lg-6">
          {farmerDetails.age}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Aadhard Card Number
        </p>
        <p className="col-lg-6">
          {farmerDetails.aadharCardNumber}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Aadhar Card
        </p>
        <p className="col-lg-6">
          <button
            style={btnStyle}
            onClick={() => updateModal("Aadhar Card", { imgUrl: farmerDetails.aadharCardImage })}
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
          {farmerDetails.panCardNumber}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          PAN Card
        </p>
        <p className="col-lg-6">
          <button
            style={btnStyle}
            onClick={() => updateModal("PAN Card", { imgUrl: farmerDetails.panCardImage })}
          >
            view
          </button>
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Co-Applicant Name
        </p>
        <p className="col-lg-6">FPO 3</p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Co-Applicant Gender
        </p>
        <p className="col-lg-6">
          Male
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