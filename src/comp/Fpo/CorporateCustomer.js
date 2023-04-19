import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAuction } from "../../actions/auction";
import useModal from "../../hooks/useModal";

import CompletedTransactions from "./Modals/CompletedTransactions";
import BidInformation from "./Modals/BidInformation";
import BidConfirm from "./Modals/BidConfirm";
import BidStatus from "./Modals/BidStatus";
import PlaceBid from "./Modals/PlaceBid";
import Loader from "../Common/Loader";

const labelArray = [
  "Bid Information",
  "Upload Test",
  "Invoice Upload",
  "Verify Payment",
];

const tabs = [
  {
    id: 1,
    title: "Invited Bids",
  },
  {
    id: 2,
    title: "Ongoing Bids",
  },
  {
    id: 3,
    title: "Completed Transactions",
  },
]

const theadStyle = {
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "600",
  borderBottom: "1px solid #c7ccd1",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

const btnStyle = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
  color: "#fff",
}

const btnStyle2 = {
  ...btnStyle,
  backgroundColor: "#064420",
}

const CorporateCustomer = () => {
  const { modal, updateModal, closeModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(1)
  const [canEdit, setCanEdit] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ["aution"],
    queryFn: getAuction
  })

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3 className="mb-4">Corporate Customer Information</h3>
      </div>
      <div className="list_container">
        <div className="copporate_List">
          <div className="tabs mt-5">
            {
              tabs.map(t => (
                <button
                  key={t.id}
                  className={`tab ${checkActive(t.id, "active")}`}
                  onClick={() => setActiveIndex(t.id)}
                >
                  {t.title}
                </button>
              ))
            }
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead style={theadStyle}>
                      <tr>
                        <th>Bid Id</th>
                        <th>Quantity</th>
                        <th>Date of Supply</th>
                        <th>End Date of Bidding</th>
                        <th>Information</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody style={tbodyStyle}>
                      {
                        data.data.map(item => (
                          <tr key={item.id}>
                            <td>{item.bidId}</td>
                            <td>{item.quantity}</td>
                            <td>{item.supplyDate}</td>
                            <td>{item.bidEndDate}</td>
                            <td>
                              <button
                                style={btnStyle}
                                onClick={() => updateModal("showStartBid", item)}
                              >
                                View
                              </button>
                            </td>
                            <td>
                              <button
                                style={btnStyle}
                                onClick={() => updateModal("showBid", item)}
                              >
                                Place a Bid
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead style={theadStyle}>
                      <tr>
                        <th>Bid Id</th>
                        <th>Bid Price</th>
                        <th>Quantity</th>
                        <th>Date of Supply</th>
                        <th>End Date of Bidding</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody style={tbodyStyle}>
                      {
                        data.data
                          .filter((item) => item.status === "on-going" && item.bids.some((bid) => bid.userId === localStorage.getItem("userId")))
                          .map(item => (
                            <tr key={item.id}>
                              <td>{item.bidId}</td>
                              <td>{item.bids.find((bid) => bid.userId === localStorage.getItem("userId")).bidAmount}</td>
                              <td>{item.quantity}</td>
                              <td>{item.supplyDate}</td>
                              <td>{item.bidEndDate}</td>
                              <td>
                                <button
                                  style={btnStyle2}
                                  onClick={() => {
                                    updateModal("showCustomer", item)
                                    setCanEdit(true)
                                  }}
                                >
                                  view
                                </button>
                              </td>
                            </tr>
                          ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={`panel ${checkActive(3, "active")}`}>
              <div className="card_table1">
                <div className="table-responsive">
                  <table>
                    <thead style={theadStyle}>
                      <tr>
                        <th>Bid Id</th>
                        <th>Date of Invoice</th>
                        <th>Invoice Number</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody style={tbodyStyle}>
                      {
                        data.data
                          .filter(bid => bid.status !== "on-going")
                          .map(bid => (
                            <tr key={bid.id}>
                              <td>{bid.bidId}</td>
                              <td>02-01-2021</td>
                              <td>12345</td>
                              <td>200</td>
                              <td>
                                <button
                                  style={btnStyle}
                                  onClick={() => {
                                    updateModal("showCustomer", bid)
                                    setCanEdit(false)
                                  }}
                                >
                                  view
                                </button>
                              </td>
                            </tr>
                          ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state === "showCustomer" &&
        <BidStatus
          show
          bid={modal.data}
          canEdit={canEdit}
          labelArray={labelArray}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showTranscation" &&
        <CompletedTransactions
          show
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showBid" &&
        <PlaceBid
          show
          bid={modal.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showConfirmBox" &&
        <BidConfirm
          show
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showStartBid" &&
        <BidInformation
          show
          bid={modal.data}
          handleClose={closeModal}
        />
      }
    </main>
  );
};

export default CorporateCustomer;
