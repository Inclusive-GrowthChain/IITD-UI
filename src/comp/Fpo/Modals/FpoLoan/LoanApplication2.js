import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from 'nanoid';

import { createLoan, getActiveLoanwindow } from "../../../../actions/fpo";

import FileInput from "../../../Common/FileInput";
import Input from '../../../Nisa/Modals/Input';

const submitBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
}

const list = [
  {
    label: "Loan Window ID",
    name: "loanWindowId",
    disabled: true
  },
  {
    label: "Loan ID",
    name: "loanId",
    disabled: true
  },
  {
    label: "Name of Payee",
    name: "payeeName",
  },
  {
    label: "Account Number",
    name: "accountNumber",
  },
  {
    label: "IFSC Number",
    name: "ifscNumber",
  },
  {
    label: "Bank Name",
    name: "bankName",
  },
  {
    label: "Amount",
    name: "requestedAmount",
    type: "number",
  },
  {
    label: "Interest Rate (%)",
    name: "interest",
    type: "number",
    disabled: true
  },
  {
    label: "Tenure of Loan (in Months)",
    name: "loanTenure",
    type: "number",
  },
  {
    label: "Attach Invoice",
    name: "invoice",
    isFile: true,
  },
  {
    label: "Purpose",
    name: "purpose",
  },
]

function LoanApplication2({ show, applyFor, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, setValue, clearErrors } = useForm({
    defaultValues: {
      loanWindowId: "",
      loanId: nanoid(10),
      payeeName: "",
      accountNumber: "",
      ifscNumber: "",
      bankName: "",
      requestedAmount: "",
      interest: "",
      loanTenure: "",
      invoice: "",
      purpose: "",
      id: "",
    }
  })

  useQuery({
    queryKey: ["active-window"],
    queryFn: getActiveLoanwindow,
    onSuccess: (data) => {
      setValue("id", data?.data?.[0]?.id)
      setValue("interest", data?.data?.[0]?.interest)
      setValue("loanWindowId", data?.data?.[0]?.windowId)
    },
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: createLoan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loanwindow", applyFor] })
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Loan Application</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>
          <div className="form">
            <div className="p-2">
              {
                list.map(l => {
                  if (l.isFile) {
                    return (
                      <FileInput
                        key={l.name}
                        {...l}
                        errors={errors}
                        register={register}
                        setValue={setValue}
                        clearErrors={clearErrors}
                      />
                    )
                  }

                  return (
                    <Input
                      key={l.name}
                      {...l}
                      register={register}
                      errors={errors}
                    />
                  )
                })
              }

              <div className="m-2 py-2 text-center">
                <button
                  className="btn btn-primary mt-3"
                  style={submitBtnStyle}
                  disabled={isLoading}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default LoanApplication2