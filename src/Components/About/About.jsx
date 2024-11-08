import React from "react";
import USAR from "../../assets/USAR.jpg";
import robotHand from "../../assets/robotHand.png";

const About = () => {
  return (
    <div
      name="about"
      className="bg-black text-white px-10 py-12 h-full bg-cover bg-center flex flex-row items-center justify-between"
    >
      <div className="basis-[35%] p-2 flex flex-col items-center gap-8">
        <h1 className="text-9xl font-bold">About</h1>
        <img className="w-[250px]" src={robotHand} alt="..." />
      </div>
      <div className="basis-[60%] p-2 flex flex-col items-center gap-8">
        <img src={USAR} className="w-[450px]" alt="USAR" />
        <p className="text-justify w-[450px]">
          Student | B.Tech (Robotics, USAR) | Full Stack Web Developer | Winner
          of ICAPIE 2024 Best Research/Review Paper Award
        </p>
      </div>
    </div>
  );
};

export default About;
