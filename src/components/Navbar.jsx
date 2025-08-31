import { MapPinned } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPinned className="w-6 h-6" />
          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            Know Your City
          </h1>
        </div>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-md shadow hover:bg-blue-50 transition flex items-center gap-1">
          <span className="text-lg">+</span> Add Place
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
