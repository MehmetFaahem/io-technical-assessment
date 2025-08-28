"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, MapPin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Name Here",
    position: "POSITION HERE",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ad9a53a54b4897a95627452c4513758e50364bd2?width=748",
    phone: "+1234567890",
    location: "Location",
    email: "email@example.com",
  },
  {
    id: 2,
    name: "Name Here",
    position: "POSITION HERE",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ad9a53a54b4897a95627452c4513758e50364bd2?width=748",
    phone: "+1234567890",
    location: "Location",
    email: "email@example.com",
  },
  {
    id: 3,
    name: "Name Here",
    position: "POSITION HERE",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ad9a53a54b4897a95627452c4513758e50364bd2?width=748",
    phone: "+1234567890",
    location: "Location",
    email: "email@example.com",
  },
];

export default function OurTeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[2.75rem] leading-tight font-bold text-[#4a4a4a] mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative px-4">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Team Cards Container - Desktop */}
          <div className="hidden md:block mx-14">
            <div className="grid grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  {/* Team Member Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#2d3748] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#718096] tracking-widest mb-6 uppercase font-medium">
                      {member.position}
                    </p>

                    {/* Contact Icons */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={`tel:${member.phone}`}
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Call"
                      >
                        <Phone className="w-4 h-4 text-[#4a5568]" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Location"
                      >
                        <MapPin className="w-4 h-4 text-[#4a5568]" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-[#4a5568]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Cards Container - Mobile/Tablet */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#2d3748] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#718096] tracking-widest mb-6 uppercase font-medium">
                      {member.position}
                    </p>

                    <div className="flex justify-center space-x-3">
                      <a
                        href={`tel:${member.phone}`}
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Call"
                      >
                        <Phone className="w-4 h-4 text-[#4a5568]" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Location"
                      >
                        <MapPin className="w-4 h-4 text-[#4a5568]" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-[#f7fafc] rounded-full flex items-center justify-center hover:bg-[#edf2f7] transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-[#4a5568]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
