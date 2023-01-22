import { useState } from "react";
import { TabNavItem, TabContent } from "../UIComp/Tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
      <div className="list_title">
        <div className="settings_wrapper">
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
                className="setting_card shadow border-start-primary py-2"
                style={{
                  backgroundColor: "#f6f6f7",
                  padding: "0 15px",
                  borderRadius: "10px",
                }}
              >
                <div className="card-tab">
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

                    <div className="outlet">
                      <TabContent id="tab1" className="setting_content" activeTab={activeTab}>
                        <div >
                          <div className="card-body">
                            <form>
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
                                        Corporate Client 1
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
                                        9XXXXXXXXX
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
                                        9-31/3,blah,blah,blah
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        City
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        XXXXXXXX
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        State
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Telangana
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Pincode
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        500XXX
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Telephone Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        +XX-546XXXXX
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Fax Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        XXXX-XXXXXXX
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
                                        email@email.com
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Website
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        www.email.com
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
                                    Email Id
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
                              <div
                                className=""
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
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
                      </TabContent>
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

export default Settings