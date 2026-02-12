import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.scss";

import PageWrapper from "./components/PageWrapper";
import MainPage from "./pages/main-page";
import Contacts from "./pages/contacts";
import Rooms from "./pages/rooms";
import RoomDetail from "./pages/room-detail";
import Restaurant from "./pages/restaurant";
import NotFound from "./pages/not-found";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <MainPage />
            </PageWrapper>
          }
        />
        <Route
          path="/rooms"
          element={
            <PageWrapper>
              <Rooms />
            </PageWrapper>
          }
        />
        <Route
          path="/room/:id"
          element={
            <PageWrapper>
              <RoomDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/contacts"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />
        <Route
          path="/restaurant"
          element={
            <PageWrapper>
              <Restaurant />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
