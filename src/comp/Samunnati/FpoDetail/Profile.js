
const list = [
  {
    lable: "ID",
    name: "_id",
  },
  {
    lable: "Name",
    name: "fpoName",
  },
  {
    lable: "CEO Name",
    name: "directorName",
  },
  {
    lable: "Phone",
    name: "contactNumber",
  },
  {
    lable: "Email",
    name: "email",
  },
  {
    lable: "Location",
    name: ["address", "city", "state", "pinCode"],
  },
]

function Profile({ fpo }) {
  return (
    <div className="card shadow">
      <div className="card_table">
        <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
          FPO Information
        </h6>
        <div className="pl-lg-4">
          {
            list.map(l => (
              <div key={l.lable} className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      {l.lable}
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      {
                        typeof l.name === "string" ? fpo[l.name] :
                          l.name.map(v => fpo[v]).join(", ")
                      }
                    </label>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Profile