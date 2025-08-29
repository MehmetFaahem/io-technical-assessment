import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageManager = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    // Wait for i18n to be initialized
    if (i18n.isInitialized) {
      const savedLanguage = localStorage.getItem("language");
      const initialLanguage =
        savedLanguage && ["en", "ar"].includes(savedLanguage)
          ? savedLanguage
          : i18n.language || "en";

      setCurrentLanguage(initialLanguage);

      // Update document attributes for RTL support
      if (initialLanguage === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
      }
    }
  }, [i18n.isInitialized, i18n.language]);

  const changeLanguage = (language: string) => {
    if (["en", "ar"].includes(language) && i18n.isInitialized) {
      setCurrentLanguage(language);
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);

      // Update document attributes for RTL support
      if (language === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
      }
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    isRTL: currentLanguage === "ar",
  };
};
