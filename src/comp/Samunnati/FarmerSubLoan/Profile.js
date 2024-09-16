const list = [
  {
    label: "ID",
    name: "fpoId",
  },
  {
    label: "Name",
    name: "fpoName",
  },
  {
    label: "Loan Window ID",
    name: "windowId",
  },
  {
    label: "Phone",
    name: "contactNo",
  },
  {
    label: "Approved Loan Amount",
    name: "grantedAmount",
  },
]

function Profile({ loanWindow }) {
  return (
    <div className="card shadow">
      <div className="card_table">
        <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
          FPO Information
        </h6>

        <div className="pl-lg-4">
          {
            list?.map(l => (
              <div key={l.name} className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      {l.label}
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      {loanWindow[l.name]}
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