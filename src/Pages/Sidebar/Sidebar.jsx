import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="sidebar vh-100 text-white position-fixed top-0 start-0">
      <div className="sidebar-header text-center">
        <h4 className="m-0">Bill Management System</h4>
      </div>
      <nav className="nav-menu">
        <ul>
          {SideBarData?.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.icon} {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
