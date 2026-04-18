"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BsArrowRight, BsExclamationTriangle } from "react-icons/bs";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="mystyle p-8 md:p-16 rounded-[40px] shadow-xl max-w-2xl w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="text-[8rem] md:text-[12rem] font-bold opacity-10 select-none">
            Error
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl text-red-500"
          >
            <BsExclamationTriangle />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Something went wrong!
        </h1>
        <p className="text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto">
          We encountered an unexpected error. Don't worry, our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            Go Home <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
