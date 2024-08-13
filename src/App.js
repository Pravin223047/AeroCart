/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import "./App.css";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Modal from "./components/Modal/Modal";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import LikedProducts from "./components/LikedProducts/LikedProducts";
import PromotionalCarousel from "./components/PromotionalCarousel/PromotionalCarousel";
import NearbyStores from "./components/NearbyStores/NearbyStores";
import MapSection from "./components/MapSection/MapSection";

const categories = [
  "All",
  "Beauty & Personal Care",
  "Electronics",
  "Books & Stationery",
  "Art & Handicraft",
  "Gifts & Toys",
];

const allProducts = [
  {
    id: 1,
    name: "Motorola - Navy Blue",
    price: "$299",
    image: "/Smartphones/smartphone1.jpeg",
    category: "Electronics",
    description:
      "A sleek smartphone with a powerful processor and high-resolution display.",
  },
  {
    id: 2,
    name: "I Kall - Black",
    price: "$299",
    image: "/Smartphones/smartphone2.jpeg",
    category: "Electronics",
    description:
      "Affordable smartphone with essential features and a durable design.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S30 Ultra",
    price: "$999",
    image: "/Smartphones/smartphone3.jpeg",
    category: "Electronics",
    description:
      "Flagship smartphone with advanced camera system and cutting-edge technology.",
  },
  {
    id: 4,
    name: "Motorola - Black",
    price: "$349",
    image: "/Smartphones/smartphone4.jpeg",
    category: "Electronics",
    description:
      "Premium smartphone with high-speed performance and a large display.",
  },
  {
    id: 5,
    name: "Infinity",
    price: "$399",
    image: "/Smartphones/smartphone6.jpeg",
    category: "Electronics",
    description:
      "Versatile smartphone with a high-definition camera and long battery life.",
  },
  {
    id: 6,
    name: "Luxury Facial Cream",
    price: "$89",
    image: "/beautycare/care1.jpeg",
    category: "Beauty & Personal Care",
    description:
      "Hydrating facial cream with anti-aging properties for a youthful glow.",
  },
  {
    id: 7,
    name: "Anti-Acne Serum",
    price: "$49",
    image: "/beautycare/care2.jpeg",
    category: "Beauty & Personal Care",
    description:
      "Effective serum designed to reduce acne and improve skin texture.",
  },
  {
    id: 8,
    name: "Moisturizing Body Lotion",
    price: "$29",
    image: "/beautycare/care3.jpeg",
    category: "Beauty & Personal Care",
    description:
      "Nourishing lotion to keep your skin soft and hydrated all day.",
  },
  {
    id: 9,
    name: "Exfoliating Face Scrub",
    price: "$19",
    image: "/beautycare/care4.jpeg",
    category: "Beauty & Personal Care",
    description:
      "Gentle scrub that removes dead skin cells and revitalizes your complexion.",
  },
  {
    id: 10,
    name: "Nourishing Hair Mask",
    price: "$35",
    image: "/beautycare/care5.jpeg",
    category: "Beauty & Personal Care",
    description:
      "Deep conditioning mask that strengthens and revitalizes hair.",
  },
  {
    id: 11,
    name: "Leather Journal",
    price: "$39",
    image: "/bookstationary/bookstationary1.jpeg",
    category: "Books & Stationery",
    description:
      "Elegant leather-bound journal perfect for note-taking and journaling.",
  },
  {
    id: 12,
    name: "Fountain Pen Set",
    price: "$59",
    image: "/bookstationary/bookstationary2.jpeg",
    category: "Books & Stationery",
    description:
      "Premium fountain pen set for smooth writing and a touch of luxury.",
  },
  {
    id: 13,
    name: "Art Supplies Kit",
    price: "$49",
    image: "/bookstationary/bookstationary3.jpeg",
    category: "Books & Stationery",
    description:
      "Complete kit with brushes, paints, and sketchbooks for aspiring artists.",
  },
  {
    id: 14,
    name: "Desk Organizer",
    price: "$25",
    image: "/bookstationary/bookstationary4.jpeg",
    category: "Books & Stationery",
    description:
      "Stylish organizer to keep your desk tidy and your stationery accessible.",
  },
  {
    id: 15,
    name: "Wall Calendar",
    price: "$15",
    image: "/bookstationary/bookstationary5.jpeg",
    category: "Books & Stationery",
    description:
      "Beautifully designed wall calendar with monthly and yearly views.",
  },
  {
    id: 16,
    name: "Handcrafted Vase",
    price: "$89",
    image: "/Arts/art1.jpeg",
    category: "Art & Handicraft",
    description:
      "Artisan-crafted vase perfect for home decor and floral arrangements.",
  },
  {
    id: 17,
    name: "Handmade Ceramic Bowl",
    price: "$45",
    image: "/Arts/art2.jpeg",
    category: "Art & Handicraft",
    description:
      "Unique ceramic bowl with intricate designs, ideal for serving or display.",
  },
  {
    id: 18,
    name: "Wooden Sculptures",
    price: "$120",
    image: "/Arts/art3.jpeg",
    category: "Art & Handicraft",
    description:
      "Exquisite wooden sculptures crafted with fine detail and artistry.",
  },
  {
    id: 19,
    name: "Woven Textile Art",
    price: "$75",
    image: "/Arts/art4.jpeg",
    category: "Art & Handicraft",
    description:
      "Hand-woven textile art piece to add a touch of elegance to your space.",
  },
  {
    id: 20,
    name: "Decorative Metal Frame",
    price: "$55",
    image: "/Arts/art5.jpeg",
    category: "Art & Handicraft",
    description:
      "Stylish metal frame designed to showcase your favorite photographs or artwork.",
  },
  {
    id: 21,
    name: "Stuffed Teddy Bear",
    price: "$24",
    image: "/gifttoys/toy1.jpeg",
    category: "Gifts & Toys",
    description:
      "Soft and cuddly teddy bear perfect for children and collectors alike.",
  },
  {
    id: 22,
    name: "Wooden Toy Train",
    price: "$39",
    image: "/gifttoys/toy2.jpeg",
    category: "Gifts & Toys",
    description:
      "Classic wooden toy train set for imaginative play and learning.",
  },
  {
    id: 23,
    name: "Building Blocks Set",
    price: "$29",
    image: "/gifttoys/toy3.jpeg",
    category: "Gifts & Toys",
    description:
      "Colorful building blocks set that promotes creativity and motor skills.",
  },
  {
    id: 24,
    name: "Puzzle Game",
    price: "$19",
    image: "/gifttoys/toy4.jpeg",
    category: "Gifts & Toys",
    description:
      "Engaging puzzle game that challenges the mind and provides hours of fun.",
  },
  {
    id: 25,
    name: "Remote-Control Car",
    price: "$49",
    image: "/gifttoys/toy5.jpeg",
    category: "Gifts & Toys",
    description:
      "High-speed remote-control car with durable design for outdoor play.",
  },
];

const nearbyStores = [
  {
    id: 1,
    name: "Vegetable Store",
    address:
      "Nehru Nagar, Chhattisgarh 491441 Saluja's Unique Vegetable Store, address",
    distance: "1.2 miles",
    lat: 40.712776,
    lng: -74.005974,
    products: "Vegetable Stores",
    image: "/stores/store1.jpg",
  },
  {
    id: 2,
    name: "Books & Stationary Store",
    address:
      " Plot No.19, Shop No.16-2, Hydernagar, 116/1A, Mumbai Hwy, Hyderabad, Telangana 500090",
    distance: "2.3 miles",
    lat: 40.722776,
    lng: -74.015974,
    products: "Books, Stationery",
    image: "/stores/store2.jpg",
  },
  {
    id: 3,
    name: "Gifts & Toys Store",
    address:
      "Shop No.7, Ramchandra Apartment, Near Walchand College, Maharashtra 413006",
    distance: "0.8 miles",
    lat: 40.732776,
    lng: -74.025974,
    products: "Gifts & Toys",
    image: "/stores/store3.jpg",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);
  const [showLikedProducts, setShowLikedProducts] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "All"
        ? allProducts
        : allProducts.filter((product) => product.category === category)
    );
  };
  const handleQuantityChange = (productId, action) => {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === productId) {
          const newQuantity =
            action === "increase"
              ? product.quantity + 1
              : Math.max(product.quantity - 1, 1);

          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast.success("Added to cart!");
  };

  const handleLikeProduct = (productId) => {
    setLikedProducts((prevLikes) =>
      prevLikes.includes(productId)
        ? prevLikes.filter((id) => id !== productId)
        : [...prevLikes, productId]
    );
    toast.success(
      likedProducts.includes(productId) ? "Product unliked!" : "Product liked!"
    );
  };

  const handleViewProduct = (product) => {
    setViewProduct(product);
  };

  const handleCloseProductDetail = () => {
    setViewProduct(null);
  };

  const handleShowLikedProducts = () => {
    setShowLikedProducts(!showLikedProducts);
    setFilteredProducts(
      showLikedProducts
        ? allProducts
        : allProducts.filter((product) => likedProducts.includes(product.id))
    );
  };

  const handleDeleteProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const handleDeleteAll = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleCheckout = () => {
    toast.info("Proceeding to checkout...");
    setIsCartOpen(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [searchVisible, setSearchVisible] = useState(false);
  const [allStores, setAllStores] = useState([]);

  return (
    <>
      <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
        <header className="w-full flex flex-col gap-1">
          {/* Top Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex items-center justify-between shadow-lg w-full">
            <a href="#" className="flex gap-2 items-center justify-center">
              <img
                src="/aerocart.png"
                alt="AeroCart"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                title="AeroCart"
              />
              <h1 className="hidden md:flex text-xl md:text-3xl  font-bold tracking-wide cursor-pointer hover:text-yellow-300">
                AeroCart
              </h1>
            </a>
            <div className="flex items-center gap-2  md:gap-4">
              <select
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={selectedCategory}
                className="hidden xl:flex text-black rounded-md p-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="relative flex items-center">
                <AiOutlineSearch
                  onClick={() => setSearchVisible(!searchVisible)}
                  className="text-gray-900 w-9 h-9 p-2 rounded-lg bg-slate-200 cursor-pointer md:hidden text-xl"
                />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className={`pl-10 text-black w-[300px] lg:w-[600px] p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    searchVisible ? "block" : "hidden"
                  } md:block`}
                />
              </div>
              <button className="flex items-center justify-center h-9 w-9 p-2 rounded-md bg-yellow-500 text-black shadow-md hover:bg-yellow-600">
                <AiOutlineEnvironment />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full shadow-md"
              >
                <AiOutlineShoppingCart className="text-3xl" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {totalCartItems}
                  </span>
                )}
              </button>
              <button
                onClick={handleShowLikedProducts}
                className="relative p-2 rounded-full shadow-md"
              >
                <AiOutlineHeart className="text-3xl" />
                {likedProducts.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {likedProducts.length}
                  </span>
                )}
              </button>
              <button
                onClick={() =>
                  toast.info("Profile functionality is not yet implemented.")
                }
                className="p-2 rounded-full shadow-md"
              >
                <AiOutlineUser className="text-3xl" />
              </button>
            </div>
          </div>
          {/* Categories Header */}
          <div className="hidden lg:flex bg-gradient-to-r from-gray-600 to-gray-700 text-white p-4 flex-col md:flex-row items-center justify-between shadow-lg w-full">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 bg-yellow-400 text-black hover:bg-white hover:text-blue-950 rounded-lg mb-2 md:mb-0"
            >
              Categories
            </button>
            <div className="flex flex-wrap gap-4 md:gap-6 w-full md:w-auto">
              {[
                "All",
                "Beauty & Personal Care",
                "Electronics",
                "Books & Stationery",
                "Art & Handicraft",
                "Gifts & Toys",
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="hover:text-yellow-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryChange(category);
                  }}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          {searchVisible && (
            <div className="fixed z-[9999] w-full h-full inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white flex gap-1 p-4 rounded-md shadow-lg">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full p-2 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  onClick={() => setSearchVisible(false)}
                  className="mt-2 p-3 w-12 rounded-md bg-red-500 text-white"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </header>
        {/* Promotional Offers */}
        <section className="bg-white p-6 flex items-center justify-center relative">
          <div className="hidden 2xl:flex px-4 md:px-8 lg:px-12 lg:flex-col items-center">
            <div className="w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
              <img
                src="/specialoffer/specialoffer1.jpeg"
                alt="Special Offer 1"
                className="w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Exclusive Deal!</h3>
              <p className="text-sm text-center">
                Get an additional 65% off on all electronics with code:
                ELECTRO20
              </p>
            </div>
          </div>

          <div className="carousel w-full max-w-4xl object-contain relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Promotional Offers
            </h2>
            <PromotionalCarousel />
          </div>
          <div className="hidden 2xl:flex px-4 md:px-8 lg:px-12 lg:flex-col items-center">
            <div className="w-[400px]  h-[400px] bg-gradient-to-br from-green-500 to-yellow-500 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
              <img
                src="/specialoffer/specialoffer2.jpeg"
                alt="Special Offer 2"
                className="w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Limited Time Offer!
              </h3>
              <p className="text-sm text-center">
                Enjoy free shipping on orders over $75. Shop now and save!
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="bg-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={selectedCategory}
            className="flex xl:hidden w-full text-black rounded-md p-2 shadow-inner focus:outline-none "
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryChange(category)}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer "
              >
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section
          id="featured"
          className="bg-white p-6 flex flex-col items-center justify-center gap-4"
        >
          <h2 className="text-2xl font-bold mb-4">
            {showLikedProducts ? "Liked Products" : "Featured Products"}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full xl:w-[1500px] ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                      onClick={() => handleLikeProduct(product.id)}
                      className="text-xl"
                    >
                      {likedProducts.includes(product.id) ? (
                        <AiFillHeart className="text-red-500" />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </button>
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="text-xl"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-xl"
                    >
                      <AiOutlineShoppingCart />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </section>

        {/* Nearby Stores */}
        <MapSection
          nearbyStores={nearbyStores}
          onStoreSelect={setSelectedStore}
        />
        <NearbyStores
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          allStores={allStores}
          setAllStores={setAllStores}
        />

        {/* Footer */}
        <footer className="bg-blue-800 text-white p-6 mt-auto">
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold">About Us</h4>
              <p>
                We are dedicated to providing the best online shopping
                experience with a wide variety of products.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <p>Email: support@onlineshop.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        </footer>

        <ToastContainer />

        {viewProduct && (
          <ProductDetail
            product={viewProduct}
            onClose={handleCloseProductDetail}
            onAddToCart={handleAddToCart}
          />
        )}

        {showLikedProducts && (
          <Modal onClose={handleShowLikedProducts}>
            <LikedProducts
              products={allProducts.filter((product) =>
                likedProducts.includes(product.id)
              )}
            />
          </Modal>
        )}

        {isCartOpen && (
          <CartSidebar
            cart={cart}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
            onQuantityChange={handleQuantityChange}
            onDeleteProduct={handleDeleteProduct}
            onDeleteAll={handleDeleteAll}
          />
        )}
      </div>
    </>
  );
}

export default App;
