import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";

import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const { isMobile, darkMode, changeDarkMode } = props;
  return (
    <nav className="flex items-center max-w-3xl mx-auto xs:overflow-y-auto">
      {isMobile ? (
        <Sidebar isDark={darkMode} />
      ) : (
        <div className="ml-auto pl-10">
          <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
            Home
          </a>
          <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
            About
          </a>
          <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
            Projects
          </a>
          <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
            Achievements
          </a>
        </div>
      )}
      <div className="text-sm px-2 py-2 ml-auto mr-10 my-5 rounded-md hover:bg-gray-200 ease-in duration-150 dark:hover:bg-gray-700">
        {darkMode ? (
          <BsSunFill
            className="text-white"
            onClick={() => changeDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonFill onClick={() => changeDarkMode(!darkMode)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
