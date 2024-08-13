// components/ProductDetail/ProductDetail.js
import React from "react";
import "../../index.css";
import "../../App.css";

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-[600px] sm:w-[400px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Product Details */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-25 max-w-xs object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">
            {product.name}
          </h2>
          <p className="text-gray-700 text-center mb-4">
            {product.description}
          </p>
          <p className="font-semibold text-xl mb-4">{product.price}</p>
          <div className="flex gap-4 sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-600 w-[160px] text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={onClose}
              className="bg-red-600 w-[160px] text-white p-2 rounded-lg hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
