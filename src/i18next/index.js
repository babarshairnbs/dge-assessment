import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE } from "../constants";

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

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: LANGUAGE.EN, // if you're using a language detector, do not define the lng option
    fallbackLng: LANGUAGE.EN,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
