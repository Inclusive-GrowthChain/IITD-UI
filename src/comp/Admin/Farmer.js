import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddFarmer from "./Modals/AddFarmer";

const Farmer = () => {
  const [show, setShow] = useState(false)

  const updateShow = () => setShow(p => !p)

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="title__wrapper">
          <Button
            className="loan_button mb-3"
            onClick={updateShow}
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddFarmer
        show={show}
        updateShow={updateShow}
      />
    </div>
  )
}

export default Farmer