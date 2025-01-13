import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bannner from "../components/Bannner";
import GiveawaySecton from "../components/GiveawaySecton";
import GameBanner from "../components/GameBanner";
import GameLogos from "../components/GameLogos";
import TeamsSection from "../components/TeamsSection";
import AdvisorsSection from "../components/AdvisorsSection";
import RoadmapSection from "../components/RoadmapSection";
import NextSection from "../components/NextSection";

const Home = () => {
  return (
    <>
      <Header />
      <Bannner />
      <main >
        <GiveawaySecton title="Givaways" />
        <GameBanner />
        <GameLogos />
        <GiveawaySecton title="Team" />
        <TeamsSection />
        <AdvisorsSection />
        <RoadmapSection />
        <NextSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
