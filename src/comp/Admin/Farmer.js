import Button from "react-bootstrap/Button";
import AddFarmer from "./Modals/AddFarmer";
import useModal from "../../hooks/useModal";
import { useQuery } from "@tanstack/react-query";
import { getFarmerList } from "../../actions/user";

// import Register from "../Auth/Register";
import Loader from "../Common/Loader";

const Farmer = () => {
  const { modal, updateModal, closeModal } = useModal()

  const { isLoading, data } = useQuery({
    queryKey: ["user/farmer"],
    queryFn: getFarmerList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="title__wrapper">
          <Button
            className="loan_button mb-3"
            onClick={() => updateModal("farmer")}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add Farmer
          </Button>

          <div className="card shadow">
            <div className="card-body table-responsive">
              <table className="table table-borderless">
                <thead
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#064420",
                  }}
                >
                  <tr>
                    <td>S.No.</td>
                    <td>Farmer Id</td>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Date of Joining</td>
                    <td>Mobile Number</td>
                    <td>FPO Name</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.data.map((user, key) => (
                      <tr>
                        <td>{key+1}</td>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.createdAt.substring(0, 10)}</td>
                        <td>{user.mobile}</td>
                        <td>
                          {user.fpoName}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state === "farmer" &&
        <AddFarmer
          show
          close={closeModal}
        />
      }
    </div>
  )
}

export default Farmer