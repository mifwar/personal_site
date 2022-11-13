import Head from "next/head";
import Image from "next/image";
import about from "../../public/MiftahulAnwarAbout.jpeg";
import React, { useState, useEffect } from "react";

import { useThemeContext } from "../../utils/darkMode";
import Navbar from "../../components/Navbar";
import Social from "../../components/Social";
import Footer from "../../components/Footer";
import { customLink } from "../../utils/utils";

const About = () => {
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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>About</title>
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar
            isMobile={isMobile}
            darkMode={darkMode}
            changeDarkMode={setDarkMode}
            path="about"
          />
          <div className="flex justify-center items-start xs:items-center dark:text-white my-10 xs:flex-col-reverse">
            <div className="mx-10 max-w-lg text-justify font-Poppins text-sm">
              <p className="my-3">
                Hello! My name is Miftahul Anwar and you can call me Miftah.
              </p>
              <p className="my-3">
                My programming journey is started when i became a Computer
                Engineering student at
                {customLink(
                  "https://www.pens.ac.id/",
                  " PENS (Politeknik Elektronika Negeri Surabaya)"
                )}
                .
              </p>
              <p className="my-3">
                During my college life, i spent my first 3 years in
                {customLink("https://erosrobotic.id/", " EROS ")} as a
                programmer. EROS is a Humanoid Robot Soccer Team under the
                management of PENS Robotics Team. EROS is developed to compete
                in Humanoid Robot Soccer League in
                {customLink(
                  "https://kontesrobotindonesia.id",
                  " Kontes Robot Indonesia "
                )}
                and
                {customLink(
                  "https://humanoid.robocup.org/",
                  " Robocup Humanoid League"
                )}
                .
              </p>
              <p className="my-3">
                While at EROS, i created and involved in some projects. My first
                project is creating an app that able to wirelessly track the
                robot states while robot in the field. I also involved to
                develop a decision making algorithm, an object detection system
                using computer vision, and a teamwork algorithm.
              </p>
              <p className="my-3">
                In my last year at college, i became a freelance software
                engineer and handled some projects that mostly about Desktop
                App, Computer Vision, and IoT.
              </p>
              <p className="my-3">
                Fast forward to today, I am currently working for
                {customLink("https://www.zenius.net/", " Zenius Education ")}
                as a Clojure Developer. I created a Clojure app to speed up the
                tutor in Zenius to create a school exercise problems.
              </p>
            </div>
            <Image
              className="rounded-lg m-5  w-56 xs:w-48"
              src={about}
              alt="Miftahul Anwar"
              placeholder="blur"
            />
          </div>
          <Social />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default About;
