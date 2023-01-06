import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          x: 'Category A',
          categories: [2019, 2020, 2021, 2022,]
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50],
        },
      ],
    };
  }

  render() {
    return (
      <div className="farmer">
        <Sidebar />
        <div className="farmerContainer">
          <Navbar />
          <div className="itemContainer">
            <div className="list_title">
              <div className="dashboard__title" style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "10px", borderRadius: "10px", width: "33%"}}>
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
