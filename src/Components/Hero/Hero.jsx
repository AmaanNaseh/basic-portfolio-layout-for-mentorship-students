import React, { useEffect, useState } from "react";
import Amaan from "../../assets/Amaan Naseh.png";

const Hero = () => {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDelay(true);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div name="hero" className="relative h-[500px] overflow-x-hidden">
      <img
        src={Amaan}
        alt="Amaan Naseh"
        className="w-[350px] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <h1
        className={`text-8xl absolute top-[35%] translate-y-[-35%] overflow-x-hidden overflow-y-hidden ${
          delay ? "animate-nameSlider" : "hidden"
        }`}
      >
        Amaan Naseh
      </h1>
    </div>
  );
};

export default Hero;
