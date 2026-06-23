import React from "react";
import SectionHeader from "./SectionHeader";
import { FaBicycle, FaBookReader, FaCode } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const Activity: React.FC = () => {
  const activities = [
    { icon: <FaCode className="w-10 h-10 md:w-14 md:h-14" />, label: "Side Coding" },
    { icon: <FaBookReader className="w-10 h-10 md:w-14 md:h-14" />, label: "Reading" },
    { icon: <FaBicycle className="w-10 h-10 md:w-14 md:h-14" />, label: "Cycling" },
    { icon: <MdPets className="w-10 h-10 md:w-14 md:h-14" />, label: "Pets" },
  ];

  return (
    <div className="p-4 mystyle my-8 px-4 md:px-14 lg:px-20 transition-all duration-300">
      <div className="text-center">
        <SectionHeader title={"Hobbies & Interests"} />
      </div>
      <div className="flex justify-center md:justify-around items-center flex-wrap gap-8 my-6 md:my-10 text-secondary">
        {activities.map((act, index) => (
          <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
            <div 
              className="w-20 h-20 md:w-32 md:h-32 mystyle p-4 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="group-hover:text-[var(--accent)] transition-colors duration-300">
                {act.icon}
              </span>
            </div>
            <span className="text-sm md:text-base font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
              {act.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
