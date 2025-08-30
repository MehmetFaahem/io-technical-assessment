"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#4B2615] text-white">
      <div className="w-full h-[40px] bg-white"></div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-end items-start lg:items-start gap-8">
          {/* Contact and Social Icons */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-8 bg-white rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent border border-white rounded-lg px-4 py-2 text-black focus:outline-none"
              />
              <Button
                variant="outline"
                className=" border-white text-white border-none bg-[#4B2615] cursor-pointer transition-colors px-6 py-2 text-xs font-medium rounded-lg"
              >
                Subscribe
              </Button>
            </div>
            <span className="text-white font-['DM_Sans'] text-base font-normal leading-[26px]">
              {t("footer.contacts")}
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-8">
              <Twitter className="w-[17px] h-[18px] text-white" />
              <Facebook className="w-[24px] h-[18px] text-white" />
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
              {t("footer.about")}
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              {t("footer.ourStrategy")}
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              {t("footer.ourAdvantages")}
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              {t("footer.socialResponsibility")}
            </a>
            <a
              href="#"
              className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] hover:opacity-80 transition-opacity"
            >
              {t("footer.ourServices")}
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-white font-['DM_Sans'] text-base font-normal leading-[26px] text-right">
            {t("footer.allRightsReserved")}
          </div>
        </div>
      </div>
    </footer>
  );
}
