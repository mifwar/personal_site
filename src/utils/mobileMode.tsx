'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const Context = createContext<boolean | undefined>(undefined);

type MobileModeProps = {
  children: ReactNode;
};

export const MobileMode: React.FC<MobileModeProps> = ({ children }) => {
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  useEffect(() => {
    const resizeW = () => setMobileMode(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  }, []);

  return <Context.Provider value={mobileMode}>{children}</Context.Provider>;
};

export const useMobileModeContext = (): boolean => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useMobileModeContext must be used within MobileMode");
  }
  return context;
};
