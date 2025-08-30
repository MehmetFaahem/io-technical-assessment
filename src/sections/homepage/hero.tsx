"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchServices } from "@/lib/slices/servicesSlice";
import { useTranslation } from "react-i18next";
import { useLanguageManager } from "@/lib/hooks/useLanguage";

export default function HeroSection() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { services: servicesData, loading } = useAppSelector(
    (state) => state.services
  );
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isRTL } = useLanguageManager();

  // Background images array
  const backgroundImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/2cbc0180fe5c96606ff13bf877c427788cce8eb0?width=2800",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  ];

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      onClick={() => setIsServicesOpen(false)}
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Header Navigation */}
      <header className="relative z-[1000] flex items-center justify-between px-6 lg:px-24 py-5">
        {/* Logo/Brand Space */}
        <div className="w-[100px]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Wikispecies_logo_Arabic_horizontal_in_white.svg/800px-Wikispecies_logo_Arabic_horizontal_in_white.svg.png?20250506202156"
            alt="Logo"
            width={302}
            height={302}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/en"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            {t("navigation.aboutUs")}
          </Link>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            {t("navigation.services")}
            <span className="text-white text-base font-normal hover:text-white/80 transition-colors ml-2">
              <ChevronDown className="w-4 h-4" />
            </span>
          </a>
          {/* Services Dropdown */}
          {isServicesOpen && (
            <div className="absolute top-16 right-[51%] translate-x-1/2 bg-[#4B2615] rounded-lg shadow-lg p-4 z-[1000]">
              <div className="space-y-2 text-white grid grid-cols-2 gap-6 gap-x-16 space-x-6">
                {loading ? (
                  <div className="text-white text-sm">
                    {t("services.loading")}
                  </div>
                ) : (
                  servicesData.map((service) => (
                    <div key={service.id} className="cursor-pointer">
                      <Link
                        href={`/${currentLanguage}/services/${service.slug}`}
                        className="cursor-pointer hover:text-white/80 transition-colors"
                      >
                        {service.name}
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            {t("navigation.blog")}
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            {t("navigation.ourTeam")}
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            {t("navigation.contactUs")}
          </a>
        </nav>

        {/* Right Section - Search and CTA */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent text-white  rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-white transition-colors"
            >
              <option value="en" className="bg-[#4B2615] text-white">
                {t("language.en")}
              </option>
              <option value="ar" className="bg-[#4B2615] text-white">
                {t("language.ar")}
              </option>
            </select>
          </div>
          {/* Search Icon */}
          <div className="w-14 h-10 border border-white rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>

          {/* Book Appointment Button */}
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-2 text-xs font-medium rounded-lg"
          >
            {t("buttons.bookAppointment")}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-6 lg:px-24">
        {/* Left Side Pagination Dots */}
        <div className="hidden lg:flex flex-col items-center space-y-4 absolute left-16 top-1/2 transform -translate-y-1/2">
          <button
            className="text-white hover:text-white/80 transition-colors pb-16"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "border-2 border-white bg-transparent hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <div className="hidden lg:flex items-center justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-16">
          <button
            className="text-white hover:text-white/80 transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="text-white hover:text-white/80 transition-colors"
            onClick={goToNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div> */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:ml-16">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl">
                {t("hero.description")}
              </p>
            </div>

            <Button className="bg-white text-[#4B2615] hover:bg-white/90 transition-colors rounded-xl px-8 py-4 text-lg font-medium">
              {t("hero.readMore")}
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad9a53a54b4897a95627452c4513758e50364bd2?width=748"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/20 p-4 z-20">
        <div className="flex justify-around">
          <a href="#" className="text-white text-sm">
            {t("navigation.home")}
          </a>
          <a href="#" className="text-white text-sm">
            {t("navigation.aboutUs")}
          </a>
          <a href="#" className="text-white text-sm">
            {t("navigation.services")}
          </a>
          <a href="#" className="text-white text-sm">
            {t("navigation.contactUs")}
          </a>
        </div>
      </nav>

      {/* Mobile Slider Controls */}
      <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
