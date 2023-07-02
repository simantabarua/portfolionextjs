import React from "react";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
  return (
    <div id="about" className=" mt-8 mystyle h-full p-4 md:p-12 ">
      <div className="max-w-7xl mx-auto my-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div>
           <SectionHeader title={"Who I'm i ?"}/>
            <p className="text-xl font-semibold text-gray-600 my-4">
              I&apos;m Experienced MERN stack developer with a passion for
              crafting efficient and user-friendly web applications. Skilled in
              MongoDB, Express.js, React, and Node.js, I thrive on solving
              complex problems and delivering high-quality solutions. Committed
              to continuous learning and staying updated with the latest web
              development trends.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto  md:mt-20 text-center">
            <div className="mystyle h-40 w-40 md:-ms-20 flex items-center justify-center">
              <p className="font-semibold">
                <span className=" text-xl font-bold text-gray-600 my-4 ms-6">
                  30+
                </span>
                <br />
                Project complete
              </p>
            </div>
            <div className="mystyle h-20 w-full md:w-96 md:ms-40 md:mt-14 flex items-center justify-center">
              <p className="font-semibold">Get a project? Let’s talk. simanta.barua@yahoo.com </p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeader title={"Specialized In"} />
          <div className="flex justify-between flex-wrap gap-4 my-2 md:my-8">
            <BiLogoJavascript className="w-20 h-20 mystyle p-4" />
            <FaReact className="w-20 h-20 mystyle p-4" />
            <FaNodeJs className="w-20 h-20 mystyle p-4" />
            <BiLogoMongodb className="w-20 h-20 mystyle p-4" />
            <SiExpress className="w-20 h-20 mystyle p-4" />
            <SiTailwindcss className="w-20 h-20 mystyle p-4" />
            <SiBootstrap className="w-20 h-20 mystyle p-4" />
            <SiHtml5 className="w-20 h-20 mystyle p-4" />
            <SiCss3 className="w-20 h-20 mystyle p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
