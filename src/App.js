import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NosServices from './components/NosServices';
import Rgpd from './components/Rgpd';
import EtapesDansLaCreationDunSite from './components/EtapesDansLaCreationDunSite';
import './App.css';
import Formulaire from './components/Formulaire';
import Devis from './components/Devis';

import Footer from './components/Footer'

// Importation du logo
import logo1 from './assets/images/logo05.1.png';
import logo2 from './assets/images/Sans titre-1.1.png';
import logo3 from './assets/images/Sans titre-2.1.png';

// Importation des fonds
import fondAccueil from './assets/images/fondecran/fond12.jpg';
import fondAPropos from './assets/images/fondecran/fond12.jpg';
import fondServices from './assets/images/fondecran/fond12.jpg';
import fondPortfolio from './assets/images/fondecran/fond12.jpg';
import fondContact from './assets/images/fondecran/fond12.jpg';
import fondRgpd from './assets/images/fondecran/fond12.jpg';
import fondDevis from './assets/images/fondecran/fond12.jpg';







const fondsRoutes = {
  '/': fondAccueil,
  '/a-propos': fondAPropos,
  '/nos-services': fondServices,
  '/portfolio': fondPortfolio,
  '/contact': fondContact,
  '/rgpd': fondRgpd,
  '/devis': fondDevis,
};







function App() {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState(fondAccueil);
  const [nextBackground, setNextBackground] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const newBackground = fondsRoutes[location.pathname] || fondAccueil;
    if (newBackground !== currentBackground) {
      setNextBackground(newBackground);
      setTransitioning(true);
    }
  }, [location, currentBackground]);


  
  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setCurrentBackground(nextBackground);
        setNextBackground(null);
        setTransitioning(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [transitioning, nextBackground]);

  return (
    <div className="app-container">
      <div className="background-container">
        <div
          className="background current"
          style={{
            backgroundImage: `url(${currentBackground})`,
          }}
        ></div>
        {nextBackground && (
          <div
            className="background next"
            style={{
              backgroundImage: `url(${nextBackground})`,
            }}
          ></div>
        )}
      </div>

    
      <header className="header">
        <div className='gros'>
          <div className="logo-container">
            <img src={logo1} alt="Logo" className="logo" />
            <div className='MiseEnPage02'>
              <div><img src={logo3} alt="Logo" className="logo3" /></div>
              <div><img src={logo2} alt="Logo" className="logo2" /></div>
            </div>
          </div>
        </div>
      </header>
   
      <Navbar />
      
      <Routes>
      
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-services" element={<NosServices />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="/etapesCreationSite" element={<EtapesDansLaCreationDunSite />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formulaire-devis" element={<Formulaire />} />
        <Route path="/devis" element={<Devis />} />
        </Routes>

      <Footer />

    </div>
  );
}

export default App;
