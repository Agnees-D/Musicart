import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';

const ProductDetailsModal = ({ selectedProduct, setSelectedProduct, addToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = selectedProduct?.galleryImages || ['/default-image.jpg'];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full mx-4 overflow-hidden animate-fade-in">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <div className="relative h-96 lg:h-full">
              <img
                src={galleryImages[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCurrentImageIndex((prevIndex) => prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full text-purple-600 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prevIndex) => prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full text-purple-600 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 p-8">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <p className="text-3xl font-bold text-purple-600 mt-4">
              ₹{selectedProduct.price} 
            </p>

            <p className="text-gray-600 mt-4">
              {selectedProduct.description}
            </p>
            <p className="text-gray-500 mt-2">
              Experience premium sound quality with crystal-clear audio and deep bass. Designed for comfort and long-lasting durability, this product ensures an immersive listening experience.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="space-y-2">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Colors</h3>
              <div className="flex space-x-2">
                {(selectedProduct.colors && selectedProduct.colors.length > 0
                  ? selectedProduct.colors
                  : ["Black", "Blue", "Red"] 
                ).map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-200 rounded-full text-sm hover:border-purple-600 hover:text-purple-600 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <button 
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => addToCart(selectedProduct)}
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-6 w-6 text-red-500" />
              </button>

              <button 
                className="ml-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
                onClick={() => addToCart(selectedProduct)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
