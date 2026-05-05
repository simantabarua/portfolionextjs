"use client";
import React, { useRef, useState, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";


interface FormData {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

import { contactFormSchema } from "@/lib/validations";

const Contact: React.FC = () => {
  const [isMessageSend, setIsMessageSend] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const form = useRef<HTMLFormElement>(null);





  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setErrors({});
    
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      message: formData.get("message") as string,
    };

    const result = contactFormSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }



    setIsSending(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsMessageSend(true);
      form.current?.reset();

    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="mystyle h-full p-4 md:p-6 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeader title={"Contact me"} />
        </div>
        <p className="text-secondary capitalize text-sm md:text-xl md:font-bold text-center mt-2">
          Need any help? Let&apos;s talk{" "}
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-4xl md:mystyle mx-auto p-4 md:p-12 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className={`input input-bordered ${errors.user_name ? 'border-red-500' : ''}`}
                required
              />
              {errors.user_name && <p className="text-red-500 text-xs ml-2">{errors.user_name}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className={`input input-bordered ${errors.user_email ? 'border-red-500' : ''}`}
                required
              />
              {errors.user_email && <p className="text-red-500 text-xs ml-2">{errors.user_email}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Message"
                className={`h-64 ${errors.message ? 'border-red-500' : ''}`}
                required
              />
              {errors.message && <p className="text-red-500 text-xs ml-2">{errors.message}</p>}
            </div>

            {isMessageSend && (
              <div className="mystyle p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                <p className="text-green-500 font-bold">
                  ✨ Message sent successfully! I will get back to you soon.
                </p>
              </div>
            )}
            

            
            <button
              type="submit"
              disabled={isSending}
              className={`mystyle send-me-btn h-16 font-bold flex items-center justify-center gap-3 transition-all ${isSending ? 'opacity-70 scale-95' : 'hover:scale-105'}`}
            >
              {isSending ? "Sending Message..." : "Send Message"} 
              <BsSend className={isSending ? "animate-pulse" : ""} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
