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
    {
      href: "mailto:hello@mifwar.com",
      component: <FaEnvelope />,
      aria: "email",
    },
    {
      href: "https://github.com/mifwar",
      component: <FaGithub />,
      aria: "github",
    },
    {
      href: "https://hackerrank.com/2210171043_mif",
      component: <FaHackerrank />,
      aria: "hackerrank",
    },
    {
      href: "https://linkedin.com/in/miftahulanwar/",
      component: <FaLinkedin />,
      aria: "linkedin",
    },
    {
      href: "https://twitter.com/mif_war",
      component: <FaTwitter />,
      aria: "twitter",
    },
    {
      href: "https://instagram.com/mif.war",
      component: <FaInstagram />,
      aria: "instagram",
    },
  ];
  return (
    <div className="text-lg flex justify-center mx-auto mt-10">
      {socials.map((social, i) => (
        <a
          key={i}
          aria-label={social.aria}
          className={socialClass}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.component}
        </a>
      ))}
    </div>
  );
};

export default Social;
