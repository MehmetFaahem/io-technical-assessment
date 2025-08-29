"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchServices } from "@/lib/slices/servicesSlice";
import HeroSection from "@/sections/homepage/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-white text-black min-h-screen">
        <HeroSection />
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4B2615] mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Loading services...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-black min-h-screen">
        <HeroSection />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Error Loading Services
            </h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button
              onClick={() => dispatch(fetchServices())}
              className="bg-[#4B2615] hover:bg-[#4B2615]/90 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <HeroSection />

      {/* Services Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Legal Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across all major practice
            areas. Our experienced team of attorneys is dedicated to protecting
            your rights and achieving the best possible outcomes for your legal
            matters.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {service.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features Preview */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-[#4B2615]" />
                      <span className="text-sm font-medium text-gray-700">
                        Key Features:
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1 h-1 bg-[#4B2615] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-[#4B2615] font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Service Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#4B2615]" />
                    <span className="text-sm text-gray-600">
                      24-48h response
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#4B2615]" />
                    <span className="text-sm text-gray-600">Expert team</span>
                  </div>
                </div>

                <Link href={`/services/${service.slug}`}>
                  <Button className="w-full bg-[#4B2615] hover:bg-[#4B2615]/90 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We combine decades of legal expertise with personalized attention
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our team of experienced attorneys brings decades of combined
                legal expertise across all practice areas.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Timely Service
              </h3>
              <p className="text-gray-600">
                We understand the urgency of legal matters and provide quick
                response times and efficient handling.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Our track record of successful outcomes speaks for itself. We're
                committed to achieving the best possible results for our
                clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#4B2615] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to discuss your legal needs and get expert guidance
            from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#4B2615] hover:bg-gray-100 px-8 py-3 text-lg">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4B2615] px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
