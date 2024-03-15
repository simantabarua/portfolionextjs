import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <p className=" md:py-6  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 my-text my-4 xl:my-6">
      {title}<span className="animate-ping">_</span>
    </p>
  );
};

export default SectionHeader;
