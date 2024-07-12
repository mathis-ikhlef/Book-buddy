import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/Root";
import LoginForm from "./pages/LoginForm"; // Correction de l'import pour correspondre au nom du fichier
import RegisterForm from "./pages/RegisterForm"; // Correction de l'import pour correspondre au nom du fichier
import ErrorPage from "../src/routes/Errorpage";
import "../src/global.css"; // Utilisation du chemin absolu

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loginform",
    element: <LoginForm />, // Utilisation du composant LoginForm
    errorElement: <ErrorPage />,
  },
  {
    path: "/registerform",
    element: <RegisterForm />, // Utilisation du composant RegisterForm
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
