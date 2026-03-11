"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en";
import pt from "@/locales/pt";

export type Language = "EN" | "PT";

const translationsMap: Record<Language, any> = {
  EN: en,
  PT: pt,
};

// Helper to access nested JSON keys like "header.product"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNestedTranslation = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  // Load saved language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && (savedLanguage === "EN" || savedLanguage === "PT")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const t = (key: string): string => {
    const translations = translationsMap[language] || translationsMap["EN"];
    const value = getNestedTranslation(translations, key);

    if (value === undefined) {
      console.warn(`Translation key missing: ${key}`);
      return key;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
