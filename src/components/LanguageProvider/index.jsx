import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useThemeMode from "../../hooks/useThemeMode";
import { LanguageContextProvider } from "../../context/LanguageContext";
import { LANGUAGE } from "../../constants";

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const { setDirection } = useThemeMode();

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("social_support_language");
    return savedLanguage || LANGUAGE.EN;
  });

  const [direction, setDirectionState] = useState(() => {
    const savedLanguage = localStorage.getItem("social_support_language");
    return savedLanguage === LANGUAGE.AR ? "rtl" : "ltr";
  });

  useEffect(() => {
    // Set initial language
    i18n.changeLanguage(language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    setDirection(direction);
  }, []);

  const changeLanguage = (newLanguage) => {
    const newDirection = newLanguage === LANGUAGE.AR ? "rtl" : "ltr";

    setLanguage(newLanguage);
    setDirectionState(newDirection);

    // Update i18n
    i18n.changeLanguage(newLanguage);

    // Update DOM
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newLanguage;

    // Update theme direction
    setDirection(newDirection);

    // Save to localStorage
    localStorage.setItem("social_support_language", newLanguage);
  };

  const contextValue = {
    language,
    direction,
    changeLanguage,
    isRTL: direction === "rtl",
  };

  return (
    <LanguageContextProvider value={contextValue}>
      {children}
    </LanguageContextProvider>
  );
};
