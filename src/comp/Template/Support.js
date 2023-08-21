import "./Support.css";

function Support() {
  return (
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

        <div className="df px-8 h-[inherit]"></div>
      </div>
    </div>
  )
}

export default Support