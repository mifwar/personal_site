import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Social = () => {
  const socialClass =
    "px-3 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400";
  const socials = [
    { i: 1, h: "mailto:hello@mifwar.com", c: <FaEnvelope /> },
    { i: 2, h: "https://github.com/mifwar", c: <FaGithub /> },
    { i: 3, h: "https://hackerrank.com/2210171043_mif", c: <FaHackerrank /> },
    { i: 4, h: "https://linkedin.com/in/miftahulanwar/", c: <FaLinkedin /> },
    { i: 5, h: "https://twitter.com/mif_war", c: <FaTwitter /> },
    { i: 6, h: "https://instagram.com/mif.war", c: <FaInstagram /> },
  ];
  return (
    <div className="text-lg flex justify-center mx-auto mt-20">
      {socials.map((social) => (
        <a
          key={social.i}
          className={socialClass}
          href={social.h}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.c}
        </a>
      ))}
    </div>
  );
};

export default Social;
