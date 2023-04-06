import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ConfirmOrder({ showConfirmBox, placeBid, handleCloseConfirmBox, bidId, lacStrainType, sourceOfTree, origin, seedlacContent, freshResinContent, quantity, dateOfSupply, endDateForBidding, multiSelectReportName, remarks, resetInputs }) {
  
  const startBid = async () => {
    if(bidId=="" || lacStrainType=="" || sourceOfTree=="" || origin=="" || seedlacContent=="" || freshResinContent=="" || quantity==0 || dateOfSupply=="" || endDateForBidding=="" || remarks=="" || multiSelectReportName.length==0) {
      alert("Please fill all details and try again");
      return;
    }

    const newBid = {
      "bidId": bidId,
      "lacStrainType": lacStrainType,
      "sourceTree": sourceOfTree,
      "origin": origin,
      "seedLacContent": seedlacContent,
      "freshResinContent": freshResinContent,
      "quantity": quantity,
      "supplyDate": dateOfSupply,
      "bidEndDate": endDateForBidding,
      "reportsRequired": multiSelectReportName,
      "remarks": remarks,
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/auction", newBid)
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
      show={showConfirmBox}
      onHide={handleCloseConfirmBox}
    >
      <Modal.Header closeButton>Confirm Order</Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to start this bid? Bid details cannot be editted once started.
        </p>
        <div className="col-lg-12" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="btn btn-success"
            style={{ backgroundColor: '#064420' }}
            onClick={(e) => {
              e.preventDefault();
              startBid();
              placeBid();
            }}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmOrder