import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState, useEffect, Suspense } from "react";
import Home from "./pages/Home";
import EventsList from "./pages/Events/EventsList";
import EventDetail from "./pages/Events/EventDetail";
import ErrorCoy from "./pages/ErrorPage";
import MainLayout from "./components/MainLayout";
import "./index.css";
import EssentialsDetail from "./pages/Essentials/EssentialsDetail";
import DestinationsPage from "./pages/Explore/DestinationsPage";
import DestinationDetail from "./pages/Explore/DestinationDetail";
import CulinaryPage from "./pages/Explore/CulinaryPage";
import CulinaryDetail from "./pages/Explore/CulinaryDetail";
import CulturePage from "./pages/Explore/CulturePage";
import CultureDetail from "./pages/Explore/CultureDetail";
import ExplorePage from "./pages/Explore/ExplorePage";
import CustomLoader from "./components/CustomLoader";

//
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();

  // Init AOS sekali saat load
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        offset: 120,
        easing: "ease-in-out",
        disable: window.innerWidth < 768,
      });

      setTimeout(() => {
        AOS.refreshHard(); // pastikan semua elemen ke-detect
      }, 500);
    };

    if (document.readyState === "complete") {
      initializeAOS();
    } else {
      window.requestAnimationFrame(() => {
        initializeAOS();
      });

      return () => window.removeEventListener("load", initializeAOS);
    }
  }, []);

  // Refresh AOS setiap kali pindah route
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 300); // kasih delay kecil biar render kelar dulu
  }, [location]);

  // //

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <Suspense fallback={<CustomLoader />}>
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

        <Route
          path="/destinations"
          element={
            <MainLayout>
              <DestinationsPage />
            </MainLayout>
          }
        />
        <Route
          path="/destination/:destinationPath"
          element={
            <MainLayout>
              <DestinationDetail />
            </MainLayout>
          }
        />
        <Route
          path="/culinary"
          element={
            <MainLayout>
              <CulinaryPage />
            </MainLayout>
          }
        />
        <Route
          path="/culinary/:culinaryPath"
          element={
            <MainLayout>
              <CulinaryDetail />
            </MainLayout>
          }
        />
        <Route
          path="/culture"
          element={
            <MainLayout>
              <CulturePage />
            </MainLayout>
          }
        />
        <Route
          path="/culture/:culturePath"
          element={
            <MainLayout>
              <CultureDetail />
            </MainLayout>
          }
        />

        <Route
          path="/explore"
          element={
            <MainLayout>
              <ExplorePage />
            </MainLayout>
          }
        />

        {/* 404*/}
        <Route path="*" element={<ErrorCoy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
