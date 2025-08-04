
import { useState } from 'react';

import logo from "../assets/airbnb.png";
import imgSearch from "../assets/top_search.png";
import WorldImg from "../assets/world.png";
import HamberMenu from "../assets/menu.png";
import PersonImg from "../assets/human.png";
import LoginPage from './LoginPage';

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal , setModal] = useState(false);

  return (
    <div className='flex justify-between items-center px-10 py-5 flex-wrap relative'>
      
      {/* Left: Logo */}
      <img className='w-[100px] h-10' src={logo} alt="Airbnb Logo" />

      {/* Middle: Search Bar */}
      <div className='flex items-center gap-3 border-2 rounded-full border-amber-100 px-4 py-2 shadow-sm hover:shadow-md transition'>
        <p>Anywhere</p>
        <p>Any week</p>
        <p className='text-gray-400'>Add guests</p>
        <img className='w-5 h-5' src={imgSearch} alt="Search Icon" />
      </div>

      {/* Right: User Options */}
      <div className='flex items-center gap-4'>
        <p className='cursor-pointer hover:underline'>Airbnb your home</p>
        <img className='w-5 h-5 cursor-pointer' src={WorldImg} alt="Language Selector" />

        {/* Profile Menu */}
        <div 
          className='flex items-center gap-2 border rounded-full px-2 py-1 hover:shadow-md cursor-pointer relative'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className='w-5 h-5' src={HamberMenu} alt="Menu" />
          <img className='w-6 h-6' src={PersonImg} alt="User Profile" />

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className='absolute right-0 top-12 w-40 bg-white border rounded-xl shadow-lg p-3'>
              <p className='hover:bg-gray-100 p-2 rounded cursor-pointer' onClick={()=> setModal(true)}>Sign Up</p>
              <p className='hover:bg-gray-100 p-2 rounded cursor-pointer' onClick={()=> setModal(true)}>Log In</p>
              <hr className='my-2'/>
              <p className='hover:bg-gray-100 p-2 rounded cursor-pointer'>Airbnb your home</p>
              <p className='hover:bg-gray-100 p-2 rounded cursor-pointer'>Help Center</p>
            </div>
          )}
        </div>
      </div>

      <LoginPage
      show={showModal}
      
      />
      
    </div>
  );
}

export default TopNav;