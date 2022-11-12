import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Link from "next/link";

import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const { isMobile, darkMode, changeDarkMode, path } = props;
  const links = [
    { id: 1, href: "/", path: "home", txt: "Home" },
    { id: 2, href: "/about", path: "about", txt: "About" },
    { id: 3, href: "/projects", path: "projects", txt: "Projects" },
    { id: 4, href: "/achievements", path: "achievements", txt: "Achievements" },
  ];
  return (
    <nav className="flex items-center max-w-3xl mx-auto">
      {isMobile ? (
        <Sidebar isDark={darkMode} path={path} />
      ) : (
        <div className="xs:hidden ml-auto pl-10">
          {links.map((link) => (
            <Link
              key={link.id}
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
