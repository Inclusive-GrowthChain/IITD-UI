import { useState } from 'react';
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import ConfirmOrder from './ConfirmOrder';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addCropAdvisory, editCropAdvisory } from '../../../actions/nisa';

const errStyle = { fontSize: "12px", margin: 0 }
const textAreaStyle = { resize: "none", height: "150px" }

function StartBid({ data, show, handleClose }) {
  const queryClient = useQueryClient()
  const { bid, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      multiSelectReportName: [],
      bidId: "B1234",
      lacStrainType: "",
      sourceOfTree: "",
      origin: "",
      seedlacContent: "",
      freshResinContent: "",
      quantity: 0,
      dateOfSupply: "",
      endDateForBidding: "",
      remarks: "",
    }
  })

  const [multiSelectReportName, setMultiSelectReportName] = useState([])
  const [bidId, setBidId] = useState("B1234")
  const [lacStrainType, setLacStrainType] = useState("")
  const [sourceOfTree, setSourceOfTree] = useState("")
  const [origin, setOrigin] = useState("")
  const [seedlacContent, setSeedlacContent] = useState("")
  const [freshResinContent, setFreshResinContent] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [dateOfSupply, setDateOfSupply] = useState("")
  const [endDateForBidding, setEndDateForBidding] = useState("")
  const [remarks, setRemarks] = useState("")
  const [showConfirmBox, setShowConfirmBox] = useState(false)

  const onChangeBidId = (e) => {
    setBidId(e.target.value)
  }

  const onChangeLacStrainType = (e) => {
    setLacStrainType(e.target.value)
  }

  const onChangeSourceOfTree = (e) => {
    setSourceOfTree(e.target.value)
  }

  const onChangeOrigin = (e) => {
    setOrigin(e.target.value)
  }

  const onChangeSeedlacContent = (e) => {
    setSeedlacContent(e.target.value)
  }

  const onChangeFreshResinContent = (e) => {
    setFreshResinContent(e.target.value)
  }

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const onChangeDateOfSupply = (e) => {
    setDateOfSupply(e.target.value)
  }

  const onChangeEndDateForBidding = (e) => {
    setEndDateForBidding(e.target.value)
  }

  const onChangeRemarks = (e) => {
    setRemarks(e.target.value)
  }

  const onMultiSelectReportNameChange = (event) => {
    const {
      target: { value },
    } = event
    setMultiSelectReportName(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const resetInputs = () => {
    setBidId("")
    setLacStrainType("")
    setSourceOfTree("")
    setOrigin("")
    setSeedlacContent("")
    setFreshResinContent("")
    setQuantity(0)
    setDateOfSupply("")
    setEndDateForBidding("")
    setRemarks("")
    setMultiSelectReportName([])
  }

  const confirmBid = (e) => {
    e.preventDefault()
    setShowConfirmBox(true)
  }

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false)
  }

  const placeBid = () => {
    setShowConfirmBox(false)
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
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Bid ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={bidId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Lac Strain Type</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        onChange={onChangeLacStrainType}
                      >
                        <option value="0">Select Type</option>
                        <option value="Kusmi">Kusmi</option>
                        <option value="Rangeeni">Rangeeni</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Source of Tree</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        onChange={onChangeSourceOfTree}
                      >
                        <option value="0">Select Tree</option>
                        <option value="1">Kusum</option>
                        <option value="2">Ber</option>
                        <option value="3">Palash</option>
                        <option value="4">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Origin</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        onChange={onChangeOrigin}
                      >
                        <option value="0">Select Origin</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Chattisgarh">Chattisgarh</option>
                        <option value="MP">MP</option>
                        <option value="Mednapore">Mednapore</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Seedlac Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" onChange={onChangeSeedlacContent} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fresh Resin Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" onChange={onChangeFreshResinContent} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Quantity</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" onChange={onChangeQuantity} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Supply</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" onChange={onChangeDateOfSupply} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>End Date for Bidding</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" onChange={onChangeEndDateForBidding} />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Required Test Reports</label>
                    </div>
                    <div className="col-lg-12">
                      <Select
                        className="form-control"
                        name="category"
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={multiSelectReportName}
                        onChange={onMultiSelectReportNameChange}
                      >
                        <MenuItem value="Chowri">Chowri</MenuItem>
                        <MenuItem value="Panna">Panna</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control"
                        style={{ height: "200%" }}
                        onChange={onChangeRemarks}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                      onClick={(e) => {
                        e.preventDefault();
                        confirmBid(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ConfirmOrder
          placeBid={placeBid}
          showConfirmBox={showConfirmBox}
          handleCloseConfirmBox={handleCloseConfirmBox}
          bidId={bidId}
          lacStrainType={lacStrainType}
          sourceOfTree={sourceOfTree}
          origin={origin}
          seedlacContent={seedlacContent}
          freshResinContent={freshResinContent}
          quantity={quantity}
          dateOfSupply={dateOfSupply}
          endDateForBidding={endDateForBidding}
          multiSelectReportName={multiSelectReportName}
          remarks={remarks}
        />
      </Modal.Body>
    </Modal>
  )
}

export default StartBid