import { useState } from "react";

import logo from "../assets/airbnb.png";
import WorldImg from "../assets/world.png";
import HamberMenu from "../assets/menu.png";
import PersonImg from "../assets/human.png";
import LoginPage from "./LoginPage";
import SearchBar from "./SearchBar";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setModal] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 flex-wrap relative border-b">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Airbnb Logo" className="h-8 sm:h-10" />
      </div>

      {/* Middle: Search Bar */}
      <div className="w-full order-3 mt-3 sm:order-2 sm:mt-0 sm:w-auto flex justify-center flex-grow">
        <SearchBar />
      </div>

      {/* Right: User Options */}
      <div className="flex items-center gap-4 order-2 sm:order-3">
        
        <p className="cursor-pointer hover:underline hidden md:block">
          Airbnb your home
        </p>

       
        <img
          className="w-5 h-5 cursor-pointer hidden sm:block"
          src={WorldImg}
          alt="Language Selector"
        />

        {/* Profile Menu */}
        <div
          className="flex items-center gap-2 border rounded-full px-2 py-1 hover:shadow-md cursor-pointer relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className="w-5 h-5" src={HamberMenu} alt="Menu" />
          <img className="w-6 h-6" src={PersonImg} alt="User Profile" />

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white border rounded-xl shadow-lg p-3 z-50">
              <p
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                onClick={() => setModal(true)}
              >
                Sign Up
              </p>
              <p
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                onClick={() => setModal(true)}
              >
                Log In
              </p>
              <hr className="my-2" />
              <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                Airbnb your home
              </p>
              <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                Help Center
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <LoginPage show={showModal} />
    </nav>
  );
}

export default TopNav;