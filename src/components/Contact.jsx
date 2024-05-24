"use client";

import React, { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [isMessageSend, setIsMessageSend] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const form = useRef();

  function onChange(value) {
    setCaptchaValue(value);
    setCaptchaError("");
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    if (!captchaValue) {
      setCaptchaError("Please complete the CAPTCHA");
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        "service_j1i7ccl",
        "template_3atgipi",
        form.current,
        "jfTx89WyVT9o2vI4P"
      )
      .then(
        (result) => {
          setIsMessageSend(true);
          setIsSending(false);
          form.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          // console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div id="contact" className="mystyle h-full p-4 md:p-6 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeader title={"Contact me"} />
        </div>
        <p className="text-gray-500 capitalize text-sm md:text-xl md:font-bold text-center mt-2">
          Need any help? Let&apos;s talk{" "}
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-4xl md:mystyle mx-auto p-4 md:p-12 flex flex-col gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
            <textarea
              name="message"
              placeholder="Message"
              className="h-64"
              required
            />
            {isMessageSend && (
              <p className="text-green-500 capitalize text-xl font-bold">
                Message sent
              </p>
            )}
            <div>
              <ReCAPTCHA
                sitekey="6LfTs-YpAAAAAPrdJ3olu_JOU8z9pbqiTUCu9Exr"
                onChange={onChange}
              />
              {captchaError && <p className="text-red-500">{captchaError}</p>}
            </div>
            <button
              type="submit"
              value="Send"
              className="mystyle send-me-btn h-16 font-bold"
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
