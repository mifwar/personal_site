import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, path } = props;

  const changeSidebarStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <FaBars
          className="menu-bars dark:text-white hover:cursor-pointer"
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
              className="menu-bars dark:text-white hover:cursor-pointer"
              onClick={changeSidebarStatus}
            />
          </div>
          <ul className="nav-menu-items">
            <li>
              <Link
                href="/"
                className={
                  path === "home"
                    ? isDark
                      ? "nav-text dark-active"
                      : "nav-text active"
                    : isDark
                    ? "nav-text dark"
                    : "nav-text"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  path === "about"
                    ? isDark
                      ? "nav-text dark-active"
                      : "nav-text active"
                    : isDark
                    ? "nav-text dark"
                    : "nav-text"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={
                  path === "projects"
                    ? isDark
                      ? "nav-text dark-active"
                      : "nav-text active"
                    : isDark
                    ? "nav-text dark"
                    : "nav-text"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/achievements"
                className={
                  path === "achievements"
                    ? isDark
                      ? "nav-text dark-active"
                      : "nav-text active"
                    : isDark
                    ? "nav-text dark"
                    : "nav-text"
                }
              >
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
