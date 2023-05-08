import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import { getCorporateClientList } from "../../actions/user";
import useModal from "../../hooks/useModal";

import CorporateClientSignup from "../Auth/Modals/CorporateClientSignup";
import Loader from "../Common/Loader";

const CorporateClient = () => {
  const { modal, updateModal, closeModal } = useModal()

  const { isLoading, data } = useQuery({
    queryKey: ["user/corporateClient"],
    queryFn: getCorporateClientList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="">
          <Button
            className="loan_button mb-3"
            onClick={() => updateModal("corporateClient")}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add Corporate Client Member
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
                    <td>Mobile No</td>
                    <td>Email Id</td>
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
        modal.state === "corporateClient" &&
        <CorporateClientSignup
          show
          close={closeModal}
        />
      }
    </div>
  )
}

export default CorporateClient