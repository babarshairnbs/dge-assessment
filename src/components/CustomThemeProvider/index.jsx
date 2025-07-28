import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "../../context/ThemeContext";
import getAppTheme from "../../utils/theme";

const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("social_support_theme_mode");
    return savedMode || "light";
  });

  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    localStorage.setItem("social_support_theme_mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () => getAppTheme(mode, direction),
    [mode, direction]
  );

  const contextValue = {
    mode,
    toggleMode,
    direction,
    setDirection,
  };

  return (
    <ThemeContextProvider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default CustomThemeProvider;
