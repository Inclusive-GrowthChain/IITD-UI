import { useQuery } from "@tanstack/react-query";

import Loader from "../../Common/Loader";
import useModal from "../../../hooks/useModal";
import { useParams } from "react-router";
import { getApprovedLoanList } from "../../../actions/fpo";
import RepaymentStructure from "../Modals/FarmerLoan/RepaymentStructure";
import LoanApplication from "../../Farmer/Modals/Loan/LoanApplication/index"

const inprogressButtonStyle = {
  backgroundColor: "yellow",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

const repaidButtonStyle = {
  backgroundColor: "#1ad77f",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1.4rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

const theadStyle = {
  fontSize: "15px",
  verticalAlign: "top",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

const style = {
  backgroundColor: "#66FF00",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
};

function Panel2() {
  const { modal, updateModal, closeModal } = useModal();

  const { farmerId } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ["farmer/loans"],
    queryFn: () => getApprovedLoanList(farmerId),
  });

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <div className="card shadow">
      <div className=" table-responsive p-3">
        <table className="table table-striped">
          <thead style={theadStyle}>
            <tr>
              <th>Loan Id</th>
              <th>Loan application date</th>
              <th>Loan amount</th>
              <th>Interest rate</th>
              <th>Loan date</th>
              <th>Outstanding amount</th>
              <th>Next payment amount</th>
              <th>Next payment date</th>
              <th>Loan Application</th>
              <th>Repayment structure</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {data?.data?.map((g, ind) => (
              <tr key={ind}>
                <td>{g.value.loanId}</td>
                <td>{g.value.createdAt.substring(0, 10)}</td>
                <td>₹ {g.value.grantedAmount}</td>
                <td>{g.value.intrest}%</td>
                <td>{g.value.approvalAt.substring(0, 10)}</td>
                {
                  g.value.farmerWindowRepaymentStructure.find(
                    (f) => f.completed === false
                  ) && (
                    <td>
                      ₹{" "}
                      {
                        g.value.farmerWindowRepaymentStructure.find(
                          (f) => f.completed === false
                        ).balance
                      }
                    </td>
                  )
                }
                {g.value.farmerWindowRepaymentStructure.find(
                  (f) => f.completed === false
                ) && (
                    <td>
                      ₹{" "}
                      {
                        g.value.farmerWindowRepaymentStructure.find(
                          (f) => f.completed === false
                        ).emi
                      }
                    </td>
                  )}
                {g.value.farmerWindowRepaymentStructure.find(
                  (f) => f.completed === false
                ) && (
                    <td>
                      {
                        g.value.farmerWindowRepaymentStructure.find(
                          (f) => f.completed === false
                        ).repaymentDate
                      }
                    </td>
                  )}
                <td>
                  <button
                    style={style}
                    onClick={() => {
                      updateModal("LoanApplication", g) 
                    }}
                  >
                    view
                  </button>
                </td>
                <td>
                  <button
                    style={style}
                    onClick={() => {
                      updateModal("showRepaymentLoan", g)
                    }}
                  >
                    view
                  </button>
                </td>
                <td>
                  <button
                    className="py-0.5"
                    style={
                      g.value.status === "In progress"
                        ? inprogressButtonStyle
                        : repaidButtonStyle
                    }
                  >
                    {g.value.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        modal.state === "showRepaymentLoan" &&
        <RepaymentStructure
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "LoanApplication" && <LoanApplication show data={modal.data} handleClose={closeModal} />
      }
    </div>
  );
}

export default Panel2;
