import React from "react";
import SplitText from "y/SplitText/SplitText";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <SplitText
      text={title}
      className="md:py-6  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 my-text my-4 xl:my-6"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
    />
  );
};

export default SectionHeader;
