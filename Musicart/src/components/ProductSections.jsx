import React from 'react';

const getRandomRating = () => {
  return Math.random() * 4 + 1; 
};

const ProductSections = ({ products, categories, setSelectedProduct }) => {

  const renderStars = (rating) => {
    const validRating = typeof rating === 'number' && rating >= 0 ? rating : 0;

    const fullStars = Math.floor(validRating); 
    const halfStar = validRating % 1 !== 0; 
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 

    return (
      <>
        {[...Array(fullStars)].map((_, idx) => (
          <span key={`full-${idx}`} className="text-yellow-400 text-3xl">&#9733;</span> 
        ))}
        {halfStar && <span className="text-yellow-400 text-3xl">&#9733;</span>} 
        {[...Array(emptyStars)].map((_, idx) => (
          <span key={`empty-${idx}`} className="text-gray-300 text-3xl">&#9733;</span>
        ))}
      </>
    );
  };

  return (
    <>
      {Object.entries(products).map(([categoryKey, items]) => {
        const categoryData = categories.find(c => c.ref === categoryKey);
        return (
          <div
            key={categoryKey}
            id={categoryKey}
            className="w-screen h-screen px-4 sm:px-6 lg:px-8 py-16"
            style={{
              backgroundImage: `url('/img4.jpg')`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
            }}
          >
            <div id="ProductSections" className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-8">
                {categoryData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => {
                  const randomRating = getRandomRating(); 

                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                      <div className="relative group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity" />
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-purple-600 font-semibold transform hover:scale-105 transition-transform">
                            View Details
                          </span>
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-purple-600">
                            ₹{product.price}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {renderStars(randomRating)} 
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductSections;
