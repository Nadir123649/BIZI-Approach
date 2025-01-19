import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Scan from '../components/Scan';
import BiziApproach from '../components/BiziApproach';
import Contact from '../components/Contact';
import Demo from '../components/Demo';
import Networking from '../components/Networking';




const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* <AboutBanner />
        <CarsSection />
        <SlidingCarsSection /> */}
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
}

export default About;
