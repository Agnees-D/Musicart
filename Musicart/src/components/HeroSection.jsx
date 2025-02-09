import React, { useState, useEffect, useRef } from "react";
const upcomingEarphones = [
  {
    id: 1,
    name: "EchoPods Pro X",
    description: "Crystal-clear sound with active noise cancellation.",
    img: "/heroear7.jpg",
    extraImages: ["/game1.jpg", "/game21.webp"],
    details: "EchoPods Pro X features industry-leading noise cancellation, 30 hours of battery life, and ultra-low latency for gaming.",
    releaseDate: "March 15, 2025",
    features: ["Active Noise Cancellation", "30 Hours Battery", "Ultra-Low Latency"]
  },
  {
    id: 2,
    name: "BassBoost 500",
    description: "Deep bass, immersive sound, and ultra-lightweight design.",
    img: "/heroear2.jpg",
    extraImages: ["/o5.avif", "/o1.avif"],
    details: "BassBoost 500 delivers powerful bass with high-fidelity audio and sweatproof durability, perfect for workouts.",
    releaseDate: "April 10, 2025",
    features: ["Deep Bass", "Sweatproof Design", "High-Fidelity Audio"]
  },
  {
    id: 3,
    name: "SonicWave Air",
    description: "Wireless freedom with 50-hour battery life.",
    img: "/hero7.jpg",
    extraImages: ["/neck7.webp", "/neck8.avif"],
    details: "SonicWave Air features ultra-fast Bluetooth 5.3, a premium metallic finish, and adaptive noise isolation.",
    releaseDate: "May 5, 2025",
    features: ["Bluetooth 5.3", "Metallic Finish", "Adaptive Noise Isolation"]
  },
];

const sliderData = [...upcomingEarphones, upcomingEarphones[0]];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const transitionRef = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showDetails) {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [showDetails]);

  useEffect(() => {
    if (currentSlide === sliderData.length - 1) {
      setTimeout(() => {
        transitionRef.current = false;
        setCurrentSlide(0);
      }, 700);
    } else {
      transitionRef.current = true;
    }
  }, [currentSlide]);

  return (
    <div id="HeroSection" className="bg-black relative w-screen h-[500px] overflow-hidden mt-10">
      {!showDetails ? (
        <div
          className="absolute inset-0 flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: transitionRef.current ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {sliderData.map((earphone, index) => (
            <div key={index} className="w-screen flex-shrink-0 relative h-[500px]">
              <img
                src={earphone.img}
                alt={earphone.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-9 left-2 right-22 text-white max-w-lg mx-auto px-4 sm:px-6">
                <div className="animate-fade-in-up">
                  <h1 className="text-3xl font-bold mb-2 leading-tight">
                    Introducing {" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                      {earphone.name}
                    </span>
                  </h1>
                  <p className="text-lg mb-4 text-gray-300">{earphone.description}</p>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl max-w-3xl w-full mx-4 shadow-lg relative">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              {upcomingEarphones[currentSlide % upcomingEarphones.length].name}
            </h2>
            <p className="text-md text-gray-700 text-center mb-2">
              {upcomingEarphones[currentSlide % upcomingEarphones.length].details}
            </p>
            <p className="text-sm text-gray-500 text-center mb-4">
              Release Date: <span className="font-semibold">{upcomingEarphones[currentSlide % upcomingEarphones.length].releaseDate}</span>
            </p>
            <ul className="text-gray-700 text-center mb-4">
              {upcomingEarphones[currentSlide % upcomingEarphones.length].features.map((feature, index) => (
                <li key={index} className="text-md">✅ {feature}</li>
              ))}
            </ul>
            <div className="flex justify-center space-x-4 mb-4">
              {upcomingEarphones[currentSlide % upcomingEarphones.length].extraImages.map((img, index) => (
                <img key={index} src={img} alt="Extra view" className="w-24 h-24 object-cover rounded-lg shadow-md" />
              ))}
            </div>
            <button
              onClick={() => setShowDetails(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection; 