import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartSidebar = ({
  cart,
  onQuantityChange,
  onCheckout,
  onClose,
  onDeleteProduct,
  onDeleteAll,
}) => {
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.quantity * parseFloat(product.price.replace("$", "")),
    0
  );

  return (
    <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Cart ({totalItems} items)</h2>
        <button onClick={onClose} className="text-red-500 text-lg font-bold">
          &times;
        </button>
      </div>

      {/* Scrollable Cart Items */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex flex-col flex-grow ml-4">
                <span className="font-semibold">{product.name}</span>
                <span className="text-gray-500">{product.price}</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onQuantityChange(product.id, "decrease")}
                    className="p-1"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-2">{product.quantity}</span>
                  <button
                    onClick={() => onQuantityChange(product.id, "increase")}
                    className="p-1"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="p-1 ml-4 text-red-500 hover:text-red-700"
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-2"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={onDeleteAll}
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Delete All Items
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
