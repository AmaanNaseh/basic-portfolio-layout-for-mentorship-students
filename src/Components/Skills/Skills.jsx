import React from "react";
import SkillSlider from "../SkillSlider/SkillSlider";

const Skills = () => {
  return (
    <div name="skills" className="py-20 w-full">
      <h1 className="text-9xl font-bold text-center">Skills</h1>
      <div className="flex items-center justify-evenly px-20 py-12 gap-20">
        <ul className="flex flex-wrap items-center justify-center gap-8 text-2xl font-semibold">
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            HTML
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            CSS
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            JavaScript
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            MongoDB
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            Express.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            React.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            Node.Js
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            Python
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            Keras
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
            Tensorflow
          </li>
          <li className="p-2 bg-black text-white rounded-lg w-32 text-center">
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
