import React from 'react';
import { X, Heart } from 'lucide-react';

const WishlistModal = ({ showWishlist, setShowWishlist }) => {
  if (!showWishlist) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Wishlist</h2>
          <button
            onClick={() => setShowWishlist(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          <button
            onClick={() => setShowWishlist(false)}
            className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
