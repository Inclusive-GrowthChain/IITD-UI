import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const FpoDashboard = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container">
          <div className="">
            <h3 className="mb-4">Dashboard</h3>
          </div>
          <div className="list_container">
          </div>
        </main>
      </div>
    </div>
  );
};

export default FpoDashboard;
