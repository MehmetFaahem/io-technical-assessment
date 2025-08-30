"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  // Handle form submission
  const handleSubmit = async (
    values: { email: string },
    { resetForm }: any
  ) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual subscription logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setSubmitStatus("success");
      resetForm();

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");

      // Reset error message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#4B2615] text-white">
      <div className="w-full h-[40px] bg-white"></div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-end items-start lg:items-start gap-8">
          {/* Contact and Social Icons */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="flex flex-col gap-2 mt-6">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, dirty }) => (
                  <Form className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                    <div className="flex-1">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-none rounded-lg px-4 py-2 text-black focus:outline-none placeholder-gray-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={!isValid || !dirty || isSubmitting}
                      className="border-white text-white border-none bg-[#4B2615] cursor-pointer transition-colors px-6 py-2 text-xs font-medium rounded-lg disabled:opacity-100 disabled:cursor-not-allowed hover:bg-[#3a1e10]"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </Form>
                )}
              </Formik>

              {/* Error and Success Messages */}
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <div className="min-h-[20px]">
                    {touched.email && errors.email && (
                      <p className="text-red-300 text-xs ml-1">
                        {errors.email}
                      </p>
                    )}
                    {submitStatus === "success" && (
                      <p className="text-green-300 text-xs ml-1">
                        Successfully subscribed!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-300 text-xs ml-1">
                        Subscription failed. Please try again.
                      </p>
                    )}
                  </div>
                )}
              </Formik>
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
