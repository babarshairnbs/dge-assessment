import { createTheme } from "@mui/material/styles";
import { GLOBAL_CONSTANTS } from "../../constants";

const getAppTheme = (mode, direction) =>
  createTheme({
    direction,
    palette: {
      mode,
      primary: {
        main: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#2196f3" : "#90caf9",
        light: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#64b5f6" : "#bbdefb",
        dark: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#1976d2" : "#42a5f5",
      },
      secondary: {
        main: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#f50057" : "#f48fb1",
      },
      background: {
        default: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#fafafa" : "#121212",
        paper: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#212121" : "#ffffff",
        secondary:
          mode === GLOBAL_CONSTANTS.THEME.LIGHT ? "#757575" : "#b0b0b0",
      },
    },
    typography: {
      fontFamily:
        direction === GLOBAL_CONSTANTS.DIRECTION.RTL
          ? '"Cairo", "Roboto", "Helvetica", "Arial", sans-serif'
          : '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
          contained: {
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            "&:hover": {
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              mode === GLOBAL_CONSTANTS.THEME.LIGHT
                ? "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
                : "0 1px 3px rgba(255,255,255,0.12), 0 1px 2px rgba(255,255,255,0.24)",
          },
        },
      },
    },
  });
export default getAppTheme;
