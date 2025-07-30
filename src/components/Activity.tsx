import React from "react";
import SectionHeader from "./SectionHeader";
import { FaBicycle, FaBookReader, FaCode } from "react-icons/fa";
import { MdPets } from "react-icons/md";
const Activity: React.FC = () => {
  return (
    <div className=" lg:h-[620px] p-4 mystyle  my-8  px-4 md:px-14 lg:px-20 ">
      <div className="text-center">
        <SectionHeader title={"Enjoyments"} />
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 my-2 md:my-8 text-gray-600">
        <FaCode className="w-32 h-32 md:w-64 md:h-64 mystyle p-4" />
        <FaBookReader className="w-32 h-32 md:w-64 md:h-64 mystyle p-4" />
        <FaBicycle className="w-32 h-32 md:w-64 md:h-64 mystyle p-4" />
        <MdPets className="w-32 h-32 md:w-64 md:h-64 mystyle p-4" />
      </div>
    </div>
  );
};

export default Activity;
