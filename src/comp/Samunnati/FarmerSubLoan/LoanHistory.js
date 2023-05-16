import useModal from "../../../hooks/useModal";
import CompletedLoanApp from "../Modals/FarmerSubLoan/CompletedLoanApp";

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

function LoanHistory({ fpoId, data = [], grantedAmount, consumedWindowLoanAmount, theadStyle, tbodyStyle }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="card shadow">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead style={theadStyle}>
              <tr>
                <td>Loan ID</td>
                <td>Farmer ID</td>
                <td>Farmer Name</td>
                <td>Contact</td>
                <td>Date of Application</td>
                <td>Loan Amount</td>
                <td>View Transaction Details</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                data.map(loan => (
                  <tr key={loan.id}>
                    <td>{loan.loanId}</td>
                    <td>{loan.userId}</td>
                    <td>{loan.name}</td>
                    <td>{loan.mobile}</td>
                    <td>{loan.createdAt?.substring(0, 10)}</td>
                    <td>{loan.grantedAmount}</td>
                    <td>
                      <button
                        style={btnStyle}
                        onClick={() => updateModal("show", loan)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: '2%' }}>
        Remaining Loan Window: {grantedAmount - consumedWindowLoanAmount}
      </div>

      {
        modal.state &&
        <CompletedLoanApp
          show
          currentLoan={modal.data}
          currentTransaction={{}}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default LoanHistory