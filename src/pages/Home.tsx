import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";
import IndonesiaMap from "../components/IndonesiaParadise";
import EventsCards from "../components/EventsCard";
import ExploreIndo from "../components/ExploreIndo";


function Home() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <HeroSection />
      <div>
        <IndonesiaMap />
      </div>
      <ExploreIndo />
      <EventsCards />
    </div>
  );
}

export default Home;
