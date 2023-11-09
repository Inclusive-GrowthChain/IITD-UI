import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { TranscationDetailsSale } from "../../Farmer/Modals/TranscationDetailsSale";
import Loader from "../../Common/Loader";
import { getSaleTransactions } from "../../../actions/farmer";
import React from "react";

function Panel4({
  theadStyle3,
  tbodyStyle,
  style3,
  handleShowAddSale,
  handleShowSaleDetails,
}) {
  const { modal, updateModal, closeModal } = useModal();
  const { farmerId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["Sale_Transactions"],
    queryFn: () => getSaleTransactions(farmerId),
  });

  const applyBtnStyle = {
    backgroundColor: "#064420",
    border: "none",
    borderRadius: "5px",
    width: "130px",
    color: "#fff",
    padding: "5px 8px",
  };

  const addSaleBtnStyle = {
    backgroundColor: "#064420",
    border: "none",
    borderRadius: "10px",
    padding: "10px 15px",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "12px",
    marginBottom: "15px",
  };

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <>
      <div>
        <button onClick={handleShowAddSale} style={addSaleBtnStyle}>
          Add Sale
        </button>
      </div>

      <div className="secondtab">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className=" table-responsive p-3">
                <table className="table table-striped">
                  <thead
                    style={{
                      // color: "green",
                      fontSize: "15px",
                      verticalAlign: "top",
                    }}
                  >
                    <tr>
                      <th>Sale Id</th>
                      <th>Date of Sale</th>
                      <th>Total Amount</th>
                      <th>Item Details</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      color: "#000",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {data?.map((d) => (
                      <tr key={d.uniqueId}>
                        <td>{d?.uniqueId}</td>
                        <td>{d?.dateOfSale}</td>
                        <td>{d?.totalAmount}</td>
                        <td>
                          <button
                            className="loan_button"
                            style={applyBtnStyle}
                            onClick={() =>
                              updateModal("View Details", { data: d })
                            }
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {modal.state === "View Details" && (
          <TranscationDetailsSale
            show
            data={modal.data}
            handleClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default Panel4;
