import { useState } from "react";

import useModal from "../../../hooks/useModal";

import CapitalWindow from "../Modals/FpoLoan/CapitalWindow";
import CapitalLoanTab from "./CapitalLoanTab";
import FarmerLoanTab from "./FarmerLoanTab";

function Loan() {
  const { modal, updateModal, closeModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(1)

  const checkActive = (index, className) => activeIndex === index ? className : ""

  const handleClick = (index) => setActiveIndex(index)

  return (
    <>
      <main id="main_container" className="main_container container-fluid itemContainer">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="flex-grow-1">Loan Information</h3>

          <button
            className="loan_btn"
            onClick={() => updateModal(activeIndex === 1 ? "fpo" : "farmer")}
          >
            Apply for {activeIndex === 1 ? "Working Capital" : "Farmer"} Loan Window
          </button>
        </div>

        <div className="list_container">
          <div className="tabs mt-3">
            <button
              className={`tab ${checkActive(1, "active")}`}
              onClick={() => handleClick(1)}
            >
              Working Capital Loan
            </button>

            <button
              className={`tab ${checkActive(2, "active")}`}
              onClick={() => handleClick(2)}
            >
              Farmer Loan
            </button>
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`} style={{ marginTop: '16px' }}>
              <CapitalLoanTab />
            </div>

            <div className={`panel ${checkActive(2, "active")}`} style={{ marginTop: '16px' }}>
              <FarmerLoanTab />
            </div>
          </div>
        </div>
      </main>

      {
        modal.state &&
        <CapitalWindow
          show
          canEdit
          windowType={modal.state}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Loan