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
            <SectionHeader title={"About Me"} />
            <div className="text-secondary">
              <DecryptedText
                text="I'm a MERN Stack Developer with 2.5+ years of experience building scalable, high-performance web applications. I specialize in React, Next.js, Node.js, Express, and MongoDB, with a strong focus on clean architecture, reusable components, and optimized user experiences. I enjoy translating complex requirements into maintainable, production-ready solutions and continuously evolving with modern web technologies."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed text-xl font-semibold text-secondary md:mb-4"
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
                  className="count-up-text text-xl 2xl:text-2xl font-bold text-secondary my-4 ms-6"
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
            <div className="mystyle h-20 p-1 md:p-4 w-full md:w-96 lg:ms-40 md:mt-14 flex items-center justify-center">
              <p className="font-semibold text-xs md:text-xl text-primary">
                Get a project? Let’s talk. <br />
                <Link style={{ color: "var(--accent)" }} href="/#contact">simanta.barua1@gmail.com</Link>
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
