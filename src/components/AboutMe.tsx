import React from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

import DecryptedText from "y/DecryptedText/DecryptedText";
import TechStack from "@/data/tech";
import CountUp from "y/CountUp/CountUp";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="mt-8 mystyle h-full p-4 md:p-12">
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div>
            <SectionHeader title={"Who Am i"} />
            <div className="text-gray-700">
              <DecryptedText
                text="I'm an experienced MERN stack developer with a passion for crafting efficient and user-friendly web applications. Skilled in MongoDB, Express.js, React, and Node.js, I thrive on solving complex problems and delivering high-quality solutions. Committed to continuous learning and staying updated with the latest web development trends."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className=" revealed text-xl font-semibold text-gray-600 md:mb-4"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-6 items-center mx-auto md:mt-20 text-center">
            <div className="mystyle h-40 w-40 lg:-ms-20 flex items-center justify-center">
              <p className="font-semibold">
                <CountUp
                  from={0}
                  to={30}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text text-xl 2xl:text-2xl font-bold text-gray-600 my-4 ms-6"
                />
                +
                <br />
                <DecryptedText
                  text="Project Complete"
                  speed={100}
                  maxIterations={20}
                  characters="ABCD1234!?"
                  className="revealed "
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  animateOn="view"
                />
              </p>
            </div>
            <div className="mystyle h-20 p-4 w-full md:w-96 lg:ms-40 md:mt-14 flex items-center justify-center">
              <p className="font-semibold">
                Get a project? Let’s talk. <br />
                <Link href="#contact">simanta.barua1@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader title={"Specialized In"} />
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
