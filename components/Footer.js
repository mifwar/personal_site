import customLink from "../utils/utils";

const Footer = () => {
  return (
    <div className="flex justify-center text-center flex-col">
      <h4 className="text-xs text-black dark:text-white font-Poppins mt-7 py-1">
        Hosted in
        {customLink("https://vercel.com/", " Vercel ")}
        and built using
        {customLink("https://nextjs.org/", " Next.js ")}
        and
        {customLink("https://tailwindcss.com/", " Tailwind CSS")}
      </h4>
      <h4 className="text-xs text-black dark:text-white font-Poppins py-1">
        MIT License © 2022 Miftahul Anwar
      </h4>
    </div>
  );
};

export default Footer;
