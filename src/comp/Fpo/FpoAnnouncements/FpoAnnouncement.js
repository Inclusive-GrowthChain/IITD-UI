import { useQuery } from "@tanstack/react-query";
import useModal from "../../../hooks/useModal";
import AddAnnouncement from "./AddAnnoncement";
import { getFpoAnnouncements } from "../../../actions/fpo";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Loader from "../../Common/Loader";
import { useAuthStore } from "../../../store/useAuthStore";

const btnStyle = {
  backgroundColor: "#064420",
  borderRadius: "5px",
  border: "none",
  padding: "0.5rem 0.75rem",
  fontSize: "14px",
  lineHeight: "14px",
  color: "#fff",
  cursor: "pointer",
};

const FpoAnnouncement = () => {
  const { modal, updateModal, closeModal } = useModal();
  const userDetails = useAuthStore((s) => s.userDetails);
  const { isLoading, data } = useQuery({
    queryKey: ["getAnnouncement"],
    queryFn: getFpoAnnouncements,
  });

  if (isLoading) {
    return <Loader wrapperCls="h-screen" />;
  }

  return (
    <main
      id="main_container"
      className="main_container container-fluid itemContainer"
    >
      <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
        {userDetails.userType === "farmer" ? (
          <h3 className="me-auto">Announcements From FPO</h3>
        ) : (
          <>
            <h3 className="me-auto">Announcements For Farmer</h3>
            <button
              style={btnStyle}
              onClick={() => updateModal("Add Announcement")}
            >
              Add Announcement
            </button>
          </>
        )}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 mb-5">
        {data?.data?.fpoAnnouncements?.map((item) => (
          <div className="col" key={item.heading}>
            <div className="card">
              <div className="position-relative" style={{ height: "260px" }}>
                <img
                  src={item?.image}
                  className="card-img-top object-fit-cover"
                  height="100%"
                  width="100%"
                  alt={item.heading}
                />
                {userDetails?.userType !== "farmer" && (
                  <DriveFileRenameOutlineOutlinedIcon
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      cursor: "pointer",
                    }}
                    onClick={() => updateModal("Edit Announcement", item)}
                  />
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.heading}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {["Add Announcement", "Edit Announcement"].includes(modal.state) && (
        <AddAnnouncement
          show
          isEdit={modal.state === "Edit Announcement"}
          data={modal.data}
          handleClose={closeModal}
        />
      )}
    </main>
  );
};

export default FpoAnnouncement;
