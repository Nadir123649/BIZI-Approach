import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Scan from "../components/Scan";
import BiziApproach from "../components/BiziApproach";
import Contact from "../components/Contact";
import Demo from "../components/Demo";
import Networking from '../components/Networking';



const Home = () => {
  return (
    <>
      <Header />

      <main >
        <HeroBanner />
        <Scan />
        <BiziApproach />
        <Networking />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
