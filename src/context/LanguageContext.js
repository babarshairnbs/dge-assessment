import { createContext } from "react";
import { GLOBAL_CONSTANTS, LANGUAGE } from "../constants";

const LanguageContext = createContext({
  language: LANGUAGE.EN,
  direction: GLOBAL_CONSTANTS.DIRECTION.LTR,
  changeLanguage: () => {},
  isRTL: false,
});

export const LanguageContextProvider = LanguageContext.Provider;
export const LanguageContextConsumer = LanguageContext.Consumer;

export default LanguageContext;
