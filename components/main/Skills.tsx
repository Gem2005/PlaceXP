import { Career_paths, Companies, Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl text-gray-300">Essential Skills</h3>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Skill_data.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl text-gray-300">Career Paths</h3>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Career_paths.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl text-gray-300">Top Companies</h3>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Companies.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

