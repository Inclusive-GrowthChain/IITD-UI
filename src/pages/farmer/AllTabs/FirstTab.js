import React from "react";
import "../Dashboard.css";

const FirstTab = () => {
  return (
    <div className="firsttab">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className=" table-responsive">
              <table>
                <thead
                  style={{
                    // color: "green",
                    fontSize: "17px",
                    verticalAlign: "top",
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <th>Purchase Id</th>
                    <th>Purchase of Order</th>
                    <th>Item Name</th>
                    {/* <th>Type</th> */}
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>Nylon Bag</td>
                    {/* <td>Bag</td> */}
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>Nylon Bag</td>
                    {/* <td>Bag</td> */}
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>Nylon Bag</td>
                    {/* <td>Bag</td> */}
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>Nylon Bag</td>
                    {/* <td>Bag</td> */}
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>Nylon Bag</td>
                    {/* <td>Bag</td> */}
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTab;
