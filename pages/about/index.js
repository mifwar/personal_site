import Head from "next/head";
import Image from "next/image";
import about from "../../public/MiftahulAnwarAbout.jpeg";
import React, { useEffect } from "react";

import { useThemeContext } from "../../utils/darkMode";
import { useMobileModeContext } from "../../utils/mobileMode";
import Navbar from "../../components/Navbar";
import Social from "../../components/Social";
import Footer from "../../components/Footer";

const customLink = (href, text) => (
  <a
    className="
          text-blue-600
          hover:text-blue-400
          dark:text-blue-400
          dark:hover:text-blue-300"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

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
          <p className="text-3xl font-Lato mt-5 xs:mr-7 text-center dark:text-gray-100">
            About Me
          </p>
          <div className="flex justify-center items-start xs:items-center dark:text-white mt-5 mb-10 xs:flex-col-reverse">
            <div className="ml-10 mr-5 max-w-lg text-justify font-Poppins text-sm">
              <p className="mb-3 xs:mr-7">
                Hello! My name is Miftahul Anwar and you can call me Miftah.
              </p>
              <p className="my-3 xs:mr-7">
                My programming journey began when I enrolled as a Computer
                Engineering student at
                {customLink(
                  "https://www.pens.ac.id/",
                  " PENS (Politeknik Elektronika Negeri Surabaya)"
                )}
                .
              </p>
              <p className="my-3 xs:mr-7">
                During college, I spent my first three years in
                {customLink("https://erosrobotic.id/", " EROS ")} as a
                programmer. EROS is a Humanoid Robot Soccer Team under the
                management of the PENS Robotics Team. EROS was developed to
                compete in the Humanoid Robot Soccer League at
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
              <p className="my-3 xs:mr-7">
                While at EROS, I created and participated in several projects.
                My first project involved developing an app that could
                wirelessly track the robot's states while it was on the field. I
                also contributed to the development of an object detection
                system using computer vision, along with other algorithms, such
                as decision-making, teamwork, and localization.
              </p>
              <p className="my-3 xs:mr-7">
                In my last year of college, I worked as a freelance software
                engineer and managed various projects, primarily focused on
                Desktop Apps, Computer Vision, and IoT.
              </p>
              <p className="my-3 xs:mr-7">
                Fast forward to today, I am currently working for
                {customLink("https://www.zenius.net/", " Zenius Education ")}
                as a Software Engineer. I have contributed to the app
                development using Next.js and NestJS.
              </p>
            </div>
            <Image
              className="rounded-lg ml-5 mr-10 mb-10 w-56 xs:w-48"
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
