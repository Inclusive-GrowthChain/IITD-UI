import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddCorporateClient from "./Modals/AddCorporateClient";

const CorporateClient = () => {
  const [show, setShow] = useState(false)

  const updateShow = () => setShow(p => !p)

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="">
          <Button
            className="loan_button mb-3"
            onClick={updateShow}
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
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12451</td>
                    <td>Hitesh</td>
                    <td>hyderabad</td>
                    <td>98621XXXXX</td>
                    <td>example@email.com</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>12451</td>
                    <td>Dinesh</td>
                    <td>hyderabad</td>
                    <td>98621XXXXX</td>
                    <td>example@email.com</td>
                    <td>--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddCorporateClient
        show={show}
        updateShow={updateShow}
      />
    </div>
  )
}

export default CorporateClient