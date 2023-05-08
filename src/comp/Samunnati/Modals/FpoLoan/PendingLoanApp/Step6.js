import useModal from "../../../../../hooks/useModal";
import ApproveLoanApp from "../ApproveLoanApp";
import RejectLoanApp from "../RejectLoanApp";

const selectStyle = {
  width: "100%",
  position: "relative",
  float: "right",
  marginTop: '50px',
}

function Step6({ data, backBtnStyle, btnStyle, h5Style, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        Other Details
      </h5>

      <div className="row m-2">
        <div className="col-lg-6">
          <label>Product wise break up of revenues (2 fiscal)</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Latest 3 Months Stocks Statements</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Debtors Ageing Analysis Fiscal Year End</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Top 5 Suppliers/Vintage (last 6 months)</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Top 5 Buyers/Vintage (last 6 months)</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Sanction Limit & O/s for both WC & TL</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Term Loan Summary</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Project Estimate & Other Relevant Documents</label>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className="py-0.5"
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={backBtnStyle}
        >
          Back
        </button>

        <select
          className="form-control"
          style={selectStyle}
          value={modal.state}
          onChange={e => updateModal(e.target.value)}
        >
          <option value="" disabled>Change Loan Window Status</option>
          <option value="Approved">Approve Loan Window</option>
          <option value="Rejected">Reject Loan Window</option>
        </select>
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

export default Step6