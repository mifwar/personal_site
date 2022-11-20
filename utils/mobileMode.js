import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const MobileMode = ({ children }) => {
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    const resizeW = () => setMobileMode(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  });

  return <Context.Provider value={mobileMode}>{children}</Context.Provider>;
};

export const useMobileModeContext = () => {
  return useContext(Context);
};
