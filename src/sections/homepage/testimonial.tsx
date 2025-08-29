"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#4B2615] text-white min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left Column - Header and Image */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-dm-sans text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {t("testimonial.title")}
              </h2>
              <p className="font-dm-sans text-lg text-white/70 leading-relaxed max-w-lg">
                {t("testimonial.description")}
              </p>
            </div>

            {/* Client Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad9a53a54b4897a95627452c4513758e50364bd2?width=748"
                alt="Mohammed Saif - CEO/Company"
                className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="space-y-8">
            <div className="space-y-6">
              <blockquote className="font-dm-sans text-xl sm:text-2xl text-white/60 leading-relaxed">
                "{t("testimonial.quote")}"
              </blockquote>

              <div className="space-y-2">
                <h3 className="font-poppins text-xl sm:text-2xl font-bold">
                  {t("testimonial.clientName")}
                </h3>
                <p className="font-poppins text-base text-white/80">
                  {t("testimonial.clientPosition")}
                </p>
              </div>
            </div>

            {/* Navigation and Review Counter */}
            <div className="flex items-center justify-end pt-8">
              <div className="flex gap-4">
                {/* Previous Button */}
                <button 
                  className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={t("testimonial.previous")}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Next Button */}
                <button 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                  aria-label={t("testimonial.next")}
                >
                  <ChevronRight className="w-6 h-6 text-[#4B2615]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
