import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import LegendBar from "./LegendBar";
import { getMarkerForCategory } from "../utils/marker";
import { places } from "../data/places";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom blue dot for user location
const userIcon = new L.DivIcon({
  html: `<div style="
      background:#2563eb;
      border:2px solid white;
      border-radius:50%;
      width:18px;
      height:18px;
      box-shadow:0 0 8px rgba(37,99,235,0.8);
    "></div>`,
  className: "",
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// Helper component to recenter the map when location updates
function RecenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    if (lat != null && lng != null) {
      map.setView([lat, lng], 15);
    }
  }, [lat, lng, map]);
  return null;
}

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  // Watch user location continuously for precision
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in your browser.");
      return;
    }

    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        const lat = +pos.coords.latitude.toFixed(7);
        const lng = +pos.coords.longitude.toFixed(7);
        console.log("Precise location update:", lat, lng);
        setUserLocation({ lat, lng });
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Please enable location permissions for best experience.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lng] : [20, 0]}
        zoom={userLocation ? 15 : 2}
        className="h-full w-full rounded-2xl shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Show user location marker */}
        {userLocation && (
          <>
            <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
              <Popup>You are here<br />Lat: {userLocation.lat}<br />Lng: {userLocation.lng}</Popup>
            </Marker>
            <RecenterMap lat={userLocation.lat} lng={userLocation.lng} />
          </>
        )}

        {/* Example place markers */}
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[+place.lat.toFixed(7), +place.lng.toFixed(7)]}
            icon={getMarkerForCategory(place.category)}
          >
            <Popup>
              <h2 className="font-bold text-blue-700">{place.title}</h2>
              <p className="text-sm text-gray-600">{place.description}</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                {place.category}
              </span>
              <div className="text-xs text-gray-500 mt-1">
                {place.lat.toFixed(7)}, {place.lng.toFixed(7)}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Prompt while location loads */}
      {!userLocation && (
        <div className="absolute top-16 left-4 z-50 bg-white/80 backdrop-blur-md px-3 py-1 rounded-md text-sm">
          Getting your precise location...
        </div>
      )}

      {/* "My Location" button */}
      <button
        onClick={() => userLocation && setUserLocation({ ...userLocation })}
        className="absolute top-4 left-4 z-[1000] bg-white px-3 py-1 rounded-md shadow hover:bg-gray-100 transition cursor-pointer text-sm"
      >
        📍 My Location
      </button>

      {/* Legend overlay */}
      <div className="absolute bottom-4 right-4 z-[1000] max-w-xs">
        <LegendBar />
      </div>
    </div>
  );
};

export default Map;
