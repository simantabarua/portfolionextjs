import React from "react";
import SectionHeader from "./SectionHeader";

const Certification: React.FC = () => {
  return (
    <div className=" lg:h-[620px] p-4 mystyle  banner px-4 md:px-14 lg:px-20 ">
      <div className="text-center">
        <SectionHeader title={"Certification"} />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  gap-8 place-items-center">
        <div className=" h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div>
              <div className="card-img h-64">
                <img
                  src="https://i.ibb.co/4MDmrK4N/phero-Certification.png"
                  alt="Certification"
                  className="object-cover w-full  rounded-t-3xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">
                Completed Web Development course MERN Stack
              </h2>
            </div>
          </div>
        </div>

        <div className=" h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div>
              <div className="card-img h-64">
                <img
                  src="https://i.ibb.co/5DmK33N/freecode-Certification.png"
                  alt="Certification"
                  className="object-cover w-full  rounded-t-3xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">Responsive Web Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
