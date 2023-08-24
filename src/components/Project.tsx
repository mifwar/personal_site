import Image from "next/image";

import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
  const {
    isMobile,
    title,
    description,
    techStacks,
    align,
    href,
    isDark,
    image,
    image_alt,
  } = props;
  const joinedTechStacks = techStacks.join(" | ");
  return (
    <div
      className={
        isMobile
          ? "project-container mobile"
          : "project-container ".concat(align === "right" ? "right" : "left")
      }
    >
      <div
        className={
          "dark:text-gray-100 project-description-container xs:mobile x2s:tiny-mobile"
        }
      >
        <p
          className={"project-title-container ".concat(
            isMobile ? "center" : align === "right" ? "right" : "left"
          )}
        >
          {title}
        </p>
        <p
          className={"project-description "
            .concat(isDark ? "dark " : "")
            .concat(isMobile ? "mobile" : align === "right" ? "right" : "left")}
        >
          {description}
        </p>
        <div
          className={"tech-stack-container ".concat(
            isMobile ? "mobile" : align === "right" ? "right" : "left"
          )}
        >
          {techStacks.map((stack, i) => (
            <p key={i} className="mx-2">
              {stack}
            </p>
          ))}
        </div>
        <div
          className={"reference-container ".concat(
            isMobile ? "mobile" : align === "right" ? "right" : "left"
          )}
        >
          <a
            className="dark:hover:text-blue-400 hover:text-blue-600"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div
        className={"project-image-container".concat(isMobile ? " mobile" : "")}
      >
        <Image
          className={"project-image".concat(isMobile ? " mobile" : "")}
          src={image}
          alt={image_alt}
          placeholder="blur"
        />
      </div>
      <div
        className={
          isMobile ? "project-image-overlay dark:dark absolute" : "hidden"
        }
      ></div>
    </div>
  );
};

export default Project;
