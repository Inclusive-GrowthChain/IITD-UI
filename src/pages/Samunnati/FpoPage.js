import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";

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

const Sammunati_FPO_Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [fpoId] = useState(localStorage.getItem("fpoId"));

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("fpoId");
    navigate('/samunnati/fpo-info', { replace: true });
  };

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer" style={{ marginTop: "-3.188rem" }}>
        <Sidebar />
        <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
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
