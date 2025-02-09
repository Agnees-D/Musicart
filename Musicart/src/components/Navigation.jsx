import React from 'react';
import { Menu, Headphones, Search, Heart, ShoppingCart, User } from 'lucide-react';

const Navigation = ({ setShowMenu, setShowWishlist, setShowCart, setShowLogin }) => {
  console.log("setShowMenu:", setShowMenu);
  console.log("setShowWishlist:", setShowWishlist);
  console.log("setShowCart:", setShowCart);
  console.log("setShowLogin:", setShowLogin);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              onClick={() => setShowMenu && setShowMenu((prev) => !prev)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-purple-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center">
              <Headphones className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                SoundStyle
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for earphones..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowWishlist && setShowWishlist(true)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors relative"
            >
              <Heart className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={() => setShowCart && setShowCart(true)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={() => setShowLogin && setShowLogin(true)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <User className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
