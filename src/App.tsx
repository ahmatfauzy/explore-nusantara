// src/App.tsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsList from "./pages/Events/EventsList";
import EventDetail from "./pages/Events/EventDetail";
import Hi from "./pages/ErrorPage";
import MainLayout from "./components/MainLayout";
import "./index.css";
import EssentialsDetail from "./pages/Essentials/EssentialsDetail";

function App() {
  return (
    <Routes>
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
        path="/events/:eventPath"
        element={
          <MainLayout>
            <EventDetail />
          </MainLayout>
        }
      />

      <Route
        path="/information/:infoId"
        element={
          <MainLayout>
            <EssentialsDetail />
          </MainLayout>
        }
      />

      {/* 404*/}
      <Route path="*" element={<Hi />} />
    </Routes>
  );
}

export default App;
