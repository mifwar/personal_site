import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Link from "next/link";

import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const navStyle =
    "z-10 flex items-center max-w-4xl mx-auto -top-1 sticky bg-white/90 dark:bg-gray-900/90";
  const navStyleBlur =
    "z-10 flex items-center max-w-4xl mx-auto -top-1 sticky backdrop-blur-sm bg-white/90 dark:bg-gray-900/90";
  const { isMobile, darkMode, changeDarkMode, path } = props;
  const links = [
    { href: "/", path: "home", txt: "Home" },
    { href: "/about", path: "about", txt: "About" },
    { href: "/projects", path: "projects", txt: "Projects" },
    // { href: "/achievements", path: "achievements", txt: "Achievements" },
  ];
  return (
    <nav className={isMobile ? navStyle : navStyleBlur}>
      {isMobile ? (
        <Sidebar isDark={darkMode} path={path} />
      ) : (
        <div className="xs:hidden ml-auto pl-10">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
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
              {link.txt}
            </Link>
          ))}
        </div>
      )}
      <button className="text-sm px-2 py-2 ml-auto mr-10 my-5 rounded-md hover:bg-gray-200 ease-in duration-150 dark:hover:bg-gray-700">
        {darkMode ? (
          <BsSunFill
            className="text-white"
            aria-label="toggle dark mode"
            onClick={() => changeDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonFill
            aria-label="toggle dark mode"
            onClick={() => changeDarkMode(!darkMode)}
          />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
