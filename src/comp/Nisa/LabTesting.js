import { useState } from "react";
import Button from "react-bootstrap/Button";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import Application from "./Modals/LabTest/Application";
import Certificate from "./Modals/LabTest/Certificate";
import AddNewTest from "./Modals/LabTest/AddNewTest";
import LacSample from "./Modals/LabTest/LacSample";
import Payment from "./Modals/LabTest/Payment";

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
]

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
].sort((a, b) => a.testCategory > b.testCategory ? 1 : -1)

const style = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const LabTesting = () => {
  const [showCertificateImg, setShowCertificateImg] = useState(false)
  const [showFirstAppForm, setShowFirstAppForm] = useState(true)
  const [showLacSampleImg, setShowLacSampleImg] = useState(false)
  const [showPaymentImg, setShowPaymentImg] = useState(false)
  const [showNewTest, setShowNewTest] = useState(false)
  const [currentApp, setCurrentApp] = useState({})
  const [activeTab, setActiveTab] = useState("tab1")
  const [showApp, setShowApp] = useState(false)

  const handleCloseApp = () => setShowApp(false)
  const handleNewTestShow = () => setShowNewTest(true)
  const handleNewTestClose = () => setShowNewTest(false)
  const handleShowPaymentImg = () => setShowPaymentImg(true)
  const handleClosePaymentImg = () => setShowPaymentImg(false)
  const handleShowLacSampleImg = () => setShowLacSampleImg(true)
  const handleCloseLacSampleImg = () => setShowLacSampleImg(false)
  const handleShowCertificateImg = () => setShowCertificateImg(true)
  const handleCloseCertificateImg = () => setShowCertificateImg(false)

  const handleShowApp = () => {
    setShowApp(true)
    setShowFirstAppForm(true)
  }

  return (
    <>
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
                              }}
                            >
                              {tempAppList.map((app, i) => (
                                <tr key={i}>
                                  <td>{app.sampleID}</td>
                                  <td>{app.dateOfApp}</td>
                                  <td>{app.testCategory}</td>
                                  <td>{app.test}</td>
                                  <td>{app.amount}</td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowPaymentImg}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowLacSampleImg}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>{app.remarks}</td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={() => {
                                        setCurrentApp(app)
                                        handleShowApp()
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
                              {tempAppList.map((item, i) => (
                                <tr key={i}>
                                  <td>{item.sampleID}</td>
                                  <td>{item.refNo}</td>
                                  <td>{item.dateOfApp}</td>
                                  <td>{item.testCategory}</td>
                                  <td>{item.test}</td>
                                  <td>{item.amount}</td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowPaymentImg}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={style}
                                      onClick={handleShowLacSampleImg}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>{item.remarks}</td>
                                  <td>
                                    <button
                                      style={style}
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
                              {testList.map((test, i) => (
                                <tr key={i}>
                                  <td>{test.category}</td>
                                  <td>{test.test}</td>
                                  <td>{test.minQuantity}</td>
                                  <td>{test.fee}</td>
                                  <td>{test.reportingPeriod}</td>
                                </tr>
                              ))}
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


      <Application
        currentApp={currentApp}
        showApp={showApp}
        showFirstAppForm={showFirstAppForm}
        setShowFirstAppForm={setShowFirstAppForm}
        handleCloseApp={handleCloseApp}
      />

      <AddNewTest
        showNewTest={showNewTest}
        handleNewTestClose={handleNewTestClose}
      />

      <Payment
        showPaymentImg={showPaymentImg}
        handleClosePaymentImg={handleClosePaymentImg}
      />

      <Certificate
        showCertificateImg={showCertificateImg}
        handleCloseCertificateImg={handleCloseCertificateImg}
      />

      <LacSample
        showLacSampleImg={showLacSampleImg}
        handleCloseLacSampleImg={handleCloseLacSampleImg}
      />
    </>
  )
}

export default LabTesting
