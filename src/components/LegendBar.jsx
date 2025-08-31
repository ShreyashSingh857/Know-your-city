import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const categories = [
  { label: "Sports", icon: "🏀", color: "bg-orange-500" },
  { label: "Gaming", icon: "🎮", color: "bg-indigo-500" },
  { label: "Street Food", icon: "🍔", color: "bg-red-500" },
  { label: "Tourist Spot", icon: "🗼", color: "bg-green-500" },
  { label: "Hotel", icon: "🏨", color: "bg-teal-500" },
  { label: "Restaurant", icon: "🍽️", color: "bg-yellow-500" },
  { label: "Shopping", icon: "🛍️", color: "bg-pink-500" },
  { label: "Park/Nature", icon: "🌳", color: "bg-emerald-500" },
  { label: "Event/Festival", icon: "🎉", color: "bg-purple-500" },
  { label: "Music/Club", icon: "🎶", color: "bg-blue-500" },
];

const LegendBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl border shadow-lg backdrop-blur-md bg-white/80">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center py-2 text-gray-700 font-medium hover:bg-white/60 rounded-t-xl transition"
      >
        {open ? (
          <>
            <ChevronDown className="w-4 h-4 mr-1" /> Hide Categories
          </>
        ) : (
          <>
            <ChevronUp className="w-4 h-4 mr-1" /> Show Categories
          </>
        )}
      </button>

      {/* Collapsible Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="px-4 py-3 flex flex-wrap items-center gap-3 justify-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <div
                  className={`h-6 w-6 flex items-center justify-center rounded-full text-white shadow ${cat.color}`}
                >
                  {cat.icon}
                </div>
                <span>{cat.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegendBar;
