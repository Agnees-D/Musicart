import React from "react";
import { X } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginModal = ({ showLogin, setShowLogin }) => {
  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-xl p-8 w-96 shadow-2xl animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-white">Login</h2>
          <button
            onClick={() => setShowLogin(false)}
            className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <form className="space-y-5">
          <div className="relative">
            <input
              type="email"
              className="w-full p-4 pr-10 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
            />
          </div>
          
          <div className="relative">
            <input
              type="password"
              className="w-full p-4 pr-10 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
            />
          </div>
          
          <button className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all">
            Login
          </button>
          
          <div className="flex justify-between items-center text-sm space-x-4 mt-4">
            <span className="text-gray-500">Or login with</span>
            <div className="flex space-x-3">
              <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition">
                <FaGoogle className="w-5 h-5 text-red-500" />
              </button>
              <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition">
                <FaFacebook className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-400 mt-5">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
