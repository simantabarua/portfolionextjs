import React from "react";
import SectionHeader from "./SectionHeader";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className=" mystyle h-full p-4 md:p-8 my-8">
      <div className="max-w-7xl mx-auto m-10 ">
        <div className="text-center
        ">
          <SectionHeader title={"Contact me"} />
        </div>
        <div className="max-w-4xl md:mystyle mx-auto p-4 md:p-12  flex flex-col gap-4 ">
          <input type="text" placeholder="Name" className="p-4 " />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
          />
          <textarea type="text" placeholder="Message" className="h-64" />
          <button className="mystyle h-16 font-bold my-">
            Send <BsSend className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
