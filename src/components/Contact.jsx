"use client";

import React, { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMessageSend, setIsMessageSend] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_sbtyu5w",
        "template_l65s3ks",
        form.current,
        "4hqxr0-E1XYqaM5gc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSend(true);
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div id="contact" className=" mystyle h-full p-4 md:p-6 my-8">
      <div className="max-w-7xl mx-auto  ">
        <div
          className="text-center
        "
        >
          <p className="   text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold my-text my-2">
            Contact me
          </p>
        </div>
        <p
          className="text-gray-500 capitalize text-sm md:text-xl md:font-bold text-center mt-2
        "
        >
          Need any help? Let&apos;s talk{" "}
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-4xl md:mystyle mx-auto p-4 md:p-12  flex flex-col gap-4 ">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="p-4 "
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="h-64"
              required
            />
            {isMessageSend && (
              <p className="text-green-500 capitalize text-xl font-bold">
                message sent
              </p>
            )}
            <button
              type="submit"
              value="Send"
              className="mystyle h-16 font-bold my-"
            >
              {isSending ? "Sending ..." : "Send"} <BsSend className="inline" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
