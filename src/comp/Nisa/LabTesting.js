import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getLacTest } from "../../actions/nisa";

import { TabNavItem, TabContent } from "../UIComp/Tabs";
import Application from "./Modals/LabTest/Application";
import Certificate from "./Modals/LabTest/Certificate";
import AddNewTest from "./Modals/LabTest/AddNewTest";
import LacSample from "./Modals/LabTest/LacSample";
import Payment from "./Modals/LabTest/Payment";
import axios from "axios";

import "./Nisa.css";

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
  const [appList, setAppList] = useState([])

  const { data: testList } = useQuery({
    queryKey: ["nisa/lac-test"],
    queryFn: getLacTest,
  })

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

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/nisa/lactest")
      .then((response) => {
        console.log(response.data.data);
        setAppList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                              {appList.filter((app) => app.applicationStatus === "in-process").map((app, i) => (
                                <tr key={i}>
                                  <td>{app.sampleId}</td>
                                  <td>{app.dateOfApplication}</td>
                                  <td>{app.category}</td>
                                  <td>{app.testName}</td>
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
                              {appList.filter((app) => app.applicationStatus === "completed").map((item, i) => (
                                <tr key={i}>
                                  <td>{item.sampleId}</td>
                                  <td>{item.referenceNo}</td>
                                  <td>{item.dateOfApplication}</td>
                                  <td>{item.category}</td>
                                  <td>{item.testName}</td>
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
                        className="list__btn lt__btn"
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
                        className="lt_container card shadow"
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
                                <td>Test Name</td>
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
                              {testList?.data?.map((test, i) => (
                                <tr key={i}>
                                  <td>{test.category}</td>
                                  <td>{test.testName}</td>
                                  <td>{test.minRequiredQuantity}</td>
                                  <td>{test.testFee}</td>
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
