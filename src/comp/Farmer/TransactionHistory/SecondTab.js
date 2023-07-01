import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../store/useAuthStore";
import { getSaleTransactions } from "../../../actions/farmer";
import useModal from "../../../hooks/useModal";
import { TranscationDetailsSale } from "../Modals/TranscationDetailsSale";
import Loader from "../../Common/Loader";

const SecondTab = () => {
  const { modal, updateModal, closeModal } = useModal();
  const { _id } = useAuthStore((s) => s.userDetails);
  const { isLoading, data } = useQuery({
    queryKey: ["Sale_Transactions"],
    queryFn: () => getSaleTransactions(_id),
  });

  const applyBtnStyle = {
    backgroundColor: "#064420",
    border: "none",
    borderRadius: "5px",
    width: "130px",
    color: "#fff",
    padding: "5px 8px",
  };

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
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
                  {data?.map((d, ind) => (
                    <tr key={ind}>
                      <td>{d.uniqueId}</td>
                      {d.transactions?.map((date,ind) => {
                        return (
                          <React.Fragment key={ind}>
                            <td>{date.dateOfSale}</td> 
                            <td>{date.total}</td>
                          </React.Fragment>
                        );
                      })}
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
  );
};

export default SecondTab;
