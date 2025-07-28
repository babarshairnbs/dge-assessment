import { Container } from "@mui/material";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router";
import CustomThemeProvider from "./components/CustomThemeProvider";
import GlobalError from "./components/GlobalError";
import { LanguageProvider } from "./components/LanguageProvider";
import Loading from "./components/Loading";
import router from "./config/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <ErrorBoundary
          FallbackComponent={GlobalError}
          onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<Loading />}>
            <Header />
            <RouterProvider router={router} />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </LanguageProvider>
    </CustomThemeProvider>
  );
}

export default App;
