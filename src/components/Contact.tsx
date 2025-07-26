import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'devis',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez intégrer avec un service d'email
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', subject: 'devis', message: '' });
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Besoin d'un devis ? Notre équipe est à votre disposition 
            pour vous accompagner dans vos projets agricoles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Demande de Devis / Contact
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="+225 0719312760"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet de votre demande
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="devis">Demande de devis</option>
                  <option value="info">Informations produits</option>
                  <option value="livraison">Questions livraison</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Décrivez votre besoin, les quantités souhaitées, votre localisation..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Envoyer ma demande</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">Téléphone</h3>
                    <p className="text-gray-600">Lun-Ven: 8h-18h | Sam: 8h-12h</p>
                    <a href="tel:+33123456789" className="text-green-600 font-semibold hover:text-green-700">
                      +225 0719312760
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">WhatsApp</h3>
                    <p className="text-gray-600">Réponse rapide 7j/7</p>
                    <a href="https://wa.me/33123456789" className="text-green-600 font-semibold hover:text-green-700">
                      +225 0719312760
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">Email</h3>
                    <p className="text-gray-600">Réponse sous 24h</p>
                    <a href="mailto:infoyeligninfarm@gmail.com" className="text-green-600 font-semibold hover:text-green-700">
                      infoyeligninfarm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">Adresse</h3>
                    <p className="text-gray-600">Siège social et entrepôt</p>
                    <p className="text-green-600 font-semibold">
                      Bodokro<br />
                      Cote d'ivoire
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="Carte Google Maps - Bodokro"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.854012003251!2d-5.036717684722055!3d6.865592695034675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc9ed195b482b95%3A0x16a592bd06f1ee15!2sBodokro!5e0!3m2!1sfr!2sci!4v1690415000000!5m2!1sfr!2sci"
                width="100%"
                height="256"
                className="border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Hours */}
            <div className="bg-green-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6" />
                <h3 className="text-xl font-bold">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">8h00 - 12h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-500">
                <p className="text-sm text-green-100">
                  🚨 Urgences agricoles : 24h/24 au 06 12 34 56 78
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-green-800 mb-3">Quels sont vos délais de livraison ?</h3>
              <p className="text-gray-600">
                Nos délais varient de 2 à 5 jours ouvrés selon la quantité et la destination. 
                Pour les commandes urgentes, contactez-nous directement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-green-800 mb-3">Proposez-vous des analyses de qualité ?</h3>
              <p className="text-gray-600">
                Oui, tous nos produits sont analysés. Nous fournissons les certificats 
                d'analyse sur demande (humidité, mycotoxines, etc.).
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-green-800 mb-3">Quelles sont vos conditions de paiement ?</h3>
              <p className="text-gray-600">
                Nous acceptons les virements bancaires, chèques et espèces (retrait uniquement). 
                Paiement à la commande ou à 30 jours pour les clients réguliers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-green-800 mb-3">Livrez-vous partout en France ?</h3>
              <p className="text-gray-600">
                Nous livrons dans un rayon de 500km autour d'Orléans. 
                Pour les autres régions, nous pouvons étudier des solutions de transport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;