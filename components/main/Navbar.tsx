"use client";

import Link from "next/link";
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            PlaceXP
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
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
    </div>
  );
};

export default Navbar;

