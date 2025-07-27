import React from 'react';
import { Wheat, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from "@/assets/logofooter.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
          {/* Logo */}
              <a href="#" className="flex items-center space-x-3">
                <img
                  src={logoImage}
                  alt="Logo Yelignin Farm"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Depuis plus de 25 ans, nous produisons et commercialisons 
              du maïs de qualité directement du producteur au consommateur.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Produits</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Maïs Grain Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maïs Fourrage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Semences Certifiées</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Farine de Maïs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maïs Pop-Corn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Autres Céréales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Livraison à domicile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retrait sur site</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devis personnalisé</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conseil technique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analyses qualité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stockage</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-green-200">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="text-sm">Lun-Ven: 8h-18h</p>
                  <a href="tel:+33123456789" className="hover:text-white transition-colors">
                    +225 0719312760
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-green-200">
                <Mail className="h-4 w-4" />
                <a href="mailto:infoyeligninfarm@gmail.com" className="hover:text-white transition-colors">
                  infoyeligninfarm@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-green-200">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>123 Route des Champs</p>
                  <p>45000 Orléans, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-200 text-sm">
              © 2024 Yelignin Farm - Coopérative Agricole. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;