import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router";
import GlobalError from "./components/GlobalError";
import Loading from "./components/Loading";
import getAppTheme from "./utils/theme";
import router from "./config/routes";

function App() {
  // TODO: Add theme and language state management into context api
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("en");

  const theme = useMemo(
    () => getAppTheme(mode, language === "ar" ? "rtl" : "ltr"),
    [mode, language]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <ErrorBoundary
          FallbackComponent={GlobalError}
          onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </ThemeProvider>
  );
}

export default App;
