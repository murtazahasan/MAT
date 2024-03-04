import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Header,
  Docs,
  Learn,
  Community,
  Pricing,
  Footer,
  Quickstart,
} from "./components";
import Routes from "./Routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "",
        element: <Docs />,
      },
      {
        path: "Learn",
        element: <Learn />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
      {
        path: "Quickstart",
        element: <Quickstart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
