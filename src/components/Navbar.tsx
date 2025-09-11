"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiXMark, HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { DarkModeToggle } from "./dark-mode-toggle";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: "#about", name: "About" },
    { id: "#experience", name: "Experience" },
    { id: "#project", name: "Portfolio" },
    { id: "#contact", name: "Contact" },
    { id: "/blog", name: "Blog" },
  ];

  return (
    <div className="p-4 md:p-6 rounded-t-[40px] navbar container mx-auto ">
      <div className="flex items-center justify-between h-12 px-2">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden btn-primary p-2 flex items-center justify-center"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3CenterLeft className="w-6 h-6" />
            )}
          </button>
          <Link href="/">
            <span className="text-xl sm:text-2xl font-bold">
              <span className="animate-pulse">&lt;</span>Simanta
              <span className="animate-pulse">/&gt;</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.id}
              className="scroll-smooth font-semibold px-3 py-2 h-10 nav-link"
            >
              {item.name}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 w-full flex justify-center items-center mobile-menu">
          <ul className="flex flex-col gap-3 w-full max-w-xs mx-auto text-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.id}
                className="w-full py-2 rounded-lg nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
