import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Supports = () => {
  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
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
        </div>
      </div>
    </div>
  );
};

export default Supports;
