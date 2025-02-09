import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CategoriesMenu from './components/CategoriesMenu';
import HeroSection from './components/HeroSection';
import CategoriesGrid from './components/CategoriesGrid';
import FilterButton from './components/FilterButton';
import FilterPanel from './components/FilterPanel';
import ProductSections from './components/ProductSections';
import ProductDetailsModal from './components/ProductDetailsModal';
import CartModal from './components/CartModal';
import WishlistModal from './components/WishlistModal';
import LoginModal from './components/LoginModal';
import { HeadphonesIcon, Bluetooth, Cable, Headphones } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Wired Earphones', icon: <Cable />, ref: 'wired', image: '/wire1.jpg' },
  { id: 2, name: 'Neckband', icon: <Headphones />, ref: 'neckband', image: '/neck1.avif' },
  { id: 3, name: 'Wireless Headphones', icon: <Headphones />, ref: 'wireless_headphones', image: '/hero3.avif' },
  { id: 4, name: 'Wired Headphones', icon: <Headphones />, ref: 'wired_headphones', image: '/headw1.webp' },
  { id: 5, name: 'Gaming Headsets', icon: <Headphones />, ref: 'gaming', image: '/game7.jpg' },
  { id: 6, name: 'Headset', icon: <HeadphonesIcon />, ref: 'headset', image: '/headset1.avif' },
  { id: 7, name: 'Bluetooth Earpods', icon: <Headphones />, ref: 'earpods', image: '/heroear3.webp' },
  { id: 8, name: 'Open Ear Headphones', icon: <Bluetooth />, ref: 'open_earpods', image: '/openear.jpg' },
];

const products = {
  wired: [
    { id: 1, name: 'Bass Master X1', price: 999, rating: 4,description: 'High-fidelity wired earphones', image: '/wire1.webp',galleryImages: ['/wire4.webp', '/wire2.jpg'], features: ['Deep Bass', 'Tangle-free Cable'] },
    { id: 2, name: 'Sound Pro 200', price: 350,rating:3, description: 'Noise isolating wired earphones', image: '/wire1.jpg', galleryImages: ['/wire5.jpg', '/wire6.webp'],features: ['Noise Isolation', 'Comfort Fit'] },
    { id: 3, name: 'Bass Master X1', price: 799, rating: 4,description: 'High-fidelity wired earphones', image: '/wire3.jpg',galleryImages: ['/wire7.jpg', '/wire8.avif'], features: ['Deep Bass', 'Tangle-free Cable'] },
  
  ],
  neckband: [
    { id: 4, name: 'FlexiBand X', price: 959,rating:2.5, description: 'Comfortable neckband with deep bass', image: '/neck4.webp',galleryImages: [ '/neck3.jpg','/neck2.webp'],  features: ['Deep Bass', 'Long Battery Life'] },
    { id: 5, name: 'NeckTune Pro', price: 899,rating:5, description: 'Lightweight Bluetooth neckband', image: '/neck5.jpg', galleryImages: [ '/neck6.jpg','/neck2.webp'], features: ['Lightweight', 'Fast Charging'] },
    { id: 6, name: 'NeckTune Pro', price: 1199,rating:5, description: 'Lightweight Bluetooth neckband', image: '/neck9.jpg', galleryImages: [ '/neck7.webp','/neck8.avif'],features: ['Lightweight', 'Fast Charging'] }

  ],
  wireless_headphones: [
    { id: 7, name: 'AirPods Pro Max', price: 2498,rating:4, description: 'Premium wireless earbuds', image: '/hero7.jpg',galleryImages: ['/head1.jpg', '/head3.jpg'], features: ['Active Noise Cancellation', 'Spatial Audio'] },
    { id: 8, name: 'NeckTune Pro', price: 1799,rating:5, description: 'Lightweight Bluetooth neckband', image: '/img4.jpg', galleryImages: ['/head4.webp', '/head5.webp'],features: ['Lightweight', 'Fast Charging'] },

    { id: 9, name: 'Galaxy Buds Pro', price: 2999,rating:2, description: 'High-quality wireless earbuds', image: '/head7.png',galleryImages: ['/head6.webp', '/head9.jpg'], features: ['360 Audio', 'IPX7 Water Resistance'] }
  ],
  wired_headphones: [
    { id: 10, name: 'Studio Master 500', price: 1200,rating:1, description: 'Wired over-ear studio headphones', image: '/headw.jpg',galleryImages: ['/headw3.webp', '/headw4.jpg'], features: ['Studio Quality Sound', 'Comfortable Earpads'] },
    { id: 11, name: 'Classic Wired', price: 1999, rating:4.5,description: 'Premium wired headphones', image: '/headw2.webp',galleryImages: ['/headw7.jpg', '/headw5.webp'], features: ['Deep Bass', 'Foldable Design'] },
    { id: 12, name: 'NeckTune Pro', price: 799,rating:5, description: 'Lightweight Bluetooth neckband', image: '/headw6.webp',galleryImages: ['/headw7.jpg', '/headw9.jpg'], features: ['Lightweight', 'Fast Charging'] }

  ],
  gaming: [
    { id: 13, name: 'NeckTune Pro', price: 8999,rating:5, description: 'Lightweight Bluetooth neckband', image: '/game4.jpg',galleryImages: ['/game3.webp', '/game7.jpg'], features: ['Lightweight', 'Fast Charging'] },

    { id: 14, name: 'GamePro X', price: 14999, rating:3.4,description: 'Gaming headset with surround sound', image: '/game6.jpg',galleryImages: ['/game5.png', '/game4.webp'],  features: ['7.1 Surround Sound', 'Noise-canceling Mic'] },
    { id: 15, name: 'HyperX Cloud II', price: 5059, rating:4.3,description: 'Premium gaming headset', image: '/game25.jpg',galleryImages: ['/game9.jpg', '/game2.jpg'],  features: ['Virtual 7.1 Surround Sound', 'Memory Foam Ear Pads'] }
  ],
  headset: [
    { id: 16, name: 'Studio Master 500', price:1000, rating:5,description: 'Wired over-ear studio headphones', image: '/hs5.avif', galleryImages: ['/hs3.jpg', '/hs2.jpg'],features: ['Studio Quality Sound', 'Comfortable Earpads'] },
    { id: 17, name: 'NeckTune Pro', price: 1599,rating:5, description: 'Lightweight Bluetooth neckband', image: '/hs7.avif',galleryImages: ['/hs4.jpeg', '/hs6.jpg'], features: ['Lightweight', 'Fast Charging'] },

    { id: 18, name: 'Classic Wired', price: 2789, rating:2,description: 'Premium wired headphones', image: '/hs8.webp',galleryImages: ['/hs9.avif', '/hs0.jpg'], features: ['Deep Bass', 'Foldable Design'] }
  ],
  earpods: [
    { id: 19, name: 'Studio Master 500', price:3000, rating:3,description: 'Wired over-ear studio headphones', image: '/e1.jpeg',galleryImages: ['/e2.jpg', '/e7.webp'], features: ['Studio Quality Sound', 'Comfortable Earpads'] },
    { id: 20, name: 'NeckTune Pro', price: 2699,rating:5, description: 'Lightweight Bluetooth neckband', image: '/e4.webp', galleryImages: ['/e4.jpg', '/e5.webp'],features: ['Lightweight', 'Fast Charging'] },

    { id: 21, name: 'Classic Wired', price: 1999,rating:5, description: 'Premium wired headphones', image: '/e8.jpg', galleryImages: ['/e9.jpg', '/e0.jpg'], features: ['Deep Bass', 'Foldable Design'] }
  ],
  open_earpods: [
    { id: 22, name: 'Studio Master 500', price: 1299,rating:4, description: 'Wired over-ear studio headphones', image: '/o7.avif',galleryImages: ['/03.avif', '/o2.jpg'], features: ['Studio Quality Sound', 'Comfortable Earpads'] },
    { id: 23, name: 'NeckTune Pro', price: 1799,rating:5, description: 'Lightweight Bluetooth neckband', image: '/o4.avif',galleryImages: ['/o5.avif', '/o4.jpg'], features: ['Lightweight', 'Fast Charging'] },

    { id: 24, name: 'Classic Wired', price: 4899, rating:2,description: 'Premium wired headphones', image: '/o12.avif', galleryImages: ['/o11.webp', '/o13.avif'], features: ['Deep Bass', 'Foldable Design'] }
  ],
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  // Initialize price range and selected colors
  const [priceRange, setPriceRange] = useState([0, 500]); // Default price range
  const [selectedColors, setSelectedColors] = useState([]); // Default empty selection

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };

  const scrollToCategory = (categoryRef) => {
    document.getElementById(categoryRef)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation 
        setShowWishlist={setShowWishlist} 
        setShowCart={setShowCart} 
        setShowLogin={setShowLogin} 
        setShowMenu={setShowMenu} 
      />
      <CategoriesMenu categories={categories} scrollToCategory={scrollToCategory} showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroSection />
      <CategoriesGrid categories={categories} scrollToCategory={scrollToCategory} />
      <FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
      
      {/* Pass priceRange and selectedColors to FilterPanel */}
      <FilterPanel 
        showFilters={showFilters} 
        priceRange={priceRange} 
        setPriceRange={setPriceRange} 
        selectedColors={selectedColors} 
        setSelectedColors={setSelectedColors} 
      />
      
      <ProductSections 
        products={products} 
        categories={categories} 
        setSelectedProduct={setSelectedProduct} 
      />
      
      {selectedProduct && (
        <ProductDetailsModal 
          selectedProduct={selectedProduct} 
          setSelectedProduct={setSelectedProduct} 
          addToCart={handleAddToCart}  
        />
      )}
      
      <CartModal showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} />
      <WishlistModal showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
      <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />
      
      
      <footer className="bg-black text-white py-8 px-6">
  <div className="max-w-screen-xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="text-sm">We provide high-quality earphones and audio solutions to elevate your listening experience.</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#HeroSection" className="hover:text-gray-300">Home</a></li>
          <li><a href="#CategoriesGrid" className="hover:text-gray-300">Categories</a></li>
          <li><a href="#ProductSections" className="hover:text-gray-300">Shop</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
        <p className="text-sm mb-4">Subscribe for the latest updates and offers.</p>
        <div className="flex">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 w-2/3 rounded-l-lg text-black" />
          <button className="px-4 py-2 bg-purple-700 rounded-r-lg hover:bg-purple-800">Subscribe</button>
        </div>
      </div>
      
      {/* Option One Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Option One</h3>
        <p className="text-sm">Explore our exclusive deals and special offers.</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Discover More</button>
      </div>
    </div>
    
    <div className="mt-8 flex justify-center space-x-6">
      <a href="https://facebook.com" className="text-white hover:text-gray-300"><FaFacebookF size={24} /></a>
      <a href="https://twitter.com" className="text-white hover:text-gray-300"><FaTwitter size={24} /></a>
      <a href="https://instagram.com" className="text-white hover:text-gray-300"><FaInstagram size={24} /></a>
      <a href="https://github.com" className="text-white hover:text-gray-300"><FaGithub size={24} /></a>
    </div>
    
    <div className="text-center mt-8 text-sm">
      <p>© 2025 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>
    
    </div>
  );
}

export default App;