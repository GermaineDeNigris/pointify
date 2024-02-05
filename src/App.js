import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import MiddleSection from './Components/MiddleSection';
import FeaturesSection from './Components/FeaturesSection';
import Footer from './Components/Footer';
import './App.css'; // This will be your main CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MiddleSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;

