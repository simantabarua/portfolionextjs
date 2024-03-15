import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import AnimateText from "./AnimateText";
import simanta from "./../assets/simanta.jpg";
const Banner = () => {
  return (
    <div className=" lg:h-[80vh] p-4 rounded-b-[40px]  banner flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:px-14 lg:px-20 lg:gap-12">
      <div className=" lg:flex-1 p-2 md:p-10 flex  justify-center flex-col  ">
        <div className="  md:p-4 space-y-4">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-text">
            Hello,
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl 2xl:text-[4.8rem] font-semibold my-text !mt-2 md:mt-3 leading-8">
            <AnimateText />
          </h1>
          <p className="text-xl 2xl:text-2xl font-semibold text-gray-600">
            Hi, I&pos;m Simanta, Professional Web Developer. Need any help?
          </p>
          <div className="flex gap-4">
            <Link href={"#contact"}>
              <button className="btn-primary mt-2 md:mt-4 w-32 h-12 md:w-64 md:h-16 font-bold text-gray-800 border-2 border-gray-500 transition-all   duration-300 ease-in-out">
                Hire me
              </button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1rdxOibH09GP54-yN2o5A5mVQESAMUy-v/view?usp=drive_link"
              }
            >
              <button className=" btn-primary mt-2 md:mt-4 w-36 h-12 md:w-64 md:h-16 font-bold text-gray-800 border-2 border-gray-500 transition-all   duration-300 ease-in-out">
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="my-img max-w-md min-h-md lg:w-96">
          <img
            className="rounded-full w-full p-2 grayscale transition duration-300 hover:grayscale-0 cursor-pointer"
            src="https://i.ibb.co/FHkVf9N/simanta-1.jpg"
            alt="Simanta Image"
          />
        </div>
        <div className="flex gap-4 justify-center items-center my-4 md:my-6">
          <Link
            href={"https://github.com/simantabarua"}
            className="btn-primary w-12 h-12 flex justify-center items-center transition-all transform hover:scale-110"
          >
            <BsGithub className="w-6 h-6 inline-block" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/simantabarua/"}
            className="btn-primary w-12 h-12 flex justify-center items-center transition-transform transform hover:scale-110"
          >
            <BsLinkedin className="w-6 h-6 inline-block" />
          </Link>
          <Link
            href={"https://twitter.com/simanta0"}
            className="btn-primary w-12 h-12 flex justify-center items-center transition-transform transform hover:scale-110"
          >
            <BsTwitter className="w-6 h-6 inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
