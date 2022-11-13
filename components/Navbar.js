import React, { useState } from "react";

import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

// import Link from "next/link";

import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const [path, setPath] = useState("b_home");

  const navStyle =
    "z-10 flex items-center max-w-4xl mx-auto -top-1 sticky backdrop-blur-sm bg-white/80 dark:bg-gray-900/80";
  const { isMobile, darkMode, changeDarkMode } = props;
  const links = [
    { id: 1, href: "home", path: "b_home", tx: "Home" },
    { id: 2, href: "about", path: "b_about", tx: "About" },
    { id: 3, href: "projects", path: "b_projects", tx: "Projects" },
    { id: 4, href: "achievements", path: "b_achievements", tx: "Achievements" },
  ];
  return (
    <nav id="nav" className={navStyle}>
      {isMobile ? (
        <Sidebar isDark={darkMode} path={path} />
      ) : (
        <div className="xs:hidden ml-auto pl-10">
          {links.map((link) => (
            <Link
              id={link.path}
              activeClass="active"
              key={link.id}
              to={link.href}
              offset={-90}
              smooth={false}
              duration={25}
              isDynamic={true}
              onClick={() => {
                setPath(link.path);
                for (let i = 0; i < links.length; i++) {
                  document.getElementById(links[i].path).className = darkMode
                    ? "nav-menu-big dark"
                    : "nav-menu-big";
                }
                document.getElementById(link.path).className = darkMode
                  ? "nav-menu-big dark-active"
                  : "nav-menu-big active";
              }}
              className={
                path === link.path
                  ? darkMode
                    ? "nav-menu-big dark-active"
                    : "nav-menu-big active"
                  : darkMode
                  ? "nav-menu-big dark"
                  : "nav-menu-big"
              }
            >
              {link.tx}
            </Link>
          ))}
        </div>
      )}
      <button className="text-sm px-2 py-2 ml-auto mr-10 my-5 rounded-md hover:bg-gray-200 ease-in duration-150 dark:hover:bg-gray-700">
        {darkMode ? (
          <BsSunFill
            className="text-white"
            onClick={() => {
              setPath(path);
              changeDarkMode(!darkMode);
            }}
          />
        ) : (
          <BsFillMoonFill
            onClick={() => {
              setPath(path);
              changeDarkMode(!darkMode);
            }}
          />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
