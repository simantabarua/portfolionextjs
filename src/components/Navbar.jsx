"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiXMark, HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: "#home", name: "Home", width: "w-28" },
    { id: "#about", name: "About", width: "w-28" },
    { id: "#project", name: "Portfolio", width: "w-28" },
    { id: "#contact", name: "Contact", width: "w-28" },
  ];

  return (
    <>
      <div id="home" className=" p-6 rounded-t-[40px] navbar ">
        <div className="h-8 w-full mx-auto mt-1 flex items-center px-4">
          <div className="flex-1 flex gap-2 items-center">
            <button
              className="md:hidden btn-primary flex p-3 justify-center items-center"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3CenterLeft className="w-6 h-6" />
              )}
            </button>
            <h2 className="p-2 font-bold text-2xl">Simanta</h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex justify-end">
            <ul className="flex gap-4 text-center">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.id}>
                  <li className={`w-24 p-2 h-10 ${item.width}`}>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mystyle p-4 mx-auto flex justify-center my-4 items-center">
            <ul className="flex flex-col gap-4 text-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`w-64 md:w-24 p-2 h-10 ${item.width}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
