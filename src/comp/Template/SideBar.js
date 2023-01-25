import { NavLink } from "react-router-dom";

function SideBar({ list = [] }) {
  return (
    <div className="sidebar_wrapper app-sidebar">
      <div className="sidebar_content">
        <ul>
          {
            list.map(l => (
              <NavLink
                key={l.title}
                to={l.to}
                className="sidebar_data"
              >
                {l.icon}
                <span>{l.title}</span>
              </NavLink>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar