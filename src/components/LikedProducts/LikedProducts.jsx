// src/components/LikedProducts/LikedProducts.js
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const LikedProducts = ({
  likedProducts = [],
  onViewProduct,
  onLikeProduct,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Liked Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {likedProducts.length > 0 ? (
          likedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[250px] object-contain mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.price}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => onLikeProduct(product.id)}
                  className="text-xl"
                >
                  <AiFillHeart className="text-red-500" />
                </button>
                <button
                  onClick={() => onViewProduct(product)}
                  className="text-xl"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-lg font-semibold">
            No liked products
          </p>
        )}
      </div>
    </div>
  );
};

export default LikedProducts;
