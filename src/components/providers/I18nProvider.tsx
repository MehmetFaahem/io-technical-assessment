"use client";

import { useEffect, ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Ensure i18n is initialized on the client side
    const initializeI18n = async () => {
      if (!i18n.isInitialized) {
        try {
          await i18n.init();
        } catch (error) {
          console.error("Failed to initialize i18n:", error);
        }
      }
      setIsInitialized(true);
    };

    initializeI18n();
  }, []);

  // Show loading state while i18n initializes
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Initializing...</div>
      </div>
    );
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
