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
      className={`w-full flex flex-row flex-nowrap px-10 py-2 pb-3 items-center justify-between fixed top-0 z-40 ${
        scrollLimit ? "bg-[#D3D8EC]" : ""
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
          <h1 className="text-2xl md:text-3xl font-bold italic hover:scale-[1.05]">
            Amaan Naseh
          </h1>
        </Link>
      </div>
      <ul
        className={`list-none lg:flex lg:flex-row gap-10 font-semibold text-lg md:text-xl p-4 pr-16 ${
          sideNav
            ? "flex flex-col fixed z-40 right-0 top-0 bottom-0 pt-20 bg-inherit transition-all duration-50"
            : "hidden"
        }`}
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
        className="lg:hidden w-[35px] cursor-pointer z-40"
        alt="menu icon"
        onClick={() => {
          setSideNav(!sideNav);
        }}
      />
    </nav>
  );
};

export default Navbar;
