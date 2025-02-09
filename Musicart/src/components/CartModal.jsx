import React from "react";
import { X } from "lucide-react";

const CartModal = ({ showCart, setShowCart, cartItems }) => {
  if (!showCart) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img
                    src={item.image || "/default-image.jpg"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold">x{item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        {/* Checkout Button */}
        <div className="mt-6 flex justify-between items-center">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
