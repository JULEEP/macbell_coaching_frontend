// Navbar.jsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to toggle profile dropdown

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="bg-blue-600 p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          InfixEdu
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Navbar Links (visible on desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-200">Home</a>
          <a href="#" className="text-white hover:text-blue-200">Dashboard</a>
          <a href="#" className="text-white hover:text-blue-200">Students</a>
          <a href="#" className="text-white hover:text-blue-200">Teachers</a>
          <a href="#" className="text-white hover:text-blue-200">Profile</a>
          <a href="#" className="text-white hover:text-blue-200">Logout</a>
        </div>

        {/* Profile Dropdown (visible on desktop) */}
        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="flex items-center text-white"
          >
            {/* Profile initials only (no email) */}
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
              <span>AD</span> {/* Placeholder for profile initials */}
            </div>
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              <p className="px-4 py-2 text-gray-700">Super Admin</p>
              <hr />
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">View Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Password</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Logout</a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
