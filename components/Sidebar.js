import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", path: "home", txt: "Home" },
    { href: "/about", path: "about", txt: "About" },
    { href: "/projects", path: "projects", txt: "Projects" },
    // { href: "/achievements", path: "achievements", txt: "Achievements" },
  ];

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
            {links.map((link, i) => (
              <li>
                <Link
                  key={i}
                  href={link.href}
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
                  {link.txt}
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
