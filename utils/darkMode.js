import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(Context);
};
