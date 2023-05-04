import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { getLacTest, getLacTest2 } from "../../actions/nisa";
import useModal from "../../hooks/useModal";

import LabSampleTest from "./Modals/LabSampleTest";
import Loader from "../Common/Loader";
import DocImg from "../Common/DocImg";

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

function Note() {
  return (
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
  )
}

const FarmerInformation = () => {
  const { modal, updateModal, closeModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(1)

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

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
                onClick={() => setActiveIndex(1)}
              >
                Applications
              </button>
              <button
                className={`store-tab ${checkActive(2, "active")}`}
                onClick={() => setActiveIndex(2)}
              >
                Tests Price List
              </button>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <button className="lab_btn" onClick={() => updateModal("addSample")}>
                  Apply for Sample Test
                </button>

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
                          appList?.data?.map(app => (
                            <tr key={app._id}>
                              <td>{app.sampleId}</td>
                              <td>{app.paymentRefNo}</td>
                              <td>{app.dateOfApplication}</td>
                              <td>{app.category}</td>
                              <td>{app.testName}</td>
                              <td>₹ {app.amount}</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style}
                                  onClick={() => updateModal("Payment Image", { imgUrl: app.paymentImg })}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style}
                                  onClick={() => updateModal("Lac Sample Image", { imgUrl: app.lacSampleImg })}
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
                          testList?.data?.map(test => (
                            <tr key={test._id}>
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

                <Note />
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state === "addSample" &&
        <LabSampleTest
          show
          handleClose={closeModal}
        />
      }

      {
        modal.state && modal.state !== "addSample" &&
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      }
    </main>
  )
}

export default FarmerInformation