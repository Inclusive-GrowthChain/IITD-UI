import React, { useEffect, useState } from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addSale, getLacTypes } from "../../../../actions/fpo";
import Loader from "../../../Common/Loader";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

function SaleHistory({
  showAddSale,
  handleCloseAddSale,
  handleShowAddSale,
  handleShowConfirmSale,
}) {
  const [noOfSaleRows, setNoOfSaleRows] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["Lac_Type"],
    queryFn: getLacTypes,
  });

  const { register, handleSubmit, reset, formState } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        dateOfSale: "",
        itemName: "",
        quantity: "",
        ratePerUnit: "",
        amount: "",
        remarks: "",
        total: "",
      });
    }
  }, [formState, reset]);

  const { farmerId } = useParams();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data) => addSale(data, farmerId),
    onSuccess: () => {
      queryClient.invalidateQueries("/fpo/transaction/api/transaction");
    },
  });

  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {data?.productNames?.map((lac, ind) => {
          return (
            <option className="text-capitalize" key={ind} value={lac}>
              {lac}
            </option>
          );
        })}
      </select>
    </>
  ));

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <Modal size="xl" show={showAddSale} onHide={handleCloseAddSale}>
      <Modal.Header closeButton>Sale History</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>
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
                {[...Array(noOfSaleRows)].map((elementInArray, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          required
                          {...register("dateOfSale", { required: true })}
                          type="date"
                          placeholder="17-02-22"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <Select {...register("itemName",{required:true})} />
                      </td>
                      <td>
                        <input
                          required
                          {...register("quantity",{required:true})}
                          type="text"
                          placeholder="2 kg"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          required
                          {...register("ratePerUnit",{required:true})}
                          type="text"
                          placeholder="3"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                        required
                          {...register("amount",{required:true})}
                          type="text"
                          placeholder="520"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                        required
                          {...register("remarks",{required:true})}
                          type="text"
                          placeholder="Remarks"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <HighlightOffTwoToneIcon
                          onClick={() => setNoOfSaleRows(noOfSaleRows - 1)}
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="purchase-add-button mt-4">
            <button
              onClick={() => {
                handleShowAddSale();
                setNoOfSaleRows(noOfSaleRows + 1);
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
                required
                {...register("total",{required:true})}
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
            >
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SaleHistory;
