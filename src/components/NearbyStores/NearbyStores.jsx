import React, { useState } from "react";

const NearbyStores = ({
  selectedStore,
  setSelectedStore,
  allStores,
  setAllStores,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAllStores, setShowAllStores] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleViewAllStores = () => {
    setShowAllStores(true);
    setAllStores([
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
    ]);
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };
  const filteredStores = selectedCategory
    ? allStores.filter((store) =>
        store.products.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : allStores;

  return (
    <section className="nearby-stores mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center">Store Details</h2>
      </div>
      <div className="mb-4">
        <label
          htmlFor="category-filter"
          className="block text-lg font-medium mb-2"
        >
          Filter by Category
        </label>
        <p className="mb-5">
          <strong>Note:</strong> - Click
          <span className="text-purple-800"> View All Stores</span> then you can
          filter out the stores
        </p>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All Categories</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Books">Books</option>
          <option value="Stationery">Stationery</option>
          <option value="Gifts">Gifts</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      {showAllStores && (
        <div className="store-list mt-6">
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <div
                key={store.id}
                className="store-item p-4 mb-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 cursor-pointer"
                onClick={() => handleStoreSelect(store)}
              >
                <h3 className="text-lg font-semibold">{store.name}</h3>
                <p className="text-gray-700">{store.address}</p>
                <p className="text-gray-500">{store.distance} away</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No stores present.</p>
          )}
        </div>
      )}

      {selectedStore ? (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full md:w-1/3 flex items-center justify-center text-center">
            <img
              src={selectedStore.image || "/locationicon.webp"}
              alt={selectedStore.name}
              className="w-full h-full p-4 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-xl font-semibold mb-2">{selectedStore.name}</h3>
            <p className="text-gray-700 mb-2">{selectedStore.address}</p>
            <p className="text-gray-500 mb-4">{selectedStore.distance} away</p>
            <p className="mb-2">
              <strong className="font-medium">Products:</strong>{" "}
              {selectedStore.products}
            </p>
            <a
              href={`mailto:info@${selectedStore.name
                .replace(/\s+/g, "")
                .toLowerCase()}.com`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Contact Store
            </a>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500 mb-2">Select a store to see details.</p>
          <button
            onClick={handleViewAllStores}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            View All Stores
          </button>
        </div>
      )}
    </section>
  );
};

export default NearbyStores;
