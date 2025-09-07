import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { treeRoute } from "./routes/rootRoute.js";
const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerk_key) {
  throw new Error("Missing the key");
}
const router = createRouter({ routeTree: treeRoute });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
