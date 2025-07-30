"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiXMark, HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: "#home", name: "Home" },
    { id: "#about", name: "About" },
    { id: "#experience", name: "Experience" },
    { id: "#project", name: "Portfolio" },
    { id: "#contact", name: "Contact" },
  ];

  return (
    <>
      <div id="home" className="p-6 rounded-t-[40px] navbar ">
        <div className="h-8 w-full mx-auto mt-1 flex items-center px-4">
          <div className="flex-1 flex gap-2 items-center">
            <button
              className="md:hidden btn-primary flex p-3 justify-center items-center "
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3CenterLeft className="w-6 h-6" />
              )}
            </button>
            <h2 className="ms-2 md:ms-0p-2 font-bold text-2xl lg:text-rose-300xl ">
              <span className="animate-pulse">&lt;</span>Simanta
              <span className="animate-pulse">/&gt;</span>
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex justify-end">
            <ul className="flex gap-4 text-center ">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.id}
                  className={`w-24 scroll-smooth font-semibold p-2 h-10 nav-link `}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden  p-4 mx-auto flex justify-center my-4 items-center mobile-menu">
            <ul className="flex flex-col gap-4 text-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.id}
                  className={`w-40 p-2 h-10 nav-link `}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
