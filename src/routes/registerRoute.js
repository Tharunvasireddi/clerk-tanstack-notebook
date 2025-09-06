import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import RegisterPage from "../pages/RegisterPage";

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

export default registerRoute;
