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
        <section id="giveaway">
          <GiveawaySecton title="Givaways" />
        </section>
        <GameBanner />
        <GameLogos />
        <section id="team">
          <GiveawaySecton title="Team" />
          <TeamsSection />
        </section>
        <AdvisorsSection />
        <section id="roadmap">
          <RoadmapSection />
        </section>
        <section id="thegame">
          <NextSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
