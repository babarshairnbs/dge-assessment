import { createContext } from "react";
import { GLOBAL_CONSTANTS } from "../constants";

const ThemeContext = createContext({
  mode: GLOBAL_CONSTANTS.THEME.LIGHT,
  toggleMode: () => {},
  direction: GLOBAL_CONSTANTS.DIRECTION.LTR,
  setDirection: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export default ThemeContext;
