import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { MenuItem, Select } from "@mui/material";
import { Modal } from "react-bootstrap";

import { startAuction } from '../../../actions/auction';
import useModal from '../../../hooks/useModal';

import Input, { errStyle } from '../../Nisa/Modals/Input';
import ConfirmOrder from './ConfirmOrder';
import { nanoid } from "nanoid";
import { getLacTest } from "../../../actions/nisa";

const textAreaStyle = { resize: "none", height: "150px" }

const list = [
  {
    label: "Bid ID",
    name: "bidId",
    disabled: true
  },
  {
    label: "Lac Strain Type",
    name: "lacStrainType",
    isSelect: true,
    inputWrapperCls: "col-lg-12",
    options: [
      "Kusmi",
      "Rangeeni",
    ],
  },
  {
    label: "Source of Tree",
    name: "sourceTree",
    isSelect: true,
    inputWrapperCls: "col-lg-12",
    options: [
      { label: "Kusum", val: "1" },
      { label: "Ber", val: "2" },
      { label: "Palash", val: "3" },
      { label: "Other", val: "4" },
    ],
  },
  {
    label: "Origin",
    name: "origin",
    isSelect: true,
    inputWrapperCls: "col-lg-12",
    options: [
      "Jharkhand",
      "Chattisgarh",
      "MP",
      "Mednapore",
    ],
  },
  {
    label: "Seedlac Content",
    name: "seedLacContent",
  },
  {
    label: "Fresh Resin Content",
    name: "freshResinContent",
  },
  {
    label: "Quantity",
    name: "quantity",
    type: "number",
  },
  {
    label: "Date of Supply",
    name: "supplyDate",
    type: "date",
  },
  {
    label: "End Date for Bidding",
    name: "bidEndDate",
    type: "date",
  },
]

function StartBid({ show, handleClose }) {
  const { modal, updateModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['nisa/lactest'],
    queryFn: getLacTest
  })



  console.log(data)
  const {
    register, control, formState: { errors },
    handleSubmit, getValues,
  } = useForm({
    defaultValues: {
      bidId: nanoid(10),
      lacStrainType: "",
      sourceTree: "",
      origin: "",
      seedLacContent: "",
      freshResinContent: "",
      quantity: "",
      supplyDate: "",
      bidEndDate: "",
      reportsRequired: [],
      remarks: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: startAuction,
    onSuccess: () => {
      queryClient.invalidateQueries("corporateClient/lac-bidding")
      handleClose()
    }
  })

  const showConfirm = () => updateModal("showConfirmBox")
  const onConfirm = () => {
    closeModal()
    mutate(getValues())
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Start Bid</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(showConfirm)}>
              <div className="form">
                <div className="card p-2">
                  {
                    list.map(l => (
                      <Input
                        key={l.name}
                        {...l}
                        register={register}
                        errors={errors}
                      />
                    ))
                  }

                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Required Test Reports</label>
                    </div>
                    <div className="col-lg-12">
                      <Controller
                        name="reportsRequired"
                        control={control}
                        rules={{ required: "Test Reports is required" }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            multiple
                            id="demo-multiple-name"
                            name="reportsRequired"
                            labelId="demo-multiple-name-label"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          >
                            {
                              data && data?.data?.map((test, ind) => {
                                return <MenuItem key={ind} value={test?.testName}>{test?.testName
                                }</MenuItem>
                              })
                            }
                            <MenuItem value="Chowri">Chowri</MenuItem>
                            <MenuItem value="Panna">Panna</MenuItem>
                          </Select>
                        )}
                      />

                      {
                        errors.reportsRequired &&
                        <p className="text-danger" style={errStyle}>
                          {errors.reportsRequired.message}
                        </p>
                      }
                    </div>
                  </div>

                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        style={textAreaStyle}
                        {...register("remarks", {
                          required: "Remark is required"
                        })}
                      />

                      {
                        errors.remarks &&
                        <p className="text-danger" style={errStyle}>
                          {errors.remarks.message}
                        </p>
                      }
                    </div>
                  </div>

                  <div className="row m-2">
                    <button
                      type='submit'
                      className="btn btn-success"
                      style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                      disabled={isLoading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {
          modal.state === "showConfirmBox" &&
          <ConfirmOrder
            show
            onConfirm={onConfirm}
            handleClose={closeModal}
          />
        }
      </Modal.Body>
    </Modal>
  )
}

export default StartBid