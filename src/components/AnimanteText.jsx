"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimanteText = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        "I'm Simanta Barua",
        1000,
        "I'm a Fullstack Developer",
        1000,
        "I'm Creative",
        1000,
        "I'm Passionate",
        1000,
        "I'm a Team Player",
        1000,
        "I'm a Tech Enthusiast",
        1000,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
  );
};

export default AnimanteText;
