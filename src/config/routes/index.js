import { createBrowserRouter } from "react-router";
import Home from "../../pages/Home";
import { ROUTES } from "../../constants";
import Steps from "../../pages/ApplicationForm/FormSteps";

const router = createBrowserRouter([
  { path: ROUTES.HOME, Component: Home },
  { path: ROUTES.APPLICATION, Component: Steps },
]);

export default router;
