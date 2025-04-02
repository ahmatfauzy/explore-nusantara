import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import IndonesiaMap from "../components/IndonesiaParadise";
import EventsCards from "../components/EventsCard";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <div>
        <IndonesiaMap />
      </div>
        <EventsCards />
    </div>
  );
}

export default Home;
