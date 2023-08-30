import { useQuery } from "@tanstack/react-query";
import { getPurchaseTransactions } from "../../../actions/farmer";
import { useParams } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { TranscationDetailsPurchase } from "../../Farmer/Modals/TransacationDetailsPurchase";
import Loader from "../../Common/Loader";
import React from "react";

function Panel3({ handleShowAddPurchase }) {
  const { modal, updateModal, closeModal } = useModal();
  const { farmerId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["Purchase_Transactions"],
    queryFn: () => getPurchaseTransactions(farmerId),
  });

  const applyBtnStyle = {
    backgroundColor: "#064420",
    border: "none",
    borderRadius: "5px",
    width: "130px",
    color: "#fff",
    padding: "5px 8px",
  };

  const addPurchaseBtnStyle = {
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
        <button onClick={handleShowAddPurchase} style={addPurchaseBtnStyle}>
          Add Purchase
        </button>
      </div>

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
                      <th>Purchase Id</th>
                      <th>Date of purchase</th>
                      <th>Total Amount</th>
                      <th>Item Details</th>
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
                    {data?.map((d, ind) => (
                      <tr key={ind}>
                        <td>{d.uniqueId}</td>
                        <td>{d?.dateOfPurchase}</td>
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
          <TranscationDetailsPurchase
            show
            data={modal.data}
            handleClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default Panel3;
