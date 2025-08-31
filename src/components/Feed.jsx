import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { places } from "../data/places";

const Feed = () => {
  return (
    <div className="h-full w-full bg-gray-50 overflow-y-auto scrollbar-hide">
      <div className="p-4 space-y-6">
        {places.map((place, index) => (
          <motion.div
            key={place.id}
            className="p-5 border rounded-2xl shadow-sm bg-white hover:shadow-lg hover:scale-[1.01] transition duration-300 ease-in-out cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
                {place.title[0]}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-600" /> {place.city}, {place.country}
                </h3>
                <p className="text-xs text-gray-500">{place.category}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{place.description}</p>
            <p className="text-xs text-gray-400 mt-2">
              📍 {place.lat.toFixed(7)}, {place.lng.toFixed(7)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
