import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import dashBoard from "../pages/DashBoardPage";

const dashBoardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: dashBoard,
});

export default dashBoardRoute;
