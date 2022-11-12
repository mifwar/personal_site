import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="text-lg flex justify-center mx-auto text-black dark:text-white mt-20">
      <a className="px-3" href="mailto:hello@mifwar.com" target="_blank">
        <FaEnvelope />
      </a>
      <a className="px-3" href="https://github.com/mifwar" target="_blank">
        <FaGithub />
      </a>
      <a
        className="px-3"
        href="https://hackerrank.com/2210171043_mif"
        target="_blank"
      >
        <FaHackerrank />
      </a>
      <a
        className="px-3"
        href="https://www.linkedin.com/in/miftahulanwar/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a className="px-3" href="https://twitter.com/mif_war" target="_blank">
        <FaTwitter />
      </a>
      <a className="px-3" href="https://instagram.com/mif.war" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;
