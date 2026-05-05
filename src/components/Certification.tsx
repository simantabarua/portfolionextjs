"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const CertImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="card-img h-64 relative overflow-hidden bg-secondary/10 rounded-t-3xl">
      {isLoading && (
        <div className="absolute inset-0 bg-secondary/20 animate-pulse z-10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover rounded-t-3xl transition-all duration-700 ${
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

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
            <CertImage
              src="https://i.ibb.co/4MDmrK4N/phero-Certification.png"
              alt="Certification"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2 text-primary">
                Completed Web Development course MERN Stack
              </h2>
            </div>
          </div>
        </div>

        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <CertImage
              src="https://i.ibb.co/5DmK33N/freecode-Certification.png"
              alt="Certification"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2 text-primary">Responsive Web Design</h2>
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
            <CertImage
              src="https://i.ibb.co/3F7K7gG/polytechnic.png"
              alt="Diploma in CSE"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2 text-primary">
                Diploma in Computer Science & Engineering – Cox’s Bazar
                Polytechnic Institute
              </h2>
              <p className="text-secondary mt-2">Graduated: 2023</p>
            </div>
          </div>
        </div>

        <div className="h-full w-full mystyle">
          <div className="h-full flex flex-col">
            <CertImage
              src="https://i.ibb.co/1dR9M5n/ccna-linux.png"
              alt="CCNA & Linux Admin"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2 text-primary">
                CCNA & Linux Administration – CodeTech IT
              </h2>
              <p className="text-secondary mt-2">Completed: 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
