import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import profile from "../public/MiftahulAnwarCropped.jpg";
import React, { useEffect } from "react";

import { useThemeContext } from "../utils/darkMode";
import { useMobileModeContext } from "../utils/mobileMode";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const isMobile = useMobileModeContext();

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
        <section className="min-h-screen">
          <Navbar
            isMobile={isMobile}
            darkMode={darkMode}
            changeDarkMode={setDarkMode}
            path="home"
          />
          <div className="relative rounded-full mx-auto w-48 h-48 overflow-auto mt-14 mb-10">
            <Image src={profile} alt="Miftahul Anwar" placeholder="blur" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-burtons dark:text-white font-Lato py-5">
              Hi, I am Miftahul Anwar
            </h1>
            <h2 className="text-md font-burtons dark:text-white font-Poppins py-1">
              I am a software engineer based in Jakarta, ID.
            </h2>
            <h2 className="text-md font-burtons dark:text-white font-Poppins py-1">
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
          </div>
          <Link
            href="/resume.pdf"
            className={"btn-resume ".concat(darkMode ? "dark" : "")}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </Link>
          <Social />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
