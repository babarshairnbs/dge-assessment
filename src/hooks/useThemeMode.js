import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
};

export default useThemeMode;
