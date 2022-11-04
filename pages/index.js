import Head from "next/head";
import Image from "next/image";
import profile from "../public/MiftahulAnwarCropped.jpg";
import React, { useState, useContext, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useThemeContext } from "../utils/darkMode";
import Navbar from "../components/Navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const resizeW = () => setIsMobile(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  });

  return (
    <div className={darkMode ? "dark " : ""}>
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
            changeDarkMode={setDarkMode}
            path="home"
          />
          <div className="relative rounded-full mx-auto w-48 h-48 overflow-auto my-20">
            <Image src={profile} alt="Miftahul Anwar" placeholder="blur" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-burtons dark:text-white">
              Hi, I am Miftahul Anwar
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
