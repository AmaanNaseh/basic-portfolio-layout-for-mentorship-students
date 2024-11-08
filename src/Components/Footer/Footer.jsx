import React from "react";
import linkedInIcon from "../../assets/Linkedin.png";
import githubIcon from "../../assets/Github.png";
import instaIcon from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-evenly bg-gradientBlack py-12">
      <div className="w-[50px]">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/amaan-naseh"
        >
          <img
            className="hover:scale-[1.15] cursor-pointer"
            src={linkedInIcon}
            alt="linkedin"
          />
        </a>
      </div>
      <div className="w-[50px]">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AmaanNaseh"
        >
          <img
            className="hover:scale-[1.15] cursor-pointer"
            src={githubIcon}
            alt="github"
          />
        </a>
      </div>
      <div className="w-[50px]">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/amaan_naseh"
        >
          <img
            className="hover:scale-[1.15] cursor-pointer"
            src={instaIcon}
            alt="instagram"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
