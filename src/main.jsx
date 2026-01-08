import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/main.scss";

import MainPage from "./pages/main-page";
import Contacts from "./pages/contacts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rooms" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
