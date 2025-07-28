import { createContext } from "react";
import { LANGUAGE } from "../constants";

const LanguageContext = createContext({
  language: LANGUAGE.EN,
  direction: "ltr",
  changeLanguage: () => {},
  isRTL: false,
});

export const LanguageContextProvider = LanguageContext.Provider;
export const LanguageContextConsumer = LanguageContext.Consumer;

export default LanguageContext;
