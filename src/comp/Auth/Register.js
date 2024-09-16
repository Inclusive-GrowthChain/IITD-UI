import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { farmerSignup, getFpoList } from "../../actions/auth";
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
    type: "text"
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "number",
    validation: {
      minLength: {
        value: 10,
        message: "Mobile number is not valid"
      },
    }
  },
  {
    name: "password",
    label: "Password",
    type: "text"
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "text"
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
    validation: {
      min: {
        value: 18,
        message: "Age should be atleast 18"
      },
    }
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
    type: 'text'
  },
  {
    name: "motherName",
    label: "Mother's Name",
    type: "text"
  },
  {
    name: "doorNumber",
    label: "Door Number",
    type: "text"
  },
  {
    name: "street",
    label: "Street Name",
    type: "text"
  },
  {
    name: "village",
    label: "Village",
    type: "text"
  },
  {
    name: "taluk",
    label: "Taluk",
    type: "text"
  },
  {
    name: "district",
    label: "District",
    type: "text"
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
    type: "number",
    validation: {
      minLength: {
        value: 6,
        message: "Mobile number is not valid"
      },
    }
  },
  {
    name: "occupation",
    label: "Occupation",
    type:"text"
  },
  {
    name: "education",
    label: "Education",
    type: "text"
  },
  {
    name: "natureOfPlace",
    label: "Nature of Place",
    type: "text"
  },
  {
    name: "residence",
    label: "Residence",
    type: "text"
  },
  {
    name: "caste",
    label: "Caste",
    type: "text"
  },
  {
    name: "religion",
    label: "Religion",
    type: "text"
  },
  {
    name: "bankName",
    label: "Bank Name",
    type: "text"
  },
  {
    name: "accountNumber",
    label: "Account Number",
    type: "number"
  },
  {
    name: "ifscCode",
    label: "IFSC Code",
    type: "text"
  },
  {
    name: "branchName",
    label: "Branch Name",
    type: "text"
  },
  {
    name: "panCardNumber",
    label: "PAN Card Number",
    type: 'text',
    validation: {
      minLength: {
        value: 10,
        message: "Mobile number is not valid"
      },
    }
  },
  {
    name: "panCardImage",
    label: "Upload PAN Card",
    isFile: true,
  },
  {
    name: "aadharCardNumber",
    label: "Aadhar Card Number",
    type: "number"
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

      setValue("age", temp, { shouldValidate: true })
    }
  }, [dob, setValue])

  const { mutate } = useMutation({
    mutationFn: farmerSignup,
    onSuccess: () => {
      reset()
      navigate("/")
    }
  })

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Farmer Signup</h3>
        <div className="card-body">
          <div className="container">
            <form onSubmit={handleSubmit(mutate)}>
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
