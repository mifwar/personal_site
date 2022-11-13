import Head from "next/head";
import Image from "next/image";
import profile from "../public/MiftahulAnwarCropped.jpg";
import React, { useState, useContext, useEffect } from "react";

import { useThemeContext } from "../utils/darkMode";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const resizeW = () => setIsMobile(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  });

  useEffect(() => {
    {
      darkMode
        ? document.body.classList.add("bg-gray-900")
        : document.body.classList.add("bg-white");
    }

    return () => {
      {
        darkMode
          ? document.body.classList.remove("bg-gray-900")
          : document.body.classList.remove("bg-white");
      }
    };
  });

  return (
    <div className={darkMode ? "dark " : ""}>
      <Head>
        <title>Miftahul Anwar</title>
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Navbar
          isMobile={isMobile}
          darkMode={darkMode}
          changeDarkMode={setDarkMode}
          path="home"
        />
        <section className="py-16 min-h-screen" id="home">
          <div className="relative rounded-full mx-auto w-52 h-52 overflow-auto mb-10">
            <Image src={profile} alt="Miftahul Anwar" placeholder="blur" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-burtons dark:text-white font-Lato py-5">
              Hi, I am Miftahul Anwar
            </h1>
            <h2 className="text-xl font-burtons dark:text-white font-Poppins py-1">
              I am a software engineer based in Jakarta, ID.
            </h2>
            <h2 className="text-xl font-burtons dark:text-white font-Poppins py-1">
              Currently working as a{" "}
              <a
                className="text-green-600 dark:text-green-400"
                href="https://clojure.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clojure
              </a>{" "}
              Dev at{" "}
              <a
                className="text-purple-600 dark:text-purple-400"
                href="https://zenius.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenius
              </a>
            </h2>
            <button
              className="
              m-7 px-4 py-2
              fill-none
              font-Lato
              border
              text-blue-600
              border-blue-600
              hover:text-white
              hover:bg-blue-600
              dark:border-blue-400
              dark:text-blue-400
             dark:hover:bg-blue-400
             dark:hover:text-black
             rounded-md hover"
            >
              See my resume
            </button>
          </div>
        </section>
        <About />
        <Projects />
        <Achievements />
        <Social />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
