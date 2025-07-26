import React, { useState } from 'react';
import { Wheat, ShoppingCart, Phone, Mail, MapPin, Menu, X, Star, Truck, Shield, Users } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Order from './components/Order';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('accueil');

  const renderSection = () => {
    switch (currentSection) {
      case 'accueil':
        return <Hero onOrderClick={() => setCurrentSection('commande')} />;
      case 'produits':
        return <Products />;
      case 'commande':
        return <Order />;
      case 'contact':
        return <Contact />;
      case 'galerie':
        return <Gallery />;
      default:
        return <Hero onOrderClick={() => setCurrentSection('commande')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;