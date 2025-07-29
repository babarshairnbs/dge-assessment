import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useThemeMode from "../../hooks/useThemeMode";
import { LanguageContextProvider } from "../../context/LanguageContext";
import { GLOBAL_CONSTANTS, LANGUAGE } from "../../constants";
import STORAGE_KEY from "../../constants/Storage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorageService";

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const { setDirection } = useThemeMode();

  const [language, setLanguage] = useState(() => {
    const savedLanguage = getLocalStorageItem(STORAGE_KEY.LANGUAGE);
    return savedLanguage || LANGUAGE.EN;
  });

  const [direction, setDirectionState] = useState(() => {
    const savedLanguage = getLocalStorageItem(STORAGE_KEY.LANGUAGE);
    return savedLanguage === LANGUAGE.AR
      ? GLOBAL_CONSTANTS.DIRECTION.RTL
      : GLOBAL_CONSTANTS.DIRECTION.LTR;
  });

  useEffect(() => {
    // Set initial language
    i18n.changeLanguage(language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    setDirection(direction);
  }, []);

  const changeLanguage = (newLanguage) => {
    const newDirection =
      newLanguage === LANGUAGE.AR
        ? GLOBAL_CONSTANTS.DIRECTION.RTL
        : GLOBAL_CONSTANTS.DIRECTION.LTR;

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
    setLocalStorageItem(STORAGE_KEY.LANGUAGE, newLanguage);
  };

  const contextValue = {
    language,
    direction,
    changeLanguage,
    isRTL: direction === GLOBAL_CONSTANTS.DIRECTION.RTL,
  };

  return (
    <LanguageContextProvider value={contextValue}>
      {children}
    </LanguageContextProvider>
  );
};
