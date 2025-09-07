import { createRoute } from "@tanstack/react-router";
import homePage from "../pages/homePage";
import { rootRoute } from "./rootRoute";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: homePage,
});

export default homeRoute;
