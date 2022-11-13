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

export default customLink;
