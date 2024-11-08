import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../../assets/menuIcon.png";

const Navbar = () => {
  const [scrollLimit, setScrollLimit] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 250 ? setScrollLimit(true) : setScrollLimit(false);
    });
  }, []);

  return (
    <nav
      className={`w-full flex flex-row flex-nowrap px-10 py-1 items-center justify-between fixed top-0 z-20 ${
        scrollLimit ? "bg-[#C5D3E8]" : ""
      }`}
    >
      <div className="text-center">
        <Link
          className="cursor-pointer"
          to="hero"
          smooth={true}
          offset={-25}
          duration={500}
        >
          <h1 className="text-3xl font-bold italic hover:scale-[1.05]">
            Amaan Naseh
          </h1>
        </Link>
      </div>
      <ul
        className={`list-none lg:flex lg:flex-row gap-10 text-xl p-4 ${
          sideNav
            ? "flex flex-col fixed right-0 top-0 bottom-0 pt-20 bg-inherit transition-all duration-50"
            : "hidden"
        } `}
      >
        <Link
          className="cursor-pointer hover:scale-[1.05]"
          to="about"
          smooth={true}
          offset={-65}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:scale-[1.05]"
          to="skills"
          smooth={true}
          offset={-50}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer hover:scale-[1.05]"
          to="projects"
          smooth={true}
          offset={-65}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer hover:scale-[1.05]"
          to="certifications"
          smooth={true}
          offset={-65}
          duration={500}
        >
          Certifications
        </Link>
        <Link
          className="cursor-pointer hover:scale-[1.05]"
          to="contact"
          smooth={true}
          offset={-65}
          duration={500}
        >
          Contact
        </Link>
      </ul>
      <img
        src={menuIcon}
        className="lg:hidden w-[50px] cursor-pointer z-50"
        alt="menu icon"
        onClick={() => {
          setSideNav(!sideNav);
        }}
      />
    </nav>
  );
};

export default Navbar;
