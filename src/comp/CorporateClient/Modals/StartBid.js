import { useState } from 'react';
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import Modal from "react-bootstrap/Modal";

function StartBid({ showStartBid, confirmBid, handleCloseStartBid, generateRandomBidID }) {
  const [multiSelectReportName, setMultiSelectReportName] = useState([])

  const onMultiSelectReportNameChange = (event) => {
    const {
      target: { value },
    } = event
    setMultiSelectReportName(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <Modal
      show={showStartBid}
      onHide={handleCloseStartBid}
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
                        value={generateRandomBidID()}
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
                      // value={category}
                      // onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="0">Select Type</option>
                        <option value="1">Kusmi</option>
                        <option value="2">Rangeeni</option>
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
                      >
                        <option value="0">Select Origin</option>
                        <option value="1">Jharkhand</option>
                        <option value="2">Chattisgarh</option>
                        <option value="3">MP</option>
                        <option value="4">Mednapore</option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Seedlac Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fresh Resin Content</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Quantity</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Date of Supply</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>End Date for Bidding</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" />
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
                        <MenuItem value="0">Chowri</MenuItem>
                        <MenuItem value="1">Panna</MenuItem>
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
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                      onClick={confirmBid}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default StartBid