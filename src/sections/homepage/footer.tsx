import { Twitter, Facebook, Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4B2615] text-white">
      <div className="w-full h-[40px] bg-white"></div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-end items-start lg:items-start gap-8">
          {/* Contact and Social Icons */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <span className="text-white font-['DM_Sans'] text-base font-normal leading-[26px]">
              Contacts
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-8">
              <Twitter className="w-[17px] h-[18px] text-white" />
              <Facebook className="w-[11px] h-[18px] text-white" />
              <Plus className="w-[24px] h-[18px] text-white" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-white opacity-30 my-8"></div>

        {/* Navigation and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 lg:gap-12">
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              Our Strategy
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              Our Advantages
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              Social Responsibility
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              Our Services
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] text-right">
            © 2024 . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
