import React, { useMemo, useState, useContext, createContext } from "react";

// Create Language Context
const LanguageContext = createContext();

// Provide Language Context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage === "en" ? "ar" : "en";
    });
  };
  const value = useMemo(() => {
    return { language, toggleLanguage };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
