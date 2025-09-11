import React from "react";
import SectionHeader from "./SectionHeader";

const Certification: React.FC = () => {
  return (
    <div className="lg:h-auto p-4 mystyle banner px-4 md:px-14 lg:px-20 space-y-12">
      {/* Certification Section */}
      <div className="text-center">
        <SectionHeader title={"Certification"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div className="card-img h-64">
              <img
                src="https://i.ibb.co/4MDmrK4N/phero-Certification.png"
                alt="Certification"
                className="object-cover w-full rounded-t-3xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">
                Completed Web Development course MERN Stack
              </h2>
            </div>
          </div>
        </div>

        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div className="card-img h-64">
              <img
                src="https://i.ibb.co/5DmK33N/freecode-Certification.png"
                alt="Certification"
                className="object-cover w-full rounded-t-3xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">Responsive Web Design</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="text-center mt-12">
        <SectionHeader title={"Education"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div className="card-img h-64">
              <img
                src="https://i.ibb.co/3F7K7gG/polytechnic.png"
                alt="Diploma in CSE"
                className="object-cover w-full rounded-t-3xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">
                Diploma in Computer Science & Engineering – Cox’s Bazar
                Polytechnic Institute
              </h2>
              <p className="text-gray-600 mt-2">Graduated: 2023</p>
            </div>
          </div>
        </div>

        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <div className="card-img h-64">
              <img
                src="https://i.ibb.co/1dR9M5n/ccna-linux.png"
                alt="CCNA & Linux Admin"
                className="object-cover w-full rounded-t-3xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">
                CCNA & Linux Administration – CodeTech IT
              </h2>
              <p className="text-gray-600 mt-2">Completed: 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
