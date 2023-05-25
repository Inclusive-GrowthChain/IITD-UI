import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { requestTestReports } from "../../../../actions/auction";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageTwo = ({ onButtonClick, outerbid = [] }) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [currentFPO, setCurrentFPO] = useState({})
  const [data, setData] = useState({})

  const queryClient = useQueryClient()
  // const { register, formState: { errors }, handleSubmit, reset } = useForm({})

  const { mutate, isLoading } = useMutation({
    mutationFn: requestTestReports,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
    }
  })

  const confirmOrder = (e) => {
    e.preventDefault()
    setShowConfirmBox(true)
  }

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false)
  }

  const placeOrder = (e) => {
    e.preventDefault()
    currentFPO.orderPlaced = true
    setShowConfirmBox(false)
  }

  const checkOrderPlaced = () => {
    outerbid.bids.forEach((bid) => {
      if (bid.status) {
        setOrderPlaced(true)
      }
    })
  }

  useEffect(() => {
    checkOrderPlaced()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerbid])

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        <div>
          <h5
            className="mt-5"
            style={{
              padding: "10px 18px",
              color: "rgb(33, 143, 44)",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Place Order
          </h5>
        </div>
        <div className="form" style={{ marginTop: '3%' }}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "4rem",
          }}>
            <button
              onClick={() => onButtonClick("pageone")}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>

          <div style={{
            position: "relative",
            float: "right",
            right: "-0.781rem",
            top: "4rem",
          }}>
            <button
              onClick={() => onButtonClick("pagethree")}
              style={{ backgroundColor: 'white' }}
              disabled={!orderPlaced}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>

          <div className="table-responsive" style={{ minHeight: "20rem" }}>
            <table className="table table-borderless">
              <thead
                style={{
                  color: "#064420",
                  fontSize: "18px",
                  verticalAlign: "top",
                  fontWeight: 600
                }}
              >
                <tr>
                  <td>FPO ID</td>
                  <td>FPO Name</td>
                  <td>Phone Number</td>
                  <td>Bid Amount</td>
                  <td>Place Order</td>
                </tr>
              </thead>
              <tbody
                style={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {outerbid.bids.map((bid) => (
                  <tr>
                    <td>{bid.fpoId}</td>
                    <td>{bid.fpoName}</td>
                    <td>{bid.fpoPhone}</td>
                    <td>{bid.bidAmount}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
                        onClick={(e) => {
                          // convert new Date() to yyyy-mm-dd format
                          let today = new Date()
                          let dd = today.getDate()
                          let mm = today.getMonth() + 1
                          let yyyy = today.getFullYear()
                          if (dd < 10) {
                            dd = '0' + dd
                          }
                          if (mm < 10) {
                            mm = '0' + mm
                          }
                          today = yyyy + '-' + mm + '-' + dd
                          // if(outerbid.bidEndDate > today) {
                          //   alert("Order cannot be placed before the end of bidding period")
                          //   e.preventDefault();
                          //   return
                          // }
                          let tempData = {}
                          tempData.auctionId = outerbid.id
                          tempData.bidId = bid.id
                          setData(tempData)
                          setCurrentFPO(bid)
                          confirmOrder(e)
                        }}
                        disabled={orderPlaced}
                        className="btn btn-success"
                      >
                        Place Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Modal show={showConfirmBox} onHide={handleCloseConfirmBox}>
            <Modal.Header closeButton>Confirm Order</Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to place order with FPO {currentFPO.fpoName} for {currentFPO.bidAmount} rupees?
              </p>
              <div className="col-lg-12" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: '#064420' }}
                  onClick={(e) => {
                    e.preventDefault()
                    mutate({data})
                    handleCloseConfirmBox()
                  }}
                >
                  Confirm
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </form>
    </main>
  )
}

export default PageTwo;
