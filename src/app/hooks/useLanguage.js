"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");

  // تحميل اللغة من localStorage أو cookies
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      // Check cookies if localStorage is empty
      const cookieLang = document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='))
        ?.split('=')[1];
      if (cookieLang) {
        setLanguage(cookieLang);
        localStorage.setItem("lang", cookieLang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    // Also set cookie for server-side access
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
