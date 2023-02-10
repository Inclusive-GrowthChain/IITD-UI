import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./Sidebar.css";

function SideBar({ list = [] }) {
  return (
    <Row className="sidebar_wrapper app-sidebar">
      <Col className="sidebar_content">
        <ul>
          {
            list.map(l => (
              <NavLink
                key={l.title}
                to={l.to}
                className="sidebar_data"
              >
                {l.icon}
                <span className="sidebar_titles">{l.title}</span>
              </NavLink>
            ))
          }
        </ul>
      </Col>
    </Row>
  )
}

export default SideBar