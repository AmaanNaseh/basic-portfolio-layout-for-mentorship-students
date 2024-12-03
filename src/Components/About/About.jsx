import React from "react";
import USAR from "../../assets/USAR.jpg";
import { Link } from "react-router-dom";
import resumeIcon from "../../assets/ResumeIcon.png";

const About = () => {
  return (
    <div
      name="about"
      className="bg-black text-white px-10 py-12 h-full bg-cover bg-center flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:basis-[35%] p-2 flex flex-col items-center gap-8">
        <h1 className="text-5xl md:text-7xl font-bold md:mt-[-100px]">About</h1>
        <div className="flex items-center justify-center gap-8">
          <img
            className="w-[100px] lg:w-[125px]"
            src={resumeIcon}
            alt="resume icon"
          />
          <Link to={"/resume"}>
            <button className="px-8 py-2 text-2xl lg:text-3xl rounded-lg bg-white text-black font-semibold hover:scale-[1.15]">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="md:basis-[60%] p-2 flex flex-col items-center gap-8">
        <img src={USAR} className="w-[325px] lg:w-[450px]" alt="USAR" />
        <p className="text-justify w-[325px] lg:w-[450px]">
          Student | B.Tech (Robotics, USAR) | Full Stack Web Developer | Winner
          of ICAPIE 2024 Best Research/Review Paper Award
        </p>
      </div>
    </div>
  );
};

export default About;
