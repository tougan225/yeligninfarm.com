import React from 'react';
import { ShoppingCart, Star, Users, Truck, Shield } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative min-h-screen flex items-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-yellow-800/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Maïs de Qualité
                <span className="block text-yellow-300">Directement du Producteur</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Notre coopérative agricole vous propose du maïs grain, fourrage et semences 
                de première qualité. Production locale, prix producteur, livraison garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOrderClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>Commander du Maïs</span>
                </button>
                <a
                  href="tel:+33123456789"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold text-center transition-all"
                >
                  Devis Gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">150+</div>
              <div className="text-gray-600">Agriculteurs</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">25</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">500km</div>
              <div className="text-gray-600">Zone de livraison</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">100%</div>
              <div className="text-gray-600">Qualité garantie</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Notre Coopérative Agricole
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Depuis plus de 25 ans, notre coopérative rassemble les meilleurs producteurs 
                de maïs de la région. Nous garantissons une qualité exceptionnelle grâce à 
                des méthodes de culture respectueuses de l'environnement et un contrôle 
                rigoureux à chaque étape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Production locale et traçable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Prix direct producteur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Livraison dans toute la région</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Bientôt d'autres produits vivriers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stockage de maïs"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2500+ tonnes</div>
                <div className="text-sm">produites par an</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;