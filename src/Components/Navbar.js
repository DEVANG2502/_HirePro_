// src/components/Navbar.js
const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center">
            <button className="text-gray-800 text-sm rounded-lg px-4 py-2 mr-4">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
