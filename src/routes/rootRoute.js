import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import registerRoute from "./registerRoute";
import loginRoute from "./loginRoute";
import dashBoardRoute from "./dashboardRoute";
import homeRoute from "./homeRoute";

export const rootRoute = createRootRoute({
  component: App,
});

export const treeRoute = rootRoute.addChildren([
  registerRoute,
  loginRoute,
  dashBoardRoute,
  homeRoute,
]);
