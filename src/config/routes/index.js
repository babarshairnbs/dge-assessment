import { createBrowserRouter } from "react-router";
import { ROUTES } from "../../constants";
import ApplicationForm from "../../pages/ApplicationForm";
import Home from "../../pages/Home";
import SuccessPage from "../../pages/Success";

/**
 * Defines the application's route configuration using createBrowserRouter.
 *
 * Routes:
 * - ROUTES.HOME: Renders the Home component.
 * - ROUTES.APPLICATION: Renders the ApplicationForm component.
 * - ROUTES.SUCCESS: Renders the SuccessPage component.
 * - ROUTES.NOT_FOUND: Redirects to ROUTES.HOME using a loader function.
 *
 * @constant
 * @type {import('react-router').Router}
 */
const router = createBrowserRouter([
  { path: ROUTES.HOME, Component: Home },
  { path: ROUTES.APPLICATION, Component: ApplicationForm },
  { path: ROUTES.SUCCESS, Component: SuccessPage },
  {
    path: ROUTES.NOT_FOUND,
    loader: () => {
      window.location.replace(ROUTES.HOME);
      return null;
    },
  },
]);

export default router;
