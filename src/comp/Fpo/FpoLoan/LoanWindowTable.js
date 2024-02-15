import useModal from "../../../hooks/useModal";
import RepaymentStructure from "../../Farmer/Modals/Loan/RepaymentStructure";
import CapitalWindow from "../Modals/FpoLoan/CapitalWindow";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const labelStyle = { width: "180px" }

function LoanWindowTable({ loanWindow }) {
  const { modal, updateModal, closeModal } = useModal()
  return (
    <div className="shadow m-2 p-3" style={{ paddingLeft: "24px" }}>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Loan window Id</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow?.windowId}
          disabled
        />
      </div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Loan window Requested Amount</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow.requestedAmount}
          disabled
        />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Loan window Granted Amount</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow?.grantedAmount !== -1 ? loanWindow?.grantedAmount : `Waiting for window approval`}
          disabled
        />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Loan window tenure</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow?.windowPeriod}
          disabled
        />
      </div>

      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>View Loan Window Application</label>
        <span>:</span>
        <button
          style={btnStyle}
          onClick={() => updateModal("show", loanWindow)}
        >
          View
        </button>
      </div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>View Loan Window Repayment Structure</label>
        <span>:</span>
        <button
          style={btnStyle}
          onClick={() => updateModal("showRepaymentStructure", loanWindow)}
        >
          Repayment Structure
        </button>
      </div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Status</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow?.status}
          disabled
        />
      </div>
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        <label style={labelStyle}>Date of Application</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={new Date(loanWindow?.AppliedDate).toDateString()}
          disabled
        />
      </div>

      {
        modal.state === "show" &&
        <CapitalWindow
          show
          isEdit
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showRepaymentStructure" &&
        <RepaymentStructure
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </div>
  )
}

export default LoanWindowTable