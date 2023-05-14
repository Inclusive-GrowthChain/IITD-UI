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
    name: "fpoName",
    label: "Name of FPO",
  },
  {
    name: "userName",
    label: "Username",
  },
  {
    name: "password",
    label: "Password",
  },
  {
    name: "address",
    label: "Address",
  },
  {
    name: "city",
    label: "City",
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
    name: "contactNumber",
    label: "Contact Number",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "website",
    label: "Website",
  },
  {
    type: "date",
    name: "dateOfIncorporation",
    label: "Date of InCorporation",
  },
  {
    name: "registrationNumber",
    label: "Registration Number",
  },
  {
    name: "panNumber",
    label: "PAN Number",
  },
  {
    name: "panImage",
    label: "PAN Card Image",
    isFile: true,
  },
  {
    name: "shareholderNumber",
    label: "No of ShareHolders",
  },
]

const fieldSet2 = [
  {
    name: "bankName",
    label: "Bank Name",
  },
  {
    name: "bankAccountNumber",
    label: "Account Number",
  },
  {
    name: "ifscCode",
    label: "IFSC Number",
  },
  {
    name: "passbookImage",
    label: "Upload Bank Passbook Image",
    isFile: true,
  },
]

const fieldSet3 = [
  {
    name: "directorName",
    label: "Name",
  },
  {
    name: "directorContactNumber",
    label: "Mobile Number",
  },
  {
    name: "directorGender",
    label: "Gender",
    isSelect: true,
    options: ["Male", "Female", "Other"]
  },
  {
    name: "bylawsImage",
    label: "Copy of Bylaws (MOA & AOA)",
    isFile: true,
  },
  {
    name: "incorporationCertifcateImage",
    label: "Certificate of Incorporation",
    isFile: true,
  },
  {
    name: "gstCertificate",
    label: "GST Certificate",
    isFile: true,
  },
  {
    name: "licenseKey",
    label: "License Key",
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
      fpoName: "",
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
      panNumber: "",
      panImage: "",
      registrationNumber: "",
      shareholderNumber: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      passbookImage: "",
      directorName: "",
      directorContactNumber: "",
      directorGender: "",
      bylawsImage: "",
      incorporationCertifcateImage: "",
      gstCertificate: "",
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