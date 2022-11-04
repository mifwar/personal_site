import Head from "next/head";
import Image from "next/image";
import profile from "../../public/MiftahulAnwarCropped.jpg";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useThemeContext } from "../../utils/darkMode";
import Navbar from "../../components/Navbar";

const About = () => {
  const [darkMode, setDarkMode] = useThemeContext();

  function changeDarkMode(status) {
    setDarkMode(status);
  }

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const resizeW = () => setIsMobile(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Miftahul Anwar</title>
        <meta name="description" content="Miftahul Anwar's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar
            isMobile={isMobile}
            darkMode={darkMode}
            changeDarkMode={changeDarkMode}
          />
          <div className="flex justify-center items-center h-screen -my-16 dark:text-white">
            About Page
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
