// src/App.tsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsList from "./pages/Events/EventsList";
import EventDetail from "./pages/Events/EventDetail";
import Hi from "./pages/hi";
import MainLayout from "./components/MainLayout";
import "./index.css";

function App() {
  return (
    <Routes>
      {/* Semua halaman normal pakai layout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/events"
        element={
          <MainLayout>
            <EventsList />
          </MainLayout>
        }
      />
      <Route
        path="/events/:eventId"
        element={
          <MainLayout>
            <EventDetail />
          </MainLayout>
        }
      />

      {/* 404 page: tidak pakai layout */}
      <Route path="*" element={<Hi />} />
    </Routes>
  );
}

export default App;
