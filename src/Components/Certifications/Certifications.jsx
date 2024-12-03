import React from "react";
import certificate1 from "../../assets/certificate1.png";
import certificate2 from "../../assets/certificate2.png";
import certificate3 from "../../assets/certificate3.png";

const Certifications = () => {
  return (
    <div name="certifications" className="py-20 bg-[#FEEE91]">
      <h1 className="text-5xl md:text-7xl font-bold text-center pb-8">
        Certifications
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-24">
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl py-10 px-4 bg-black text-white rounded-lg">
          <div className="w-full h-auto">
            <img
              className={`w-full z-10 border-[4px]`}
              src={certificate1}
              alt="certification"
            />
          </div>
          <h1>Devtown FSWD Internship</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">July 2024</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cert.devtown.in/verify/q2J15dDE"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              View
            </button>
          </a>
        </div>
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl  py-10 px-4 bg-black text-white rounded-lg">
          <div className="w-full h-auto">
            <img
              className={`w-full z-10 border-[4px]`}
              src={certificate2}
              alt="certification"
            />
          </div>
          <h1>Pantech AI Internship</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">May 2024</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://learn.pantechsolutions.net/courses/1156032/certificate"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              View
            </button>
          </a>
        </div>
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl  py-10 px-4 bg-black text-white rounded-lg">
          <div className="w-full h-auto">
            <img
              className={`w-full z-10 border-[4px]`}
              src={certificate3}
              alt="certification"
            />
          </div>

          <h1>Google Cloud Gen AI Badge</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">February 2024</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cloudskillsboost.google/public_profiles/27528d61-0eee-4cde-83cc-6d7f466a0266/badges/8843293"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              View
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
