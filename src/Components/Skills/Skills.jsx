import React from "react";
import SkillSlider from "../SkillSlider/SkillSlider";

const Skills = () => {
  return (
    <div name="skills" className="py-20 w-full bg-[#608BC1]">
      <h1 className="text-5xl md:text-7xl font-bold text-center">Skills</h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly px-20 py-12 gap-20">
        <ul className="flex flex-wrap items-center justify-evenly gap-5 text-2xl font-semibold">
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center px-4">
            HTML
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            CSS
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            JavaScript
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            MongoDB
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Express.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            React.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Node.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Python
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Keras
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Tensorflow
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-48 text-center px-4">
            Flask
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <SkillSlider />
        </div>
      </div>
    </div>
  );
};

export default Skills;
