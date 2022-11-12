const Footer = () => {
  return (
    <>
      <h4 className="text-xs text-black dark:text-white font-Poppins mt-7 py-1">
        This site is hosted in{" "}
        <a
          className="
                text-blue-600
                hover:text-blue-400
                dark:text-blue-400
                dark:hover:text-blue-300"
          href="https://vercel.com/"
          target="_blank"
        >
          Vercel
        </a>{" "}
        and built using{" "}
        <a
          className="
                text-blue-600
                hover:text-blue-400
                dark:text-blue-400
                dark:hover:text-blue-300"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="
                text-blue-600
                hover:text-blue-400
                dark:text-blue-400
                dark:hover:text-blue-300"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind CSS
        </a>
      </h4>
      <h4 className="text-xs text-black dark:text-white font-Poppins py-1">
        MIT License © 2022 Miftahul Anwar
      </h4>
    </>
  );
};

export default Footer;
