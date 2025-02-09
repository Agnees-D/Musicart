import React from 'react';

const FilterPanel = ({ showFilters, priceRange, setPriceRange, selectedColors, setSelectedColors }) => {
  if (!showFilters) return null;

  return (
    <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-6 w-80 animate-slide-in-up z-40">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} 
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Colors</label>
          <div className="flex flex-wrap gap-2">
            {['Black', 'White', 'Silver', 'Gold', 'Red'].map((color) => (
              <button
                key={color}
                onClick={() => {
                  if (selectedColors.includes(color)) {
                    setSelectedColors(selectedColors.filter(c => c !== color)); 
                  } else {
                    setSelectedColors([...selectedColors, color]); 
                  }
                }}
                className={`px-3 py-1 rounded-full text-sm ${selectedColors.includes(color) ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
