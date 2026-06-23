"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimateText: React.FC = () => {
  return (
    <TypeAnimation
  preRenderFirstString={true}
  sequence={[
    "I'm a Fullstack Dev.",
    1000,
    "I'm Creative.",
    1000,
    "I'm Passionate.",
    1000,
    "I'm a Team Player.",
    1000,
    "I'm a Problem Solver.",
    1000,
    "I Build Web Apps.",
    1000,
    "I Write Clean Code.",
    1000,
    "I Love UI/UX.",
    1000,
    "I'm Tech Driven.",
    1000,
  ]}
  wrapper="span"
  speed={40}
  repeat={Infinity}
/>
  );
};

export default AnimateText;
