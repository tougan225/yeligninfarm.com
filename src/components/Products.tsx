import React, { useState } from 'react';
import { ShoppingCart, Info, Star, Truck } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

const products = [
  {
    id: 1,
    name: 'Maïs Grain Premium',
    category: 'grain',
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '280 000 FCFA/tonne',
    description: 'Maïs grain de première qualité, taux d\'humidité < 14%, parfait pour l\'alimentation animale',
    features: ['Taux d\'humidité < 14%', 'Calibrage uniforme', 'Sans mycotoxines', 'Livraison en vrac ou big-bag'],
    inStock: true
  },
  {
    id: 2,
    name: 'Maïs Fourrage',
    category: 'fourrage',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '45 000 FCFA/tonne',
    description: 'Ensilage de maïs de haute qualité nutritionnelle pour bovins et ovins',
    features: ['Récolte au stade optimal', 'Taux de matière sèche 32-35%', 'Valeur énergétique élevée', 'Livraison en remorque'],
    inStock: true
  },
  {
    id: 3,
    name: 'Semences Certifiées',
    category: 'semences',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '4 500 FCFA/kg',
    description: 'Semences de maïs certifiées, variétés adaptées au climat local',
    features: ['Certification officielle', 'Taux de germination > 95%', 'Variétés locales', 'Conseil technique inclus'],
    inStock: true
  },
  {
    id: 4,
    name: 'Farine de Maïs',
    category: 'transforme',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '1 200 FCFA/kg',
    description: 'Farine de maïs artisanale, moulue sur meule de pierre',
    features: ['Mouture traditionnelle', '100% naturelle', 'Sans additifs', 'Conditionnement 1kg à 25kg'],
    inStock: true
  },
  {
    id: 5,
    name: 'Maïs Pop-Corn',
    category: 'transforme',
    image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=800',
    price: '3 800 FCFA/kg',
    description: 'Maïs spécial pop-corn, variété éclatante, idéal pour les professionnels',
    features: ['Variété spéciale', 'Taux d\'éclatement élevé', 'Grains uniformes', 'Conditionnement professionnel'],
    inStock: false
  },
  {
    id: 6,
    name: 'Autres Produits Vivriers',
    category: 'futur',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'Bientôt disponible',
    description: 'Blé, orge, tournesol et autres céréales locales - En cours de développement',
    features: ['Production locale', 'Qualité garantie', 'Prix producteur', 'Disponible prochainement'],
    inStock: false
  }
];


  const categories = [
    { id: 'tous', label: 'Tous les produits', icon: '🌾' },
    { id: 'grain', label: 'Maïs Grain', icon: '🌽' },
    { id: 'fourrage', label: 'Fourrage', icon: '🐄' },
    { id: 'semences', label: 'Semences', icon: '🌱' },
    { id: 'transforme', label: 'Produits Transformés', icon: '🥖' },
    { id: 'futur', label: 'À Venir', icon: '🚀' }
  ];

  const filteredProducts = selectedCategory === 'tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Nos Produits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de maïs et produits dérivés. 
            Qualité garantie, prix producteur, livraison dans toute la région.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Bientôt
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Disponible
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">{product.price}</div>
                  {product.inStock ? (
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Commander</span>
                    </button>
                  ) : (
                    <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 cursor-not-allowed">
                      <Info className="h-4 w-4" />
                      <span>Bientôt</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un devis personnalisé ?</h2>
          <p className="text-xl mb-6 text-green-100">
            Contactez-nous pour des quantités importantes ou des besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 +225 0719312760
            </a>
            <a
              href="mailto:infoyeligninfarm@gmail.com"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              ✉️ Demander un devis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;