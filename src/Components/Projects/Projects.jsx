import React, { useState } from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import playIcon from "../../assets/playIcon.png";
import projectVideo1 from "../../assets/video1.mp4";
import projectVideo2 from "../../assets/video2.mp4";
import projectVideo3 from "../../assets/video3.mp4";

const Projects = () => {
  var [isHover, setIsHover] = useState(0);

  var [mediaCount, setMediaCount] = useState(0);
  console.log(mediaCount);

  return (
    <div name="projects" className="bg-[#7ED4AD] py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-center pb-8">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-24">
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl py-10 px-4 bg-black text-white rounded-lg">
          {mediaCount === 1 ? (
            <div>
              <video src={projectVideo1} muted autoPlay controls></video>
            </div>
          ) : (
            <div className="relative">
              <img
                className={`w-full z-10 border-[4px] ${
                  isHover === 1 ? "opacity-[0.75] transition duration-50" : ""
                }`}
                src={project1}
                alt="project"
              />
              <img
                onMouseEnter={() => {
                  setIsHover(1);
                }}
                onMouseLeave={() => {
                  setIsHover(0);
                }}
                onClick={() => {
                  setMediaCount(1);
                }}
                src={playIcon}
                className="w-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 cursor-pointer hover:scale-[1.15]"
                alt="play icon"
              />
            </div>
          )}

          <h1>EVSolution</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">
            EVSolution is a landing page which showcases features of an electric
            vehicle from company's perspective.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ev-solution.netlify.app/"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              Preview
            </button>
          </a>
        </div>
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl  py-10 px-4 bg-black text-white rounded-lg">
          {mediaCount === 2 ? (
            <div>
              <video src={projectVideo2} muted autoPlay controls></video>
            </div>
          ) : (
            <div className="relative">
              <img
                className={`w-full z-10 border-[4px] ${
                  isHover === 2 ? "opacity-[0.75] transition duration-50" : ""
                }`}
                src={project2}
                alt="project"
              />
              <img
                onMouseEnter={() => {
                  setIsHover(2);
                }}
                onMouseLeave={() => {
                  setIsHover(0);
                }}
                onClick={() => {
                  setMediaCount(2);
                }}
                src={playIcon}
                className="w-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 cursor-pointer hover:scale-[1.15]"
                alt="play icon"
              />
            </div>
          )}
          <h1>Edusity</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">
            Edusity is a landing page which presents information such as about,
            programs, campus, and testimonials about a hypothetical educational
            institution, i.e., Edusity.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://education-sity.netlify.app/"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              Preview
            </button>
          </a>
        </div>
        <div className="w-[300px] md:w-[420px] md:min-h-[515px] flex flex-col items-center gap-4 text-xl md:text-2xl  py-10 px-4 bg-black text-white rounded-lg">
          {mediaCount === 3 ? (
            <div>
              <video src={projectVideo3} muted autoPlay controls></video>
            </div>
          ) : (
            <div className="relative">
              <img
                className={`w-full z-10 border-[4px] ${
                  isHover === 3 ? "opacity-[0.75] transition duration-50" : ""
                }`}
                src={project3}
                alt="project"
              />
              <img
                onMouseEnter={() => {
                  setIsHover(3);
                }}
                onMouseLeave={() => {
                  setIsHover(0);
                }}
                onClick={() => {
                  setMediaCount(3);
                }}
                src={playIcon}
                className="w-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 cursor-pointer hover:scale-[1.15]"
                alt="play icon"
              />
            </div>
          )}
          <h1>VidTube - Youtube Clone</h1>
          <p className="text-[#f2f2f2] text-justify text-xl">
            VidTube is a clone of Youtube . It uses Youtube Data API v2 of
            Google Cloud to fetch real-time Youtube data. Rights belong to
            Youtube and Google Cloud.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vidtube-ytclone.netlify.app/"
          >
            <button className="px-8 py-2 text-center bg-white text-black font-bold rounded-lg hover:scale-[1.15]">
              Preview
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
