import { useState } from "react";
import LabSampleTest from "./Modals/LabSampleTest";

import "./Fpo.css";

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

const FarmerInformation = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
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
                      <thead
                        style={{
                          fontSize: "17px",
                          verticalAlign: "top",
                          borderBottom: "1px solid #c7ccd1",
                        }}
                      >
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
                      <tbody
                        style={{
                          color: "#000",
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        <tr>
                          <td>SAX34265</td>
                          <td>132768954</td>
                          <td>12-02-2021</td>
                          <td>Shellac Lac</td>
                          <td>Cold Alcohol Insoluble</td>
                          <td>₹ 400</td>
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
                          <td>Good</td>
                          <td>
                            <button
                              className="py-0.5"
                              style={style}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>SAX34265</td>
                          <td>132768954</td>
                          <td>12-02-2021</td>
                          <td>Shellac Lac</td>
                          <td>Cold Alcohol Insoluble</td>
                          <td>₹ 400</td>
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
                          <td>Good</td>
                          <td>
                            <button
                              className="py-0.5"
                              style={style}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>SAX34265</td>
                          <td>132768954</td>
                          <td>12-02-2021</td>
                          <td>Shellac Lac</td>
                          <td>Cold Alcohol Insoluble</td>
                          <td>₹ 400</td>
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
                          <td>Good</td>
                          <td>
                            <button
                              className="py-0.5"
                              style={style}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <div className="card_table2">
                  <div className=" table-responsive">
                    <table>
                      <thead
                        style={{
                          color: "#064420",
                          fontSize: "17px",
                          verticalAlign: "top",
                          fontWeight: "bold",
                          borderBottom: "1px solid #c7ccd1",
                        }}
                      >
                        <tr>
                          <th>Test Category</th>
                          <th>Test</th>
                          <th>Min. Qty of required sample(gm)</th>
                          <th>Test Fee(Rs)</th>
                          <th>Reporting Period(Days)</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          color: "#000",
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        <tr>
                          <td>SAX34265</td>
                          <td>2</td>
                          <td>100</td>
                          <td>₹ 400</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>SAX34265</td>
                          <td>2</td>
                          <td>100</td>
                          <td>₹ 400</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>SAX34265</td>
                          <td>2</td>
                          <td>100</td>
                          <td>₹ 400</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-details-button" style={{marginBottom: '40px'}}>
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