import Head from "next/head";
import React, { useState, useEffect } from "react";

import Social from "../../components/Social";
import Footer from "../../components/Footer";

import peed from "../../public/peed.jpg";
import archery from "../../public/archery.png";
import nmea from "../../public/nmea.png";
import descotin from "../../public/descotin.png";

import { useThemeContext } from "../../utils/darkMode";
import Navbar from "../../components/Navbar";
import Project from "../../components/Project";

const About = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);

  const techStack = ["QT C++", "Linux", "OpenCV", "Rest API"];

  const projects = [
    {
      title: "PEED",
      techStack: ["QT C++", "Linux", "OpenCV", "Rest API"],
      image: peed,
      image_alt: "PEED Project",
      description:
        "PEED is a device that allows you to stream your ear conditions, lungs \
      and heartbeat, body temperature, and many more over the internet to \
      your doctor.",
      href: "https://drive.google.com/file/d/132uqRam78hB6_sBnRlPHyweO-P-BafXy/view",
    },
    {
      title: "Archery Pose Estimator",
      techStack: ["QT C++", "Linux", "OpenCV", "ROS"],
      image: archery,
      image_alt: "Archery Pose Estimator Project",
      description:
        "This software has an ability to detect and analyze human pose, then measure the error \
        between current pose and your bookmarked pose.",
      href: "https://drive.google.com/file/d/19DjfausyPM2st9Fx8QoadfFMDGY6DBFC/view",
    },
    {
      title: "NMEA Monitor",
      techStack: ["QT C++", "TCP", "OpenCV", "FFmpeg"],
      image: nmea,
      image_alt: "NMEA Monitor Project",
      description:
        "NMEA Monitor can listen data through TCP with NMEA standard, visualize it, record and replay screen, and upload & download a recorded video(s) to disk.",
      href: "https://drive.google.com/file/d/18kemS1v5D3-mX-1DmqC870QQGCZVoxU2/view",
    },
    {
      title: "Descotin",
      techStack: ["QT C++", "Linux", "OpenCV", "Rest API"],
      image: descotin,
      image_alt: "Descotin Deteksi Suhu for Covid-19",
      description:
        "This device can detect whether a person wearing a mask or not. This device also able to measure human temperature and send the report to website.",
      href: "https://drive.google.com/file/d/19DjfausyPM2st9Fx8QoadfFMDGY6DBFC/view",
    },
  ];

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
        <title>Miftahul Anwar</title>
        <meta name="description" content="Miftahul Anwar's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Navbar
          isMobile={isMobile}
          darkMode={darkMode}
          changeDarkMode={setDarkMode}
          path="projects"
        />
        <section>
          <p className="text-center text-3xl my-5 font-Lato font-bold dark:text-gray-100">
            My Projects
          </p>
          <p className="text-center text-md my-5 mx-11 font-Poppins dark:text-gray-100">
            Here are some projects that I&lsquo;ve developed
          </p>
          {projects.map((project, i) => (
            <Project
              key={i}
              isMobile={isMobile}
              isDark={darkMode}
              title={project.title}
              techStacks={project.techStack}
              image={project.image}
              image_alt={project.image_alt}
              description={project.description}
              href={project.href}
              align={i % 2 == 0 ? "right" : "left"}
            />
          ))}
        </section>
        <Social />
        <Footer />
      </main>
    </div>
  );
};

export default About;
