import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import Prices from '../Prices';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;