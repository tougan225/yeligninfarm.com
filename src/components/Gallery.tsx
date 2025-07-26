import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Champs de maïs en pleine croissance',
      category: 'Champs'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Stockage des grains dans nos silos',
      category: 'Stockage'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Maïs grain de qualité premium',
      category: 'Produits'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Récolte mécanisée moderne',
      category: 'Récolte'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Transformation en farine',
      category: 'Transformation'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Équipe de la coopérative',
      category: 'Équipe'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Contrôle qualité des semences',
      category: 'Qualité'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Livraison chez nos clients',
      category: 'Livraison'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sacs prêts à expédier',
      category: 'Produits'
    }
  ];

  const categories = ['Tous', 'Champs', 'Stockage', 'Produits', 'Récolte', 'Transformation', 'Équipe', 'Qualité', 'Livraison'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredImages = selectedCategory === 'Tous' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? images.find(img => img.id === selectedImage) : null;

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Notre Galerie Photos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez en images notre savoir-faire, nos installations et la qualité 
            de nos produits. De la graine à la livraison, suivez toute notre chaîne de production.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                  {selectedImageData.category}
                </span>
                <h3 className="text-xl font-semibold">{selectedImageData.title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Visitez nos installations</h2>
          <p className="text-xl mb-6 text-green-100">
            Vous souhaitez voir nos installations de plus près ? 
            Prenez rendez-vous pour une visite guidée de notre coopérative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Prendre rendez-vous
            </a>
            <a
              href="mailto:infoyeligninfarm@gmail.com"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              ✉️ Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;