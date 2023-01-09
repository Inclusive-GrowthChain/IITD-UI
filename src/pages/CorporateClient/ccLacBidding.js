import { useState } from "react";
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import MultiStepProgressBar from "./ProgressBar/ProgressBar";
import TabNavItem from "../farmer/Tabs/TabNavItem";
import TabContent from "../farmer/Tabs/TabContent";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import PageOne from "./Progress Pages/PageOne";
import PageTwo from "./Progress Pages/PageTwo";
import PageThree from "./Progress Pages/PageThree";
import PageFour from "./Progress Pages/PageFour";
import PageFive from "./Progress Pages/PageFive";

const activeBidList = [
  {
    id: "B123456",
    startDate: "2021-10-10",
    endDate: "2023-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 1",
  },
  {
    id: "B767622",
    startDate: "2020-10-10",
    endDate: "2021-10-10",
    status: "Active",
    lacStrainType: "Rangeeni",
    treeSource: "Ber",
    origin: "Chattisgarh",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: false,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 2",
  },
  {
    id: "B989898",
    startDate: "2020-10-10",
    endDate: "2022-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Palash",
    origin: "MP",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: false,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 3",
  },
  {
    id: "B555555",
    startDate: "2020-10-10",
    endDate: "2021-10-10",
    status: "Active",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 4",
  },
  {
    id: "B987654",
    startDate: "2021-10-10",
    endDate: "2023-10-10",
    status: "Active",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: false,
      },
      {
        reportName: "Panna",
        reportReqd: true,
      },
    ],
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    remarks: "Remark 5",
  },
]

const purchaseHistory = [
  {
    fpoID: "FPO123456",
    bidID: "B111111",
    fpoName: "FPO 1",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "Jharkhand",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
  {
    fpoID: "FPO222222",
    bidID: "B222222",
    fpoName: "FPO 2",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "Chattisgarh",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 20000,
  },
  {
    fpoID: "FPO333333",
    bidID: "B333333",
    fpoName: "FPO 3",
    lacStrainType: "Kusmi",
    treeSource: "Palash",
    origin: "Jharkhand",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
  {
    fpoID: "FPO444444",
    bidID: "B444444",
    fpoName: "FPO 4",
    lacStrainType: "Kusmi",
    treeSource: "Ber",
    origin: "Mednapore",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 15000,
  },
  {
    fpoID: "FPO555555",
    bidID: "B555555",
    fpoName: "FPO 5",
    lacStrainType: "Rangeeni",
    treeSource: "Kusum",
    origin: "MP",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 20000,
  },
  {
    fpoID: "FPO666666",
    bidID: "B666666",
    fpoName: "FPO 6",
    lacStrainType: "Kusmi",
    treeSource: "Kusum",
    origin: "MP",
    seedlacContent: 100,
    freshResinContent: 100,
    quantity: 200,
    supplyDate: "2021-10-10",
    amount: 10000,
  },
]

const Corporate_Client_Lac_Bidding = () => {
  const [multiSelectReportName, setMultiSelectReportName] = useState([]);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [showBidStatus, setShowBidStatus] = useState(false);
  const [showStartBid, setShowStartBid] = useState(false);
  const [currentBid, setCurrentBid] = useState({});

  const handleShowStartBid = () => setShowStartBid(true);
  const handleCloseStartBid = () => setShowStartBid(false);
  const handleShowBidStatus = () => setShowBidStatus(true);

  const handleCloseBidStatus = () => {
    setShowBidStatus(false);
    setPage("pageone");
  };

  const onMultiSelectReportNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setMultiSelectReportName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const generateRandomBidID = () => {
    let bidValue = 'B' + (Math.floor(100000 + Math.random() * 900000));
    // eslint-disable-next-line eqeqeq
    if (activeBidList.find((bid) => bid.id == bidValue)) {
      generateRandomBidID();
    }
    return bidValue;
  };

  const [activeTab, setActiveTab] = useState("tab1");

  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const confirmBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  const placeBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(false);
    setShowStartBid(false);
  };

  // useEffect(() => {
  //   if(closeBidStatus) {
  //     setShowBidStatus(false);
  //     setPage("pageone");
  //   }
  // }, [closeBidStatus]);

  // const nextPageNumber = (pageNumber) => {
  //   switch (pageNumber) {
  //     case "1":
  //       setPage("pageone");
  //       break;
  //     case "2":
  //       setPage("pagetwo");
  //       break;
  //     case "3":
  //       setPage("pagethree");
  //       break;
  //     case "4":
  //       break;
  //     default:
  //       setPage("1");
  //   }
  // };

  return (
    <div className="corporateClient">
      <Sidebar />
      <div className="corporateClientContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "rgb(33, 37, 41)",
                  }}
                >
                  Corporate Client
                </h3>
              </div>
              <div
                className="list__btn"
                style={{
                  position: "relative",
                  float: "right",
                  right: "18px",
                  top: "10px",
                }}
              >
                <Button
                  className="crop-advisory_button"
                  style={{
                    backgroundColor: "#064420",
                    border: "none",
                    width: "fit-content",
                  }}
                  onClick={handleShowStartBid}
                >
                  Start Bid
                </Button>
              </div>
              <div>
                <Modal show={showStartBid} onHide={handleCloseStartBid}>
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
                                  onClick={(e) => confirmBid(e)}
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
              </div>
              <div>
                <Modal show={showConfirmBox} onHide={handleCloseConfirmBox}>
                  <Modal.Header closeButton>Confirm Order</Modal.Header>
                  <Modal.Body>
                    <p>
                      Are you sure you want to start this bid? Bid details cannot be editted once started.
                    </p>
                    <div className="col-lg-12" style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        className="btn btn-success"
                        style={{ backgroundColor: '#064420' }}
                        onClick={(e) => placeBid(e)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="tabs_wrapper">
                <ul className="nav-tab">
                  <TabNavItem
                    title="Active Bids"
                    className="mr-3"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Purchase History"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </ul>
                <div className="outlet">
                  <TabContent id="tab1" activeTab={activeTab}>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className=" table-responsive">
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
                                  <td>Bid ID</td>
                                  <td>Start Date</td>
                                  <td>End Date</td>
                                  <td>Status</td>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  color: "#000",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                {activeBidList.map((bid) => (
                                  <tr>
                                    <td>{bid.id}</td>
                                    <td>{bid.startDate}</td>
                                    <td>{bid.endDate}</td>
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
                                        onClick={() => {
                                          setCurrentBid(bid);
                                          handleShowBidStatus();
                                        }}
                                      >
                                        view
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Modal show={showBidStatus} onHide={handleCloseBidStatus} className="progressModal" size="lg">
                        <Modal.Header closeButton>Bid Status</Modal.Header>
                        <Modal.Body style={{ padding: '1.25rem' }}>
                          <MultiStepProgressBar page={page} />
                          {
                            {
                              pageone: <PageOne onButtonClick={nextPage} bid={currentBid} />,
                              pagetwo: <PageTwo onButtonClick={nextPage} />,
                              pagethree: <PageThree onButtonClick={nextPage} />,
                              pagefour: <PageFour onButtonClick={nextPage} />,
                              pagefive: <PageFive onButtonClick={nextPage} closeBidStatus={handleCloseBidStatus} />,
                            }[page]
                          }
                        </Modal.Body>
                      </Modal>
                    </div>
                  </TabContent>
                  <TabContent id="tab2" activeTab={activeTab}>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead
                                style={{
                                  color: "#064420",
                                  fontSize: "18px",
                                  verticalAlign: "top",
                                  textAlign: "center",
                                  fontWeight: 600
                                }}
                              >
                                <tr>
                                  <td>Bid ID</td>
                                  <td>FPO ID</td>
                                  <td>FPO Name</td>
                                  <td>Lac Strain Type</td>
                                  <td>Source of Tree</td>
                                  <td>Origin</td>
                                  <td>Seedlac Content</td>
                                  <td>Fresh Resin Content</td>
                                  <td>Quantity</td>
                                  <td>Amount</td>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  color: "#000",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  textAlign: "center",
                                }}
                              >
                                {
                                  purchaseHistory.map((purchase) => (
                                    <tr>
                                      <td>{purchase.bidID}</td>
                                      <td>{purchase.fpoID}</td>
                                      <td>{purchase.fpoName}</td>
                                      <td>{purchase.lacStrainType}</td>
                                      <td>{purchase.treeSource}</td>
                                      <td>{purchase.origin}</td>
                                      <td>{purchase.seedlacContent}</td>
                                      <td>{purchase.freshResinContent}</td>
                                      <td>{purchase.quantity}</td>
                                      <td>{purchase.amount}</td>
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate_Client_Lac_Bidding;
