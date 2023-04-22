import { useState } from "react";

const style1 = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const style2 = {
  backgroundColor: "#FFD700",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const tabs = [
  {
    id: 1,
    title: "Active Loans",
  },
  {
    id: 2,
    title: "Loan History",
  },
  {
    id: 3,
    title: "Loan in Process",
  },
]

function Panel2({ theadStyle, tbodyStyle, handleShow, handleShowRepayment }) {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = i => setToggleState(i)

  return (
    <div className="loan_container">
      <div className="bloc-tabs">
        {
          tabs.map(t => (
            <button
              key={t.id}
              style={{ marginRight: "10px" }}
              className={`tabs-1 ${toggleState === t.id ? "active-tabs" : ""}`}
              onClick={() => toggleTab(t.id)}
            >
              {t.title}
            </button>
          ))
        }
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <div className="card_table1 text-center">
            <div className="table-responsive">
              <table>
                <thead style={theadStyle}>
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Application Date</th>
                    <th>Loan Amount</th>
                    <th>Loan Date</th>
                    <th>Outstanding Amount</th>
                    <th>Next Payment Amount</th>
                    <th>Next Payment Date</th>
                    <th>Repayment Structure</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody style={tbodyStyle}>
                  <tr>
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                        onClick={handleShowRepayment}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                        onClick={handleShowRepayment}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <div className="card_table1 text-center">
            <div className="table-responsive">
              <table>
                <thead style={theadStyle}>
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Application Date</th>
                    <th>Loan Amount</th>
                    <th>Loan Date</th>
                    <th>Outstanding Amount</th>
                    <th>Next Payment Amount</th>
                    <th>Next Payment Date</th>
                  </tr>
                </thead>
                <tbody style={tbodyStyle}>
                  <tr>
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                  </tr>
                  <tr>
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <div className="card_table1 text-center">
            <div className="table-responsive">
              <table>
                <thead style={theadStyle}>
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Application Date</th>
                    <th>Loan Amount</th>
                    <th>Loan Application</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody style={tbodyStyle}>
                  <tr>
                    <td>2022-64-07</td>
                    <td>02-05-2022</td>
                    <td>₹ 7345</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                        onClick={handleShow}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-64-07</td>
                    <td>02-05-2022</td>
                    <td>₹ 7345</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-64-07</td>
                    <td>02-05-2022</td>
                    <td>₹ 7345</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending with samunnati
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-64-07</td>
                    <td>02-05-2022</td>
                    <td>₹ 7345</td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style1}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={style2}
                      >
                        Pending with samunnati
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel2