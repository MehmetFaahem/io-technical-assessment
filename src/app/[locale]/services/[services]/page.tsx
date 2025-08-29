"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchServiceBySlug,
  clearCurrentService,
} from "@/lib/slices/servicesSlice";
import HeroSection from "@/sections/homepage/hero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Users, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ServicePage({
  params,
}: {
  params: Promise<{ services: string }>;
}) {
  const dispatch = useAppDispatch();
  const { currentService, loading, error } = useAppSelector(
    (state) => state.services
  );
  const { t } = useTranslation();

  useEffect(() => {
    const loadService = async () => {
      const { services } = await params;
      // Convert the service name to slug format
      const slug = services.toLowerCase().replace(/\s+/g, "-");
      dispatch(fetchServiceBySlug(slug));
    };

    loadService();

    // Cleanup function
    return () => {
      dispatch(clearCurrentService());
    };
  }, [dispatch, params]);

  if (loading) {
    return (
      <div className="bg-white text-black min-h-screen">
        <HeroSection />
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4B2615] mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">
                {t("services.loadingServiceDetails")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !currentService) {
    return (
      <div className="bg-white text-black min-h-screen">
        <HeroSection />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {t("services.serviceNotFound")}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("services.serviceNotFoundDesc")}
            </p>
            <Link href="/">
              <Button className="bg-[#4B2615] hover:bg-[#4B2615]/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("services.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <HeroSection />

      {/* Service Details */}
      <div className="container mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#4B2615] transition-colors">
                {t("navigation.home")}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="#" className="hover:text-[#4B2615] transition-colors">
                {t("navigation.services")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#4B2615] font-medium">
              {currentService.name}
            </li>
          </ol>
        </nav>

        {/* Service Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {currentService.name}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {currentService.description}
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#4B2615]/10 rounded-lg">
                  <Clock className="w-5 h-5 text-[#4B2615]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {t("services.responseTime")}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {t("services.hours")}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#4B2615]/10 rounded-lg">
                  <Users className="w-5 h-5 text-[#4B2615]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {t("services.expertTeam")}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {t("services.lawyers")}
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-[#4B2615] hover:bg-[#4B2615]/90 text-white px-8 py-3 text-lg">
              {t("services.getStarted")}
            </Button>
          </div>

          <div className="relative">
            {currentService.imageUrl && (
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentService.imageUrl}
                  alt={currentService.name}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        {currentService.detailedDescription && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("services.aboutThisService")}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {currentService.detailedDescription}
              </p>
            </div>
          </div>
        )}

        {/* Features */}
        {currentService.features && currentService.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("services.whatWeOffer")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentService.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="p-2 bg-[#4B2615]/10 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#4B2615]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("services.whyChooseOur")} {currentService.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("services.expertProtection")}
              </h3>
              <p className="text-gray-600">
                {t("services.expertProtectionDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("services.experiencedTeam")}
              </h3>
              <p className="text-gray-600">
                {t("services.experiencedTeamDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-[#4B2615]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#4B2615]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("services.timelyService")}
              </h3>
              <p className="text-gray-600">{t("services.timelyServiceDesc")}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#4B2615] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("services.readyToGetStarted")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("services.readyToGetStartedDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#4B2615] hover:bg-gray-100 px-8 py-3 text-lg">
              {t("services.scheduleConsultation")}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4B2615] px-8 py-3 text-lg"
            >
              {t("services.learnMore")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
