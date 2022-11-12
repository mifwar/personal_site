const footerLink = (href, text) => (
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

const Footer = () => {
  return (
    <div className="flex justify-center text-center flex-col">
      <h4 className="text-xs text-black dark:text-white font-Poppins mt-7 py-1">
        Hosted in
        {footerLink("https://vercel.com/", "Vercel")}
        and built using
        {footerLink("https://nextjs.org/", "Next.js")}
        and
        {footerLink("https://tailwindcss.com/", "Tailwind CSS")}
      </h4>
      <h4 className="text-xs text-black dark:text-white font-Poppins py-1">
        MIT License © 2022 Miftahul Anwar
      </h4>
    </div>
  );
};

export default Footer;
