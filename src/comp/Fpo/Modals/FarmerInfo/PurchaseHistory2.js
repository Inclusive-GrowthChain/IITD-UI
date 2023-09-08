import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPurchase, getLacTypes } from "../../../../actions/fpo";
import Loader from "../../../Common/Loader";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { errorNotify } from "../../../../utils/toastifyHlp";

function PurchaseHistory2({ showAddPurchase, handleShowAddPurchase, handleCloseAddPurchase, handleShowConfirmPurchase,
}) {
  const queryClient = useQueryClient();
  const { farmerId } = useParams();
  const { register, watch, reset, handleSubmit } = useForm()
  const [totalItems, setTotalItems] = useState([])
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const amount = watch("ratePerUnit") * watch("quantity") || 0

  const onsubmit = (data) => {
    setTotalItems([...totalItems, { ...data, amount },])
    reset()
  }

  const totalAmount = totalItems.reduce((total, item) => total + parseFloat(item.amount), 0)

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      if (data.length > 0) {
        setSubmitting(true);
        await addPurchase(data, farmerId, totalAmount);
        setSubmitSuccess(true);
      } else {
        errorNotify("Please fill the required Data.");
        setSubmitting(false)
        throw new Error("Required data not filled");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/fpo/transaction/api/transaction");
      setSubmitting(true);
      handleCloseAddPurchase()
    },
  });

  const { isLoading, data } = useQuery({
    queryKey: ["Item_Names"],
    queryFn: getLacTypes,
  });


  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <select id="inputState" className="form-select" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {data?.productNames?.map((item, ind) => {
          <option className="text-capitalize">Select the Item</option>
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
        <div className="p-2 bg-light border card_table1">
          <form onSubmit={handleSubmit(onsubmit)} className="row g-3">
            <div className="col-md-4">
              <label htmlFor="inputItemName" className="form-label">
                Item Name
              </label>
              <Select {...register("itemName", { required: true })} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputQuantity" className="form-label">
                Quantity
              </label>
              <input type="number" {...register("quantity", { required: true })} className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPassword4" className="form-label">
                Rate/Uint
              </label>
              <input type="number" {...register("ratePerUnit", { required: true })} className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAmount" className="form-label">
                Amount
              </label>
              <input type="number" value={amount} disabled className="form-control" id="inputZip" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputRemarks" className="form-label">
                Remarks
              </label>
              <input type="text" {...register("remarks")} className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <button style={{
                backgroundColor: "#064420",
                border: "none",
                borderRadius: "10px",
                padding: "10px 15px",
                color: "#fff",
                fontSize: "15px",
                marginBottom: "15px",
              }} type="submit">
                Add Purchased Items
              </button>
            </div>
          </form>

        </div>

        <div className="card_table1 table-responsive">
          <table className="table-striped">
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
              }}
            >
              {
                totalItems.length > 0 && totalItems?.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item?.itemName}
                      </td>
                      <td>
                        {item?.quantity}
                      </td>
                      <td>
                        {item?.ratePerUnit}
                      </td>
                      <td>
                        {item?.amount}
                      </td>
                      <td>
                        {item?.remarks}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center px-2 py-3 border-top-1">
            <div className="d-flex">
              <label>Total Sum :</label>
              <input
                value={totalAmount}
                type="number"
                disabled
                placeholder=""
                className="px-2"
              />
            </div>
            <div>
              <button
                onClick={async () => {
                  if (!submitting) {
                    setSubmitting(true);
                    await mutate(totalItems);
                  }
                }}
                disabled={submitting || submitSuccess}
                style={{
                  backgroundColor: "#064420",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  color: "#fff",
                  fontSize: "15px",
                }}
                type="button"
              >
                {submitting ? "Submitting..." : submitSuccess ? "Submitted" : "Submit"}
              </button>
            </div>
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default PurchaseHistory2;
