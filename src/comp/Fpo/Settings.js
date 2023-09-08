import { useState } from "react";
import { TabNavItem, TabContent } from "../UIComp/Tabs";
import { useAuthStore } from "../../store/useAuthStore";
import ImageViewer from "./Modals/ImageViewer";
import useModal from "../../hooks/useModal";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../actions/farmer";
import UpdatePassword from "./UpdatePassword";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const fpo = useAuthStore(s => s.userDetails)
  const { modal, updateModal, closeModal } = useModal()

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const userType = fpo.userType
  const userId = fpo._id

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (data) => updateProfile(data, userType),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-detail"] });
      reset()
    }
  })

  console.log(new Date(fpo.dateOfIncorporation).toDateString())

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
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
          <div className="row" style={{ marginBottom: '40px' }}>
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
                    <div className="outlet" style={{ marginBottom: '30px' }}>
                      <TabContent id="tab1" className="setting_content" activeTab={activeTab}>
                        <div>
                          <div className="card-body">
                            <form>
                              <div className="pl-lg-4">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Name of FPO
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.userName}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Username
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.userName}
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
                                        {fpo.address}
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
                                        {fpo.city}
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
                                        {fpo.state}
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
                                        {fpo.pinCode}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Contact Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.contactNumber}
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
                                        {fpo.email}
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
                                        {fpo.website}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Date of Incorporation
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.dateOfIncorporation}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        PAN Card Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.panNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        PAN Card Image
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <button
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "10%",
                                          minWidth: "100px",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const imageData = {
                                            image: fpo.panImage,
                                            title: "PAN Card Image",
                                          }
                                          updateModal("imageViewer", imageData)
                                        }}
                                      >
                                        view
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Registaration Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.registrationNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Number of Shareholders
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.noOfShareHolders}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Bank Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.bank}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Account Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.accountNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        IFSC Code
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.ifscCode}
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
                                        {fpo.directorName}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        CEO Mobile Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.directorContactNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        CEO Gender
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {fpo.directorGender}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Copy of Bylaws
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <button
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "10%",
                                          minWidth: "100px",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const imageData = {
                                            image: fpo.bylawsImage,
                                            title: "Copy of Bylaws"
                                          }
                                          updateModal("imageViewer", imageData)
                                        }}
                                      >
                                        view
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Incorporation Certificate
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <button
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "10%",
                                          minWidth: "100px",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const imageData = {
                                            image: fpo.incorporationCertifcateImage,
                                            title: "Incorporation Certificate"
                                          }
                                          updateModal("imageViewer", imageData)
                                        }}
                                      >
                                        view
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        GST Certificate
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <button
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "10%",
                                          minWidth: "100px",
                                          fontSize: "1rem",
                                          lineHeight: "2rem",
                                        }}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const imageData = {
                                            image: fpo.gstCertificate,
                                            title: "GST Certificate"
                                          }
                                          updateModal("imageViewer", imageData)
                                        }}
                                      >
                                        view
                                      </button>
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
                                        {fpo.licenseKey}
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
                            <form onSubmit={handleSubmit(mutate)}>
                              <div className="row">
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
                                    <p role="alert">{errors.city?.message}</p>
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
                                    <p role="alert">{errors.state?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Mobile Number
                                    </label>
                                    <input
                                      type="Number"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("contactNumber", { maxLength: 10 })}
                                    />
                                    <p role="alert">{errors.contactNumber?.message}</p>
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
                                    <p role="alert">{errors.pinCode?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Shareholder Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("noOfShareHolders")}
                                    />
                                    <p role="alert">{errors.noOfShareHolders?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Email
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("email")}
                                    />
                                    <p role="alert">{errors.email?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      CEO Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("directorName")}
                                    />
                                    <p role="alert">{errors.role?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      CEO Gender
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("directorGender")}
                                    />
                                    <p role="alert">{errors.directorGender?.message}</p>
                                  </div>
                                </div>


                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Bank Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("bankName")}
                                    />
                                    <p role="alert">{errors.bankName?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Account Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("bankAccountNumber")}
                                    />
                                    <p role="alert">{errors.bankAccountNumber?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      IFSC Code
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("ifscCode")}
                                    />
                                    <p role="alert">{errors.ifscCode?.message}</p>
                                  </div>
                                </div>
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
                                  type="submit"
                                >
                                  Update Profile
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </TabContent>
                      <TabContent id="tab3" activeTab={activeTab}>
                        <UpdatePassword userId={userId} />
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state === "imageViewer" && (
          <ImageViewer
            show
            handleClose={closeModal}
            data={modal.data}
          />
        )
      }

    </main>
  );
};

export default Settings;
