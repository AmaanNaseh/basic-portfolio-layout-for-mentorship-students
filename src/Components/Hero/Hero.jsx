import React, { useState } from "react";
import Amaan from "../../assets/Amaan Naseh.png";

const Hero = () => {
  // const [slideDone, setSlideDone] = useState(true);

  // const handleAnimationEnd = () => {
  //   setSlideDone(false);
  // };

  return (
    <div
      name="hero"
      className="relative h-[500px] overflow-x-hidden overflow-y-hidden"
    >
      <img
        src={Amaan}
        alt="Amaan Naseh"
        className="w-[350px] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <h1 className="z-30 text-[33px] text-white md:text-5xl lg:text-8xl lg:text-transparent lg:bg-clip-text lg:bg-gradientBlackAndWhite absolute left-[50%] translate-x-[-50%] bottom-0">
        Amaan Naseh
      </h1>
      {/* <h1
        onAnimationEnd={handleAnimationEnd}
        className={`text-8xl absolute top-[50%] overflow-x-hidden overflow-y-hidden ${
          slideDone ? " animate-nameSlider" : "opacity-0 hidden"
        }`}
      >
        Amaan Naseh
      </h1> */}
    </div>
  );
};

export default Hero;
