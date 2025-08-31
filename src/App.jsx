import { useState } from "react";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Feed from "./components/Feed";
import { LayoutPanelLeft, Map as MapIcon, Newspaper } from "lucide-react";

function App() {
  const [view, setView] = useState("split"); // "split" | "map" | "feed"

  return (
    <div className="h-screen flex flex-col font-sans bg-gray-100">
      <Navbar />

      {/* View Toggle Buttons */}
      <div className="p-2 flex justify-center gap-2 bg-white shadow-md z-50">
        <button
          onClick={() => setView("split")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${
            view === "split"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <LayoutPanelLeft className="w-4 h-4" /> Split
        </button>
        <button
          onClick={() => setView("map")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${
            view === "map"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <MapIcon className="w-4 h-4" /> Map Only
        </button>
        <button
          onClick={() => setView("feed")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${
            view === "feed"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <Newspaper className="w-4 h-4" /> Feed Only
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {view === "map" && (
          <div className="h-full w-full">
            <Map />
          </div>
        )}

        {view === "feed" && (
          <div className="h-full w-full">
            <Feed />
          </div>
        )}

        {view === "split" && (
          <div className="h-full w-full flex flex-col md:flex-row">
            {/* Map (top half on mobile, left half on desktop) */}
            <div className="h-1/2 md:h-full md:w-1/2">
              <Map />
            </div>

            {/* Feed (bottom half on mobile, right half on desktop) */}
            <div className="h-1/2 md:h-full md:w-1/2 border-t md:border-t-0 md:border-l">
              <Feed />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
