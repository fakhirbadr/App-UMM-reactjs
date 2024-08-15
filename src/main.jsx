import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Gestion from "./pages/gestion/Gestion";
import Interventions from "./pages/Interventions/Interventions";
import Calendrier from "./pages/calendrier/Calendrier";
import Tickets from "./pages/Ticket/Tickets";
import Stocks from "./pages/Stocks/Stocks";
import Profil from "./pages/profil/Profil";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="gestion" element={<Gestion />} />
      <Route path="interventions" element={<Interventions />} />
      <Route path="Calendrier" element={<Calendrier />} />
      <Route path="Tickets" element={<Tickets />} />
      <Route path="Stocks" element={<Stocks />} />
      <Route path="Calendrier" element={<Calendrier />} />
      <Route path="Profil" element={<Profil />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
