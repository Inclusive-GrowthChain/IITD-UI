import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function PlaceBid({ showBid, handleCloseBid, bid }) {
  const [bidAmount, setBidAmount] = useState(0);

  const resetInputs = () => {
    setBidAmount(0);
  };

  const confirmBid = async () => {
    const newBid = {
      "fpoName": bid.fpoName,
      "fpoPhone": bid.fpoPhone,
      "bidAmount": bidAmount,
      "requiredTestReports": bid.requiredTestReports
    };

    await axios
      .post(`http://13.232.131.203:3000/api/auction/${bid.id}/bid`, newBid)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  return (
    <Modal
      show={showBid}
      onHide={handleCloseBid}
    >
      <Modal.Header closeButton>
        Place a Bid
      </Modal.Header>
      <Modal.Body>
        <div className="bid_title">
          <div className="row">
            <div className="col-6">
              <label>Enter the Price/kg</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the price"
                onChange={(e) => {
                  setBidAmount(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="row m-1">
              <button
                className="mt-4"
                style={{
                  backgroundColor: "#064420",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "none",
                  padding: "0.25rem 1rem",
                  color: "#fff",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  confirmBid();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PlaceBid