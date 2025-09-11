import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import AnimateText from "./AnimateText";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="lg:h-[80vh] p-6 md:p-10 lg:p-16 rounded-b-[40px] banner flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-16">
      {/* Left Content */}
      <div className="lg:flex-1 flex flex-col justify-center space-y-6">
        <div className="space-y-4">
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold my-text">
            Hello,
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold my-text leading-tight">
            <AnimateText />
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            I{"'"}m Simanta, a Professional Web Developer. Need any help?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link href="#contact">
            <button className="btn-primary w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-800 border-2 border-gray-500 transition-all duration-300 ease-in-out">
              Hire me
            </button>
          </Link>

          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1zo9LbttL28RDuu0po8iiKjVXwqKo8fza/view?usp=sharing"
          >
            <button className="btn-primary w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-800 border-2 border-gray-500  transition-all duration-300 ease-in-out">
              View Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center gap-6">
        <div className="my-img max-w-xs lg:max-w-md">
          <Image
            className="rounded-full w-full p-2 grayscale transition duration-300 hover:grayscale-0 cursor-pointer"
            src="https://i.ibb.co/FHkVf9N/simanta-1.jpg"
            alt="Simanta Image"
            width={300}
            height={300}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <Link
            href="https://github.com/simantabarua"
            className="btn-primary w-12 h-12 flex justify-center items-center transition-transform hover:scale-110"
          >
            <BsGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/simantabarua/"
            className="btn-primary w-12 h-12 flex justify-center items-center transition-transform hover:scale-110"
          >
            <BsLinkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://twitter.com/simanta0"
            className="btn-primary w-12 h-12 flex justify-center items-center transition-transform hover:scale-110"
          >
            <BsTwitter className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
