// import { useState } from "react";
import Button from "react-bootstrap/Button";
// import AddFPO from "./Modals/AddFPO";
import FpoSignup from "../Auth/Modals/FpoSignup";
import { useQuery } from "@tanstack/react-query";
import { getFpoList } from "../../actions/user";
import Loader from "../Common/Loader";
import useModal from "../../hooks/useModal";

const FPO = () => {
  // const [show, setShow] = useState(false)

  // const updateShow = () => setShow(p => !p)

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
                    data.data.map(user => (
                      <tr>
                        <td>1</td>
                        <td>54212</td>
                        <td>--</td>
                        <td>78451XXXXX</td>
                        <td>example@email.com</td>
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