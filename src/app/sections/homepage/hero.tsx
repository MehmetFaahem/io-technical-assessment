import { Button } from "../../components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/2cbc0180fe5c96606ff13bf877c427788cce8eb0?width=2800')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-transparent"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 lg:px-24 py-5">
        {/* Logo/Brand Space */}
        <div className="w-8"></div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            Our Team
          </a>
          <a
            href="#"
            className="text-white text-base font-normal hover:text-white/80 transition-colors"
          >
            Contact us
          </a>
        </nav>

        {/* Right Section - Search and CTA */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="w-14 h-10 border border-white rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>

          {/* Book Appointment Button */}
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-2 text-xs font-medium rounded-lg"
          >
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-6 lg:px-24">
        {/* Left Side Pagination Dots */}
        <div className="hidden lg:flex flex-col items-center space-y-4 absolute left-16 top-1/2 transform -translate-y-1/2">
          <button className="text-white hover:text-white/80 transition-colors pb-16">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
          <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
          <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
          <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden lg:flex items-center justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-16">
          {/* <button className="text-white hover:text-white/80 transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button> */}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:ml-16">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Lorem Ipsum
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <Button className="bg-white text-[#4B2615] hover:bg-white/90 transition-colors rounded-xl px-8 py-4 text-lg font-medium">
              Read More
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
            Home
          </a>
          <a href="#" className="text-white text-sm">
            About
          </a>
          <a href="#" className="text-white text-sm">
            Services
          </a>
          <a href="#" className="text-white text-sm">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
