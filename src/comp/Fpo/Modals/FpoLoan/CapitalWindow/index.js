import { useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "react-bootstrap";
import { nanoid } from 'nanoid';

import { createLoanwindow } from "../../../../../actions/fpo";
import { useAuthStore } from "../../../../../store/useAuthStore";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { errorNotify } from "../../../../../utils/toastifyHlp";

const h5Style = {
  padding: "10px 25px",
  color: "#218f2c",
  fontWeight: "700",
}

const finalWrapperStyle = {
  justifyContent: "space-between",
  padding: "0 10px",
}

const backBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
}

const nextBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
  position: "relative",
  float: "right",
}


function CapitalWindow({ show, isEdit = false, data = {}, windowType, canEdit = false, handleClose }) {
  const [step, setStep] = useState(0)

  const queryClient = useQueryClient()
  const user = useAuthStore(s => s.userDetails)

  const methods = useForm({
    defaultValues: isEdit ? data : {
      windowType,
      fpoId: user._id,
      fpoName: user.fpoName,
      contactNo: user.contactNumber,
      dateOfApplication: new Date().toISOString(),
      windowId: nanoid(10),
      requestedAmount: "",
      windowPeriod: "",
      maxLoanPeriod: 25,
      kycDocuments: [
        { name: "moa", doc: user.bylawsImage },
        { name: "aoa", doc: user.bylawsImage },
        { name: "coi", doc: user.incorporationCertifcateImage },
        { name: "gst", doc: user.gstCertificate },
        { name: "pan", doc: user.panImage },
      ],
      kycAuthorizedSignatories: [
        { name: "", doc: "" },
        { name: "", doc: "" },
      ],
      fpoProfile: [
        { name: "incorp", doc: "" },
        { name: "promotingOrg", doc: "" },
        { name: "netWorth", doc: "" },
      ],
      licenses: [
        { name: "inputLicenses", doc: "" },
        { name: "fertilizerLicenses", doc: "" },
      ],
      financialDetails: [
        { name: "last3YearFinancial", doc: "" },
        { name: "currentYearFinancial", doc: "" },
        { name: "last6MonthPurchaseAndSalesData", doc: "" },
        { name: "latest3MonthStock", doc: "" },
        { name: "businessPlan", doc: "" },
        { name: "bankStatement", doc: "" },
        { name: "sanctionLetter", doc: "" },
        { name: "gstReturn", doc: "" },
      ],
      otherDetails: [
        { name: "productBreakRevenue", doc: "" },
        { name: "latest3MonthStock", doc: "" },
        { name: "debtorsAgeingAnalysis", doc: "" },
        { name: "top5Suppliers", doc: "" },
        { name: "top5Buyers", doc: "" },
        { name: "sanctionLimit", doc: "" },
        { name: "termLoanSummary", doc: "" },
        { name: "projectEstimate", doc: "" },
      ]
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: createLoanwindow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loanwindow", windowType] })
      handleClose()
    },
    onError: (e) => {
      console.log(e)
      const msg = e.stack.split(":")[1]
      errorNotify(msg)
    }
  })
 
  const title = windowType === "fpo" ? "Working Captial" : "Farmer"

  const onSubmit = data => {
    let is_kycAS_Empty = data.kycAuthorizedSignatories.some(a => !a.name || !a.doc)
    if (is_kycAS_Empty) return errorNotify("Please fill all the fields in KYC of Authorised Signatories")

    let is_fpoProfile_Empty = data.fpoProfile.some(a => !a.doc)
    if (is_fpoProfile_Empty) return errorNotify("Please upload all the neccessary images in FPO profile")

    let is_licenses_Empty = data.licenses.some(a => !a.doc)
    if (is_licenses_Empty) return errorNotify("Please upload all the neccessary images in Lincese")

    let is_fD_Empty = data.financialDetails.some(a => !a.doc)
    if (is_fD_Empty) return errorNotify("Please upload all the neccessary images in Financial Details")

    let is_oD_Empty = data.otherDetails.some(a => !a.doc)
    if (is_oD_Empty) return errorNotify("Please upload all the neccessary images in Other Details")

    if (data.windowPeriod > 24) return errorNotify("Please selecte tenure below 25")

    mutate(data)
  }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      scrollable
    >
      <Modal.Header closeButton>{title} Window</Modal.Header>

      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {
              step === 0 &&
              <Step1
                h5Style={h5Style}
                nextBtnStyle={nextBtnStyle}
                setStep={setStep}
                user={user}
              />
            }
            {
              step === 1 &&
              <Step2
                h5Style={h5Style}
                finalWrapperStyle={finalWrapperStyle}
                backBtnStyle={backBtnStyle}
                nextBtnStyle={nextBtnStyle}
                canEdit={canEdit}
                setStep={setStep}
              />
            }
            {
              step === 2 &&
              <Step3
                h5Style={h5Style}
                finalWrapperStyle={finalWrapperStyle}
                backBtnStyle={backBtnStyle}
                nextBtnStyle={nextBtnStyle}
                canEdit={canEdit}
                setStep={setStep}
              />
            }
            {
              step === 3 &&
              <Step4
                h5Style={h5Style}
                finalWrapperStyle={finalWrapperStyle}
                backBtnStyle={backBtnStyle}
                nextBtnStyle={nextBtnStyle}
                canEdit={canEdit}
                setStep={setStep}
              />
            }
            {
              step === 4 &&
              <Step5
                h5Style={h5Style}
                finalWrapperStyle={finalWrapperStyle}
                backBtnStyle={backBtnStyle}
                nextBtnStyle={nextBtnStyle}
                canEdit={canEdit}
                setStep={setStep}
              />
            }
            {
              step === 5 &&
              <Step6
                h5Style={h5Style}
                finalWrapperStyle={finalWrapperStyle}
                backBtnStyle={backBtnStyle}
                nextBtnStyle={nextBtnStyle}
                title={title}
                canEdit={canEdit}
                isLoading={isLoading}
                setStep={setStep}
              />
            }
          </form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  )
}

export default CapitalWindow