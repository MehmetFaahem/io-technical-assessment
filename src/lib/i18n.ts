import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "./locales/en.json";
import arTranslations from "./locales/ar.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

// Only initialize i18n on the client side
if (typeof window !== "undefined") {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      debug: false, // Set to false to avoid console spam

      interpolation: {
        escapeValue: false, // React already escapes values
      },

      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },

      // Ensure immediate initialization
      initImmediate: false,
    });
}

export default i18n;
