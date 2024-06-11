import { Modal } from "react-bootstrap";
import useModal from "../../../../hooks/useModal";

import RepaymentContentTitle from "../../../Common/RepaymentContentTitle";
import Repayment from "./Repayment";

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
};

function RepaymentStructure({ show, handleClose, data, windowType }) {
  const { modal, updateModal, closeModal } = useModal();
  const repayments = data?.FPOrepaymentStructure || [];
  const currentDate = new Date();

  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>Repayment Structure</Modal.Header>

      <Modal.Body style={{ overflowY: "auto" }}>
        <div className="repayment_title">
          <div className="row">
            <div className="col-lg-6">
              <RepaymentContentTitle
                title="Loan Window ID"
                val={data.windowId}
              />
              <RepaymentContentTitle title="FPO Name" val={data.fpoName} />
              <RepaymentContentTitle
                title="Loan Window Amount"
                val={data.grantedAmount}
              />
            </div>

            <div className="col-lg-6">
              <div className="row">
                <RepaymentContentTitle
                  title="Loan Window Period in Months"
                  val={data.windowPeriod}
                />
                <RepaymentContentTitle
                  title="No of Repayment"
                  val={
                    data.FPOrepaymentStructure.filter(
                      (repayment) => repayment.balance === null
                    ).length
                  }
                />
                <RepaymentContentTitle
                  title="Annual Interest Rate"
                  val={`${data.intrest}%`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <table style={{ border: "1px solid #eee" }}>
            <thead style={{ backgroundColor: "#eee" }}>
              <tr>
                <th>S.No.</th>
                <th>Scheduled Repayment Date</th>
                <th>Repayment Amount</th>
                {/* <th>Remaining Amount</th> */}
                <th>Repayment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {repayments
                ?.filter((a) => a.emi)
                ?.map((window) => {
                  const [dayString, monthString, yearString] =
                    window.repaymentDate.split("-");

                  // Parse day, month, and year into integers
                  const day = parseInt(dayString, 10);
                  const month = parseInt(monthString, 10) - 1; // Months are zero-indexed
                  const year = parseInt(yearString, 10);

                  // Create a new Date object with the extracted day, month, and year
                  let repaymentDateTime = new Date(year, month, day);
                  // Set the time to the start of the day (00:00:00)
                  repaymentDateTime.setHours(0, 0, 0, 0);
                  return (
                    <tr key={window.id}>
                      <td>{window.id}</td>
                      <td>{window.repaymentDate}</td>
                      <td>{window.emi}</td>
                      {/* <td>{window?.emi - window?.paidAmount}</td> */}
                      <td>
                        <button
                          style={btnStyle}
                          onClick={() =>
                            updateModal("showRepayment", {
                              ...window,
                              lWId: data.id,
                            })
                          }
                          disabled={
                            window.completed || repaymentDateTime >= currentDate
                          }
                        >
                          Add
                        </button>
                      </td>
                      <td>{window.completed ? "Paid" : "Pending"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {modal.state && (
          <Repayment
            show
            data={modal.data}
            windowType={windowType}
            closeAll={handleClose}
            handleClose={closeModal}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default RepaymentStructure;
