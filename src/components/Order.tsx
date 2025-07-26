import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Truck, CreditCard, MapPin, Phone } from 'lucide-react';

const Order: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryType: 'livraison',
    paymentMethod: 'virement',
    notes: ''
  });

  const products = [
    {
      id: 1,
      name: 'Maïs Grain Premium',
      price: 280,
      unit: 'tonne',
      minQuantity: 1,
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Maïs Fourrage',
      price: 45,
      unit: 'tonne',
      minQuantity: 5,
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Semences Certifiées',
      price: 4.5,
      unit: 'kg',
      minQuantity: 25,
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Farine de Maïs',
      price: 1.2,
      unit: 'kg',
      minQuantity: 10,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const addToCart = (product: any) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.minQuantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: product.minQuantity }]);
    }
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    const product = products.find(p => p.id === id);
    if (newQuantity < (product?.minQuantity || 1)) return;
    
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez intégrer avec un système de paiement ou envoyer par email
    alert('Commande envoyée ! Nous vous contacterons sous 24h pour confirmer.');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Commander vos Produits
          </h1>
          <p className="text-xl text-gray-600">
            Sélectionnez vos produits et passez commande en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Nos Produits Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-green-800 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-green-600">
                        {product.price} FCFA/{product.unit}
                      </span>
                      <span className="text-sm text-gray-500">
                        Min: {product.minQuantity} {product.unit}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Ajouter au panier</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Order Form */}
          <div className="space-y-6">
            {/* Cart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Votre Panier</span>
              </h3>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.price} FCFA/{item.unit}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - item.minQuantity)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + item.minQuantity)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center text-lg font-bold text-green-800">
                      <span>Total:</span>
                      <span>{getTotalPrice().toFixed(2)} FCFA</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Form */}
            {cart.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Informations de Commande</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse de livraison *
                    </label>
                    <textarea
                      required
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mode de livraison
                    </label>
                    <select
                      value={orderForm.deliveryType}
                      onChange={(e) => setOrderForm({...orderForm, deliveryType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="livraison">Livraison à domicile</option>
                      <option value="retrait">Retrait sur site</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mode de paiement
                    </label>
                    <select
                      value={orderForm.paymentMethod}
                      onChange={(e) => setOrderForm({...orderForm, paymentMethod: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="virement">Virement bancaire</option>
                      <option value="cheque">Chèque</option>
                      <option value="especes">Espèces (retrait uniquement)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes (optionnel)
                    </label>
                    <textarea
                      value={orderForm.notes}
                      onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows={2}
                      placeholder="Informations complémentaires..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Confirmer la Commande
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
