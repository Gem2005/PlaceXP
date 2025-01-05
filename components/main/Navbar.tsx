"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold ml-[10px] text-gray-300">
            PlaceXP
          </span>
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-200">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/team" className="cursor-pointer">
              Our Team
            </Link>
            <Link href="/events" className="cursor-pointer">
              Events
            </Link>
            <Link href="#testimonials" className="cursor-pointer">
              Success Stories
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center w-full bg-[#0300145e] border-t border-[#7042f861] mt-2">
          <Link href="/team" className="cursor-pointer py-2 text-gray-200">
            Our Team
          </Link>
          <Link href="/events" className="cursor-pointer py-2 text-gray-200">
            Events
          </Link>
          <Link href="#testimonials" className="cursor-pointer py-2 text-gray-200">
            Success Stories
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
