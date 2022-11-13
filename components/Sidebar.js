import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
// import Link from "next/link";

import { Link, animateScroll as scroll } from "react-scroll";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = props;
  const [path, setPath] = useState("b_home");

  const changeSidebarStatus = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { id: 1, href: "home", path: "b_home", tx: "Home" },
    { id: 2, href: "about", path: "b_about", tx: "About" },
    { id: 3, href: "projects", path: "b_projects", tx: "Projects" },
    { id: 4, href: "achievements", path: "b_achievements", tx: "Achievements" },
  ];

  const navStyle =
    "z-10 flex items-center max-w-4xl mx-auto -top-1 sticky bg-white/80 dark:bg-gray-900/80";
  const navStyleBlur =
    "z-10 flex items-center max-w-4xl mx-auto -top-1 sticky backdrop-blur-sm bg-white/80 dark:bg-gray-900/80";

  return (
    <>
      <div className="navbar">
        <FaBars
          className="menu-bars dark:text-white hover:cursor-pointer"
          onClick={() => {
            document.getElementById("nav").className = navStyle;
            changeSidebarStatus();
          }}
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
              onClick={() => {
                document.getElementById("nav").className = navStyleBlur;
                changeSidebarStatus();
              }}
            />
          </div>
          <ul className="nav-menu-items">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  id={link.path}
                  activeClass="active"
                  to={link.href}
                  offset={-90}
                  onClick={() => {
                    changeSidebarStatus();
                    setPath(link.path);
                    for (let i = 0; i < links.length; i++) {
                      document.getElementById(links[i].path).className = isDark
                        ? "nav-text dark"
                        : "nav-text";
                    }
                    document.getElementById(link.path).className = isDark
                      ? "nav-text dark-active"
                      : "nav-text active";
                  }}
                  className={
                    path === link.path
                      ? isDark
                        ? "nav-text dark-active"
                        : "nav-text active"
                      : isDark
                      ? "nav-text dark"
                      : "nav-text"
                  }
                >
                  {link.tx}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={isOpen ? "overlay active" : "overlay"}></div>
      </div>
    </>
  );
};

export default Sidebar;
