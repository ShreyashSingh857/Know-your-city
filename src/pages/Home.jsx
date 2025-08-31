import Map from "../components/Map";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-gray-100">
      {/* Map */}
      <div className="flex-1 h-1/2 md:h-auto">
        <Map />
      </div>

      {/* Feed */}
      <div className="md:w-1/3 border-l overflow-y-auto bg-gray-50 h-1/2 md:h-auto">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md">
          <h2 className="text-lg md:text-xl font-bold tracking-wide">
            ✨ Latest Places
          </h2>
          <p className="text-xs text-blue-100">Discover what’s trending in Navi Mumbai</p>
        </div>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
