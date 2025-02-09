import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FilterButton = ({ showFilters, setShowFilters }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setShowFilters(!showFilters)} 
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
      >
        <SlidersHorizontal className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FilterButton;
