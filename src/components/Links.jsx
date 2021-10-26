import React from "react";
import { NavLink } from "react-router-dom";
import { BsNewspaper, BsImages } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";

const links = [
  { url: "/search", text: "All", Icon: BiSearchAlt },
  { url: "/news", text: "News", Icon: BsNewspaper },
  { url: "/images", text: "Images", Icon: BsImages },
  { url: "/videos", text: "Videos", Icon: IoLogoYoutube },
];
const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text, Icon }, index) => (
        <NavLink
          to={url}
          key={index}
          className="flex items-center m-2 mb-0"
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          <Icon className="mr-2" size={"1.2rem"} />
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
