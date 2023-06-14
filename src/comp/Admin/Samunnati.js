import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getSamunnatiList } from "../../actions/user";
import useModal from "../../hooks/useModal";

import SamunnatiSignup from "../Auth/Modals/SamunnatiSignup";
import Loader from "../Common/Loader";

const Samunnati = () => {
  const { modal, updateModal, closeModal } = useModal()

  const { isLoading, data } = useQuery({
    queryKey: ["user/lendingpartner"],
    queryFn: getSamunnatiList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="">
          <Button
            className="loan_button mb-3"
            onClick={() => updateModal("samunnati")}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add Samunnati Member
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
                    <td>Mobile No</td>
                    <td>Email Id</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.data.map((user, key) => (
                      <tr>
                        <td>{key+1}</td>
                        <td>{user._id}</td>
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
        modal.state === "samunnati" &&
        <SamunnatiSignup
          show
          close={closeModal}
        />
      }
    </div>
  )
}

export default Samunnati