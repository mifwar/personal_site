import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
// import { GrClose } from "react-icons/gr";
// import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = props;

  const changeSidebarStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <FaBars
          className="menu-bars dark:text-white"
          onClick={changeSidebarStatus}
        />
      </div>
      <div>
        <nav
          className={
            isOpen
              ? isDark
                ? "nav-menu dark active"
                : "nav-menu active"
              : isDark
              ? "nav-menu dark"
              : "nav-menu"
          }
        >
          <div className="text-xl -pl-3 py-1 my-5 ">
            <AiOutlineClose
              className="menu-bars dark:text-white"
              onClick={changeSidebarStatus}
            />
          </div>
          <ul className="nav-menu-items">
            <li className="nav-text dark:text-white">Home</li>
            <li className="nav-text dark:text-white">About</li>
            <li className="nav-text dark:text-white">Projects</li>
            <li className="nav-text dark:text-white">Achievements</li>
          </ul>
        </nav>
        <div className={isOpen ? "overlay active" : "overlay"}></div>
      </div>
    </>
  );
};

export default Sidebar;
