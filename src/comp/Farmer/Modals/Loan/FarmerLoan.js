import Modal from "react-bootstrap/Modal";
// import { farmerDetails } from '../../dummyLoanData';
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getFarmerApplication } from "../../../../actions/fpo";
import { applyLoan } from "../../../../actions/farmer";
import Loader from "../../../Common/Loader";

const errStyle = { fontSize: "12px", margin: 0 }

function FarmerLoan({ show, step, setStep, confirm, handleClose }) {
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery({
    queryKey: ["fpo/farmerApp"],
    queryFn: () => getFarmerApplication(localStorage.getItem("userId"))
  })

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      fpoName: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
      name: "",
      gender: "",
      mobile: "",
      dob: "",
      age: "",
      idProofType: "",
      idProofNumber: "",
      addressProofType: "",
      addressProofNumber: "",
      fatherName: "",
      motherName: "",
      doorNumber: "",
      streetName: "",
      village: "",
      taluk: "",
      district: "",
      state: "",
      pinCode: "",
      occupation: "",
      education: "",
      natureOfPlace: "",
      residence: "",
      caste: "",
      religion: "",
      coApplicantName: "",
      coApplicantGender: "",
      coApplicantDob: "",
      coApplicantGender: "",
      relationship: "",
      landHolding: "",
      landHoldingType: "",
      monthlyHHIncome: "",
      monthlyHHExpenses: "",
      requestedAmount: 0,
      purpose: "",
      tenure: 0,
      interest: 0, 
      loanId: ""
    }
  })

  const { mutate } = useMutation({
    mutationFn: applyLoan,
    onSuccess: () => {
      queryClient.invalidateQueries("farmer/applyLoan")
      reset()
      handleClose()
    }
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      scrollable
    >
      <Modal.Header closeButton>Farmer Loan</Modal.Header>
      <Modal.Body>
        {step === 0 && (
          <div className="row">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>FPO Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            // value={farmerDetails.fpoName}
                            {...register("fpoName")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].bankName}
                            {...register("bankName")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Account Number</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].accountNumber}
                            {...register("accountNumber")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Bank IFSC</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].ifscCode}
                            {...register("ifscCode")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Branch Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].branchName}
                            {...register("branchName")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            // value={farmerDetails.name}
                            {...register("name")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Gender</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].gender}
                            {...register("gender")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-12">
                          {(("Create" && step < 6) ||
                            ("Create" && step < 5)) && (
                              <button
                                className="btn btn-success"
                                onClick={() => setStep((p) => p + 1)}
                                style={{
                                  marginTop: "20px",
                                  backgroundColor: "#064420",
                                  width: "20",
                                  position: "relative",
                                  float: "right",
                                }}
                              >
                                Next
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="row mt-3">
            <div className="col">
              <div className="form">
                <label className="form-label select-label">
                  <div className="">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant Mobile Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={data.data[0].mobile}
                          {...register("mobile")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant DOB</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="date"
                          className="form-control"
                          value={data.data[0].dateOfBirth}
                          {...register("dob")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant Age</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          value={data.data[0].age}
                          {...register("age")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>ID Proof Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          // value={farmerDetails.idProofType}
                          {...register("idProofType")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Applicant Proof ID Number</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          // value={farmerDetails.idProofNo}
                          {...register("idProofNumber")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Address Proof Type</label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          // value={farmerDetails.addressProofType}
                          {...register("addressProofType")}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>
                          Applicant Address Proof Number
                        </label>
                      </div>
                      <div className="col-lg-6 text-center">
                        <input
                          type="text"
                          className="form-control"
                          // value={farmerDetails.addressProofNo}
                          {...register("addressProofNumber")}
                          disabled
                        />
                      </div>
                    </div>
                    <div
                      className="row m-2"
                      style={{
                        justifyContent: "space-between",
                        padding: "0 10px",
                      }}
                    >
                      {step > 0 && (
                        <button
                          className="btn btn-success"
                          onClick={() => setStep((p) => p - 1)}
                          style={{
                            marginTop: "1rem",
                            backgroundColor: "#064420",
                            width: "20",
                          }}
                        >
                          Back
                        </button>
                      )}
                      {(("Create" && step < 6) ||
                        ("Create" && step < 5)) && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p + 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20",
                              position: "relative",
                              float: "right",
                            }}
                          >
                            Next
                          </button>
                        )}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="row mt-3">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Father Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].fatherName}
                            {...register("fatherName")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Applicant Mother Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].motherName}
                            {...register("motherName")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Door Number</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].doorNumber}
                            {...register("doorNumber")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Street Name</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].street}
                            {...register("street")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Village</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].village}
                            {...register("village")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Taluk</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].taluk}
                            {...register("taluk")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>District</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].district}
                            {...register("district")}
                            disabled
                          />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="row mt-3">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>State</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].state}
                            {...register("state")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Pin Code</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].pinCode}
                            {...register("pinCode")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Occupation</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].occupation}
                            {...register("occupation")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Education</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].education}
                            {...register("education")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Nature of Place</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].natureOfPlace}
                            {...register("natureOfPlace")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Residence</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].residence}
                            {...register("residence")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Caste</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].caste}
                            {...register("caste")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Religion</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            value={data.data[0].religion}
                            {...register("religion")}
                            disabled
                          />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={() => setStep((p) => p + 1)}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Next
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="row mt-3">
            <div className="col">
              <form>
                <div className="form">
                  <label className="form-label select-label">
                    <div className="">
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant Name</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Co-Applicant Name"
                            {...register("coApplicantName", {
                              required: "Co Applicant Name is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant Gender</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <select className="form-select" {...register("coApplicantGender", { required: "Co Applicant Gender is required" })}>
                            <option value="0">Select</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant DOB</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                            {...register("coApplicantDob", {
                              required: "Co Applicant date of birth is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Co-Applicant Age</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            {...register("coApplicantAge")}
                            disabled
                            placeholder="Co-Applicant Age"
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Relationship with Applicant</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Relationship with Applicant"
                            {...register("relationship", {
                              required: "Co Applicant relationship with applicant is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Land Holding</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Land Holding"
                            {...register("landHolding", {
                              required: "Land holding is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Type of Land Holding</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type of Land Holding"
                            {...register("landHoldingType", {
                              required: "Land holding type is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Monthly HH Income</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Monthly HH Income"
                            {...register("monthlyHHIncome", {
                              required: "Monthly HH income is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Monthly HH Expenses</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Monthly HH Expenses"
                            {...register("monthlyHHExpenses", {
                              required: "Monthly HH expenses is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Requested Amount</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Requested Amount"
                            {...register("requestedAmount", {
                              required: "Loan requested amount is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Purpose</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Purpose"
                            {...register("purpose", {
                              required: "Loan purpose is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan Tenure (in months)</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Loan Tenure"
                            {...register("tenure", {
                              required: "Loan tenure is required"
                            })}
                          />
                          {
                            errors.title &&
                            <p className="text-danger" style={errStyle}>
                              {errors.title.message}
                            </p>
                          }
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Interest Rate</label>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="text"
                            className="form-control"
                            // value={12}
                            {...register("interest")}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row m-2">
                        <div className="col-lg-6">
                          <label>Loan ID</label>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            // value={2345678}
                            {...register("loanId")}
                            disabled
                          />
                        </div>
                      </div>
                      <div
                        className="row m-2"
                        style={{
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        {step > 0 && (
                          <button
                            className="btn btn-success"
                            onClick={() => setStep((p) => p - 1)}
                            style={{
                              marginTop: "1rem",
                              backgroundColor: "#064420",
                              width: "20",
                            }}
                          >
                            Back
                          </button>
                        )}
                        {(("Create" && step < 6) ||
                          ("Create" && step < 5)) && (
                            <button
                              className="btn btn-success"
                              onClick={confirm}
                              style={{
                                marginTop: "1rem",
                                backgroundColor: "#064420",
                                width: "20",
                                position: "relative",
                                float: "right",
                              }}
                            >
                              Submit
                            </button>
                          )}
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default FarmerLoan