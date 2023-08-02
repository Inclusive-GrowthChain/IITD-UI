import { useState } from "react";
import { TabNavItem, TabContent } from "../UIComp/Tabs";
import { useAuthStore } from "../../store/useAuthStore";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../actions/farmer";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const corporateClient = useAuthStore(s => s.userDetails);

  const userType = corporateClient.type
  const userId = corporateClient._id

  const queryClient = useQueryClient()

  const { reset, register, handleSubmit } = useForm()

  const { mutate } = useMutation({
    mutationFn: (data) => {
      if (data) {
        updateProfile(data, userType, userId)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-detail"] });
      reset()
    }
  })

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
                      <TabNavItem
                        title="Update Password"
                        id="tab3"
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
                                        Client Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {corporateClient.clientName}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        UserName
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {corporateClient.userName}
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
                                        {corporateClient.contactNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        CI Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {corporateClient.ciNumber}
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
                                        {corporateClient.address}
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
                                        {corporateClient.city}
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
                                        {corporateClient.state}
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
                                        {corporateClient.pinCode}
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
                                        {corporateClient.email}
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
                                        {corporateClient.website}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        GST Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {corporateClient.gstNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        License Key
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {corporateClient.licenseKey}
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
                          <form onSubmit={handleSubmit(mutate)}>
                            <div className="pl-lg-4">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Address
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("address")}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("city")}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      State
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("state")}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Pincode
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("pinCode", { maxLength: 6 })}
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
                                    type="submit"
                                  >
                                    Update Profile
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </TabContent>
                      <TabContent id="tab3" activeTab={activeTab}>
                        <div className="profile_1 mt-4">
                          <div className="pl-lg-4">
                            <form>
                              <div className="col">
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Enter the Old Password
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Enter the new Password
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className=""
                                style={{ display: "flex", justifyContent: "start" }}
                              >
                                <button
                                  className="btn btn-info mt-4"
                                  style={{
                                    backgroundColor: "#064420",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                  type="submit"
                                >
                                  Update Password
                                </button>
                              </div>
                            </form>
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