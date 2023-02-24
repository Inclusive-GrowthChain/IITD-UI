import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

import ApplicationDetails from "./Modals/ApplicationDetails";
import Submited from "./Modals/Submited";
import Aadhar from "./Modals/Aadhar";
import Pan from "./Modals/Pan";

import "./Fpo.css";

const approvedMembershipList = [
  {
    loanId: 1,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 3,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 4,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 8,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 9,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

const rejectedMembershipList = [
  {
    loanId: 5,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 7,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanI: 10,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

const pendingMembershipList = [
  {
    loanId: 2,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 6,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

function Farmer() {
  const [showLoanApplicationDetails, setShowLoanApplicationDetails] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleClick = (index) => setActiveIndex(index)
  const handleShowLoanApplicationDetails = () => setShowLoanApplicationDetails(true)
  const handleCloseLoanApplicationDetails = () => setShowLoanApplicationDetails(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3>Farmer Information</h3>
      </div>

      <div className="list_container">
        <div className="search">
          <input
            className="search_input active"
            placeholder="Search here..."
          />
          <SearchTwoToneIcon className="search_icon" />
        </div>

        <div className="list_tab">
          <div className="tabs">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Accepted Memberships
            </button>
            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Rejected Memberships
            </button>
            <button
              className={`tab ${checkActive(3, "active")}`}
              onClick={() => handleClick(3)}
            >
              Pending Applications
            </button>
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <div className="card_table1">
                <div className=" table-responsive">
                  <table>
                    <thead
                      style={{
                        color: "#064420",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "600",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Village</th>
                        <th>Phone Number</th>
                        <th>Aadhaar Number</th>
                        <th>View Application</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {approvedMembershipList.map((app, i) => (
                        <tr>
                          <td>farmer-{i}</td>
                          <td>
                            <NavLink
                              to="/fpo/farmer-information"
                              className="info_btn"
                            >
                              {app.farmerName}
                            </NavLink>
                          </td>
                          <td>{app.village}</td>
                          <td>{app.contact}</td>
                          <td>{app.aadhaar}</td>
                          <td>
                            <button
                              className="py-0.5 table_btn"
                              style={{
                                backgroundColor: "#064420",
                                color: "#fff",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "5px 10px",
                                width: "fit-content",
                                fontSize: ".75rem",
                                lineHeight: "1rem",
                                fontWeight: "500",
                              }}
                              onClick={handleShowLoanApplicationDetails}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active")}`}>
              <div className="card_table1">
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
                        <th>Name</th>
                        <th>Village</th>
                        <th>Phone Number</th>
                        <th>Aadhaar Number</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {rejectedMembershipList.map((app) => (
                        <tr>
                          <td>{app.farmerName}</td>
                          <td>{app.village}</td>
                          <td>{app.contact}</td>
                          <td>{app.aadhaar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(3, "active")}`}>
              <div className="card_table1">
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
                        <th>Name</th>
                        <th>Village</th>
                        <th>Phone Number</th>
                        <th>Aadhaar Number</th>
                        <th>Farmer Application Details</th>
                        <th>Membership Status</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {pendingMembershipList.map((app) => (
                        <tr>
                          <td>{app.farmerName}</td>
                          <td>{app.village}</td>
                          <td>{app.contact}</td>
                          <td>{app.aadhaar}</td>
                          <td>
                            <button
                              className="py-0.5"
                              style={{
                                backgroundColor: "#064420",
                                color: "#fff",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "5px 10px",
                                width: "20%",
                                minWidth: "80px",
                                fontSize: ".75rem",
                                lineHeight: "1rem",
                              }}
                              onClick={handleShowLoanApplicationDetails}
                            >
                              View
                            </button>
                          </td>
                          <td>
                            <button className="dropdown_btn text-center" style={{width: '80%', minWidth: '100px'}}>
                              <select className="form-select" required="">
                                <option value="select">Select</option>
                                <option value="">Approve</option>
                                <option value="churchu">Reject</option>
                              </select>
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
        </div>
      </div>

      <ApplicationDetails
        showLoanApplicationDetails={showLoanApplicationDetails}
        handleCloseLoanApplicationDetails={handleCloseLoanApplicationDetails}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
      />

      <Aadhar
        showAadharCardImg={showAadharCardImg}
        handleCloseAadharCardImg={handleCloseAadharCardImg}
      />

      <Pan
        showPanCardImg={showPanCardImg}
        handleClosePanCardImg={handleClosePanCardImg}
      />

      <Submited
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
      />
    </main>
  )
}

export default Farmer