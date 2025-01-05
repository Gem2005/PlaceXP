import { GraduationCap } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0300145e] text-gray-200 shadow-lg p-[15px] border-t border-[#7042f861]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Resources</div>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Interview Prep
            </Link>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Resume Templates
            </Link>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Company Guides
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Alumni Network
            </Link>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Events
            </Link>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Blog
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              Support
            </Link>
            <Link href="#" className="text-[15px] my-[15px] cursor-pointer hover:text-primary">
              About Us
            </Link>
            <span className="text-[15px] my-[15px]">contact@placexp.com</span>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          {Socials.map((social) => (
            <Link 
              href={social.link} 
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <GraduationCap className="h-5 w-5" />
          <span>&copy; {new Date().getFullYear()} PlaceXP. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

