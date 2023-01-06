import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";

const Supports = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="list_container">
            <div className="setting_data flex-1 container-fluid">
              <textarea
                className="setting_content"
                placeholder="Enter your queries..."
              ></textarea>

              <button className="seting_btn bg-[#a3dc5d] hover:bg-[#74a03e]">
                Submit
              </button>
            </div>

            <div className="df px-8 h-[inherit]">
              {/* <img
                className='w-96'
                src=""
                alt="Support"
              /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Supports;
