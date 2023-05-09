import Button from "react-bootstrap/Button";
import AddFarmer from "./Modals/AddFarmer";
import useModal from "../../hooks/useModal";

// import Register from "../Auth/Register";
import Loader from "../Common/Loader";

const Farmer = () => {
  const { modal, updateModal, closeModal } = useModal()

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
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>15478932</td>
                    <td>Dinesh kumar</td>
                    <td>Male</td>
                    <td>14-05-2021</td>
                    <td>98745XXXXX</td>
                    <td>
                      Churchu Nari Urja Farmer Producer Company Limited
                    </td>
                    <td>-</td>
                  </tr>
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