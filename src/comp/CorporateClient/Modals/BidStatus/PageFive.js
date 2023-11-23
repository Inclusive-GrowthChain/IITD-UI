import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { makePaymentToFpo } from '../../../../actions/auction';
import Modal from "react-bootstrap/Modal";
import FileInput from "../../../Common/FileInput";

const PageFive = ({ onButtonClick, closeBidStatus, outerbid }) => {
  const [bidComplete, setBidComplete] = useState(false)
  const [invoiceDetails, setInvoiceDetails] = useState({})
  const [showInvoice, setShowInvoice] = useState(false);
  const [currentReport, setCurrentReport] = useState([]);
  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset, setValue, clearErrors } = useForm({
    defaultValues: {
      clientInvoiceNumber: "",
      clientInvoiceDate: "",
      clientAmount: 0,
      clientInvoice: "",
      auctionId: "",
      bidId: "",
    }
  })

  const { mutate } = useMutation({
    mutationFn: makePaymentToFpo,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
      closeBidStatus();
    }
  })

  useEffect(() => {
    outerbid.bids.forEach((bid) => {
      if (bid.status !== "test-reports-rejected") {
        reset({
          auctionId: outerbid.id,
          bidId: bid.id
        })
        if (bid.status === "completed" || bid.status === "payment-done-waiting-approval") {
          setBidComplete(true)
          let tempInvoiceDetails = {}
          tempInvoiceDetails.clientInvoiceNumber = bid.clientInvoiceNumber
          tempInvoiceDetails.clientInvoiceDate = bid.clientInvoiceDate
          tempInvoiceDetails.clientInvoice = bid.clientInvoice
          tempInvoiceDetails.clientAmount = bid.bidAmount
          setInvoiceDetails(tempInvoiceDetails)
        }
        else {
          let tempInvoiceDetails = {}
          tempInvoiceDetails.clientAmount = bid.bidAmount
          setInvoiceDetails(tempInvoiceDetails)
        }
      }
      // const filteredBids = outerbid.bids.filter(bid => bid.status !== "test-reports-rejected");

      // if (filteredBids.length > 0) {
      //   const completedBids = filteredBids.filter(bid => bid.status === "completed" || bid.status === "payment-done-waiting-approval");

      //   if (completedBids.length > 0) {
      //     const invoiceDetails = completedBids.map(bid => ({
      //       clientInvoiceNumber: bid.clientInvoiceNumber,
      //       clientInvoiceDate: bid.clientInvoiceDate,
      //       clientAmount: bid.bidAmount,
      //       clientInvoice: bid.clientInvoice 
      //     }));

      //     setInvoiceDetails(invoiceDetails[0]); 
      //     setBidComplete(true);
      //   } else {
      //     const tempInvoiceDetails = {
      //       clientAmount: filteredBids[0].bidAmount 
      //     };
      //     setInvoiceDetails(tempInvoiceDetails);
      //   }
      // }

    });
  }, [outerbid]) // eslint-disable-next-line
 
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure" onSubmit={handleSubmit(mutate)}>
        <div>
          <h5
            className="mt-5"
            style={{
              padding: "10px 18px",
              color: "rgb(33, 143, 44)",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Upload Payment Proof
          </h5>
        </div>
        <div className="form" style={{ marginTop: '3%' }}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "4rem",
          }}>
            <button
              onClick={() => onButtonClick("pagefour")}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div className="row m-2">
            <div className="col-lg-6" style={{ marginLeft: '-2%' }}>
              <label>Invoice Number</label>
            </div>
            <div className="col-lg-6" style={{ marginLeft: '1%' }}>
              <input
                className="form-control"
                type="number"
                style={{ width: '103%' }}
                {...register("clientInvoiceNumber")}
                value={invoiceDetails.clientInvoiceNumber}
                disabled={bidComplete}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Invoice Date</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="date"
                {...register("clientInvoiceDate")}
                value={invoiceDetails.clientInvoiceDate}
                disabled={bidComplete}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Amount</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="number"
                value={invoiceDetails.clientAmount}
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Invoice</label>
            </div>
            {
              !bidComplete && (
                <div className="col-lg-12">
                  <FileInput
                    {...register("clientInvoice")}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    clearErrors={clearErrors}
                  />
                </div>
              )
            }
            {
              bidComplete && (
                <div className="col-lg-6">
                  <button
                    style={{
                      backgroundColor: "#064420",
                      color: "#fff",
                      alignItems: "center",
                      borderRadius: "5px",
                      border: "none",
                      padding: "0.25rem 1rem",
                      width: "100%",
                      fontSize: "1rem",
                      lineHeight: "2rem",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowInvoice();
                      setCurrentReport(outerbid?.bids);
                    }}
                  >
                    view
                  </button>
                </div>
              )
            }
          </div>
          {
            !bidComplete && (
              <div className="row m-2">
                <div className="col-lg-12">
                  <button
                    className="btn btn-success"
                    style={{ marginTop: '1rem', backgroundColor: '#064420', width: '96%' }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )
          }
        </div>

        <Modal show={showInvoice} onHide={handleCloseInvoice}>
          <Modal.Header closeButton>Invoice</Modal.Header>
          <Modal.Body>
            {
              currentReport?.length > 0 && currentReport?.map((report, index) => {
                if ((report?.status === "test-report-added" || report?.status === "completed" || report?.status === "payment-done-waiting-approval" || report?.status === "invoice-added") && report?.requiredTestReports) {
                  return (
                    <img
                      key={index}
                      src={report.clientInvoice}
                      alt="Payment"
                      style={{ width: "100%", height: "100%" }}
                    />
                  );
                }
                return null;
              })
            }
          </Modal.Body>
        </Modal>

      </form>
    </main>
  );
};

export default PageFive;
