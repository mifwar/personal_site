'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type DarkModeContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const Context = createContext<DarkModeContextType | undefined>(undefined);

type DarkModeProps = {
  children: ReactNode;
};

export const DarkMode: React.FC<DarkModeProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('darkMode') || "false");
    setDarkMode(state);
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

export const useThemeContext = (): DarkModeContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useThemeContext must be used within DarkMode");
  }
  return context;
};
