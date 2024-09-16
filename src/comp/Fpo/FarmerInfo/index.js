import { useState } from "react";
import { useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import useModal from "../../../hooks/useModal";

import ConfirmPurchaseHistory from "../Modals/FarmerInfo/ConfirmPurchaseHistory";
import RepaymentStructure2 from "../Modals/FarmerInfo/RepaymentStructure2";
import RepaymentStructure from "../Modals/FarmerInfo/RepaymentStructure";
import ConfirmSaleHistory from "../Modals/FarmerInfo/ConfirmSaleHistory";
import PurchaseHistory2 from "../Modals/FarmerInfo/PurchaseHistory2";
import PurchaseHistory from "../Modals/FarmerInfo/PurchaseHistory";
import LoanApplication from "../Modals/FarmerInfo/LoanApplication";
import SaleHistory2 from "../Modals/FarmerInfo/SaleHistory2";
import SaleHistory from "../Modals/FarmerInfo/SaleHistory";
import DocImg from "../../Common/DocImg";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";

const style3 = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
  color: "#fff",
};

const theadStyle = {
  color: "#00A877",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "bold",
  borderBottom: "1px solid #c7ccd1",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

const theadStyle2 = { ...theadStyle, color: "green" };
const theadStyle3 = { ...theadStyle, color: "#064420" };

const tabs = [
  {
    id: 1,
    title: "Profile Information",
  },
  {
    id: 2,
    title: "Loan Information",
  },
  {
    id: 3,
    title: "Purchase History",
  },
  {
    id: 4,
    title: "Sale History",
  },
];

function FarmerInformation() {
  const { modal, updateModal} = useModal()
  const [showConfirmPurchase, setShowConfirmPurchase] = useState(false);
  const [showPurchaseDetails, setShowPurchaseDetails] = useState(false);
  const [showAddPurchase, setShowAddPurchase] = useState(false);
  const [showSaleDetails, setShowSaleDetails] = useState(false);
  const [showConfirmSale, setShowConfirmSale] = useState(false);
  const [showRepayment, setShowRepayment] = useState(false);
  const [showAddSale, setShowAddSale] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [showImg, setShowImg] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const handleCloseConfirmPurchase = () => setShowConfirmPurchase(false);
  const handleClosePurchaseDetails = () => setShowPurchaseDetails(false);
  const handleShowConfirmPurchase = () => setShowConfirmPurchase(true);
  const handleShowPurchaseDetails = () => setShowPurchaseDetails(true);
  const handleCloseConfirmSale = () => setShowConfirmSale(false);
  const handleCloseAddPurchase = () => setShowAddPurchase(false);
  const handleCloseSaleDetails = () => setShowSaleDetails(false);
  const handleShowAddPurchase = () => setShowAddPurchase(true);
  const handleShowSaleDetails = () => setShowSaleDetails(true);
  const handleShowConfirmSale = () => setShowConfirmSale(true);
  const handleCloseAddSale = () => setShowAddSale(false);
  const handleShowAddSale = () => setShowAddSale(true);
  const handleClick = (i) => setActiveIndex(i);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRepayment = () => setShowRepayment(true);
  const handleCloseRepayment = () => setShowRepayment(false);

  const handleShowImg = () => setShowImg(true);
  const handleCloseImg = () => setShowImg(false);

  const handleClick2 = () => navigate("/fpo/farmer", { replace: true });

  
  return (
    <main id="main_container" className="main_container container-fluid">
      <div className="">
        <h3 className="mb-4">Farmer Information</h3>
      </div>
      <div className="list_container">
        <div className="back_btn mt-3 mb-4">
          <button onClick={handleClick2}>
            <ArrowBackIcon className="btn_icon" />
            Back to Farmer Page
          </button>
        </div>

        <div className="list_tab">
          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`tab ${checkActive(t.id, "active")}`}
                onClick={() => handleClick(t.id)}
              >
                {t.title}
              </button>
            ))}
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <Panel1 />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <Panel2
                theadStyle={theadStyle}
                tbodyStyle={tbodyStyle}
                handleShow={handleShow}
                updateModal={updateModal}
                handleShowRepayment={handleShowRepayment}
              />
            </div>

            <div className={`panel ${checkActive(3, "active")}`}>
              <Panel3
                theadStyle2={theadStyle2}
                tbodyStyle={tbodyStyle}
                style3={style3}
                handleShowAddPurchase={handleShowAddPurchase}
                handleShowPurchaseDetails={handleShowPurchaseDetails}
              />
            </div>

            <div className={`panel ${checkActive(4, "active")}`}>
              <Panel4
                theadStyle3={theadStyle3}
                tbodyStyle={tbodyStyle}
                style3={style3}
                handleShowAddSale={handleShowAddSale}
                handleShowSaleDetails={handleShowSaleDetails}
              />
            </div>
          </div>
        </div>
      </div>

      <ConfirmPurchaseHistory
        showConfirmPurchase={showConfirmPurchase}
        handleCloseConfirmPurchase={handleCloseConfirmPurchase}
      />

      <ConfirmSaleHistory
        showConfirmSale={showConfirmSale}
        handleCloseConfirmSale={handleCloseConfirmSale}
      />

      <PurchaseHistory
        showPurchaseDetails={showPurchaseDetails}
        handleClosePurchaseDetails={handleClosePurchaseDetails}
      />

      <SaleHistory
        showAddSale={showAddSale}
        handleShowAddSale={handleShowAddSale}
        handleCloseAddSale={handleCloseAddSale}
        handleShowConfirmSale={handleShowConfirmSale}
      />

      <SaleHistory2
        showSaleDetails={showSaleDetails}
        handleCloseSaleDetails={handleCloseSaleDetails}
      />

      <PurchaseHistory2
        showAddPurchase={showAddPurchase}
        handleShowAddPurchase={handleShowAddPurchase}
        handleCloseAddPurchase={handleCloseAddPurchase}
        handleShowConfirmPurchase={handleShowConfirmPurchase}
      />

      <RepaymentStructure
        showRepayment={showRepayment}
        handleCloseRepayment={handleCloseRepayment}
      />

      <RepaymentStructure2
        showRepayment={showRepayment}
        modal={modal}
        handleCloseRepayment={handleCloseRepayment}
      />

      <LoanApplication
        show={show}
        modal={modal}
        handleClose={handleClose}
        handleShowImg={handleShowImg}
      />

      <DocImg show={showImg} title="Img" handleClose={handleCloseImg} />
    </main>
  );
}

export default FarmerInformation;
