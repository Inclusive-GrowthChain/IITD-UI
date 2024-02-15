import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

import { fpoSignup } from "../../../actions/auth";
import states from '../../../constants/states';
import FormHelp from "./FormHelp";

const btnStyle = {
  backgroundColor: "#064420",
  marginTop: "10px",
  color: "#fff",
  alignItems: "center",
  width: "20%",
  fontSize: "15px",
}

const fieldSet1 = [
  {
    name: "name",
    label: "Name of FPO",
    type: "text"
  },
  {
    name: "userName",
    label: "Username",
    type: "text"
  },
  {
    name: "password",
    label: "Password",
    type: "text"
  },
  {
    name: "address",
    label: "Address",
    type: "text"
  },
  {
    name: "city",
    label: "City",
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
        message: "Pincode number is not valid"
      },
    }
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "number",
    validation: {
      minLength: {
        value: 10,
        message: "Mobile number is not valid"
      },
    }
  },
  {
    name: "email",
    label: "Email",
    type: "email"
  },
  {
    name: "website",
    label: "Website",
    type: "text"
  },
  {
    type: "date",
    name: "dateOfIncorporation",
    label: "Date of InCorporation",
  },
  {
    name: "registrationNumber",
    label: "Registration Number",
    type: "number"
  },
  {
    name: "panCardNumber",
    label: "PAN Number",
    type: "text",
    validation: {
      minLength: {
        value: 6,
        message: "Pancard number is not valid"
      },
    }
  },
  {
    name: "panCardImage",
    label: "PAN Card Image",
    isFile: true,
  },
  {
    name: "noOfShareHolders",
    label: "No of ShareHolders",
    type: "number"
  },
]

const fieldSet2 = [
  {
    name: "bankName",
    label: "Bank Name",
    type: "text"
  },
  {
    name: "bankAccountNumber",
    label: "Account Number",
    type: "number"
  },
  {
    name: "ifscCode",
    label: "IFSC Number",
    type: "text"
  },
  {
    name: "bankPassBookImage",
    label: "Upload Bank Passbook Image",
    isFile: true,
  },
]

const fieldSet3 = [
  {
    name: "directorName",
    label: "Name",
    type: "text"
  },
  {
    name: "directorMobileNumber",
    label: "Mobile Number",
    type: "number"
  },
  {
    name: "directorGender",
    label: "Gender",
    isSelect: true,
    options: ["Male", "Female", "Other"]
  },
  {
    name: "copyOfByLawsImageMOA",
    label: "Copy of Bylaws (MOA)",
    isFile: true,
  },
  {
    name: "copyOfByLawsImageAOA",
    label: "Copy of Bylaws (AOA)",
    isFile: true,
  },
  {
    name: "certificateOfIncorporationImage",
    label: "Certificate of Incorporation",
    isFile: true,
  },
  {
    name: "gstCertificateImage",
    label: "GST Certificate",
    isFile: true,
  },
  {
    name: "licenseKey",
    label: "License Key",
    type: "text"
  },
]

function FpoSignup({ show, close }) {
  const {
    register, setValue,
    formState: { errors },
    handleSubmit, reset,
    clearErrors
  } = useForm({
    defaultValues: {
      name: "",
      userName: "",
      password: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      contactNumber: "",
      email: "",
      website: "",
      dateOfIncorporation: "",
      panCardNumber: "",
      panCardImage: "",
      registrationNumber: "",
      noOfShareHolders: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      bankPassBookImage: "",
      directorName: "",
      directorMobileNumber: "",
      directorGender: "",
      copyOfByLawsImageMOA: "",
      copyOfByLawsImageAOA: "",
      incorporationCertifcateImage: "",
      gstCertificateImage: "",
      licenseKey: "",
    },
  })

  const { mutate } = useMutation({
    mutationFn: fpoSignup,
    onSuccess: () => {
      reset()
      close()
    }
  })

  return (
    <Modal size="lg" show={show} onHide={close} centered>
      <Modal.Header closeButton>FPO Signup</Modal.Header>
      <Modal.Body>
        <div className="fpo_signup">
          <form onSubmit={handleSubmit(mutate)}>
            <div className="row mb-2">
              <FormHelp
                fields={fieldSet1}
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
              />
            </div>

            <div className="row mb-2">
              <h5 className="mt-3">Bank Details</h5>
              <FormHelp
                fields={fieldSet2}
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
              />
            </div>

            <div className="row mb-2">
              <h5 className="mt-3">Director Details</h5>
              <FormHelp
                fields={fieldSet3}
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
              />
            </div>

            <div className="row mt-2">
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
      </Modal.Body>
    </Modal>
  )
}

export default FpoSignup