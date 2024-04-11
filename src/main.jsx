import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>
);