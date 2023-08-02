import Modal from "react-bootstrap/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeBidForAuction } from "../../../../actions/fpo";
import { useState} from "react";
import Loader from "../../../Common/Loader";
import { useAuthStore } from "../../../../store/useAuthStore";

function PlaceBid({ show, handleClose, bid }) {
  const queryClient = useQueryClient()
  const [data, setData] = useState({
    fpoId: useAuthStore(s => s.userDetails._id),
    fpoName: useAuthStore(s => s.userDetails.fpoName),
    fpoPhone: useAuthStore(s => s.userDetails.contactNumber),
    auctionId: bid.id
  })

  // const { isLoading, data: fpoData } = useQuery({
  //   queryKey: ["userList/fpo"],
  //   queryFn: getFpoList,
  // })

  const { mutate, isLoading } = useMutation({
    mutationFn: placeBidForAuction,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
      handleClose()
    }
  })

  const handlePlaceBid = (e) => {
    e.preventDefault();
    mutate({data})
  }

    if (isLoading) return <Loader wrapperCls="loader-main-right" />

    return (
      <Modal
        show={show}
        onHide={handleClose}
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
                  onChange={(e) => setData({ ...data, bidAmount: e.target.value })}
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
                  onClick={handlePlaceBid}
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