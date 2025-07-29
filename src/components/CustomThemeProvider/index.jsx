import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "../../context/ThemeContext";
import getAppTheme from "../../utils/theme";
import { GLOBAL_CONSTANTS } from "../../constants";

const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("social_support_theme_mode");
    return savedMode || GLOBAL_CONSTANTS.THEME.LIGHT;
  });

  const [direction, setDirection] = useState(GLOBAL_CONSTANTS.DIRECTION.LTR);

  useEffect(() => {
    localStorage.setItem("social_support_theme_mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) =>
      prevMode === GLOBAL_CONSTANTS.THEME.LIGHT
        ? GLOBAL_CONSTANTS.THEME.DARK
        : GLOBAL_CONSTANTS.THEME.LIGHT
    );
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
