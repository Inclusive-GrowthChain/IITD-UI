import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";

import logo from "../../assets/img/logo.png";

const testList = [
  {
    id: 1,
    loanId: "LD 1234",
    category: "Shellac / Seedlac",
    test: "Hot Alcohol Insoluble",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 2,
    category: "Bleached Lac",
    test: "Hot Alcohol Insoluble",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 3,
    category: "Lac Dye",
    test: "Presence of Azo Group",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 4,
    category: "Shellac Wax",
    test: "Percentage of Loading",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 5,
    category: "Shellac / Seedlac",
    test: "Hot Alcohol Insoluble",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 6,
    category: "Lac Dye",
    test: "Presence of Azo Group",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
  {
    id: 7,
    category: "Shellac Wax",
    test: "Percentage of Loading",
    minQuantity: "100",
    fee: "1000",
    reportingPeriod: "2",
  },
];

const tempAppList = [
  {
    id: 1,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 1,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Shellac / Seedlac",
    test: "Hot Alcohol Insoluble",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 2,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 2,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Bleached Lac",
    test: "Hot Alcohol Insoluble",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 3,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 3,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Lac Dye",
    test: "Presence of Azo Group",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 4,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 4,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Shellac Wax",
    test: "Percentage of Loading",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 5,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 5,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Shellac / Seedlac",
    test: "Hot Alcohol Insoluble",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 6,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 6,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Lac Dye",
    test: "Presence of Azo Group",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
  {
    id: 7,
    fpoName: "FPO",
    fpoContact: "1234567890",
    sampleID: 7,
    refNo: "123456",
    dateOfApp: "2021-10-10",
    testCategory: "Shellac Wax",
    test: "Percentage of Loading",
    amount: "200",
    remarks: "Remarks",
    paymentRefNo: "123456",
  },
];

const IINRG_Lab_Testing = () => {
  const [showNewTest, setShowNewTest] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [currentApp, setCurrentApp] = useState({});
  const [showFirstAppForm, setShowFirstAppForm] = useState(true);
  const [showPaymentImg, setShowPaymentImg] = useState(false);
  const [showLacSampleImg, setShowLacSampleImg] = useState(false);
  const [showCertificateImg, setShowCertificateImg] = useState(false);
  const [appList, setAppList] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    sortApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewTestClose = () => setShowNewTest(false);
  const handleNewTestShow = () => setShowNewTest(true);
  const handleCloseApp = () => setShowApp(false);
  const handleShowPaymentImg = () => setShowPaymentImg(true);
  const handleClosePaymentImg = () => setShowPaymentImg(false);
  const handleShowLacSampleImg = () => setShowLacSampleImg(true);
  const handleCloseLacSampleImg = () => setShowLacSampleImg(false);
  const handleShowCertificateImg = () => setShowCertificateImg(true);
  const handleCloseCertificateImg = () => setShowCertificateImg(false);
  const handleShowApp = () => {
    setShowApp(true);
    setShowFirstAppForm(true);
  };

  const sortApp = () => {
    const sortedApp = tempAppList.sort((a, b) => {
      return a.testCategory > b.testCategory ? 1 : -1;
    });
    setAppList(sortedApp);
  };

  return (
    <div className="iinrg">
      <Sidebar />
      <div className="iinrgContainer">
        <Navbar />
        <div className="item_Container">
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
                  Lab Testing
                </h3>
              </div>
              <div className="tabs_wrapper">
                <ul className="nav-tab">
                  <TabNavItem
                    title="Applications in Process"
                    className="mr-3"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Completed Applications"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Tests Price List"
                    id="tab3"
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
                                  fontWeight: 600,
                                }}
                              >
                                <tr>
                                  <td>Sample ID</td>
                                  <td>Date of Application</td>
                                  <td>Test Category</td>
                                  <td>Test</td>
                                  <td>Amount</td>
                                  <td>Payment Image</td>
                                  <td>Lac Sample Image</td>
                                  <td>Remarks</td>
                                  <td>Application</td>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  color: "#000",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  // textAlign: "center",
                                }}
                              >
                                {appList.map((app) => (
                                  <tr>
                                    <td>{app.sampleID}</td>
                                    <td>{app.dateOfApp}</td>
                                    <td>{app.testCategory}</td>
                                    <td>{app.test}</td>
                                    <td>{app.amount}</td>
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
                                        onClick={handleShowPaymentImg}
                                      >
                                        view
                                      </button>
                                    </td>
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
                                        onClick={handleShowLacSampleImg}
                                      >
                                        view
                                      </button>
                                    </td>
                                    <td>{app.remarks}</td>
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
                                          setCurrentApp(app);
                                          handleShowApp();
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
                                  fontWeight: 600,
                                }}
                              >
                                <tr>
                                  <td>Sample ID</td>
                                  <td>Ref no</td>
                                  <td>Date of Application</td>
                                  <td>Test Category</td>
                                  <td>Test</td>
                                  <td>Amount</td>
                                  <td>Payment Image</td>
                                  <td>Lac Sample Image</td>
                                  <td>Remarks</td>
                                  <td>Certificate</td>
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
                                {appList.map((item) => (
                                  <tr>
                                    <td>{item.sampleID}</td>
                                    <td>{item.refNo}</td>
                                    <td>{item.dateOfApp}</td>
                                    <td>{item.testCategory}</td>
                                    <td>{item.test}</td>
                                    <td>{item.amount}</td>
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
                                        onClick={handleShowPaymentImg}
                                      >
                                        view
                                      </button>
                                    </td>
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
                                        onClick={handleShowLacSampleImg}
                                      >
                                        view
                                      </button>
                                    </td>
                                    <td>{item.remarks}</td>
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
                                        onClick={handleShowCertificateImg}
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
                  </TabContent>

                  <TabContent id="tab3" activeTab={activeTab}>
                    <div className="row">
                      <div className="col">
                        <div
                          className="list__btn"
                          style={{
                            position: "relative",
                            float: "right",
                            right: "18px",
                            top: "-2rem",
                          }}
                        >
                          <Button
                            className="new_test_button"
                            style={{
                              backgroundColor: "#064420",
                              border: "none",
                              width: "fit-content",
                            }}
                            onClick={handleNewTestShow}
                          >
                            Add New Test
                          </Button>
                        </div>
                        <div
                          className="card shadow"
                          style={{ marginTop: "40px" }}
                        >
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead
                                style={{
                                  color: "#064420",
                                  fontSize: "18px",
                                  verticalAlign: "top",
                                  textAlign: "center",
                                  fontWeight: "600",
                                }}
                              >
                                <tr>
                                  <td>Test Category</td>
                                  <td>Test</td>
                                  <td>
                                    Min. Quantity of required sample (grams)
                                  </td>
                                  <td>Test Fee (Rs.)</td>
                                  <td>Reporting Period (days)</td>
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
                                {testList.map((test, ind) => {
                                  return (
                                    <tr>
                                      <td>{test.category}</td>
                                      <td>{test.test}</td>
                                      <td>{test.minQuantity}</td>
                                      <td>{test.fee}</td>
                                      <td>{test.reportingPeriod}</td>
                                    </tr>
                                  );
                                })}
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

      <Modal show={showApp} onHide={handleCloseApp}>
        <Modal.Header closeButton>
          Application
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col">
              {showFirstAppForm && (
                <form>
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>FPO Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.fpoName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>FPO Contact</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.fpoContact}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Sample ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.sampleID}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>
                            Date of Application
                          </label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.dateOfApp}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Category</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={
                              currentApp.testCategory
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Test</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.test}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Amount</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.amount}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Ref no.</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={
                              currentApp.paymentRefNo
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Payment Image</label>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src={logo}
                            alt="payment-image"
                            style={{
                              height: "100px",
                              width: "100px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Lac Sample Image</label>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src={logo}
                            alt="Lab Sample"
                            style={{
                              height: "100px",
                              width: "100px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Remarks</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={currentApp.remarks}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setShowFirstAppForm(false)
                            }
                            style={{
                              float: "right",
                              backgroundColor: "#064420",
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {!showFirstAppForm && (
                <form>
                  <div className="form">
                    <div className="card p-2">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Ref no.</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="number"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Certificate</label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            type="file"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <button
                          className="btn btn-success"
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPaymentImg}
        onHide={handleClosePaymentImg}
      >
        <Modal.Header closeButton>Payment Image</Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showLacSampleImg}
        onHide={handleCloseLacSampleImg}
      >
        <Modal.Header closeButton>
          Lac Sample Image
        </Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Lac Sample"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showCertificateImg}
        onHide={handleCloseCertificateImg}
      >
        <Modal.Header closeButton>
          Certificate Image
        </Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Certificate"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showNewTest} onHide={handleNewTestClose}>
        <Modal.Header closeButton>
          Add New Test
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col">
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Test</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"LD12345"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Category</label>
                      </div>
                      <div className="col-lg-12">
                        <select
                          className="form-control"
                          name="category"
                        // value={category}
                        // onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="0">
                            Select Category
                          </option>
                          <option value="1">
                            Shellac / Seedlac / By-product
                            of Lac
                          </option>
                          <option value="2">
                            Bleached Lac
                          </option>
                          <option value="3">Lac Dye</option>
                          <option value="4">
                            Shellac Wax
                          </option>
                          <option value="5">
                            Aleuritic Acid
                          </option>
                          <option value="6">
                            Hydrolysed Lac
                          </option>
                          <option value="7">
                            Sealing Wax
                          </option>
                          <option value="8">
                            Gasket Shellac Compound
                          </option>
                          <option value="9">
                            Organic Substance
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Test</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Min Quantity of required sample
                          (grams)
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          style={{ height: "4rem" }}
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Test Fee (Rs.)</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Reporting Period (days)
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <button
                        className="btn btn-success"
                        style={{
                          marginTop: "1rem",
                          backgroundColor: "#064420",
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
        </Modal.Body>
      </Modal>

      <Modal
        show={showPaymentImg}
        onHide={handleClosePaymentImg}
      >
        <Modal.Header closeButton>Payment Image</Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showLacSampleImg}
        onHide={handleCloseLacSampleImg}
      >
        <Modal.Header closeButton>
          Lac Sample Image
        </Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Lac Sample"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showCertificateImg}
        onHide={handleCloseCertificateImg}
      >
        <Modal.Header closeButton>
          Certificate Image
        </Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Certificate"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IINRG_Lab_Testing;
