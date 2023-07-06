import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <p className=" md:py-6  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold my-text my-4">
      {title}
    </p>
  );
};

export default SectionHeader;
