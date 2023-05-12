import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getFpoList } from "../../actions/user";
import Loader from "../Common/Loader";

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  fontWeight: 600
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
}

function FPOInfo() {
  const { isLoading, data } = useQuery({
    queryKey: ["user/fpo"],
    queryFn: getFpoList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={h3Style}
            >
              FPO Information
            </h3>
          </div>

          <div className="card shadow">
            <div className=" table-responsive">
              <table className="table table-borderless">
                <thead style={theadStyle}>
                  <tr>
                    <td>FPO ID</td>
                    <td>Name of FPO</td>
                    <td>CEO Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Location</td>
                  </tr>
                </thead>

                <tbody style={tbodyStyle}>
                  {
                    data?.data.map((fpo) => (
                      <tr key={fpo._id}>
                        <td>{fpo._id}</td>
                        <td>
                          <Link
                            to={`/samunnati/fpo-page/${fpo._id}`}
                            className="data_wrapper"
                            style={{ color: "#000", textDecoration: "none" }}
                          >
                            {fpo.fpoName}
                          </Link>
                        </td>
                        <td>{fpo.directorName}</td>
                        <td>{fpo.contactNumber}</td>
                        <td>{fpo.email}</td>
                        <td>{fpo.address} {fpo.city} {fpo.state} {fpo.pinCode}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FPOInfo
