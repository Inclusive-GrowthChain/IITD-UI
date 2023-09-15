import { useState } from "react";
import { TabNavItem, TabContent } from "../UIComp/Tabs";
import { useAuthStore } from "../../store/useAuthStore";
import ImageViewer from "./Modals/ImageViewer";
import useModal from "../../hooks/useModal";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../actions/farmer";
import UpdatePassword from "../Fpo/UpdatePassword";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1")
  const farmer = useAuthStore(s => s.userDetails)
  const { modal, updateModal, closeModal } = useModal()

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const queryClient = useQueryClient()

  const userType = farmer.userType

  const { mutate } = useMutation({
    mutationFn: (data) => updateProfile(data, userType),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-detail"] });
      reset()
    }
  })

  // const onSubmit = (data) => console.log(data);

  return (
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
                      <TabNavItem
                        title="Update Password"
                        id="tab3"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </ul>

                    <div className="outlet">
                      <TabContent id="tab1" activeTab={activeTab}>
                        <div className="setting_wrapper">
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
                                        {farmer.userName}
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
                                        {farmer.contactNumber}
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
                                        {farmer.DOB}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Gender
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.gender}
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
                                        {farmer.fathersName}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Mother Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.mothersName}
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
                                        {farmer.doorNumber}, {farmer.street}, {farmer.village}, {farmer.taluk}, {farmer.district}, {farmer.state}, {farmer.pinCode}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Occupation
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.occupation}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Education
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.education}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Nature of Place
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.natureOfplace}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Residence
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.residence}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Caste
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.caste}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Religion
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.religion}
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
                                        {farmer.bankName}
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
                                        {farmer.accountNumber}
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
                                        {farmer.ifscCode}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Branch Name
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.branchName}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Aadhaar Card Number
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        {farmer.aadharCardNumber}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group focused">
                                      <label className="form-control-label text-black">
                                        Aadhaar Card Image
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
                                            image: farmer.aadharCardImage,
                                            title: "Aadhar Card Image",
                                          }
                                          updateModal("imageViewer", imageData)
                                        }}
                                      >
                                        view
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {
                                  farmer.panCardNumber && <>
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
                                            {farmer.panCardNumber}
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
                                                image: farmer.panCardImage,
                                                title: "PAN Card Image",
                                              }
                                              updateModal("imageViewer", imageData)
                                            }}
                                          >
                                            view
                                          </button>
                                        </div>
                                      </div>
                                    </div></>
                                }

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
                                      Mobile Number
                                    </label>
                                    <input
                                      type="Number"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("contactNumber", { maxLength: 10, })}
                                    />
                                    <p role="alert">{errors.contactNumber?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Door Number
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("doorNumber")}
                                    />
                                    <p role="alert">{errors.doorNumber?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Street
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("streetName")}
                                    />
                                    <p role="alert">{errors.streetName?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Village
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("village")}
                                    />
                                    <p role="alert">{errors.village?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Taluk
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("taluk")}
                                    />
                                    <p role="alert">{errors.role?.message}</p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      District
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("district")}
                                    />
                                    <p role="alert">{errors.district?.message}</p>
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
                                      Occupation
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register('occupation')}
                                    />
                                    <p role="alert">{errors.occupation?.message}</p>
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
                                      {...register("accountNumber")}
                                    />
                                    <p role="alert">{errors.accountNumber?.message}</p>
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
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label text-black">
                                      Branch Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-alternative"
                                      placeholder=""
                                      {...register("branchName")}
                                    />
                                    <p role="alert">{errors.branchName?.message}</p>
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
                        <UpdatePassword />
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
    </div>
  )
}

export default Settings