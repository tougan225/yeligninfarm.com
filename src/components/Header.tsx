import React, { useState } from 'react';
import { Wheat, Menu, X, Phone, Whatsapp  } from 'lucide-react';
import logoImage from "@/assets/logo.jpg";

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: '🏠' },
    { id: 'produits', label: 'Nos Produits', icon: '🌽' },
    { id: 'commande', label: 'Commander', icon: '📦' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'galerie', label: 'Galerie', icon: '📸' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <button
                onClick={() => onSectionChange("accueil")}
                className="focus:outline-none"
              >
                <img
                  src={logoImage}
                  alt="Logo Yelignin Farm"
                  className="h-12 w-auto"
                />
              </button>
            </div>

            <div>
              <h1 className="text-xl font-bold text-green-800">Yelignin Farm</h1>
              <p className="text-sm text-green-600">Coopérative Agricole</p>
            </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Contact rapide */}

<div className="hidden lg:flex items-center space-x-4">
<a
  href="https://wa.me/2250719312760"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
>
  {/* Icone WhatsApp SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M20.52 3.48A11.8 11.8 0 0012 0a11.77 11.77 0 00-9.33 4.88A11.77 11.77 0 000 12c0 2.03.53 3.94 1.53 5.63L0 24l6.48-1.5A11.81 11.81 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.52 16.44a9.58 9.58 0 01-5.1-1.5l-.36-.22-3.07.71.71-3.01-.23-.36a9.58 9.58 0 011.45-12.7A9.58 9.58 0 0112 2.44a9.58 9.58 0 019.56 9.56 9.58 9.58 0 01-9.56 9.56z" />
    <path d="M17.42 14.63l-2.07-.93a.5.5 0 00-.47 0l-1.18.6a5.52 5.52 0 01-2.58-2.58l.6-1.18a.5.5 0 000-.47l-.93-2.07a.5.5 0 00-.64-.26 3.94 3.94 0 00-1.54 1.54 7.24 7.24 0 00-.93 3.49 7.25 7.25 0 007.25 7.25 7.21 7.21 0 003.49-.93 3.94 3.94 0 001.54-1.54.5.5 0 00-.25-.64z" />
  </svg>
  <span>WhatsApp: +225 0719312760</span>
</a>

</div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-left transition-colors ${
                    currentSection === item.id
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-3 px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mt-4"
              >
                <Phone className="h-5 w-5" />
                <span>Appeler maintenant</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;