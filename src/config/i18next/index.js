import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import STORAGE_KEY from "../../constants/Storage";
import { getLocalStorageItem } from "../../services/localStorageService";

import { LANGUAGE } from "../../constants";

// Import translation files
import ar from "./locales/ar.json";
import en from "./locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocalStorageItem(STORAGE_KEY.LANGUAGE) || LANGUAGE.EN,
  fallbackLng: LANGUAGE.EN,

  interpolation: {
    escapeValue: false,
  },

  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
