import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('darkMode'));
    if (state) {
      setDarkMode(state);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(Context);
};
