import { createContext } from "react";

const ThemeContext = createContext({
  mode: "light",
  toggleMode: () => {},
  direction: "ltr",
  setDirection: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export default ThemeContext;
