
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

function LoanWindowTable({ onClick, loanWindow }) {
  return (
    <div>
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
        <label style={labelStyle}>Loan window amount</label>
        <span>:</span>
        <input
          type="text"
          className="px-2 py-1 border-0"
          value={loanWindow?.grantedAmount !== -1 ? loanWindow?.grantedAmount : loanWindow?.requestedAmount}
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
        <label style={labelStyle}>Status</label>
        <span>:</span>
        <button
          style={btnStyle}
          onClick={onClick}
        >
          View
        </button>
      </div>
    </div>
  )
}

export default LoanWindowTable