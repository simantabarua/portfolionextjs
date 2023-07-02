import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import AnimanteText from "./AnimanteText";

const Banner = () => {
  return (
    <div className=" lg:h-[620px] p-4 rounded-b-[40px]  banner flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:px-14 lg:px-20 gap-12">
      <div className=" lg:flex-1 p-2 md:p-10 flex  justify-center flex-col  ">
        <div className="  md:p-4 space-y-4">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold my-text">
            Hello,
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl  font-semibold my-text">
            <AnimanteText />
          </h1>
          <p className="text-xl font-semibold text-gray-600">
            Hi, i m simanta, professional web developer. Need any help?
          </p>
          <Link
            href={
              "https://drive.google.com/file/d/1rdxOibH09GP54-yN2o5A5mVQESAMUy-v/view?usp=drive_link"
            }
          >
            <button className="btn-primary mt-4 w-64 h-16 font-bold text-gray-800 border-2 border-gray-500">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="my-img max-w-xs lg:w-72">
          <img
            className="rounded-full w-full p-4 grayscale transition duration-300 hover:grayscale-0 transform hover:scale-110 cursor-pointer"
            src="https://i.ibb.co/8sw8Q7k/52239683.png"
            alt="d"
          />
        </div>
        <div className="flex gap-4 justify-center items-center my-6">
          <Link
            href={"https://github.com/simantabarua"}
            className="btn-primary w-12 h-12  flex justify-center items-center"
          >
            <BsGithub className="w-6 h-6 inline-block " />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/simantabarua/"}
            className="btn-primary w-12 h-12 flex justify-center items-center"
          >
            <BsLinkedin className="w-6 h-6 inline-block " />
          </Link>
          <Link
            href={"https://twitter.com/simanta0"}
            className="btn-primary w-12 h-12 flex justify-center items-center"
          >
            <BsTwitter className="w-6 h-6 inline-block " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
