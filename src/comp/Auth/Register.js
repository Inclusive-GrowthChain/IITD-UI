import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { farmerSignup, getFpoList } from "../../actions/auth";
import { errorNotify } from "../../utils/toastifyHlp";
import states from '../../constants/states';

import FormHelp, { Input } from "./Modals/FormHelp";
import { useNavigate } from "react-router";

const btnStyle = {
  backgroundColor: "#064420",
  marginTop: "10px",
  color: "#fff",
  alignItems: "center",
  width: "100%",
  fontSize: "15px",
}

const fieldSet1 = [
  {
    name: "userName",
    label: "Username",
  },
  {
    name: "mobile",
    label: "Mobile",
  },
  {
    name: "password",
    label: "Password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
  },
  {
    type: "date",
    name: "dateOfBirth",
    label: "Date of Birth",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    disabled: true,
  },
  {
    name: "gender",
    label: "Gender",
    isSelect: true,
    options: ["Male", "Female", "Other"]
  },
  {
    name: "fatherName",
    label: "Father's Name",
  },
  {
    name: "motherName",
    label: "Mother's Name",
  },
  {
    name: "doorNumber",
    label: "Door Number",
  },
  {
    name: "street",
    label: "Street Name",
  },
  {
    name: "village",
    label: "Village",
  },
  {
    name: "taluk",
    label: "Taluk",
  },
  {
    name: "district",
    label: "District",
  },
  {
    name: "state",
    label: "State",
    options: states,
    isSelect: true,
  },
  {
    name: "pinCode",
    label: "Pin Code",
  },
  {
    name: "occupation",
    label: "Occupation",
  },
  {
    name: "education",
    label: "Education",
  },
  {
    name: "natureOfPlace",
    label: "Nature of Place",
  },
  {
    name: "residence",
    label: "Residence",
  },
  {
    name: "caste",
    label: "Caste",
  },
  {
    name: "religion",
    label: "Religion",
  },
  {
    name: "bankName",
    label: "Bank Name",
  },
  {
    name: "accountNumber",
    label: "Account Number",
  },
  {
    name: "ifscCode",
    label: "IFSC Code",
  },
  {
    name: "branchName",
    label: "Branch Name",
  },
  {
    name: "panCardNumber",
    label: "PAN Card Number",
  },
  {
    name: "panCardImage",
    label: "Upload PAN Card",
    isFile: true,
  },
  {
    name: "aadharCardNumber",
    label: "Aadhar Card Number",
  },
  {
    name: "aadharCardImage",
    label: "Upload Aadhar Card",
    isFile: true,
  },
]

function Register() {
  const { isLoading, data } = useQuery({
    queryKey: ["user/fpo/mini"],
    queryFn: getFpoList,
  })

  const {
    register, setValue,
    formState: { errors },
    handleSubmit, reset, watch,
    clearErrors
  } = useForm({
    defaultValues: {
      userName: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      fatherName: "",
      motherName: "",
      doorNumber: "",
      street: "",
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
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
      panCardNumber: "",
      panCardImage: "",
      aadharCardNumber: "",
      aadharCardImage: "",
      fpoId: "",
    }
  })

  const navigate = useNavigate()
  const dob = watch("dateOfBirth")

  useEffect(() => {
    if (dob) {
      const dobVal = new Date(dob)
      const today = new Date()
      let temp = today.getFullYear() - dobVal.getFullYear()
      const m = today.getMonth() - dobVal.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < dobVal.getDate())) {
        temp--
      }

      setValue("age", temp)
    }
  }, [dob, setValue])

  const { mutate } = useMutation({
    mutationFn: farmerSignup,
    onSuccess: () => {
      reset()
      navigate("/")
    }
  })

  const onSubmit = data => {
    if (Number(data.age) < 1) return errorNotify("Please select valid DOB")
    mutate(data)
  }

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Farmer Signup</h3>
        <div className="card-body">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-2">
                <FormHelp
                  fields={fieldSet1}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                  clearErrors={clearErrors}
                />

                <Input
                  isSelect
                  label="FPO"
                  name="fpoId"
                  error={errors.fpoId}
                  options={isLoading ? [] : data?.data?.map(d => ({ val: d._id, label: d.name || d.fpoName }))}
                  register={register}
                  validation={{ required: "FpoId is required" }}
                />
              </div>

              <div className="row mb-2">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-block shadow"
                    style={btnStyle}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
