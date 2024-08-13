import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = ({ nearbyStores, onStoreSelect, showAllStores }) => {
  const customIcon = new L.Icon({
    iconUrl: "/locationicon.webp",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <section id="stores" className="bg-gray-200 p-6 z-10">
      <h2 className="text-2xl font-bold mb-4">
        Nearby Stores -{" "}
        <span className="text-blue-700">
          Select a store on the map to see details.
        </span>
      </h2>
      <MapContainer
        center={[40.712776, -74.005974]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {nearbyStores.map((store) => (
          <Marker
            key={store.id}
            position={[store.lat, store.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={store.image || "/locationicon.webp"}
                  alt={store.name}
                  className="w-16 h-16 object-cover rounded-lg mb-2"
                />
                <strong className="text-lg">{store.name}</strong>
                <p>{store.address}</p>
                <p>{store.distance} away</p>
                <p className="text-gray-700">
                  <strong>Products:</strong> {store.products}
                </p>
                <button
                  onClick={() => onStoreSelect(store)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapSection;
