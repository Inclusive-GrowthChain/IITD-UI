import { useState } from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import Modal from "react-bootstrap/Modal";

function SaleHistory({ showAddSale, handleCloseAddSale, handleShowAddSale, handleShowConfirmSale }) {
  const [noOfSaleRows, setNoOfSaleRows] = useState(1)

  return (
    <Modal
      size="xl"
      show={showAddSale}
      onHide={handleCloseAddSale}
    >
      <Modal.Header closeButton>Sale History</Modal.Header>
      <Modal.Body>
        <div className="card_table1 table-responsive">
          <table>
            <thead
              style={{
                color: "green",
                fontSize: "17px",
                verticalAlign: "top",
                fontWeight: "bold",
                borderBottom: "1px solid #c7ccd1",
              }}
            >
              <tr>
                <th>Sale Id</th>
                <th>Date of Sale</th>
                <th>Type of Lac</th>
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
              }}
            >
              {[...Array(noOfSaleRows)].map(
                (elementInArray, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          placeholder="SAM107254367"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="17-02-22"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <select
                          style={{ width: "70%" }}
                          className="select form-control-sm"
                          required
                          name="Less than 25 lakhs"
                          data-mdb-filter="true"
                          data-mdb-validation="true"
                          data-mdb-valid-feedback=" "
                          data-mdb-container=".modal"
                          data-mdb-invalid-feedback=" "
                          data-mdb-option-height="50"
                        >
                          <option value="select">Select</option>
                          <option value="">Stick Lac</option>
                          <option value="">Shellac Lac</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="2 kg"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="3"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="520"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Remarks"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <HighlightOffTwoToneIcon
                          onClick={() =>
                            setNoOfSaleRows(noOfSaleRows - 1)
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </td>
                    </tr>
                  )
                }
              )}
            </tbody>
          </table>
        </div>
        <div className="purchase-add-button mt-4">
          <button
            onClick={() => {
              handleShowAddSale()
              setNoOfSaleRows(noOfSaleRows + 1)
            }}
            style={{
              backgroundColor: "#064420",
              border: "none",
              borderRadius: "10px",
              padding: "10px 15px",
              color: "#fff",
              fontSize: "12px",
              marginBottom: "15px",
            }}
          >
            Add Details
          </button>
          <div
            style={{
              display: "flex",
              position: "relative",
              float: "right",
            }}
          >
            <label>Total Sum :</label>
            <input
              type="text"
              style={{
                width: "130px",
                padding: "0 10px",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            float: "right",
            right: "30px",
            top: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#064420",
              border: "none",
              borderRadius: "10px",
              padding: "10px 15px",
              color: "#fff",
              fontSize: "15px",
              marginBottom: "15px",
            }}
            onClick={handleShowConfirmSale}
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SaleHistory