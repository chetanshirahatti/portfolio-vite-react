import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "/src/context/ThemeContext";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/Aboutme" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Education", path: "/Education" },
    { name: "My Interests", path: "/MyInterests" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* ------------------ Mobile Top Bar ------------------ */}
      <div className="lg:hidden flex items-center justify-between bg-gray-800 text-white px-4 py-3 fixed top-0 w-full z-50">
        <h1 className="text-xl font-bold">Chetan Shirahatti</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ------------------ Mobile Dropdown Menu ------------------ */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-900 text-white px-6 py-4 pt-20 space-y-4 fixed top-0 left-0 w-full h-screen z-40">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 text-lg"
            >
              {name}
            </Link>
          ))}

          {/* Theme toggle */}
          <div className="mt-6">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={darkMode}
                  onChange={toggleTheme}
                />
                <div className="block bg-gray-700 w-14 h-8 rounded-full dark:bg-gray-300"></div>
                <div
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full transition flex items-center justify-center text-sm ${
                    darkMode ? "translate-x-6" : ""
                  }`}
                  style={{ backgroundColor: "white" }}
                >
                  {darkMode ? "☀️" : "🌙"}
                </div>
              </div>
            </label>
          </div>

          <div className="text-xs text-gray-400 pt-6">
            © 2025 Chetan Shirahatti — All rights reserved
          </div>
        </div>
      )}

      {/* ------------------ Desktop Sidebar ------------------ */}
      <div className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6">
        <div>
          <h1 className="text-2xl font-bold mb-8">Chetan Shirahatti</h1>
          <nav className="flex flex-col space-y-4 text-sm">
            {menuItems.map(({ name, path }) => (
              <Link key={name} to={path} className="hover:text-gray-300">
                {name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start space-y-4 mt-6">
          {/* Theme toggle */}
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <div className="block bg-gray-700 w-14 h-8 rounded-full dark:bg-gray-300"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition flex items-center justify-center text-sm ${
                  darkMode ? "translate-x-6" : ""
                }`}
                style={{ backgroundColor: "white" }}
              >
                {darkMode ? "☀️" : "🌙"}
              </div>
            </div>
          </label>
          <p className="text-xs text-gray-300">
            © 2025 Chetan Shirahatti <br /> 🚀All rights reserved 🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
