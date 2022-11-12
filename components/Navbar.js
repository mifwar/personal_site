import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Link from "next/link";

import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const { isMobile, darkMode, changeDarkMode, path } = props;
  return (
    <nav className="flex items-center max-w-3xl mx-auto">
      {isMobile ? (
        <Sidebar isDark={darkMode} path={path} />
      ) : (
        <div className="xs:hidden ml-auto pl-10">
          <Link
            href="/"
            className={
              path === "home"
                ? darkMode
                  ? "nav-menu-big dark-active"
                  : "nav-menu-big active"
                : darkMode
                ? "nav-menu-big dark"
                : "nav-menu-big"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              path === "about"
                ? darkMode
                  ? "nav-menu-big dark-active"
                  : "nav-menu-big active"
                : darkMode
                ? "nav-menu-big dark"
                : "nav-menu-big"
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              path === "projects"
                ? darkMode
                  ? "nav-menu-big dark-active"
                  : "nav-menu-big active"
                : darkMode
                ? "nav-menu-big dark"
                : "nav-menu-big"
            }
          >
            Projects
          </Link>
          <Link
            href="/achievements"
            className={
              path === "achievements"
                ? darkMode
                  ? "nav-menu-big dark-active"
                  : "nav-menu-big active"
                : darkMode
                ? "nav-menu-big dark"
                : "nav-menu-big"
            }
          >
            Achievements
          </Link>
        </div>
      )}
      <button className="text-sm px-2 py-2 ml-auto mr-10 my-5 rounded-md hover:bg-gray-200 ease-in duration-150 dark:hover:bg-gray-700">
        {darkMode ? (
          <BsSunFill
            className="text-white"
            onClick={() => changeDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonFill onClick={() => changeDarkMode(!darkMode)} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
