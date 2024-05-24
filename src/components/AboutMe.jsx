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
import Link from "next/link";

const AboutMe = () => {
  return (
    <div id="about" className=" mt-8 mystyle h-full p-4 md:p-12 ">
      <div className=" max-w-7xl mx-auto my-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div>
            <SectionHeader title={"Who Am i"} />
            <p className="text-xl font-semibold text-gray-600  md:my-4">
              I&apos;m Experienced MERN stack developer with a passion for
              crafting efficient and user-friendly web applications. Skilled in
              MongoDB, Express.js, React, and Node.js, I thrive on solving
              complex problems and delivering high-quality solutions. Committed
              to continuous learning and staying updated with the latest web
              development trends.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-6 items-center  mx-auto  md:mt-20 text-center">
            <div className="mystyle h-40 w-40 lg:-ms-20 flex items-center justify-center">
              <p className="font-semibold">
                <span className=" text-xl 2xl:text-2xl font-bold text-gray-600 my-4 ms-6">
                  30+
                </span>
                <br />
                Project Complete
              </p>
            </div>
            <div className="mystyle h-20  p-4 w-full  md:w-96 lg:ms-40 md:mt-14 flex items-center justify-center">
              <p className="font-semibold ">
                Get a project? Let’s talk. <br />
                <Link href="#contact">simanta.barua1@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <SectionHeader title={"Specialized In"} />
          </div>
          <div className="flex justify-between flex-wrap gap-4 my-2 md:my-6">
            <a href="https://javascript.com" target="_blank" title="JavaScript">
              <BiLogoJavascript className="icon-style" />
            </a>
            <a href="https://reactjs.org" target="_blank" title="React">
              <FaReact className="icon-style" />
            </a>
            <a href="https://nodejs.org" target="_blank" title="Node.js">
              <FaNodeJs className="icon-style" />
            </a>
            <a href="https://mongodb.com" target="_blank" title="MongoDB">
              <BiLogoMongodb className="icon-style" />
            </a>
            <a href="https://expressjs.com" target="_blank" title="Express.js">
              <SiExpress className="icon-style" />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              title="Tailwind CSS"
            >
              <SiTailwindcss className="icon-style" />
            </a>
            <a
              href="https://getbootstrap.com"
              target="_blank"
              title="Bootstrap"
            >
              <SiBootstrap className="icon-style" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              title="HTML"
            >
              <SiHtml5 className="icon-style" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              title="CSS"
            >
              <SiCss3 className="icon-style" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
