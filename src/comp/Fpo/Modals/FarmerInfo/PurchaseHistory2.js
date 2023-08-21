import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPurchase, getItemNames } from "../../../../actions/fpo";
import Loader from "../../../Common/Loader";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

function PurchaseHistory2({
  showAddPurchase,
  handleShowAddPurchase,
  handleCloseAddPurchase,
  handleShowConfirmPurchase,
}) {
  const [noOfPurchaseRows, setNoOfPurchaseRows] = useState(1);

  const { register, handleSubmit, reset, formState } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        dateOfPurchase: "",
        itemName: "",
        quantity: "",
        ratePerUnit: "",
        amount: "",
        remarks: "",
        total: "",
      });
    }
  }, [formState, reset]);

  const { isLoading, data } = useQuery({
    queryKey: ["Item_Names"],
    queryFn: getItemNames,
  });

  // let farmerId = "6490029892c97411634f3354";
  // console.log(farmerId);
  const { farmerId } = useParams();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => addPurchase(data, farmerId),
    onSuccess: () => {
      queryClient.invalidateQueries("/fpo/transaction/api/transaction");
    },
  });

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {data?.productNames?.map((item, ind) => {
          return (
            <option className="text-capitalize" value={item} key={ind}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  ));

  return (
    <Modal size="xl" show={showAddPurchase} onHide={handleCloseAddPurchase}>
      <Modal.Header closeButton>Purchase History</Modal.Header>
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
                  <th>Date of Purchase</th>
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
                {[...Array(noOfPurchaseRows)].map((elementInArray, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          {...register("dateOfPurchase",{required: true})}
                          required
                          type="date"
                          placeholder={new Date()}
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <Select {...register("itemName",{required: true})} />
                      </td>
                      <td>
                        <input
                          {...register("quantity",{required: true})}
                          required
                          type="text"
                          placeholder="2 kg"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          required
                          {...register("ratePerUnit",{required: true})}
                          type="text"
                          placeholder="3"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          required
                          {...register("amount",{required: true})}
                          type="text"
                          placeholder="520"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <input
                          required
                          {...register("remarks",{required: true})}
                          type="text"
                          placeholder="Remarks"
                          style={{ width: "130px" }}
                        />
                      </td>
                      <td>
                        <HighlightOffTwoToneIcon
                          onClick={() =>
                            setNoOfPurchaseRows(noOfPurchaseRows - 1)
                          }
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
                handleShowAddPurchase();
                setNoOfPurchaseRows(noOfPurchaseRows + 1);
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
                {...register("total",{required: true})}
                required
                type="text"
                placeholder=""
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

export default PurchaseHistory2;
