import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/main.scss";

import MainPage from "./pages/main-page";
import Contacts from "./pages/contacts";
import Rooms from "./pages/rooms";
import RoomDetail from "./pages/room-detail";
import Restaurant from "./pages/restaurant";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
