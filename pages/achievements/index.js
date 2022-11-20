import Head from "next/head";
import React, { useEffect } from "react";

import Social from "../../components/Social";
import Footer from "../../components/Footer";

import { useThemeContext } from "../../utils/darkMode";
import { useMobileModeContext } from "../../utils/mobileMode";
import Navbar from "../../components/Navbar";

const About = () => {
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
            changeDarkMode={setDarkMode}
            path="achievements"
          />
          <div className="flex justify-center items-center h-screen -my-16 dark:text-white">
            Achievements Page
          </div>
          <Social />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default About;
