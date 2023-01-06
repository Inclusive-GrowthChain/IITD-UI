/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Dashboard.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
// import Modal from "react-bootstrap/Modal";
// import logo from "../../assets/img/logo.png";
// import Button from "react-bootstrap/Button";

const Sammunati_FPO_Page = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("fpoId");
    navigate('/samunnati/fpo-info', {replace: true});
  };

  const [showNewTest, setShowNewTest] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [currentApp, setCurrentApp] = useState({});
  const [showFirstAppForm, setShowFirstAppForm] = useState(true);
  const [showPaymentImg, setShowPaymentImg] = useState(false);
  const [showLacSampleImg, setShowLacSampleImg] = useState(false);
  const [showCertificateImg, setShowCertificateImg] = useState(false);
  const [appList, setAppList] = useState([]);
  const [testList, setTestList] = useState([]);
  const [fpoId, setFpoId] = useState(localStorage.getItem("fpoId"));

  const tempTestList = [
    {
      id: 1,
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
      dateOfApp: "2022-10-10",
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
      dateOfApp: "2019-10-10",
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
      dateOfApp: "2021-10-12",
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
      dateOfApp: "2011-10-10",
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
      dateOfApp: "2012-12-10",
      testCategory: "Shellac Wax",
      test: "Percentage of Loading",
      amount: "200",
      remarks: "Remarks",
      paymentRefNo: "123456",
    },
  ];

  const completedLoanList = [
    {
      id: 1,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
    {
      id: 2,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
    {
      id: 3,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
    {
      id: 4,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
  ];
    
  const ongoingLoanList = [
    {
      id: 1,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
    {
      id: 2,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
    {
      id: 3,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
      outstandingAmount: "90000",
      nextPaymentAmount: "10000",
      nextPaymentDate: "2021-10-10",
    },
  ];

  const pendingLoanList = [
    {
      id: 1,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
    {
      id: 2,
      dateOfApp: "2021-10-10",
      loanAmount: "100000",
    },
  ];

  const handleNewTestClose = () => setShowNewTest(false);
  const handleNewTestShow = () => setShowNewTest(true);
  const handleShowApp = () => {
    setShowApp(true);
    setShowFirstAppForm(true);
  };
  const handleCloseApp = () => setShowApp(false);
  const handleShowPaymentImg = () => setShowPaymentImg(true);
  const handleClosePaymentImg = () => setShowPaymentImg(false);
  const handleShowLacSampleImg = () => setShowLacSampleImg(true);
  const handleCloseLacSampleImg = () => setShowLacSampleImg(false);
  const handleShowCertificateImg = () => setShowCertificateImg(true);
  const handleCloseCertificateImg = () => setShowCertificateImg(false);

  const sortApp = () => {
    const sortedApp = tempAppList.sort((a, b) => {
      return a.dateOfApp < b.dateOfApp ? 1 : -1;
    });
    setAppList(sortedApp);
  };

  const sortTestList = () => {
    const sortedTestList = tempTestList.sort((a, b) => {
      return a.category > b.category ? 1 : -1;
    });
    setTestList(sortedTestList);
  };

  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(()=>{
    sortApp();
    sortTestList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer" style={{marginTop: "-3.188rem"}}>
        <Sidebar />
        <main id="main_container" className="main_container container-fluid" style={{marginTop: "3.188rem"}}>
          <div className="">
            <h3 className="mb-4">FPO Page</h3>
          </div>
          <div className="list_container">
            <div className="back_btn mt-3 mb-4">
              <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />Back to FPO Information Page</button>
            </div>
            <div className="list_tab">
              <div className="itemContainer">
                <div className="list_title">
                  <div className="container-fluid">
                    <div className="tabs_wrapper">
                      <ul className="nav-tab">
                      <TabNavItem
                          title="Profile"
                          id="tab1"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Loan History"
                          className="mr-3"
                          id="tab2"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Ongoing Loans"
                          id="tab3"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabNavItem
                          title="Pending Loans"
                          id="tab4"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                      </ul>
                      <div className="outlet">
                        <TabContent id="tab1" activeTab={activeTab}>
                          <div className="row">
                            <div className="col">
                              <div className="card shadow">
                                <div className="card_table">
                                  <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
                                    FPO Information
                                  </h6>
                                  <div className="pl-lg-4">
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ID
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            {fpoId}
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Name
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Name
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            CEO Name
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-CEO-Name
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Phone
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Phone
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Email
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Email
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Location
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            FPO-{fpoId}-Location
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                                        fontWeight: 600
                                      }}
                                    >
                                      <tr>
                                        <td>Loan ID</td>
                                        <td>Date of Application</td>
                                        <td>Loan Amount</td>
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
                                        completedLoanList.map((loan) => (
                                          <tr>
                                            <td>{loan.id}</td>
                                            <td>{loan.dateOfApp}</td>
                                            <td>{loan.loanAmount}</td>
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
                        <TabContent id="tab3" activeTab={activeTab}>
                          <div className="row">
                            <div className="col">
                              <div className="card shadow">
                                <div className="table-responsive">
                                  <table
                                    className="table table-borderless"
                                  >
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
                                        <td>Loan ID</td>
                                        <td>Date of Application</td>
                                        <td>Loan Amount</td>
                                        <td>Outstanding Amount</td>
                                        <td>Next Payment Amount</td>
                                        <td>Next Payment Date</td>
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
                                        ongoingLoanList.map((loan) => {
                                          return (
                                            <tr>
                                              <td>{loan.id}</td>
                                              <td>{loan.dateOfApp}</td>
                                              <td>{loan.loanAmount}</td>
                                              <td>{loan.outstandingAmount}</td>
                                              <td>{loan.nextPaymentAmount}</td>
                                              <td>{loan.nextPaymentDate}</td>
                                            </tr>
                                          )
                                        })
                                      }
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabContent>
                        <TabContent id="tab4" activeTab={activeTab}>
                          <div className="row">
                            <div className="col">
                              <div className="card shadow">
                                <div className="table-responsive">
                                  <table
                                    className="table table-borderless"
                                  >
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
                                        <td>Loan ID</td>
                                        <td>Date of Application</td>
                                        <td>Loan Amount</td>
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
                                        pendingLoanList.map((loan) => {
                                          return (
                                            <tr>
                                              <td>{loan.id}</td>
                                              <td>{loan.dateOfApp}</td>
                                              <td>{loan.loanAmount}</td>
                                            </tr>
                                          )
                                        })
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
        </main>
      </div>
    </div>
  );
};

export default Sammunati_FPO_Page;
