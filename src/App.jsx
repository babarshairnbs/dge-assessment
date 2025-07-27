import { RouterProvider } from "react-router";
import router from "./appRoute";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "./components/GlobalError";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <ErrorBoundary
        FallbackComponent={GlobalError}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Container>
  );
}

export default App;
