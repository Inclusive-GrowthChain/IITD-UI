import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { getLacTest, getLacTest2 } from "../../actions/nisa";

import LabSampleTest from "./Modals/LabSampleTest";
import Loader from "../Common/Loader";

const style = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
  textAlign: "center",
}

const theadStyle = {
  color: "#064420",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "bold",
  borderBottom: "1px solid #c7ccd1",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

const FarmerInformation = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [show, setShow] = useState(false);
  // const [appList, setAppList] = useState([]);
  // const [testList, setTestList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [
    { isLoading: isLoading1, data: testList, },
    { isLoading: isLoading2, data: appList }
  ] = useQueries({
    queries: [
      {
        queryKey: ["nisa/lac-test"],
        queryFn: getLacTest,
      },
      {
        queryKey: ["nisa/lactest"],
        queryFn: getLacTest2,
      }
    ]
  })

  // useEffect(() => {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
  //   axios
  //     .get("http://13.232.131.203:3000/api/nisa/lactest")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setAppList(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
  //   axios
  //     .get("http://13.232.131.203:3000/api/nisa/lac-test")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setTestList(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  if (isLoading1 || isLoading2) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div>
        <h3 className="mb-4">Lab Test Information</h3>
      </div>

      <div className="list_container">
        <div className="lab_wrapper">
          <div className="store_item mt-5">
            <div className="store_tabs">
              <button
                className={`store-tab ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}
              >
                Applications
              </button>
              <button
                className={`store-tab ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}
              >
                Tests Price List
              </button>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <button className="lab_btn" onClick={handleShow}>
                  Apply for Sample Test
                </button>

                <div className="store_list">
                  <LabSampleTest
                    show={show}
                    handleClose={handleClose}
                  />
                </div>

                <div className="card_table1">
                  <div className=" table-responsive">
                    <table>
                      <thead style={theadStyle}>
                        <tr>
                          <th>Sample Id</th>
                          <th>Reference Number</th>
                          <th>Date of Application</th>
                          <th>Test Category</th>
                          <th>Test</th>
                          <th>Amount</th>
                          <th>Payment Image</th>
                          <th>Lac Sample Image</th>
                          <th>Remarks</th>
                          <th>Certificate</th>
                        </tr>
                      </thead>

                      <tbody style={tbodyStyle}>
                        {
                          appList.map((app, index) => (
                            <tr>
                              <td>{app.sampleId}</td>
                              <td>{app.referenceNo}</td>
                              <td>{app.dateOfApplication}</td>
                              <td>{app.category}</td>
                              <td>{app.testName}</td>
                              <td>₹ {app.amount}</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style}
                                >
                                  View
                                </button>
                              </td>
                              <td>{app.remarks}</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style}
                                >
                                  View
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
                <div className="card_table2">
                  <div className=" table-responsive">
                    <table>
                      <thead style={theadStyle}>
                        <tr>
                          <th>Test Category</th>
                          <th>Test</th>
                          <th>Min. Qty of required sample(gm)</th>
                          <th>Test Fee(Rs)</th>
                          <th>Reporting Period(Days)</th>
                        </tr>
                      </thead>
                      <tbody style={tbodyStyle}>
                        {
                          testList.map((test, index) => (
                            <tr>
                              <td>{test.category}</td>
                              <td>{test.testName}</td>
                              <td>{test.minRequiredQuantity}</td>
                              <td>₹ {test.testFee}</td>
                              <td>{test.reportingPeriod}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-details-button" style={{ marginBottom: '40px' }}>
                  <div className="card-details-header">
                    <span>* GST 18% extra</span> <br />
                    Payment Details: Payments for testing charges may be
                    made either through Demand Draft in favour of ICAR-UNIT
                    LING, Namkum Ranchi and payable to SBI, Namkum, Branch
                    or through Net Banking. <br />
                    The details of Netbanking are as follows :
                  </div>
                  <div className="mt-3">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>State Bank of India</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>Namkum (Ranchi)</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Dist</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>Ranchi</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Branch Code</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>9011</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Branch Phone</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>2260209</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>IFSC</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>SBIN0009011</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>MICR</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>834002017</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Account No</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>10379971148</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Product</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>CA-GEN-PUBIND-NONRURAL-INR</div>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <strong>Currency</strong>
                      </div>
                      <div className="col-lg-6">
                        <div>INR</div>
                      </div>
                    </div>
                    <div className="payment-note mt-3">
                      Note: Testing charges are subjected to revision from
                      time to time without any notice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FarmerInformation