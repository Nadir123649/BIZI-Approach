import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';
import CarsSection from '../components/CarsSection';
import SlidingCarsSection from '../components/SlidingCarsSection';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutBanner />
        <CarsSection />
        <SlidingCarsSection />
      </main>
      <Footer />
    </>
  );
}

export default About;
