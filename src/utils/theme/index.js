import { createTheme } from "@mui/material/styles";

const getAppTheme = (mode = "light", direction = "ltr") =>
  createTheme({
    palette: {
      mode, // "light" | "dark"
    },
    direction, // "ltr" | "rtl"
  });

export default getAppTheme;
