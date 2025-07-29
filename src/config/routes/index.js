import { createBrowserRouter } from "react-router";
import { ROUTES } from "../../constants";
import ApplicationForm from "../../pages/ApplicationForm";
import Home from "../../pages/Home";
import SuccessPage from "../../pages/Success";

const router = createBrowserRouter([
  { path: ROUTES.HOME, Component: Home },
  { path: ROUTES.APPLICATION, Component: ApplicationForm },
  { path: ROUTES.SUCCESS, Component: SuccessPage },
]);

export default router;
