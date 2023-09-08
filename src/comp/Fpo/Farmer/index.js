import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

import { getFpoFarmers } from "../../../actions/fpo";
import useModal from "../../../hooks/useModal";

import FarmerMembershipApplication from "../Modals/FarmerMembershipApplication";
import Loader from "../../Common/Loader";
import Approved from "./Approved";
import Rejected from "./Rejected";
import Pending from "./Pending";

const theadStyle = {
  color: "#064420",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "600",
  borderBottom: "1px solid #c7ccd1",
};

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
};

const tabs = [
  {
    id: 1,
    title: "Accepted Memberships",
  },
  {
    id: 2,
    title: "Rejected Memberships",
  },
  {
    id: 3,
    title: "Pending Applications",
  },
];

function Farmer() {
  const { modal, updateModal, closeModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(1);

  const { isLoading, data } = useQuery({
    queryKey: ["fpo/farmer-memberships"],
    queryFn: getFpoFarmers,
  });

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <main
      id="main_container"
      className="main_container container-fluid itemContainer"
    >
      <div>
        <h3>Farmer Information</h3>
      </div>

      <div className="list_container">
        <div className="search">
          <input className="search_input active" placeholder="Search here..." />
          <SearchTwoToneIcon className="search_icon" />
        </div>

        <div className="list_tab">
          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`tab ${checkActive(t.id, "active")}`}
                onClick={() => setActiveIndex(t.id)}
              >
                {t.title}
              </button>
            ))}
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
              <Approved
                data={data?.data?.filter((d) => d.membershipStatus === "accepted")}
                theadStyle={theadStyle}
                tbodyStyle={tbodyStyle}
                updateModal={updateModal}
              />
            </div>

            <div className={`panel ${checkActive(2, "active")}`}>
              <Rejected
                theadStyle={theadStyle}
                tbodyStyle={tbodyStyle}
                data={data?.data?.filter((d) => d.membershipStatus === "rejected")}
              />
            </div>

            <div className={`panel ${checkActive(3, "active")}`}>
              <Pending
                data={data?.data?.filter((d) => d.membershipStatus === "pending")}
                theadStyle={theadStyle}
                tbodyStyle={tbodyStyle}
                updateModal={updateModal}
              />
            </div>
          </div>
        </div>
      </div>

      {modal.state && (
        <FarmerMembershipApplication
          show
          data={modal.data}
          handleClose={closeModal}
        />
      )}
    </main>
  );
}

export default Farmer;
