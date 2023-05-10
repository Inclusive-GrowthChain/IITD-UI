import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getFpoList } from "../../actions/user";
import useModal from "../../hooks/useModal";

import FpoSignup from "../Auth/Modals/FpoSignup";
import Loader from "../Common/Loader";

const FPO = () => {
  const { modal, updateModal, closeModal } = useModal()

  const { isLoading, data } = useQuery({
    queryKey: ["user/fpo"],
    queryFn: getFpoList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="fpo__wrapper">
          <Button
            className="loan_button mb-3"
            onClick={() => updateModal("fpo")}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add FPO
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
                    <td>Id</td>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Mobile Number</td>
                    <td>Number of Users (Under FPO)</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.data.map((user, key) => (
                      <tr>
                        <td>{key+1}</td>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.city}, {user.state}</td>
                        <td>{user.contactNumber}</td>
                        <td>{user.email}</td>
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
        modal.state === "fpo" &&
        <FpoSignup
          show
          close={closeModal}
        />
      }
    </div>
  )
}

export default FPO