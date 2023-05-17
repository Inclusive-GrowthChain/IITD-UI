import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "1.7rem",
}

function Step6({ backBtnStyle, setStep, currentLoan }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="row m-2">
        <p className="col-md-6">
          Samunnati Payment Proof
        </p>
        <p className="col-md-6">
          <button
            className="py-0.5"
            style={btnStyle}
            onClick={() => updateModal("Samunnati Payment Proof")}
          >
            View
          </button>
        </p>
      </div>

      <div className="row m-2">
        <p className="col-md-6">
          Interest Rate (%)
        </p>
        <p className="col-md-6">
          {currentLoan.intrest}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-md-6">
          Amount (in Rs.)
        </p>
        <p className="col-md-6">
          {currentLoan.requestedAmount}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-md-6">
          Tenure (in months)
        </p>
        <p className="col-md-6">
          {currentLoan.loanTenure}
        </p>
      </div>

      <div className="row m-2">
        <button
          className="btn btn-success"
          onClick={() => setStep((p) => p - 1)}
          style={backBtnStyle}
        >
          Back
        </button>
      </div>

      {
        modal.state &&
        <DocImg
          show
          title={modal.state}
          imgUrl={currentLoan.paymentProof}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step6