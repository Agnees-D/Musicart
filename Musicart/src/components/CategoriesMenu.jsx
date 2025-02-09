import React from 'react';
import { X } from 'lucide-react';

const CategoriesMenu = ({ showMenu, setShowMenu, categories, scrollToCategory }) => {
  if (!showMenu) return null; // ✅ Ensure menu only renders when needed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl animate-slide-in-left">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Categories
            </h2>
            <button 
              onClick={() => setShowMenu(false)} // ✅ Properly call setShowMenu
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  scrollToCategory(category.ref);
                  setShowMenu(false); // ✅ Close menu after selecting category
                }}
                className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <span className="text-purple-600 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
