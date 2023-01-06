import React from "react";
import "../Dashboard.css";

const SecondTab = () => {
  return (
    <div className="secondtab">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="table-responsive">
              <table>
                <thead
                  style={{
                    // color: "green",
                    fontSize: "17px",
                    verticalAlign: "top",
                  }}
                >
                  <tr>
                    <th>Sale Id</th>
                    <th>Date of Sale</th>
                    <th>Type of Lac</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <tr>
                    <td>SAM10742671</td>
                    <td>12-02-22</td>
                    <td>Stick Lac</td>
                    <td>3 kg</td>
                    <td>₹ 520</td>
                  </tr>
                  <tr>
                    <td>SAM10742672</td>
                    <td>24-04-21</td>
                    <td>Seed Lac</td>
                    <td>500 gm</td>
                    <td>₹ 520</td>
                  </tr>
                  <tr>
                    <td>SAM10742672</td>
                    <td>24-04-21</td>
                    <td>Shellac Lac</td>
                    <td>500 gm</td>
                    <td>₹ 520</td>
                  </tr>
                  <tr>
                    <td>SAM10742672</td>
                    <td>24-04-21</td>
                    <td>Stick Lac</td>
                    <td>500 gm</td>
                    <td>₹ 520</td>
                  </tr>
                  <tr>
                    <td>SAM10742672</td>
                    <td>24-04-21</td>
                    <td>Seed Lac</td>
                    <td>500 gm</td>
                    <td>₹ 520</td>
                  </tr>
                  <tr>
                    <td>SAM10742672</td>
                    <td>24-04-21</td>
                    <td>Shellac Lac</td>
                    <td>500 gm</td>
                    <td>₹ 520</td>
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

export default SecondTab;
