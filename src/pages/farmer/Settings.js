import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="profile_wrapper container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0 active"
                  style={{ fontWeight: "800", fontSize: "22px" }}
                >
                  Profile
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  <div
                    className="card shadow border-start-primary py-2"
                    style={{ backgroundColor: "#f6f6f7", }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <img
                            className="profile_pic"
                            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="tabs_wrapper">
                        <ul className="nav-tab1">
                          <TabNavItem
                            title="Personal Information"
                            className="mr-3"
                            id="tab1"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                          />
                          <TabNavItem
                            title="Profile Update"
                            id="tab2"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                          />
                        </ul>
                        {/* <div className="profile_title">
                      </div> */}
                        <div className="outlet">
                          <TabContent id="tab1" activeTab={activeTab}>
                            <div className="setting_wrapper">
                              <div className="card-body">
                                <form>
                                  {/* <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
                                    Farmer information
                                  </h6> */}
                                  <div className="pl-lg-4">
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
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Mobile Number
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Date of Birth
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Father Name
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Address
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            Aadhaar Number
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            PAN Number
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group focused">
                                          <label className="form-control-label text-black">
                                            ---
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </TabContent>
                          <TabContent id="tab2" activeTab={activeTab}>
                            <div className="profile_1 mt-4">
                              <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
                                Update information
                              </h6>
                              <div className="pl-lg-4">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control form-control-alternative"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control form-control-alternative"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Old Password
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control form-control-alternative"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        New Password
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control form-control-alternative"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Confirm Password
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control form-control-alternative"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabContent>
                        </div>
                        <div
                          className=""
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button
                            className="btn btn-info mt-4"
                            style={{
                              backgroundColor: "#064420",
                              border: "none",
                              color: "#fff",
                            }}
                          >
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
