import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import { ROUTES } from "../constants";

const router = createBrowserRouter([{ path: ROUTES.HOME, Component: Home }]);

export default router;
