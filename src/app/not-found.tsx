"use client";

import Link from "next/link";
import React from "react";

export default function GlobalNotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="mystyle p-8 md:p-16 rounded-[40px] shadow-xl max-w-2xl w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="text-[8rem] md:text-[12rem] font-bold opacity-10 select-none">
            404
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl"
            style={{ color: "var(--accent)" }}
          >
            🕵️‍♂️
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Lost in Space?
        </h1>
        <p className="text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto">
          The page you are looking for has vanished or never existed. Let's get you back to safety.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="mystyle send-me-btn h-14 px-8 font-bold transition-transform hover:scale-105"
            style={{ color: "var(--accent)" }}
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
