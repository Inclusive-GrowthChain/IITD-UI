import React, { Component } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

class SellingPrice extends Component {
  state = {
    options: [
      {
        name: "Select",
        value: null,
      },
      {
        name: "A",
        value: "₹ 320",
        value1: "₹ 340"
      },
      {
        name: "B",
        value: "₹ 340",
      },
      {
        name: "C",
        value: "₹ 360",
      },
    ],
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    // const { options, value } = this.state;

    return (
      <div className="farmer">
        <Sidebar />
        <div className="farmerContainer">
          <Navbar />
          <div className="itemContainer">
            <div className="list_title">
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3
                    className="text-dark mb-0"
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "rgb(33, 37, 41)",
                    }}
                  >
                    Shop from FPO
                  </h3>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card">
                      <img
                        src="https://3.imimg.com/data3/TM/JM/ETO-196508/1-294285-full-images-stick-lac-1081592-500x500.jpg"
                        className="card-img-top"
                        alt=""
                        style={{ height: "450px", }}
                      />
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h4>Stick Lac</h4>
                          </div>
                        </div>
                        {/* <div className="row mt-2">
                          <div className="col-8">
                            <strong>Quantity (in kg)</strong>
                          </div>
                          <div className="form-label col-4">
                            <select onChange={this.handleChange} value={value}>
                              {options.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div> */}
                        <div className="row mt-2">
                          <div className="col-7">
                            <div className="row">
                              <div className="col">
                                <h5>Market Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col">
                                <h5>FPO Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img
                        src="https://img3.exportersindia.com/product_images/bc-full/2018/9/1491297/seedlac-shellac-1536140025-4266463.jpg"
                        className="card-img-top"
                        alt=""
                        style={{ height: "450px", }}
                      />
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h4>Stick Lac</h4>
                          </div>
                        </div>
                        {/* <div className="row mt-2">
                          <div className="col-8">
                            <strong>Quantity (in kg)</strong>
                          </div>
                          <div className="form-label col-4">
                          <select onChange={this.handleChange} value={value}>
                              {options.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div> */}
                        <div className="row mt-2">
                          <div className="col-7">
                            <div className="row">
                              <div className="col">
                                <h5>Market Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col">
                                <h5>FPO Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img
                        src="https://5.imimg.com/data5/WH/TW/MY-1496311/shellac-processed-versatile-lac-golden-kusmi-500x500.jpg"
                        className="card-img-top"
                        alt=""
                        style={{ height: "450px", }}
                      />
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h4>Stick Lac</h4>
                          </div>
                        </div>
                        {/* <div className="row mt-2">
                          <div className="col-8">
                            <strong>Quantity (in kg)</strong>
                          </div>
                          <div className="form-label col-4">
                          <select onChange={this.handleChange} value={value}>
                              {options.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div> */}
                        <div className="row mt-2">
                          <div className="col-7">
                            <div className="row">
                              <div className="col">
                                <h5>Market Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col">
                                <h5>FPO Price</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <span>500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellingPrice;
