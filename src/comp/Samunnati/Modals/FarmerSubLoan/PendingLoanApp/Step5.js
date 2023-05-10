import useModal from "../../../../../hooks/useModal";
import ApproveLoanApp from "../ApproveLoanApp";
import RejectLoanApp from "../RejectLoanApp";

function Step5({ data, backBtnStyle, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Land Holding</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.landHolding}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Type of Land Holding</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.typeOfLandHolding}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Caste</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.caste}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Religion</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.religion}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Monthly HH Income</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.monthlyHHIncome}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Monthly HH Expenses</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.monthlyHHExpenses}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Loan Purpose</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.loanPurpose}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Loan Tenure (months)</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.loanTenure}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-12">
          <select
            className="form-control"
            style={{ marginTop: '7%' }}
            value={modal.state}
            onChange={e => updateModal(e.target.value)}
          >
            <option value="">Change Loan Status</option>
            <option value="Approved">Approve Loan</option>
            <option value="Rejected">Reject Loan</option>
          </select>
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={backBtnStyle}
        >
          Back
        </button>
      </div>

      {
        modal.state === "Approved" &&
        <ApproveLoanApp
          show
          data={data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "Rejected" &&
        <RejectLoanApp
          show
          data={data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step5