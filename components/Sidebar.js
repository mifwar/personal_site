import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

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
            <li>
              <Link href="/" className="nav-text dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-text dark:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-text dark:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="nav-text dark:text-white">
                Achievements
              </Link>
            </li>
          </ul>
        </nav>
        <div className={isOpen ? "overlay active" : "overlay"}></div>
      </div>
    </>
  );
};

export default Sidebar;
