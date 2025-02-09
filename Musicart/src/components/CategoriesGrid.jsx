import React, { useState } from "react";

const CategoriesGrid = ({ categories, scrollToCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div id="CategoriesGrid" className="bg-black max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
       <p className="text-center text-2xl font-semibold text-gray-100 mb-24">
       🔥 Introducing Our Latest Collection! 🔥<br></br>
       <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
    Scroll down to explore and grab the best sound experience today! 🚀🎶
  </span><br></br>
 👇
      </p>
      <p className="text-center text-2xl font-semibold text-gray-100 mb-6">
        ✨ <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Discover your perfect sound!</span>  
        Click a category or scroll to explore. 🎧
      </p>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-center mb-12">
        Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToCategory(category.ref)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                hoveredCategory === category.id ? "opacity-0 scale-105" : "opacity-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-700/80 opacity-20 group-hover:opacity-100 transition-opacity"></div>

            {/* Default View: Category Name */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
                hoveredCategory === category.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <h3 className="text-2xl font-semibold">{category.name}</h3>
            </div>

            {/* Hover View: Advantages */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center transition-opacity duration-500 ${
                hoveredCategory === category.id ? "opacity-100 scale-105" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm px-6">
                {category.advantages || "High-quality sound, comfortable fit, and long battery life."}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
