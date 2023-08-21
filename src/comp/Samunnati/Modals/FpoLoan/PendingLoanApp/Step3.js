import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

let idProofs = {
  panCard: "PAN Card",
  voterId: "Voter ID",
  aadharCard: "Aadhaar Card",
  drivingLicence: "Driving License",
  passport: "Passport",
}

function Step3({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        KYC of Authorised Signatories
      </h5>

      <h5 className="row m-2 px-3">
        List of Directors
      </h5>

      {
        data.kycAuthorizedSignatories.map((kyc, i) => (
          <div className="row m-2" key={i}>
            <div className="col-lg-6">
              <label>{idProofs[kyc.name]}</label>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(idProofs[kyc.name], { imgUrl: kyc.doc })}
              >
                View
              </button>
            </div>
          </div>
        ))
      }

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
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

export default Step3