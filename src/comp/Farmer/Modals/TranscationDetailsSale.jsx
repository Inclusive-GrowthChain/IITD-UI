import { Modal } from "react-bootstrap";

export const TranscationDetailsSale = ({ show, data, handleClose }) => {
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header className="text-capitalize" closeButton>
        {data.data.type} History
      </Modal.Header>
      <Modal.Body>
        <div className="firsttab">
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className=" table-responsive p-3">
                  <table className="table table-striped">
                    <thead
                      style={{
                        color: "green",
                        fontSize: "15px",
                        verticalAlign: "top",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Rate/Unit</th>
                        <th>Amount</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                        // textAlign: "center",
                      }}
                    >
                      {data.data.transactions?.map((date, ind) => {
                        return (
                          <tr key={ind}>
                            <td>{date.itemName}</td>
                            <td>{date.quantity}</td>
                            <td>{date.ratePerUnit}</td>
                            <td>{date.amount}</td>
                            <td>{date.remarks}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
